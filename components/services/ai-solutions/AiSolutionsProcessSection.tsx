"use client";

import { EditorialProcessTimeline } from "@/components/landing/EditorialProcessTimeline";
import { Reveal } from "@/components/landing/Reveal";
import { AI_SOLUTIONS_PROCESS } from "@/lib/ai-solutions-service-data";

export function AiSolutionsProcessSection() {
  return (
    <section className="border-b border-[#E5E5E3] bg-[#141414] py-20 text-[#FAFAF8] md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
            {AI_SOLUTIONS_PROCESS.label}
          </p>
          <h2 className="editorial-section-title mt-4 text-balance text-[#FAFAF8]">
            {AI_SOLUTIONS_PROCESS.heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#B8B8B8] md:text-base">
            {AI_SOLUTIONS_PROCESS.paragraph}
          </p>
        </Reveal>

        <EditorialProcessTimeline steps={AI_SOLUTIONS_PROCESS.steps} />
      </div>
    </section>
  );
}
