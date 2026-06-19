"use client";

import { ProductsBlueprintBackdrop } from "@/components/products/ProductsBlueprintBackdrop";
import { Reveal } from "@/components/landing/Reveal";
import { EditorialBoxCta } from "@/components/ui/EditorialBoxCta";
import { PRODUCTS_HERO, PRODUCTS_HERO_PROOF_CARDS } from "@/lib/products-page-data";

export function ProductsHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#DADAD8] bg-[#F4F4F2] pb-16 pt-10 md:pb-20 md:pt-14">
      <ProductsBlueprintBackdrop parallax />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-10 xl:gap-14">
          <div className="page-hero-copy lg:col-span-7">
            <Reveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8A8A8A]">
                {PRODUCTS_HERO.label}
              </p>
              <h1 className="mt-4 max-w-2xl font-heading text-[clamp(2.25rem,5.5vw,4rem)] font-bold leading-[0.96] tracking-[-0.03em] text-balance text-[#141414]">
                {PRODUCTS_HERO.heading}
              </h1>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#5C5C5C] md:text-base">
                {PRODUCTS_HERO.paragraph}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="page-hero-cta-row mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <EditorialBoxCta href={PRODUCTS_HERO.primaryCta.href} variant="primary">
                {PRODUCTS_HERO.primaryCta.label}
              </EditorialBoxCta>
              <EditorialBoxCta href={PRODUCTS_HERO.secondaryCta.href} variant="neutral">
                {PRODUCTS_HERO.secondaryCta.label}
              </EditorialBoxCta>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="mt-12 lg:col-span-5 lg:mt-4">
            <div className="grid grid-cols-1 gap-px bg-[#DADAD8] sm:grid-cols-2">
              {PRODUCTS_HERO_PROOF_CARDS.map((card) => (
                <article key={card.title} className="bg-white px-5 py-6 md:px-6 md:py-7">
                  <h2 className="font-heading text-base font-bold tracking-tight text-[#141414] md:text-lg">
                    {card.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C5C5C]">{card.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
