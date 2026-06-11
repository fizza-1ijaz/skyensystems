"use client";

import { EditorialProcessTimeline } from "@/components/landing/EditorialProcessTimeline";
import { Reveal } from "@/components/landing/Reveal";
import { WEB_DEV_PROCESS } from "@/lib/web-development-service-data";

export function WebDevProcessSection() {
  return (
    <section className="border-b border-[#E5E5E3] bg-[#141414] py-20 text-[#FAFAF8] md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
            {WEB_DEV_PROCESS.label}
          </p>
          <h2 className="editorial-section-title mt-4 text-balance text-[#FAFAF8]">
            {WEB_DEV_PROCESS.heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#B8B8B8] md:text-base">
            {WEB_DEV_PROCESS.paragraph}
          </p>
        </Reveal>

        <EditorialProcessTimeline steps={WEB_DEV_PROCESS.steps} />
      </div>
    </section>
  );
}
