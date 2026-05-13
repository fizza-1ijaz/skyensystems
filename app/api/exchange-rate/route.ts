import { NextResponse } from "next/server";

export const revalidate = 3600;

type OpenErResponse = {
  result: string;
  time_last_update_utc?: string;
  time_next_update_utc?: string;
  base_code?: string;
  rates?: { PKR?: number };
};

/**
 * USD→PKR for pricing page. Uses ExchangeRate-API data:
 * - If EXCHANGERATE_API_KEY is set: v6 authenticated endpoint (higher limits).
 * - Otherwise: open.er-api.com free tier (same provider, daily updates).
 * @see https://www.exchangerate-api.com/docs/free
 */
export async function GET() {
  const apiKey = process.env.EXCHANGERATE_API_KEY?.trim();
  const url = apiKey
    ? `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
    : "https://open.er-api.com/v6/latest/USD";

  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "upstream_http", status: res.status },
        { status: 502 }
      );
    }

    const data = (await res.json()) as OpenErResponse;
    const pkr = data.rates?.PKR;

    if (data.result !== "success" || typeof pkr !== "number" || !Number.isFinite(pkr)) {
      return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 502 });
    }

    return NextResponse.json({
      ok: true,
      pkrPerUsd: pkr,
      baseCode: data.base_code ?? "USD",
      lastUpdateUtc: data.time_last_update_utc ?? null,
      nextUpdateUtc: data.time_next_update_utc ?? null,
      source: apiKey ? "exchangerate-api-v6" : "exchangerate-api-open",
    });
  } catch {
    return NextResponse.json({ ok: false, error: "fetch_failed" }, { status: 502 });
  }
}
