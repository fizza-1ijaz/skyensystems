"use client";

import { Reveal } from "@/components/landing/Reveal";
import { UI_UX_SERVICE_OVERVIEW } from "@/lib/ui-ux-design-service-data";

export function UiUxServiceOverview() {
  return (
    <section className="border-b border-[#E5E5E3] bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
            {UI_UX_SERVICE_OVERVIEW.label}
          </p>
          <h2 className="editorial-section-title mt-4 text-balance text-[#141414]">
            {UI_UX_SERVICE_OVERVIEW.heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
            {UI_UX_SERVICE_OVERVIEW.paragraph}
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 max-w-4xl">
          <div className="border-l-4 border-[#31C3C3] bg-white px-6 py-5 md:px-8 md:py-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
              Direct answer
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
              {UI_UX_SERVICE_OVERVIEW.directAnswer}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
