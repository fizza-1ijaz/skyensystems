"use client";

import Link from "next/link";
import { Reveal } from "@/components/landing/Reveal";

export function ProductsQuoteBand() {
  return (
    <section className="border-y border-[#DADAD8] bg-[#FAFAF8] py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <blockquote className="mx-auto max-w-4xl text-center">
            <p className="font-heading text-2xl font-bold leading-snug tracking-tight text-[#141414] md:text-3xl">
              &ldquo;Studiely isn&apos;t a demo. It isn&apos;t a portfolio piece. It&apos;s a live
              product with real users — built entirely by our in-house team. When we say we can build
              your app, this is what we mean.&rdquo;
            </p>
          </blockquote>
        </Reveal>
        <Reveal delay={0.08} className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center border-b-2 border-[#141414] pb-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#141414] transition-colors duration-200 hover:border-[#6C63FF] hover:text-[#6C63FF]"
          >
            See our mobile app service →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
