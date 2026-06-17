"use client";

import { PricingBlueprintBackdrop } from "@/components/pricing/PricingBlueprintBackdrop";
import { Reveal } from "@/components/landing/Reveal";
import { EditorialBoxCta } from "@/components/ui/EditorialBoxCta";
import { PRICING_FINAL_CTA } from "@/lib/pricing-page-data";

export function PricingFinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#111827] py-24 md:py-36">
      <PricingBlueprintBackdrop variant="dark" className="opacity-[0.05]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal className="w-full">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">
              {PRICING_FINAL_CTA.label}
            </p>
            <h2 className="mt-4 font-heading text-[clamp(2.25rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#FAFAF8]">
              {PRICING_FINAL_CTA.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="mt-6 w-full">
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
              {PRICING_FINAL_CTA.paragraph}
            </p>
          </Reveal>

          <Reveal delay={0.14} className="mt-12">
            <EditorialBoxCta
              href={PRICING_FINAL_CTA.cta.href}
              variant="primary"
              className="min-w-[240px] justify-center px-10 py-4"
            >
              {PRICING_FINAL_CTA.cta.label}
            </EditorialBoxCta>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
