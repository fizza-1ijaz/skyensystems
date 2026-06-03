"use client";

import { useState } from "react";
import { ArrowDown, RefreshCw } from "lucide-react";
import { AnimatedPkrDisplay, formatRateUpdated } from "@/components/pricing/AnimatedPkrDisplay";
import type { FxSnapshot } from "@/hooks/useExchangeRate";

type PricingCurrencyPanelProps = {
  fx: FxSnapshot | null;
  rateLoading: boolean;
  panelBusy: boolean;
  onRetry: () => void;
};

export function PricingCurrencyPanel({
  fx,
  rateLoading,
  panelBusy,
  onRetry,
}: PricingCurrencyPanelProps) {
  const [usdInput, setUsdInput] = useState("1500");
  const [conversionKey, setConversionKey] = useState(0);

  const usdNum = parseFloat(String(usdInput).replace(/,/g, ""));
  const pkrPerUsd = fx?.pkrPerUsd ?? null;
  const converted =
    pkrPerUsd != null && Number.isFinite(usdNum) && usdNum >= 0
      ? Math.round(usdNum * pkrPerUsd)
      : null;

  const showConverter = pkrPerUsd != null && !rateLoading && !panelBusy;
  const formattedRate =
    pkrPerUsd != null
      ? pkrPerUsd.toLocaleString("en-PK", { maximumFractionDigits: 2 })
      : null;

  const handleUsdChange = (next: string) => {
    setUsdInput(next);
    setConversionKey((k) => k + 1);
  };

  return (
    <div className="relative">
      {/* Floating exchange rate card */}
      {formattedRate ? (
        <div className="absolute -top-5 right-0 z-20 border border-[rgba(108,99,255,0.2)] bg-[#FAFAF8] px-5 py-4 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.35)] md:-right-4">
          <div className="absolute left-0 top-0 h-full w-0.5 bg-[#6C63FF]" aria-hidden />
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A]">
            Current exchange rate
          </p>
          <p className="mt-2 font-heading text-xl font-bold tracking-tight text-[#141414] md:text-2xl">
            1 USD = {formattedRate} PKR
          </p>
          <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#6C63FF]">
            {formatRateUpdated(fx?.lastUpdateUtc ?? null)}
            {fx?.usedFallback ? " · Indicative" : ""}
          </p>
        </div>
      ) : null}

      <div className="relative border-t-2 border-[#6C63FF] bg-[#0F172A] px-6 py-8 pt-10 md:px-8 md:py-10 md:pt-12">
        <div className="flex items-start justify-between gap-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6C63FF]">
            Investment calculator
          </p>
          <button
            type="button"
            onClick={onRetry}
            disabled={rateLoading || panelBusy}
            className="inline-flex shrink-0 items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45 transition-colors duration-200 hover:text-white disabled:opacity-40"
          >
            <RefreshCw className={`h-3 w-3 ${panelBusy ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {showConverter ? (
          <div className="mt-8">
            <label
              htmlFor="pricing-usd-input"
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45"
            >
              USD amount
            </label>
            <div className="mt-3 flex items-center gap-3 border-b border-white/15 pb-3 transition-colors duration-200 focus-within:border-[#6C63FF]/60">
              <span className="font-heading text-sm font-bold text-white/50">USD</span>
              <input
                id="pricing-usd-input"
                type="text"
                inputMode="decimal"
                value={usdInput}
                onChange={(e) => handleUsdChange(e.target.value)}
                className="min-w-0 flex-1 bg-transparent font-heading text-2xl font-bold tracking-tight text-white outline-none md:text-3xl"
                aria-label="Amount in USD"
              />
            </div>

            <div className="my-6 flex justify-center" aria-hidden>
              <div
                key={conversionKey}
                className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.04] animate-[estimatorPulse_0.5s_ease-out]"
              >
                <ArrowDown className="h-4 w-4 text-[#6C63FF]" strokeWidth={1.5} />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-sm bg-[rgba(108,99,255,0.08)] px-6 py-8 md:px-8 md:py-10">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(108,99,255,0.18)_0%,transparent_70%)]"
                aria-hidden
              />
              <p className="relative text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6C63FF]">
                Estimated PKR
              </p>
              <p className="relative mt-3 font-heading text-[clamp(2.5rem,6vw,3.75rem)] font-bold leading-none tracking-tight text-white">
                <span className="mr-3 text-lg font-semibold tracking-[0.12em] text-white/40 md:text-xl">
                  PKR
                </span>
                <AnimatedPkrDisplay value={converted} />
              </p>
              <p className="relative mt-4 text-xs leading-relaxed text-white/40">
                Indicative only. Final PKR amounts confirmed at engagement and invoice stage.
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-8 border border-white/10 bg-white/[0.03] px-6 py-10 text-center">
            <p className="text-sm text-white/55">
              {rateLoading || panelBusy
                ? "Loading live exchange rate…"
                : "Conversion will appear once the rate is available."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
