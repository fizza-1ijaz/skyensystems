"use client";

import { LEADERSHIP_SPOTLIGHT } from "@/lib/who-we-are-data";
import { Reveal } from "@/components/landing/Reveal";

export function WhoWeAreLeadership() {
  return (
    <section className="border-b border-[#E5E5E3] bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-5">
            <h2 className="font-heading text-4xl font-bold tracking-[-0.03em] text-[#141414] md:text-5xl">
              {LEADERSHIP_SPOTLIGHT.headline}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#5C5C5C] md:text-lg">
              {LEADERSHIP_SPOTLIGHT.statement}
            </p>
          </Reveal>

          <div className="grid gap-px bg-[#E5E5E3] sm:grid-cols-2 lg:col-span-7">
            {LEADERSHIP_SPOTLIGHT.disciplines.map((d, index) => (
              <Reveal key={d.label} delay={index * 0.06}>
                <article className="flex h-full flex-col justify-between bg-white p-6 md:p-8">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6C63FF]">
                      {d.years}
                    </p>
                    <h3 className="mt-2 font-heading text-2xl font-bold text-[#141414]">{d.label}</h3>
                  </div>
                  <p className="mt-6 border-t border-[#F0F0EE] pt-4 text-sm text-[#5C5C5C]">{d.focus}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
