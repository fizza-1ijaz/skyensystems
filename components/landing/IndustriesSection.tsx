"use client";

import Link from "next/link";
import { INDUSTRIES_CARDS, INDUSTRIES_SECTION } from "@/lib/homepage-data";
import { Reveal } from "@/components/landing/Reveal";

const MAIN_ROW_COUNT = Math.floor(INDUSTRIES_CARDS.length / 3) * 3;
const MAIN_INDUSTRY_CARDS = INDUSTRIES_CARDS.slice(0, MAIN_ROW_COUNT);
const CENTERED_INDUSTRY_CARDS = INDUSTRIES_CARDS.slice(MAIN_ROW_COUNT);

function IndustryCard({
  industry,
  index,
}: {
  industry: (typeof INDUSTRIES_CARDS)[number];
  index: number;
}) {
  return (
    <Reveal delay={index * 0.04} className="min-h-0">
      <article className="group relative min-h-[13rem] overflow-hidden bg-[#FAFAF8] md:min-h-[14rem]">
        <div
          className="absolute inset-x-0 bottom-0 z-0 h-0 bg-[#31C3C3] transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [@media(hover:hover)]:group-hover:h-full motion-reduce:[@media(hover:hover)]:group-hover:h-0"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-[13rem] flex-col justify-end overflow-hidden p-6 md:min-h-[14rem] md:p-10">
          <div className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 [@media(hover:hover)]:group-hover:-translate-y-4">
            <h3 className="relative z-10 font-heading text-2xl font-bold tracking-tight text-[#141414] transition-colors duration-300 [@media(hover:hover)]:group-hover:text-white md:text-3xl">
              {industry.title}
            </h3>

            <div className="relative mt-4 min-h-0 shrink-0 md:min-h-[5.5rem]">
              <p className="text-sm leading-snug text-[#5C5C5C] max-md:line-clamp-none md:absolute md:inset-x-0 md:top-0 md:line-clamp-2 md:transition-all md:duration-300 [@media(hover:hover)]:md:group-hover:pointer-events-none [@media(hover:hover)]:md:group-hover:translate-y-1 [@media(hover:hover)]:md:group-hover:opacity-0 [@media(hover:hover)]:md:group-hover:text-white">
                {industry.tagline}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#5C5C5C] max-md:line-clamp-4 md:absolute md:inset-x-0 md:top-0 md:mt-0 md:line-clamp-4 md:opacity-0 md:transition-all md:duration-300 [@media(hover:hover)]:md:translate-y-1 [@media(hover:hover)]:md:group-hover:translate-y-0 [@media(hover:hover)]:md:group-hover:opacity-100 [@media(hover:hover)]:md:group-hover:text-white/92">
                {industry.description}
              </p>
            </div>

            <Link
              href={industry.cta.href}
              className="mt-4 inline-block text-sm font-semibold text-[#31C3C3] transition-all duration-300 hover:text-[#2AB0B0] md:opacity-0 [@media(hover:hover)]:md:group-hover:opacity-100 [@media(hover:hover)]:md:group-hover:text-white [@media(hover:hover)]:md:group-hover:hover:text-white/90"
            >
              {industry.cta.label} →
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function IndustriesSection() {
  return (
    <section className="bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
            {INDUSTRIES_SECTION.label}
          </p>
          <h2 className="editorial-section-title mt-4 text-balance text-[#141414]">
            {INDUSTRIES_SECTION.heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
            {INDUSTRIES_SECTION.paragraph}
          </p>
        </Reveal>

        <div className="mt-14">
          <div className="grid gap-px bg-[#E5E5E3] md:grid-cols-2 lg:grid-cols-3">
            {MAIN_INDUSTRY_CARDS.map((industry, index) => (
              <IndustryCard key={industry.title} industry={industry} index={index} />
            ))}
          </div>

          {CENTERED_INDUSTRY_CARDS.length > 0 ? (
            <div className="mt-px flex justify-center bg-[#E5E5E3]">
              <div className="grid w-full gap-px bg-[#E5E5E3] md:grid-cols-2 lg:w-2/3 lg:grid-cols-2">
                {CENTERED_INDUSTRY_CARDS.map((industry, index) => (
                  <IndustryCard
                    key={industry.title}
                    industry={industry}
                    index={MAIN_INDUSTRY_CARDS.length + index}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
