"use client";

import Link from "next/link";
import { ProductsBlueprintBackdrop } from "@/components/products/ProductsBlueprintBackdrop";
import { Reveal } from "@/components/landing/Reveal";

export function ProductsFinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#111827] py-24 md:py-36">
      <ProductsBlueprintBackdrop variant="dark" className="opacity-[0.05]" parallax />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal className="w-full">
            <h2 className="font-heading text-[clamp(2.25rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#FAFAF8]">
              Looking for a custom product solution?
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="mt-6 w-full">
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
              Discuss bespoke software, platform development, and product engineering with our team.
              We apply the same standards behind our own products to every client engagement.
            </p>
          </Reveal>

          <Reveal
            delay={0.14}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5"
          >
            <Link
              href="/contact-us#inquiry"
              className="inline-flex min-w-[240px] items-center justify-center bg-[#6C63FF] px-10 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-[#5A52E8]"
            >
              Start a project
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex min-w-[240px] items-center justify-center border border-white/40 bg-transparent px-10 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-200 hover:border-white hover:bg-white/5"
            >
              Schedule a consultation
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
