"use client";

import { Reveal } from "@/components/landing/Reveal";
import { AI_SOLUTIONS_SERVICE_OVERVIEW } from "@/lib/ai-solutions-service-data";

export function AiSolutionsServiceOverview() {
  return (
    <section className="border-b border-[#E5E5E3] bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="w-full text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
            {AI_SOLUTIONS_SERVICE_OVERVIEW.label}
          </p>
          <h2 className="editorial-section-title mx-auto mt-4 w-full max-w-none text-balance text-[#141414]">
            {AI_SOLUTIONS_SERVICE_OVERVIEW.heading}
          </h2>
          <p className="mx-auto mt-4 w-full max-w-none text-sm leading-relaxed text-[#5C5C5C] md:text-base">
            {AI_SOLUTIONS_SERVICE_OVERVIEW.paragraph}
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mx-auto mt-10 max-w-4xl">
          <div className="border-l-4 border-[#31C3C3] bg-white px-6 py-5 text-center md:px-8 md:py-6">
            <p className="text-sm leading-relaxed text-[#5C5C5C] md:text-base">
              {AI_SOLUTIONS_SERVICE_OVERVIEW.directAnswer}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
