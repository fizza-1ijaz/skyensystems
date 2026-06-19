"use client";

import { FAQ_HERO } from "@/lib/faq-editorial-data";
import { Reveal } from "@/components/landing/Reveal";
import { OptimizedPhoto } from "@/components/ui/OptimizedPhoto";
import { SITE_IMAGE_QUALITY } from "@/lib/site-image";

const FAQ_HERO_IMAGE = "/images/QA.png";

export function FaqHero() {
  return (
    <section className="border-b border-[#E5E5E3] bg-[#F4F4F2]">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-14 lg:grid-cols-12 lg:items-center lg:gap-11">
        <div className="page-hero-copy lg:col-span-7">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8A8A]">
              {FAQ_HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-[14ch] font-heading text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[#141414] lg:max-w-none">
              {FAQ_HERO.headline}
            </h1>
          </Reveal>
          <div className="mt-8 space-y-4">
            {FAQ_HERO.supporting.map((p, i) => (
              <Reveal key={i} delay={0.08 + i * 0.04}>
                <p className="max-w-xl text-base leading-relaxed text-[#5C5C5C] md:text-lg lg:max-w-none">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.12} className="min-w-0 lg:col-span-5">
          <div className="relative min-h-[16rem] overflow-hidden rounded-[2rem] bg-[#F4F4F2] shadow-[0_18px_55px_rgba(10,24,42,0.08)] md:min-h-[20rem] md:rounded-[2.125rem] lg:min-h-[22rem]">
            <OptimizedPhoto
              src={FAQ_HERO_IMAGE}
              alt="Skyen Systems FAQ"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
              quality={SITE_IMAGE_QUALITY.hero}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
