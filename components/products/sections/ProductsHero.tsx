"use client";

import { ProductsBlueprintBackdrop } from "@/components/products/ProductsBlueprintBackdrop";
import { Reveal } from "@/components/landing/Reveal";

export function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F4F2] pb-6 pt-10 md:pb-8 md:pt-14">
      <ProductsBlueprintBackdrop parallax />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h1 className="max-w-[18ch] font-heading text-[clamp(2.75rem,7vw,5.25rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[#141414]">
            Products built to solve real operational challenges.
          </h1>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#4A4A4A] md:text-lg">
            We design and engineer software products for businesses, operations, and digital
            transformation — the same team, standards, and delivery discipline we bring to client
            engagements. These are Skyen Group products, built in-house and maintained in production.
          </p>
        </Reveal>

        <div className="mt-12 h-px w-full bg-[#DADAD8] md:mt-14" aria-hidden />
      </div>
    </section>
  );
}
