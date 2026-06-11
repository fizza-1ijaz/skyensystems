"use client";

import { ServiceModuleVisual } from "@/components/services/ServiceModuleVisual";
import { Reveal } from "@/components/landing/Reveal";
import { EditorialBoxCta } from "@/components/ui/EditorialBoxCta";
import { AI_SOLUTIONS_HERO } from "@/lib/ai-solutions-service-data";

export function AiSolutionsHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#E5E5E3] bg-[#F4F4F2]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 pb-16 pt-10 md:gap-12 md:px-10 md:pb-20 md:pt-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
              {AI_SOLUTIONS_HERO.label}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-heading text-[clamp(2.25rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#141414]">
              {AI_SOLUTIONS_HERO.heading}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#5C5C5C] md:text-base">
              {AI_SOLUTIONS_HERO.paragraph}
            </p>
          </Reveal>
          <Reveal delay={0.14} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <EditorialBoxCta href={AI_SOLUTIONS_HERO.primaryCta.href} variant="primary">
              {AI_SOLUTIONS_HERO.primaryCta.label}
            </EditorialBoxCta>
            <EditorialBoxCta href={AI_SOLUTIONS_HERO.secondaryCta.href} variant="neutral">
              {AI_SOLUTIONS_HERO.secondaryCta.label}
            </EditorialBoxCta>
          </Reveal>
          <Reveal delay={0.18} className="mt-8">
            <ul className="grid gap-2 sm:grid-cols-2">
              {AI_SOLUTIONS_HERO.trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-[#5C5C5C]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#31C3C3]" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.22} className="mt-8 max-w-2xl">
            <div className="border-l-4 border-[#31C3C3] bg-white px-5 py-4 md:px-6 md:py-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
                Direct answer
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
                {AI_SOLUTIONS_HERO.directAnswer}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="lg:col-span-5">
          <div className="border border-[#E5E5E3] bg-white p-4 md:p-5">
            <ServiceModuleVisual
              id="ai"
              className="h-[min(320px,42vw)] min-h-[240px] w-full sm:min-h-[280px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
