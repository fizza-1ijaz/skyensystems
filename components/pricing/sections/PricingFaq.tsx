"use client";

import { useState } from "react";
import { Reveal } from "@/components/landing/Reveal";
import { PRICING_FAQ_ITEMS, PRICING_FAQ_SECTION } from "@/lib/pricing-page-data";

export function PricingFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="border-t border-[#DADAD8] bg-[#F4F4F2] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="w-full text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8A8A8A]">
            {PRICING_FAQ_SECTION.label}
          </p>
          <h2 className="editorial-section-title mx-auto mt-4 max-w-2xl text-balance text-[#141414]">
            {PRICING_FAQ_SECTION.heading}
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-[#DADAD8] border-y border-[#DADAD8]">
          {PRICING_FAQ_ITEMS.map((item, index) => {
            const open = openFaq === index;
            return (
              <Reveal key={item.question} delay={index * 0.04}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-heading text-lg font-bold text-[#141414] md:text-xl">
                      {item.question}
                    </span>
                    <span className="mt-1 shrink-0 text-sm font-semibold text-[#31C3C3]">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="pb-6 text-sm leading-relaxed text-[#5C5C5C]">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
