"use client";

import { TRUST_STRIP_ITEMS } from "@/lib/homepage-data";
import { Reveal } from "@/components/landing/Reveal";

export function TrustCredibilityStrip() {
  return (
    <section
      className="border-y border-[#E5E5E3] bg-white py-6 md:py-8"
      aria-label="Trust and credibility"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-px bg-[#E5E5E3] sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_STRIP_ITEMS.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.04} className="min-h-0 bg-white">
              <div className="flex h-full flex-col justify-center px-5 py-4 md:px-6 md:py-5">
                <p className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-[#141414] md:text-base">
                  {item.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#6B6B6B] md:text-sm">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
