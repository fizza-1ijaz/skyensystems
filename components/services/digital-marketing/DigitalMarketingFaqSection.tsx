"use client";

import { useState } from "react";
import Link from "next/link";
import { FaqReveal } from "@/components/faq/FaqReveal";
import { Reveal } from "@/components/landing/Reveal";
import { DIGITAL_MARKETING_FAQ } from "@/lib/digital-marketing-service-data";

export function DigitalMarketingFaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="border-b border-[#E5E5E3] bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
              {DIGITAL_MARKETING_FAQ.label}
            </p>
            <h2 className="editorial-section-title mt-4 text-balance text-[#141414]">
              {DIGITAL_MARKETING_FAQ.heading}
            </h2>
            <Link
              href="/faq"
              className="mt-6 inline-block text-sm font-semibold text-[#31C3C3] hover:underline"
            >
              View all FAQs →
            </Link>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="divide-y divide-[#DADAD8] border-y border-[#DADAD8]">
              {DIGITAL_MARKETING_FAQ.items.map((item, index) => {
                const open = openFaq === index;
                return (
                  <FaqReveal key={item.question} delay={index * 0.06}>
                    <div>
                      <button
                        type="button"
                        onClick={() => setOpenFaq(open ? null : index)}
                        className="flex w-full items-start justify-between gap-6 py-6 text-left"
                        aria-expanded={open}
                      >
                        <span className="font-heading text-base font-bold text-[#141414] md:text-lg">
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
                          <p className="pb-6 text-sm leading-relaxed text-[#5C5C5C]">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FaqReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
