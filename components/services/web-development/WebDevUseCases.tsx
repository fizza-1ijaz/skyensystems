"use client";

import { Reveal } from "@/components/landing/Reveal";
import { WEB_DEV_USE_CASES } from "@/lib/web-development-service-data";

export function WebDevUseCases() {
  return (
    <section className="border-b border-[#E5E5E3] bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
            {WEB_DEV_USE_CASES.label}
          </p>
          <h2 className="editorial-section-title mt-4 text-balance text-[#141414]">
            {WEB_DEV_USE_CASES.heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
            {WEB_DEV_USE_CASES.paragraph}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px bg-[#E5E5E3] md:grid-cols-2 lg:grid-cols-3">
          {WEB_DEV_USE_CASES.cases.map((useCase, index) => (
            <Reveal key={useCase.title} delay={index * 0.04} className="min-h-0 bg-[#FAFAF8]">
              <article className="group relative min-h-[12rem] overflow-hidden p-6 md:min-h-[13rem] md:p-8">
                <div
                  className="absolute inset-x-0 bottom-0 z-0 h-0 bg-[#31C3C3] transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [@media(hover:hover)]:group-hover:h-full motion-reduce:[@media(hover:hover)]:group-hover:h-0"
                  aria-hidden
                />

                <div className="relative z-10 flex h-full min-h-[12rem] flex-col justify-end md:min-h-[13rem]">
                  <div className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 [@media(hover:hover)]:group-hover:-translate-y-3">
                    <h3 className="font-heading text-xl font-bold tracking-tight text-[#141414] transition-colors duration-300 [@media(hover:hover)]:group-hover:text-white md:text-2xl">
                      {useCase.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#5C5C5C] transition-colors duration-300 [@media(hover:hover)]:group-hover:text-white/92 md:text-base">
                      {useCase.description}
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
