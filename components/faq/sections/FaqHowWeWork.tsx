"use client";

import { FAQ_PROCESS } from "@/lib/faq-editorial-data";
import { EditorialProcessTimeline } from "@/components/landing/EditorialProcessTimeline";
import { Reveal } from "@/components/landing/Reveal";

export function FaqHowWeWork() {
  return (
    <section
      id="process"
      className="scroll-mt-20 border-b border-[#E5E5E3] bg-[#141414] py-20 text-[#FAFAF8] md:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="editorial-section-title max-w-2xl text-balance">
            From first conversation to long-term partnership.
          </h2>
        </Reveal>

        <EditorialProcessTimeline steps={FAQ_PROCESS} />
      </div>
    </section>
  );
}
