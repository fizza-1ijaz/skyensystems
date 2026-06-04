"use client";

import { SERVICES_PROCESS } from "@/lib/services-page-data";
import { EditorialProcessTimeline } from "@/components/landing/EditorialProcessTimeline";
import { Reveal } from "@/components/landing/Reveal";

export function ServicesProcess() {
  return (
    <section className="border-b border-[#E5E5E3] bg-[#141414] py-20 text-[#FAFAF8] md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-4xl font-bold tracking-[-0.03em] md:text-5xl">
            A horizontal journey from first conversation to scale.
          </h2>
        </Reveal>

        <EditorialProcessTimeline steps={SERVICES_PROCESS} />
      </div>
    </section>
  );
}
