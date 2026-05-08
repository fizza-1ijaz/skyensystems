"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ReactionType =
  | "clap"
  | "love"
  | "thumbs_up"
  | "thumbs_down"
  | "confetti";

type ReactionsApiResponse = {
  ok: boolean;
  counts?: Record<string, number>;
  currentReaction?: ReactionType | null;
  message?: string;
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "compact";
        },
      ) => string;
      remove?: (widgetId: string) => void;
    };
  }
}

const REACTION_ITEMS: Array<{ type: ReactionType; label: string; emoji: string }> = [
  { type: "clap", label: "Clap", emoji: "👏" },
  { type: "love", label: "Love", emoji: "❤️" },
  { type: "thumbs_up", label: "Thumbs up", emoji: "👍" },
  { type: "thumbs_down", label: "Thumbs down", emoji: "👎" },
  { type: "confetti", label: "Confetti", emoji: "🎉" },
];

type BlogReactionButtonsProps = {
  blogId: string;
};

export function BlogReactionButtons({ blogId }: BlogReactionButtonsProps) {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [currentReaction, setCurrentReaction] = useState<ReactionType | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const turnstileSiteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() || "";

  const widgetContainerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      const res = await fetch(`/api/public/blogs/${blogId}/reactions`, {
        cache: "no-store",
      });
      if (!res.ok) return;
      const payload = (await res.json()) as ReactionsApiResponse;
      if (!mounted || !payload.ok) return;
      setCounts(payload.counts || {});
      setCurrentReaction(payload.currentReaction ?? null);
    };
    void load();
    return () => {
      mounted = false;
    };
  }, [blogId]);

  useEffect(() => {
    if (!turnstileSiteKey || !widgetContainerRef.current) return;

    const scriptId = "cf-turnstile-script";
    const initWidget = () => {
      if (!window.turnstile || !widgetContainerRef.current) return;
      if (widgetIdRef.current && window.turnstile.remove) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
      widgetIdRef.current = window.turnstile.render(widgetContainerRef.current, {
        sitekey: turnstileSiteKey,
        theme: "light",
        size: "compact",
        callback: (token) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => setTurnstileToken(""),
      });
    };

    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (existing) {
      if (window.turnstile) initWidget();
      else existing.addEventListener("load", initWidget, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = initWidget;
    document.head.appendChild(script);
  }, [turnstileSiteKey]);

  const canReact = useMemo(
    () => Boolean(turnstileSiteKey && turnstileToken && !isSubmitting),
    [isSubmitting, turnstileSiteKey, turnstileToken],
  );

  const submitReaction = async (reactionType: ReactionType) => {
    if (!canReact) {
      setStatusMessage("Please complete verification to react.");
      return;
    }
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch(`/api/public/blogs/${blogId}/reactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reactionType, turnstileToken }),
      });
      const payload = (await response.json()) as ReactionsApiResponse;
      if (!response.ok || !payload.ok) {
        setStatusMessage(payload.message || "Could not save reaction.");
        setIsSubmitting(false);
        return;
      }

      setCurrentReaction(reactionType);
      setCounts((prev) => {
        const next = { ...prev };
        const previousType = currentReaction;
        if (previousType) {
          next[previousType] = Math.max(0, (next[previousType] || 1) - 1);
        }
        next[reactionType] = (next[reactionType] || 0) + 1;
        return next;
      });
      setStatusMessage("Reaction saved.");
    } catch {
      setStatusMessage("Network error while saving reaction.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mt-8 rounded-2xl border border-white/70 bg-white/85 p-5">
      <h2 className="text-lg font-bold text-[#0F172A]">Reactions</h2>

      <div className="mt-4 flex flex-wrap gap-2">
        {REACTION_ITEMS.map((item) => {
          const active = currentReaction === item.type;
          return (
            <button
              key={item.type}
              type="button"
              disabled={isSubmitting}
              onClick={() => void submitReaction(item.type)}
              className={`inline-flex items-center gap-1 rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                active
                  ? "border-[#1E3A8A66] bg-[#EEF3FF] text-[#0F2742]"
                  : "border-slate-300 bg-white text-slate-700 hover:border-[#1E3A8A55]"
              } ${isSubmitting ? "cursor-not-allowed opacity-60" : ""}`}
            >
              <span aria-hidden>{item.emoji}</span>
              <span className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-600">
                {counts[item.type] || 0}
              </span>
            </button>
          );
        })}
      </div>

      {turnstileSiteKey ? (
        <div className="mt-4" ref={widgetContainerRef} />
      ) : (
        <p className="mt-3 text-xs text-amber-700">
          Turnstile site key missing. Set NEXT_PUBLIC_TURNSTILE_SITE_KEY.
        </p>
      )}

      {statusMessage ? (
        <p className="mt-3 text-xs text-slate-600">{statusMessage}</p>
      ) : null}
    </section>
  );
}
