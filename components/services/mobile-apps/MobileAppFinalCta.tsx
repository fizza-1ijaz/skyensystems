"use client";

import { Reveal } from "@/components/landing/Reveal";
import { EditorialBoxCta } from "@/components/ui/EditorialBoxCta";
import { MOBILE_APP_FINAL_CTA } from "@/lib/mobile-app-service-data";

export function MobileAppFinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#111827] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-[#31C3C3]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#31C3C3]/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
            {MOBILE_APP_FINAL_CTA.label}
          </p>
          <h2 className="mt-4 font-heading text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#FAFAF8]">
            {MOBILE_APP_FINAL_CTA.heading}
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-white/60 md:text-base">
            {MOBILE_APP_FINAL_CTA.paragraph}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <EditorialBoxCta href={MOBILE_APP_FINAL_CTA.primaryCta.href} variant="primary">
              {MOBILE_APP_FINAL_CTA.primaryCta.label}
            </EditorialBoxCta>
            <EditorialBoxCta href={MOBILE_APP_FINAL_CTA.secondaryCta.href} variant="on-dark">
              {MOBILE_APP_FINAL_CTA.secondaryCta.label}
            </EditorialBoxCta>
          </div>

          <p className="mt-10 text-xs font-medium uppercase tracking-[0.14em] text-white/40">
            {MOBILE_APP_FINAL_CTA.trustLine}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
