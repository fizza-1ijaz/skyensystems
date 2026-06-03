"use client";

import Link from "next/link";
import { Reveal } from "@/components/landing/Reveal";

export function LandingCta() {
  return (
    <section className="relative overflow-hidden bg-[#141414]">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
        style={{
          backgroundImage: "url('/bgs/gear.jfif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[#141414]/85" aria-hidden />

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <h2 className="font-heading text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-[#FAFAF8]">
              Let&apos;s define what
              <br />
              your product needs
              <br />
              <span className="text-[#6C63FF]">to win.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-4 lg:text-right">
            <Link
              href="/contact-us"
              className="inline-flex min-w-[220px] items-center justify-center bg-[#6C63FF] px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#141414] transition-colors hover:bg-[#5A52E8]"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
              }}
            >
              Book discovery call
            </Link>
            <p className="mt-4 text-xs text-[#8A8A8A]">
              Response within 4 business hours.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
