"use client";

import { Reveal } from "@/components/landing/Reveal";
import { DEDICATED_TEAMS_TRUST_STRIP } from "@/lib/dedicated-teams-service-data";

export function DedicatedTeamsTrustStrip() {
  return (
    <section
      className="border-b border-[#E5E5E3] bg-white py-8 md:py-10"
      aria-label="Dedicated teams trust and proof"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="max-w-3xl font-heading text-xl font-bold tracking-tight text-[#141414] md:text-2xl">
            {DEDICATED_TEAMS_TRUST_STRIP.heading}
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-px bg-[#E5E5E3] sm:grid-cols-2 lg:grid-cols-4">
          {DEDICATED_TEAMS_TRUST_STRIP.items.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.04} className="min-h-0 bg-white">
              <div className="flex h-full flex-col justify-center px-5 py-5 md:px-6">
                <p className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-[#141414]">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
