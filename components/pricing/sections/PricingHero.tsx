"use client";

import { PricingEstimatorBlueprint } from "@/components/pricing/PricingEstimatorBlueprint";
import { Reveal } from "@/components/landing/Reveal";
import { EditorialBoxCta } from "@/components/ui/EditorialBoxCta";
import { HERO_PRICING_SUMMARY, PRICING_HERO } from "@/lib/pricing-page-data";

export function PricingHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#DADAD8] bg-[#F4F4F2]">
      <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-14">
        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-10 xl:gap-14">
          <div className="relative lg:col-span-7">
            <PricingEstimatorBlueprint />

            <div className="relative z-10">
              <Reveal>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8A8A8A]">
                  {PRICING_HERO.label}
                </p>
                <h1 className="mt-4 max-w-2xl font-heading text-[clamp(2.25rem,5.5vw,4rem)] font-bold leading-[0.96] tracking-[-0.03em] text-balance text-[#141414]">
                  {PRICING_HERO.heading}
                </h1>
              </Reveal>

              <Reveal delay={0.06}>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#5C5C5C] md:text-base">
                  {PRICING_HERO.paragraph}
                </p>
              </Reveal>

              <Reveal delay={0.1} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <EditorialBoxCta href={PRICING_HERO.primaryCta.href} variant="primary">
                  {PRICING_HERO.primaryCta.label}
                </EditorialBoxCta>
                <EditorialBoxCta href={PRICING_HERO.secondaryCta.href} variant="neutral">
                  {PRICING_HERO.secondaryCta.label}
                </EditorialBoxCta>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.08} className="mt-12 lg:col-span-5 lg:mt-4">
            <div className="bg-[#0F172A] px-6 py-8 md:px-8 md:py-10">
              <p className="font-heading text-xl font-bold tracking-tight text-[#FAFAF8] md:text-2xl">
                {HERO_PRICING_SUMMARY.heading}
              </p>

              <div className="mt-8 space-y-0 divide-y divide-white/10">
                {HERO_PRICING_SUMMARY.items.map((item) => (
                  <div key={item.title} className="py-6 first:pt-0 last:pb-0">
                    <p className="font-heading text-lg font-bold tracking-tight text-[#31C3C3] md:text-xl">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
