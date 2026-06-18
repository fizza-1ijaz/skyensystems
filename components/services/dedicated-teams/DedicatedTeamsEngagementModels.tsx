"use client";

import { Reveal } from "@/components/landing/Reveal";
import { DEDICATED_TEAMS_ENGAGEMENT_MODELS } from "@/lib/dedicated-teams-service-data";

export function DedicatedTeamsEngagementModels() {
  return (
    <section className="border-b border-[#E5E5E3] bg-[#F4F4F2] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="w-full text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
            {DEDICATED_TEAMS_ENGAGEMENT_MODELS.label}
          </p>
          <h2 className="editorial-section-title mx-auto mt-4 w-full max-w-none text-balance text-[#141414]">
            {DEDICATED_TEAMS_ENGAGEMENT_MODELS.heading}
          </h2>
          <p className="mx-auto mt-4 w-full max-w-none text-sm leading-relaxed text-[#5C5C5C] md:text-base">
            {DEDICATED_TEAMS_ENGAGEMENT_MODELS.paragraph}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 md:gap-5">
          {DEDICATED_TEAMS_ENGAGEMENT_MODELS.models.map((model, index) => (
            <Reveal key={model.title} delay={index * 0.05} className="min-h-0">
              <article className="flex h-full flex-col border border-[#E5E5E3] bg-white p-6 md:p-8">
                <h3 className="font-heading text-xl font-bold tracking-tight text-[#141414] md:text-2xl">
                  {model.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
                  {model.description}
                </p>
                <div className="mt-6 border-t border-[#E5E5E3] pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#31C3C3]">
                    Best for
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-[#8A8A8A]">
                    {model.bestFor}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
