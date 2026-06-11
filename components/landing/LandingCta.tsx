"use client";

import { LandingCtaForm } from "@/components/landing/LandingCtaForm";
import { Reveal } from "@/components/landing/Reveal";
import { LANDING_CTA } from "@/lib/homepage-data";

export function LandingCta() {
  return (
    <section className="relative overflow-hidden bg-[#111827] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-[#31C3C3]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#31C3C3]/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <Reveal className="lg:pt-4">
            <h2 className="font-heading text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#FAFAF8]">
              {LANDING_CTA.heading}{" "}
              <span className="text-[#31C3C3]">{LANDING_CTA.headingAccent}</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
              {LANDING_CTA.paragraph}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {LANDING_CTA.servicePills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-5 md:gap-4 md:px-6">
              {LANDING_CTA.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-lg font-bold text-white md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[9px] font-semibold uppercase leading-snug tracking-[0.14em] text-white/45 md:text-[10px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <LandingCtaForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
