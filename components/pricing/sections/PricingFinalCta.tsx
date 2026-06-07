"use client";

import Link from "next/link";
import { PricingBlueprintBackdrop } from "@/components/pricing/PricingBlueprintBackdrop";
import { Reveal } from "@/components/landing/Reveal";

export function PricingFinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#111827] py-24 md:py-36">
      <PricingBlueprintBackdrop variant="dark" className="opacity-[0.05]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal className="w-full">
            <h2 className="font-heading text-[clamp(2.25rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#FAFAF8]">
              Let&apos;s define the right engagement model.
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="mt-6 w-full">
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
              Discuss your requirements with our team before selecting a package. We&apos;ll recommend
              the most practical path — scope, model, and investment — for your goals.
            </p>
          </Reveal>

          <Reveal
            delay={0.14}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5"
          >
            <Link
              href="/contact-us#inquiry"
              className="inline-flex w-full items-center justify-center sm:w-auto sm:min-w-[240px] bg-[#31C3C3] px-10 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-[#2AB0B0]"
            >
              Start a project
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex w-full items-center justify-center sm:w-auto sm:min-w-[240px] border border-white/40 bg-transparent px-10 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-200 hover:border-white hover:bg-white/5"
            >
              Schedule a consultation
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
