"use client";

import { ProductsBlueprintBackdrop } from "@/components/products/ProductsBlueprintBackdrop";
import { Reveal } from "@/components/landing/Reveal";

const PRODUCTS_HERO_IMAGE = "/images/Products ( Top img).png";

export function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F4F2] pb-6 pt-10 md:pb-8 md:pt-14">
      <ProductsBlueprintBackdrop parallax />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[65fr_35fr] lg:gap-11">
          <div className="min-w-0">
            <Reveal>
              <h1 className="max-w-[18ch] font-heading text-[clamp(2.75rem,7vw,5.25rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[#141414] lg:max-w-none">
                Products built to solve real operational challenges.
              </h1>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#4A4A4A] md:text-lg lg:max-w-none">
                We design and engineer software products for businesses, operations, and digital
                transformation — the same team, standards, and delivery discipline we bring to client
                engagements. These are Skyen Group products, built in-house and maintained in production.
              </p>
            </Reveal>

            <div className="mt-12 h-px w-full bg-[#DADAD8] md:mt-14" aria-hidden />
          </div>

          <Reveal delay={0.08} className="min-w-0">
            <div
              className="relative min-h-[16rem] overflow-hidden rounded-[2rem] bg-[#141414] shadow-[0_18px_55px_rgba(10,24,42,0.08)] md:min-h-[20rem] md:rounded-[2.125rem] lg:min-h-[22rem]"
              style={{
                backgroundImage: `linear-gradient(135deg,rgba(20,20,20,0.94),rgba(15,23,42,0.75)),url("${encodeURI(PRODUCTS_HERO_IMAGE)}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              role="img"
              aria-label="Skyen Systems products"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
