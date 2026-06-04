"use client";

import Link from "next/link";
import { BlogBlueprintBackdrop } from "@/components/blog/BlogBlueprintBackdrop";
import { Reveal } from "@/components/landing/Reveal";

export function BlogFinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#111827] py-24 md:py-36">
      <BlogBlueprintBackdrop variant="dark" className="opacity-[0.05]" parallax />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal className="w-full">
            <h2 className="font-heading text-[clamp(2.25rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#FAFAF8]">
              Need expertise beyond the article?
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="mt-6 w-full">
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
              Discuss software engineering, AI systems, product strategy, or platform development
              with our team — we help organizations move from insight to execution.
            </p>
          </Reveal>

          <Reveal
            delay={0.14}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5"
          >
            <Link
              href="/contact-us#inquiry"
              className="inline-flex w-full items-center justify-center sm:w-auto sm:min-w-[240px] bg-[#6C63FF] px-10 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-[#5A52E8]"
            >
              Start a project
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex w-full items-center justify-center sm:w-auto sm:min-w-[240px] border border-white/40 bg-transparent px-10 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-200 hover:border-white hover:bg-white/5"
            >
              Contact us
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
