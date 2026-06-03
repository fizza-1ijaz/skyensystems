"use client";

import { Reveal } from "@/components/landing/Reveal";
import { CONTACT_TRUST_COLUMNS } from "@/lib/contact-page-data";

export function ContactTrust() {
  return (
    <section className="border-y border-[#E5E5E3] bg-[#F4F4F2] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-4xl font-bold tracking-[-0.03em] text-[#141414] md:text-5xl">
            Built for long-term partnerships.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px bg-[#DADAD8] md:grid-cols-2 lg:grid-cols-4">
          {CONTACT_TRUST_COLUMNS.map((column, index) => (
            <Reveal key={column.label} delay={index * 0.05}>
              <div className="bg-[#FAFAF8] p-8 md:p-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6C63FF]">
                  {column.label}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#5C5C5C]">{column.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
