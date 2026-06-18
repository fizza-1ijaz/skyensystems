"use client";

import { Reveal } from "@/components/landing/Reveal";
import { EditorialBoxCta } from "@/components/ui/EditorialBoxCta";
import { DIGITAL_MARKETING_WHY_CHOOSE } from "@/lib/digital-marketing-service-data";

export function DigitalMarketingWhyChoose() {
  return (
    <section className="border-b border-[#E5E5E3] bg-[#141414] py-20 text-[#FAFAF8] md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="w-full text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
            {DIGITAL_MARKETING_WHY_CHOOSE.label}
          </p>
          <h2 className="editorial-section-title mx-auto mt-4 w-full max-w-none text-balance text-[#FAFAF8]">
            {DIGITAL_MARKETING_WHY_CHOOSE.heading}
          </h2>
          <p className="mx-auto mt-4 w-full max-w-none text-sm leading-relaxed text-[#B8B8B8] md:text-base">
            {DIGITAL_MARKETING_WHY_CHOOSE.paragraph}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px bg-[#2E2E2E] md:grid-cols-2">
          {DIGITAL_MARKETING_WHY_CHOOSE.items.map((item, index) => (
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

        <Reveal className="mt-12 flex justify-center md:mt-14">
          <EditorialBoxCta href={DIGITAL_MARKETING_WHY_CHOOSE.cta.href} variant="primary">
            {DIGITAL_MARKETING_WHY_CHOOSE.cta.label}
          </EditorialBoxCta>
        </Reveal>
      </div>
    </section>
  );
}
