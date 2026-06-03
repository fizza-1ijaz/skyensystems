"use client";

import Link from "next/link";
import { Reveal } from "@/components/landing/Reveal";
import { OFFICE_EMAIL, OFFICE_EMAIL_MAILTO } from "@/lib/company-offices";

export function ContactFinalCta() {
  return (
    <section className="bg-[#111827] py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal className="w-full">
            <h2 className="font-heading text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#FAFAF8]">
              Great software starts with a clear conversation.
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="mt-10 w-full">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
              Direct line
            </p>
            <Link
              href={OFFICE_EMAIL_MAILTO}
              className="mt-2 inline-block font-heading text-2xl font-bold text-[#FAFAF8] transition-colors hover:text-[#6C63FF] md:text-3xl"
            >
              {OFFICE_EMAIL}
            </Link>
          </Reveal>

          <Reveal delay={0.16} className="mt-12">
            <Link
              href="#inquiry"
              className="inline-flex min-w-[260px] items-center justify-center bg-[#6C63FF] px-10 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#141414] transition-colors hover:bg-[#5A52E8]"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
              }}
            >
              Start your inquiry
            </Link>
            <p className="mt-4 text-xs text-white/40">Response within four business hours.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
