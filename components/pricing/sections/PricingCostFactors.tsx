"use client";

import { Reveal } from "@/components/landing/Reveal";
import { COST_FACTORS } from "@/lib/pricing-page-data";

export function PricingCostFactors() {
  return (
    <section className="border-t border-[#DADAD8] bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="editorial-section-title max-w-2xl text-balance text-[#141414]">
            What determines project investment.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-px bg-[#E5E5E3] md:grid-cols-2 lg:grid-cols-3">
          {COST_FACTORS.map((factor, index) => (
            <Reveal key={factor.title} delay={index * 0.04} className="min-h-0">
              <article className="group relative min-h-[10rem] bg-[#FAFAF8] p-8 transition-all duration-200 ease-out hover:-translate-y-1 md:min-h-[11rem] md:p-10">
                <span
                  className="absolute left-0 top-0 h-0 w-0.5 bg-[#31C3C3] transition-all duration-200 group-hover:h-full"
                  aria-hidden
                />
                <h3 className="font-heading text-xl font-bold tracking-tight text-[#141414] transition-colors duration-200 group-hover:text-[#31C3C3] md:text-2xl">
                  {factor.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5C5C5C]">{factor.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
