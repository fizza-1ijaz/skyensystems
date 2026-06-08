"use client";

import { AI_AUTOMATION_HIGHLIGHT } from "@/lib/homepage-data";
import { Reveal } from "@/components/landing/Reveal";
import { EditorialBoxCta } from "@/components/ui/EditorialBoxCta";

export function AiAutomationHighlight() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(49,195,195,0.15), transparent 45%), radial-gradient(circle at 80% 70%, rgba(20,20,20,0.06), transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
              {AI_AUTOMATION_HIGHLIGHT.eyebrow}
            </p>
            <h2 className="editorial-section-title mt-4 text-balance text-[#141414]">
              {AI_AUTOMATION_HIGHLIGHT.headline}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
              {AI_AUTOMATION_HIGHLIGHT.description}
            </p>
            <div className="mt-8">
              <EditorialBoxCta href={AI_AUTOMATION_HIGHLIGHT.cta.href} variant="primary">
                {AI_AUTOMATION_HIGHLIGHT.cta.label}
              </EditorialBoxCta>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <ul className="grid gap-4 sm:grid-cols-2">
              {AI_AUTOMATION_HIGHLIGHT.capabilities.map((capability, index) => (
                <li
                  key={capability}
                  className="border border-[#E5E5E3] bg-white p-5 transition-[border-color,box-shadow] duration-300 hover:border-[#31C3C3]/50 hover:shadow-[0_20px_50px_-35px_rgba(49,195,195,0.35)] md:p-6"
                >
                  <span className="font-heading text-sm font-bold text-[#31C3C3]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-heading text-base font-bold text-[#141414] md:text-lg">
                    {capability}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
