"use client";

import { COMPANY_TIMELINE } from "@/lib/who-we-are-data";
import { Reveal } from "@/components/landing/Reveal";

export function WhoWeAreStory() {
  return (
    <section className="border-b border-[#E5E5E3] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-4xl font-bold tracking-[-0.03em] text-[#141414] md:text-5xl">
            Evolution of a product engineering practice.
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-[#E5E5E3] md:left-[7.5rem] md:block" aria-hidden />
          <ol className="space-y-0">
            {COMPANY_TIMELINE.map((milestone, index) => (
              <Reveal key={milestone.year} delay={index * 0.05}>
                <li className="grid gap-4 border-t border-[#E5E5E3] py-8 md:grid-cols-12 md:gap-8 md:py-10">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#6C63FF] md:col-span-2 md:pt-1">
                    {milestone.year}
                  </p>
                  <h3 className="font-heading text-xl font-bold text-[#141414] md:col-span-4 md:text-2xl">
                    {milestone.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#5C5C5C] md:col-span-6 md:text-base">
                    {milestone.detail}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
