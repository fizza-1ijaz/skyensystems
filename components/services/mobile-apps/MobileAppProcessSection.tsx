"use client";

import { EditorialProcessTimeline } from "@/components/landing/EditorialProcessTimeline";
import { Reveal } from "@/components/landing/Reveal";
import { MOBILE_APP_PROCESS } from "@/lib/mobile-app-service-data";

export function MobileAppProcessSection() {
  return (
    <section className="border-b border-[#E5E5E3] bg-[#141414] py-20 text-[#FAFAF8] md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
            {MOBILE_APP_PROCESS.label}
          </p>
          <h2 className="editorial-section-title mt-4 text-balance text-[#FAFAF8]">
            {MOBILE_APP_PROCESS.heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#B8B8B8] md:text-base">
            {MOBILE_APP_PROCESS.paragraph}
          </p>
        </Reveal>

        <EditorialProcessTimeline steps={MOBILE_APP_PROCESS.steps} />
      </div>
    </section>
  );
}
