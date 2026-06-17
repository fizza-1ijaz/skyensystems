"use client";

import { Reveal } from "@/components/landing/Reveal";
import { PRODUCTS_QUOTE } from "@/lib/products-page-data";

export function ProductsQuoteBand() {
  return (
    <section className="border-y border-[#DADAD8] bg-[#FAFAF8] py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <blockquote className="mx-auto max-w-4xl text-center">
            <p className="font-heading text-2xl font-bold leading-snug tracking-tight text-[#141414] md:text-3xl">
              &ldquo;{PRODUCTS_QUOTE.quote}&rdquo;
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#5C5C5C] md:text-base">
              {PRODUCTS_QUOTE.supportingText}
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
