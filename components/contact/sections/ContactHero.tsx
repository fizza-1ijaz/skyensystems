"use client";

import Link from "next/link";
import { ContactHeroBlueprint } from "@/components/contact/ContactHeroBlueprint";
import { Reveal } from "@/components/landing/Reveal";
import {
  HEAD_OFFICE_ADDRESS_BLOCK,
  HEAD_OFFICE_CR,
  HEAD_OFFICE_PHONE,
  OFFICE_EMAIL,
  OFFICE_EMAIL_MAILTO,
  REGIONAL_OFFICE_ADDRESS_BLOCK,
  REGIONAL_OFFICE_HOURS,
  REGIONAL_OFFICE_PHONE,
} from "@/lib/company-offices";

const HERO_METRICS = [
  { value: "15+", label: "Projects Delivered" },
  { value: "2", label: "Regional Offices" },
  { value: "AI &", label: "Enterprise Systems" },
  { value: "Global", label: "Remote Delivery" },
] as const;

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F4F2] pb-10 pt-10 md:pb-12 md:pt-14">
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-10">
          {/* Left — headline, metrics, blueprint */}
          <div className="relative min-h-[22rem] lg:col-span-7 lg:min-h-[34rem]">
            <ContactHeroBlueprint className="pointer-events-none absolute -bottom-6 left-0 z-[1] h-[min(48vw,22rem)] w-[min(100%,480px)] md:-bottom-10 md:h-[min(42vw,26rem)] md:w-[min(92%,520px)] lg:h-[min(50%,28rem)] lg:w-[85%]" />

            <div className="relative z-10">
              <Reveal>
                <h1 className="max-w-[14ch] font-heading text-[clamp(2.75rem,7vw,5.25rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[#141414]">
                  Let&apos;s discuss what&apos;s next.
                </h1>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="mt-8 max-w-lg text-base leading-relaxed text-[#4A4A4A] md:text-lg">
                  We help organizations design, build, and scale software products — from first
                  prototype to enterprise platform. Share your context and we&apos;ll respond with
                  clarity, not a sales script.
                </p>
              </Reveal>

              <div className="mt-12 grid grid-cols-1 gap-6 min-[400px]:grid-cols-2 md:mt-14 md:gap-8 lg:grid-cols-4">
                {HERO_METRICS.map((metric, index) => (
                  <Reveal
                    key={metric.label}
                    delay={0.12 + index * 0.06}
                    className={`min-w-0 ${index > 0 ? "min-[400px]:border-l min-[400px]:border-[#DADAD8] min-[400px]:pl-6 lg:pl-0 lg:border-l-0" : ""}`}
                  >
                    <p className="font-heading text-2xl font-bold tracking-tight text-[#141414] transition-colors duration-300 hover:text-[#31C3C3] md:text-3xl">
                      {metric.value}
                    </p>
                    <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#8A8A8A]">
                      {metric.label}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Right — contact panel */}
          <Reveal delay={0.1} className="mt-12 lg:col-span-5 lg:mt-4">
            <div className="relative z-10 bg-[#0F172A] px-5 py-8 sm:px-8 md:px-10 md:py-10">
              <div className="border-b border-white/10 py-6 first:pt-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">
                  Email
                </p>
                <Link
                  href={OFFICE_EMAIL_MAILTO}
                  className="mt-2 inline-block break-all font-heading text-lg font-bold text-[#FAFAF8] transition-colors hover:text-[#31C3C3] sm:text-xl md:text-2xl"
                >
                  {OFFICE_EMAIL}
                </Link>
              </div>

              <div className="border-b border-white/10 py-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">
                  Bahrain — Head office
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/72">
                  {HEAD_OFFICE_ADDRESS_BLOCK[0]}
                  <br />
                  {HEAD_OFFICE_ADDRESS_BLOCK[1]}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/40">
                  {HEAD_OFFICE_CR} · {HEAD_OFFICE_PHONE}
                </p>
              </div>

              <div className="pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">
                  Pakistan — Delivery centre
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/72">
                  {REGIONAL_OFFICE_ADDRESS_BLOCK[0]}
                  <br />
                  {REGIONAL_OFFICE_ADDRESS_BLOCK[1]}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/40">
                  {REGIONAL_OFFICE_PHONE} · {REGIONAL_OFFICE_HOURS}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative z-10 mt-10 h-px w-full bg-[#DADAD8] md:mt-12" aria-hidden />
      </div>
    </section>
  );
}
