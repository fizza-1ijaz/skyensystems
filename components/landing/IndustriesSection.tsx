"use client";

import { INDUSTRIES } from "@/components/landing/landing-data";
import { Reveal } from "@/components/landing/Reveal";

export function IndustriesSection() {
  return (
    <section className="bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-4xl font-bold tracking-[-0.03em] text-[#141414] md:text-5xl">
            Sectors where we bring product discipline and delivery clarity.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-px bg-[#E5E5E3] md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, index) => (
            <Reveal key={industry.label} delay={index * 0.04} className="min-h-0">
              <article className="group relative min-h-[11.5rem] overflow-hidden bg-[#FAFAF8] md:min-h-[12.5rem]">
                <div
                  className="absolute inset-x-0 bottom-0 z-0 h-0 bg-[#6C63FF] transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [@media(hover:hover)]:group-hover:h-full motion-reduce:[@media(hover:hover)]:group-hover:h-0"
                  aria-hidden
                />

                <div className="relative z-10 flex min-h-[11.5rem] flex-col justify-end p-8 md:min-h-[12.5rem] md:p-10">
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-[#141414] transition-colors duration-300 [@media(hover:hover)]:group-hover:text-white md:text-3xl">
                    {industry.label}
                  </h3>

                  <div className="relative mt-4 min-h-[1.375rem]">
                    <p
                      className="text-sm leading-snug text-[#5C5C5C] transition-all duration-300 line-clamp-1 [@media(hover:hover)]:group-hover:pointer-events-none [@media(hover:hover)]:group-hover:translate-y-1 [@media(hover:hover)]:group-hover:opacity-0 [@media(hover:hover)]:group-hover:text-white motion-reduce:opacity-100 motion-reduce:translate-y-0"
                    >
                      {industry.tagline}
                    </p>
                    <p
                      className="text-sm leading-relaxed text-[#5C5C5C] transition-all duration-300 [@media(hover:hover)]:pointer-events-none [@media(hover:hover)]:absolute [@media(hover:hover)]:inset-0 [@media(hover:hover)]:translate-y-2 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-hover:text-white/92 motion-reduce:static motion-reduce:mt-3 motion-reduce:opacity-100 motion-reduce:translate-y-0"
                    >
                      {industry.description}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
