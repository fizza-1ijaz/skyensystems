"use client";

import Link from "next/link";
import { ENGAGEMENT_PHASES } from "@/components/landing/landing-data";
import { Reveal } from "@/components/landing/Reveal";

export function HowWeEngage() {
  return (
    <section className="relative overflow-hidden bg-[#F4F4F2] py-24 md:py-32">
      {/* Full-width headline */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="w-full">
          <h2 className="editorial-section-title w-full text-balance text-[#141414]">
            A delivery model shaped like your roadmap — not a pricing grid.
          </h2>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-16 w-full max-w-[1440px] px-6 md:mt-20 md:px-10">
        {/* Horizontal rule above Discovery */}
        <div className="h-px w-full bg-[#DADAD8]" aria-hidden />

        <ol className="relative mt-0 flex flex-col gap-0 md:gap-2">
          {ENGAGEMENT_PHASES.map((step, index) => (
            <Reveal key={step.phase} delay={index * 0.07}>
              <li className="relative grid w-full gap-4 border-b border-[#DADAD8] py-8 md:grid-cols-12 md:items-baseline md:py-10">
                <span className="font-heading text-5xl font-bold text-[#6C63FF]/30 md:col-span-2 md:text-6xl">
                  {step.phase}
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#141414] md:col-span-3">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#5C5C5C] md:col-span-7 md:text-base">
                  {step.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12 flex flex-wrap gap-6">
          <Link
            href="/pricing"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-[#141414] underline-offset-4 hover:underline"
          >
            Engagement models & pricing →
          </Link>
          <Link
            href="/contact-us"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-[#6C63FF]"
          >
            Schedule discovery →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
