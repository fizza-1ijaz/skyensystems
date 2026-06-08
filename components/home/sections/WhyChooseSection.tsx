"use client";

import { WHY_CHOOSE_ITEMS } from "@/lib/homepage-data";
import { Reveal } from "@/components/landing/Reveal";

export function WhyChooseSection() {
  return (
    <section className="bg-[#141414] py-20 text-[#FAFAF8] md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
            Why choose Skyen Systems
          </p>
          <h2 className="editorial-section-title mt-4 text-balance text-[#FAFAF8]">
            The agency that works like part of your team.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#B8B8B8] md:text-base">
            Built for outcomes, accountability, and long-term growth — not one-off deliverables.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px bg-[#2E2E2E] md:grid-cols-2">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="min-h-0 bg-[#141414]">
              <article className="group relative min-h-[14rem] overflow-hidden md:min-h-[15rem]">
                <div
                  className="absolute inset-x-0 bottom-0 z-0 h-0 bg-[#31C3C3] transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [@media(hover:hover)]:group-hover:h-full motion-reduce:[@media(hover:hover)]:group-hover:h-0"
                  aria-hidden
                />

                <div className="relative z-10 flex h-full min-h-[14rem] flex-col justify-end p-6 md:min-h-[15rem] md:p-10">
                  <div className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 [@media(hover:hover)]:group-hover:-translate-y-3">
                    <h3 className="font-heading text-xl font-bold text-[#FAFAF8] transition-colors duration-300 [@media(hover:hover)]:group-hover:text-white md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#B8B8B8] transition-colors duration-300 [@media(hover:hover)]:group-hover:text-white/92 md:text-base">
                      {item.body}
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
