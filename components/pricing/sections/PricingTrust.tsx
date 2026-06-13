"use client";

import { Reveal } from "@/components/landing/Reveal";
import { PRICING_TRUST_ITEMS } from "@/lib/pricing-page-data";

export function PricingTrust() {
  return (
    <section className="bg-[#0F172A] py-20 text-[#FAFAF8] md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="w-full text-center">
          <h2 className="editorial-section-title mx-auto w-full max-w-none text-balance text-[#FAFAF8]">
            Built for long-term partnerships.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {PRICING_TRUST_ITEMS.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05}>
              <div className="h-full bg-[#0F172A] p-8 md:p-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
                  {item.label}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/65">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
