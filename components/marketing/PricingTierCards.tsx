"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import type { LaunchOrRetainerPlan } from "./pricingPanelsData";

const COLUMN_VISUAL = [
  {
    art: "starter" as const,
    heroBgClass: "bg-gradient-to-br from-[#7dd3fc]/90 via-[#a5b4fc]/80 to-[#c4b5fd]/90",
    buttonGradient: "from-[#0a1628] via-[#132a4a] to-[#0c1a30]",
    glow: "shadow-[0_24px_48px_-28px_rgba(15,39,66,0.38)]",
  },
  {
    art: "premium" as const,
    heroBgClass: "bg-gradient-to-br from-[#818cf8]/95 via-[#6366f1]/85 to-[#4f46e5]/90",
    buttonGradient: "from-indigo-400 via-violet-500 to-fuchsia-500",
    glow: "shadow-[0_0_0_1px_rgba(99,102,241,0.35),0_28px_64px_-20px_rgba(99,102,241,0.45),0_0_80px_-24px_rgba(139,92,246,0.35)]",
  },
  {
    art: "ultimate" as const,
    heroBgClass: "bg-[#1a0d2e]",
    buttonGradient: "from-[#2e1065] via-[#5b21b6] to-[#1a0a2e]",
    glow: "shadow-[0_24px_48px_-28px_rgba(88,28,135,0.42)]",
  },
];

/** Soft wave between hero art and white body — slight path variation per column. */
const CARD_WAVE_PATHS = [
  "M0,36 C320,6 640,54 960,24 C1180,8 1340,30 1440,18 L1440,56 L0,56 Z",
  "M0,16 C280,48 540,4 880,32 C1100,52 1300,12 1440,24 L1440,56 L0,56 Z",
  "M0,28 C380,58 760,2 1120,34 C1280,46 1380,22 1440,16 L1440,56 L0,56 Z",
] as const;

function CardWaveDivider({ variant }: { variant: number }) {
  const d = CARD_WAVE_PATHS[variant % CARD_WAVE_PATHS.length];
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[52px] w-full sm:h-14">
      <svg
        className="h-full w-full text-white drop-shadow-[0_-6px_18px_rgba(15,23,42,0.07)]"
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path fill="currentColor" d={d} />
      </svg>
    </div>
  );
}

function TierArt({ variant }: { variant: "starter" | "premium" | "ultimate" }) {
  if (variant === "ultimate") {
    return (
      <img
        src="/anims/rocket-1.png"
        alt=""
        width={280}
        height={200}
        className="relative z-[1] h-[min(152px,42vw)] w-auto max-w-[92%] object-contain object-center drop-shadow-[0_12px_28px_rgba(167,139,250,0.45)]"
      />
    );
  }
  if (variant === "starter") {
    return (
      <img
        src="/anims/hot-air-balloon.svg"
        alt=""
        width={280}
        height={200}
        className="relative z-[1] h-[min(152px,42vw)] w-auto max-w-[92%] object-contain object-center drop-shadow-[0_16px_28px_rgba(14,116,144,0.3)]"
      />
    );
  }
  return (
    <img
      src="/anims/submarine-1.png"
      alt=""
      width={280}
      height={200}
      className="relative z-[1] h-[min(152px,42vw)] w-auto max-w-[92%] object-contain object-center drop-shadow-[0_16px_30px_rgba(79,70,229,0.35)]"
    />
  );
}

function PricingTierCardsInner({ plans }: { plans: LaunchOrRetainerPlan[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3 md:gap-5 lg:gap-8">
      {plans.map((plan, index) => {
        const col = COLUMN_VISUAL[index] ?? COLUMN_VISUAL[1];
        const artVariant = col.art;
        return (
          <motion.article
            key={plan.name}
            initial={{ opacity: 1, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01, margin: "0px 0px 120px 0px" }}
            transition={{
              duration: 0.45,
              delay: index * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -10,
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            }}
            className={`group relative flex flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white ${plan.featured ? "md:-mt-1 md:mb-1" : ""} ${col.glow}`}
          >
            {plan.featured ? (
              <div className="pointer-events-none absolute -inset-px rounded-[24px] bg-gradient-to-b from-indigo-500/20 via-violet-500/10 to-transparent opacity-100" />
            ) : null}
            <div
              className={`relative h-[192px] overflow-hidden ${col.heroBgClass} px-4 pt-6 sm:h-[200px]`}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.08)_45%,transparent_100%)]" />
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/25 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-6 left-1/4 h-24 w-40 rounded-full bg-white/15 blur-xl" />

              <motion.div
                className="relative mx-auto flex h-[156px] w-full max-w-[280px] items-center justify-center sm:max-w-[300px]"
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: artVariant === "premium" ? 5.2 : 5.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: artVariant === "starter" ? 0 : artVariant === "premium" ? 0.35 : 0.65,
                }}
              >
                <div className="absolute inset-x-6 top-1/2 h-16 -translate-y-1/2 rounded-full bg-white/20 blur-2xl backdrop-blur-[2px]" />
                <TierArt variant={artVariant} />
              </motion.div>

              {plan.featured ? (
                <div className="absolute right-4 top-4 z-[3]">
                  <span className="inline-flex items-center rounded-full border border-white/40 bg-white/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm backdrop-blur-md">
                    Popular
                  </span>
                </div>
              ) : null}
              <CardWaveDivider variant={index} />
            </div>

            <div className="relative z-[1] -mt-px flex flex-1 flex-col bg-white px-6 pb-8 pt-5 sm:px-8 sm:pt-6">
              <div className="flex w-full flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-[1.65rem] md:text-3xl md:leading-tight">
                  {plan.name}
                </h3>
                <p className="shrink-0 text-3xl font-semibold tracking-tight text-slate-900 tabular-nums sm:text-[2rem] md:text-[2.35rem] md:leading-none">
                  {plan.price}
                </p>
              </div>
              {plan.description ? (
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{plan.description}</p>
              ) : null}

              <ul className="mt-5 flex flex-col gap-3.5">
                {plan.features.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-[0.9375rem] leading-snug text-slate-600">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-indigo-600 ring-1 ring-slate-200/80">
                      <Check className="h-3 w-3 stroke-[2.5]" aria-hidden />
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-1 flex-col justify-end">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={plan.cta}
                    className={`inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r ${col.buttonGradient} px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_32px_-16px_rgba(79,70,229,0.55)] ring-1 ring-white/20 transition-[box-shadow] duration-300 hover:shadow-[0_16px_40px_-14px_rgba(79,70,229,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500`}
                  >
                    Get started
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}

export function PricingTierCards({ plans }: { plans: LaunchOrRetainerPlan[] }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setReady(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  if (!ready) {
    return (
      <div className="grid gap-6 md:grid-cols-3 md:gap-5 lg:gap-8">
        {[0, 1, 2].map((slot) => (
          <div
            key={slot}
            className="flex min-h-[28rem] flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white/90 shadow-sm"
          >
            <div className="h-[200px] animate-pulse bg-gradient-to-br from-slate-200/80 via-slate-100/60 to-slate-200/80" />
            <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
              <div className="flex w-full items-baseline justify-between gap-3">
                <div className="h-8 w-28 animate-pulse rounded-md bg-slate-200/80 sm:h-9 sm:w-32" />
                <div className="h-9 w-24 animate-pulse rounded-md bg-slate-200/80 sm:h-10 sm:w-28" />
              </div>
              <div className="h-12 w-full animate-pulse rounded-md bg-slate-100" />
              <div className="space-y-3 pt-2">
                <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
                <div className="h-4 w-[92%] animate-pulse rounded bg-slate-100" />
                <div className="h-4 w-[88%] animate-pulse rounded bg-slate-100" />
              </div>
              <div className="mt-auto pt-6">
                <div className="h-12 w-full animate-pulse rounded-2xl bg-slate-200/70" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return <PricingTierCardsInner plans={plans} />;
}
