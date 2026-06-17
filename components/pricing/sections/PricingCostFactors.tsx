"use client";

import { Reveal } from "@/components/landing/Reveal";
import { PRICING_FACTORS, PRICING_FACTORS_SECTION } from "@/lib/pricing-page-data";

export function PricingCostFactors() {
  return (
    <section className="border-t border-[#DADAD8] bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="w-full text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8A8A8A]">
            {PRICING_FACTORS_SECTION.label}
          </p>
          <h2 className="editorial-section-title mx-auto mt-4 w-full max-w-none text-balance text-[#141414]">
            {PRICING_FACTORS_SECTION.heading}
          </h2>
          <p className="mx-auto mt-4 w-full max-w-none text-sm leading-relaxed text-[#5C5C5C] md:text-base">
            {PRICING_FACTORS_SECTION.paragraph}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-px bg-[#DADAD8] sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_FACTORS.map((factor, index) => (
            <Reveal key={factor} delay={index * 0.04} className="min-h-0">
              <article className="group relative flex h-full min-h-[5.5rem] items-center bg-white px-6 py-5 transition-all duration-200 ease-out hover:-translate-y-0.5 md:min-h-[6rem] md:px-8 md:py-6">
                <span
                  className="absolute left-0 top-0 h-0 w-0.5 bg-[#31C3C3] transition-all duration-200 group-hover:h-full"
                  aria-hidden
                />
                <h3 className="font-heading text-base font-bold tracking-tight text-[#141414] transition-colors duration-200 group-hover:text-[#31C3C3] md:text-lg">
                  {factor}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
