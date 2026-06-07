"use client";

import Link from "next/link";
import { Reveal } from "@/components/landing/Reveal";

export function ServicesFinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#141414]">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/bgs/nodes.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#141414]/88" aria-hidden />

      <div className="relative mx-auto grid max-w-[1440px] gap-10 px-6 py-24 md:grid-cols-12 md:items-end md:px-10 md:py-32">
        <Reveal className="md:col-span-8">
          <h2 className="font-heading text-[clamp(2.25rem,5.5vw,4.25rem)] font-bold leading-[0.95] tracking-[-0.03em] text-[#FAFAF8]">
            Tell us the problem.
            <br />
            We&apos;ll show you the
            <br />
            <span className="text-[#31C3C3]">system</span> to solve it.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-4 md:text-right">
          <Link
            href="/contact-us"
            className="inline-flex w-full items-center justify-center sm:w-auto sm:min-w-[200px] bg-[#31C3C3] px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#2AB0B0]"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
            }}
          >
            Book discovery
          </Link>
          <p className="mt-4 text-xs text-[#8A8A8A]">Response within 4 business hours.</p>
        </Reveal>
      </div>
    </section>
  );
}
