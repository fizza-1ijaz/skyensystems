"use client";

import { WHAT_WE_BUILD } from "@/lib/services-page-data";
import { Reveal } from "@/components/landing/Reveal";

export function WhatWeBuild() {
  return (
    <section className="border-b border-[#E5E5E3] bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="max-w-3xl font-heading text-4xl font-bold tracking-[-0.03em] text-[#141414] md:text-5xl">
            Outcome categories — not a menu of services.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {WHAT_WE_BUILD.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.04}>
              <article className="group grid gap-4 border border-[#E5E5E3] bg-white p-6 transition-colors hover:border-[#141414] md:grid-cols-12 md:items-center md:p-8">
                <div className="md:col-span-2">
                  <span className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-[#6C63FF]">
                    {item.metric}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-heading text-2xl font-bold text-[#141414] transition-colors group-hover:text-[#6C63FF] md:text-3xl">
                    {item.label}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#5C5C5C] md:col-span-6 md:text-base">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
