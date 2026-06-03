"use client";

import { GLOBAL_MODEL_PILLARS } from "@/lib/locations-page-data";
import { Reveal } from "@/components/landing/Reveal";

export function GlobalModel() {
  return (
    <section className="border-y border-[#E5E5E3] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-4xl font-bold tracking-[-0.03em] text-[#141414] md:text-5xl">
            Structure built for international delivery.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px bg-[#E5E5E3] md:grid-cols-2 lg:grid-cols-4">
          {GLOBAL_MODEL_PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.06} className="min-h-0">
              <article className="group relative flex h-full min-h-[12rem] flex-col justify-between overflow-hidden bg-[#FAFAF8] p-6 md:min-h-[14rem] md:p-8">
                <div
                  className="absolute inset-x-0 bottom-0 z-0 h-0 bg-[#6C63FF] transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [@media(hover:hover)]:group-hover:h-full motion-reduce:[@media(hover:hover)]:group-hover:h-0"
                  aria-hidden
                />
                <div className="relative z-10 flex h-full flex-col justify-between transition-colors duration-300 [@media(hover:hover)]:group-hover:text-white">
                  <span className="font-heading text-4xl font-bold text-[#EFEFED] transition-[color] duration-300 [@media(hover:hover)]:group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#141414] transition-[color] duration-300 [@media(hover:hover)]:group-hover:text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5C5C5C] transition-[color] duration-300 [@media(hover:hover)]:group-hover:text-white">
                      {pillar.description}
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
