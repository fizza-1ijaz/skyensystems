"use client";

import { PricingBlueprintBackdrop } from "@/components/pricing/PricingBlueprintBackdrop";
import { PricingHeroVisual } from "@/components/pricing/PricingHeroVisual";
import { Reveal } from "@/components/landing/Reveal";

export function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F4F2] pb-10 pt-10 md:pb-12 md:pt-14">
      <PricingBlueprintBackdrop className="opacity-[0.045]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-10 xl:gap-14">
          <div className="lg:col-span-6 xl:col-span-7">
            <Reveal>
              <h1 className="max-w-[16ch] font-heading text-[clamp(2.75rem,7vw,5.25rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[#141414]">
                Investment aligned with outcomes.
              </h1>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#4A4A4A] md:text-lg">
                Every engagement is shaped by your business goals, scope, technical complexity, and
                delivery requirements. We quote fixed investment — not open-ended hourly billing —
                so you can plan with confidence.
              </p>
            </Reveal>
          </div>

          <PricingHeroVisual className="mt-12 lg:col-span-6 lg:mt-0 xl:col-span-5" />
        </div>

        <div className="mt-12 h-px w-full bg-[#DADAD8] md:mt-14" aria-hidden />
      </div>
    </section>
  );
}
