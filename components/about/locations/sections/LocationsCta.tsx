"use client";

import Link from "next/link";
import { Reveal } from "@/components/landing/Reveal";

export function LocationsCta() {
  return (
    <section className="relative overflow-hidden bg-[#141414]">
      <div className="relative mx-auto grid max-w-[1440px] gap-10 px-6 py-24 md:grid-cols-12 md:items-end md:px-10 md:py-32">
        <Reveal className="md:col-span-8">
          <h2 className="font-heading text-[clamp(2.25rem,5.5vw,4.25rem)] font-bold leading-[0.95] tracking-[-0.03em] text-[#FAFAF8]">
            Work with a global team —
            <br />
            <span className="text-[#6C63FF]">one accountable partner.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-4 md:text-right">
          <Link
            href="/contact-us"
            className="inline-flex w-full items-center justify-center sm:w-auto sm:min-w-[200px] bg-[#6C63FF] px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#5A52E8]"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
            }}
          >
            Contact us
          </Link>
          <p className="mt-4 text-xs text-[#8A8A8A]">Bahrain · Lahore · Remote clients worldwide</p>
        </Reveal>
      </div>
    </section>
  );
}
