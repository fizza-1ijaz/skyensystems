"use client";

import { PricingCurrencyPanel } from "@/components/pricing/PricingCurrencyPanel";
import { PricingEstimatorBlueprint } from "@/components/pricing/PricingEstimatorBlueprint";
import { Reveal } from "@/components/landing/Reveal";
import { INVESTMENT_RANGES } from "@/lib/pricing-page-data";
import type { FxSnapshot } from "@/hooks/useExchangeRate";

type PricingEstimatorProps = {
  fx: FxSnapshot | null;
  rateLoading: boolean;
  panelBusy: boolean;
  onRetry: () => void;
};

function formatInlineRate(fx: FxSnapshot | null): string | null {
  if (!fx?.pkrPerUsd) return null;
  return fx.pkrPerUsd.toLocaleString("en-PK", { maximumFractionDigits: 2 });
}

export function PricingEstimator({
  fx,
  rateLoading,
  panelBusy,
  onRetry,
}: PricingEstimatorProps) {
  const inlineRate = formatInlineRate(fx);

  return (
    <section className="relative overflow-hidden bg-[#F4F4F2] pb-16 pt-10 md:pb-20 md:pt-14">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-10 xl:gap-14">
          {/* Left — editorial context (60%) */}
          <div className="relative lg:col-span-7">
            <PricingEstimatorBlueprint />

            <div className="relative z-10">
              <Reveal>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8A8A8A]">
                  Investment estimator
                </p>
                <h2 className="editorial-section-title mt-4 max-w-xl text-balance text-[#141414]">
                  Plan local investment with clarity.
                </h2>
              </Reveal>

              <Reveal delay={0.06}>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#5C5C5C] md:text-base">
                  For Pakistan-based clients, we provide indicative PKR equivalents alongside USD
                  pricing. Use the calculator to estimate local investment — then confirm final
                  amounts during discovery and contracting.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8 max-w-md border border-[#DADAD8] bg-[#FAFAF8]/80 px-5 py-4 backdrop-blur-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A]">
                    Exchange rate reference
                  </p>
                  {inlineRate && !rateLoading ? (
                    <>
                      <p className="mt-2 font-heading text-2xl font-bold tracking-tight text-[#141414]">
                        1 USD = {inlineRate} PKR
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-[#5C5C5C]">
                        {fx?.usedFallback
                          ? "Live feed unavailable — showing indicative backup rate."
                          : "Sourced from daily exchange data. Refreshed hourly."}
                      </p>
                    </>
                  ) : (
                    <p className="mt-2 text-sm text-[#5C5C5C]">Loading exchange rate…</p>
                  )}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right — calculator panel (40%) */}
          <Reveal delay={0.08} className="relative mt-12 lg:col-span-5 lg:mt-8">
            <PricingCurrencyPanel
              fx={fx}
              rateLoading={rateLoading}
              panelBusy={panelBusy}
              onRetry={onRetry}
            />
          </Reveal>
        </div>

        {/* Investment range guide */}
        <Reveal delay={0.12}>
          <div className="mt-14 border-t border-[#DADAD8] pt-10 md:mt-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A]">
              Typical investment ranges
            </p>
            <div className="mt-6 grid gap-px bg-[#DADAD8] md:grid-cols-3">
              {INVESTMENT_RANGES.map((item) => (
                <div
                  key={item.label}
                  className="group relative overflow-hidden bg-white p-6 md:p-8"
                >
                  <div
                    className="absolute inset-x-0 bottom-0 z-0 h-0 bg-[#31C3C3] transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [@media(hover:hover)]:group-hover:h-full motion-reduce:[@media(hover:hover)]:group-hover:h-0"
                    aria-hidden
                  />

                  <div className="relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 [@media(hover:hover)]:group-hover:-translate-y-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8A8A] transition-colors duration-300 [@media(hover:hover)]:group-hover:text-white/70">
                      {item.label}
                    </p>
                    <p className="mt-3 font-heading text-2xl font-bold tracking-tight text-[#141414] transition-colors duration-300 md:text-[1.75rem] [@media(hover:hover)]:group-hover:text-white">
                      {item.range}
                    </p>
                    <span
                      className="mt-2 block h-px w-full max-w-[6rem] bg-[#31C3C3]/35 transition-colors duration-300 [@media(hover:hover)]:group-hover:bg-white/30"
                      aria-hidden
                    />
                    <p className="mt-3 text-xs leading-relaxed text-[#5C5C5C] transition-colors duration-300 [@media(hover:hover)]:group-hover:text-white/85">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
