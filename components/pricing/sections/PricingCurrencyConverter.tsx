"use client";

import { PricingCurrencyPanel } from "@/components/pricing/PricingCurrencyPanel";
import { Reveal } from "@/components/landing/Reveal";
import { useExchangeRate } from "@/hooks/useExchangeRate";
import { CURRENCY_CONVERTER_SECTION } from "@/lib/pricing-page-data";

export function PricingCurrencyConverter() {
  const { fx, rateLoading, panelBusy, loadRate } = useExchangeRate();

  return (
    <section className="border-b border-[#DADAD8] bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mx-auto w-full max-w-2xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8A8A8A]">
            {CURRENCY_CONVERTER_SECTION.label}
          </p>
          <h2 className="editorial-section-title mx-auto mt-4 w-full max-w-none text-balance text-[#141414]">
            {CURRENCY_CONVERTER_SECTION.heading}
          </h2>
          <p className="mx-auto mt-4 w-full max-w-none text-sm leading-relaxed text-[#5C5C5C] md:text-base">
            {CURRENCY_CONVERTER_SECTION.paragraph}
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mx-auto mt-10 max-w-lg md:mt-12">
          <PricingCurrencyPanel
            fx={fx}
            rateLoading={rateLoading}
            panelBusy={panelBusy}
            onRetry={() => loadRate({ isRefresh: true })}
          />
        </Reveal>
      </div>
    </section>
  );
}
