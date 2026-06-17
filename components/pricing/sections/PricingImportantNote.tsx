"use client";

import { Reveal } from "@/components/landing/Reveal";
import { PRICING_NOTE_SECTION } from "@/lib/pricing-page-data";

export function PricingImportantNote() {
  return (
    <section className="border-t border-[#DADAD8] bg-[#F4F4F2] py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mx-auto max-w-4xl">
          <div className="border-l-4 border-[#31C3C3] bg-white px-6 py-8 md:px-10 md:py-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#31C3C3]">
              {PRICING_NOTE_SECTION.label}
            </p>
            <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-[#141414] md:text-3xl">
              {PRICING_NOTE_SECTION.heading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
              {PRICING_NOTE_SECTION.paragraph}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
