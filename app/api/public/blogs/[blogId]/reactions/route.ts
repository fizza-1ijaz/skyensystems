import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY?.trim() || "";

const ALLOWED_REACTIONS = new Set([
  "clap",
  "love",
  "thumbs_up",
  "thumbs_down",
  "confetti",
]);

function getReactorId(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || "anonymous";
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "anonymous";
}

async function verifyTurnstileToken(token: string, ip: string) {
  if (!TURNSTILE_SECRET_KEY) return false;

  const form = new URLSearchParams();
  form.set("secret", TURNSTILE_SECRET_KEY);
  form.set("response", token);
  if (ip) form.set("remoteip", ip);

  const response = await fetch(TURNSTILE_VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form.toString(),
    cache: "no-store",
  });
  if (!response.ok) return false;
  const payload = (await response.json()) as { success?: boolean };
  return Boolean(payload.success);
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ blogId: string }> },
) {
  const { blogId } = await params;
  if (!supabase) {
    return NextResponse.json(
      { ok: false, message: "Supabase is not configured." },
      { status: 500 },
    );
  }

  const reactorId = getReactorId(req);

  const [countsRes, userRes] = await Promise.all([
    supabase
      .from("blog_reactions")
      .select("reaction_type")
      .eq("blog_id", blogId),
    supabase
      .from("blog_reactions")
      .select("reaction_type")
      .eq("blog_id", blogId)
      .eq("reactor_id", reactorId)
      .limit(1)
      .maybeSingle(),
  ]);

  if (countsRes.error || userRes.error) {
    return NextResponse.json(
      { ok: false, message: "Failed to load reactions." },
      { status: 500 },
    );
  }

  const counts = (countsRes.data ?? []).reduce<Record<string, number>>(
    (acc, row) => {
      acc[row.reaction_type] = (acc[row.reaction_type] || 0) + 1;
      return acc;
    },
    {},
  );

  return NextResponse.json({
    ok: true,
    counts,
    currentReaction: userRes.data?.reaction_type ?? null,
  });
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ blogId: string }> },
) {
  const { blogId } = await params;
  if (!supabase) {
    return NextResponse.json(
      { ok: false, message: "Supabase is not configured." },
      { status: 500 },
    );
  }

  const body = (await req.json()) as {
    reactionType?: string;
    turnstileToken?: string;
  };
  const reactionType = body.reactionType?.trim().toLowerCase() || "";
  const turnstileToken = body.turnstileToken?.trim() || "";

  if (!ALLOWED_REACTIONS.has(reactionType)) {
    return NextResponse.json(
      { ok: false, message: "Invalid reaction type." },
      { status: 400 },
    );
  }
  if (!turnstileToken) {
    return NextResponse.json(
      { ok: false, message: "Turnstile token is required." },
      { status: 400 },
    );
  }

  const reactorId = getReactorId(req);
  const turnstileOk = await verifyTurnstileToken(turnstileToken, reactorId);
  if (!turnstileOk) {
    return NextResponse.json(
      { ok: false, message: "Turnstile verification failed." },
      { status: 403 },
    );
  }

  const removeRes = await supabase
    .from("blog_reactions")
    .delete()
    .eq("blog_id", blogId)
    .eq("reactor_id", reactorId);
  if (removeRes.error) {
    return NextResponse.json(
      { ok: false, message: "Failed to update reaction." },
      { status: 500 },
    );
  }

  const insertRes = await supabase.from("blog_reactions").insert({
    blog_id: blogId,
    reactor_id: reactorId,
    reaction_type: reactionType,
  });
  if (insertRes.error) {
    return NextResponse.json(
      { ok: false, message: "Failed to save reaction." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
