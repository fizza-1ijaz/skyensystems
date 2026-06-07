"use client";

import { INDUSTRIES } from "@/components/landing/landing-data";
import { Reveal } from "@/components/landing/Reveal";

export function IndustriesSection() {
  return (
    <section className="bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="text-center">
          <h2 className="editorial-section-title w-full text-balance text-center text-[#141414]">
            Sectors where we bring product discipline and delivery clarity.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-px bg-[#E5E5E3] md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, index) => (
            <Reveal key={industry.label} delay={index * 0.04} className="min-h-0">
              <article className="group relative min-h-[11.5rem] overflow-hidden bg-[#FAFAF8] md:min-h-[12.5rem]">
                <div
                  className="absolute inset-x-0 bottom-0 z-0 h-0 bg-[#31C3C3] transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [@media(hover:hover)]:group-hover:h-full motion-reduce:[@media(hover:hover)]:group-hover:h-0"
                  aria-hidden
                />

                <div className="relative z-10 flex min-h-[11.5rem] flex-col justify-end overflow-hidden p-6 md:min-h-[12.5rem] md:p-10">
                  <div className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 [@media(hover:hover)]:group-hover:-translate-y-4">
                    <h3 className="relative z-10 font-heading text-2xl font-bold tracking-tight text-[#141414] transition-colors duration-300 [@media(hover:hover)]:group-hover:text-white md:text-3xl">
                      {industry.label}
                    </h3>

                    <div className="relative mt-4 min-h-0 shrink-0 md:h-[4.75rem]">
                      <p
                        className="text-sm leading-snug text-[#5C5C5C] max-md:line-clamp-none md:absolute md:inset-x-0 md:top-0 md:line-clamp-1 md:transition-all md:duration-300 [@media(hover:hover)]:md:group-hover:pointer-events-none [@media(hover:hover)]:md:group-hover:translate-y-1 [@media(hover:hover)]:md:group-hover:opacity-0 [@media(hover:hover)]:md:group-hover:text-white"
                      >
                        {industry.tagline}
                      </p>
                      <p
                        className="mt-2 text-sm leading-relaxed text-[#5C5C5C] max-md:opacity-100 md:absolute md:inset-x-0 md:top-0 md:mt-0 md:opacity-0 md:transition-all md:duration-300 [@media(hover:hover)]:md:translate-y-1 [@media(hover:hover)]:md:group-hover:translate-y-0 [@media(hover:hover)]:md:group-hover:opacity-100 [@media(hover:hover)]:md:group-hover:text-white/92"
                      >
                        {industry.description}
                      </p>
                    </div>
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
