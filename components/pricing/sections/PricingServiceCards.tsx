"use client";

import { Reveal } from "@/components/landing/Reveal";
import { EditorialBoxCta } from "@/components/ui/EditorialBoxCta";
import { SERVICE_PRICING_CARDS, SERVICE_PRICING_SECTION } from "@/lib/pricing-page-data";

export function PricingServiceCards() {
  return (
    <section
      id="service-pricing"
      className="border-b border-[#DADAD8] bg-[#F4F4F2] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="w-full text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8A8A8A]">
            {SERVICE_PRICING_SECTION.label}
          </p>
          <h2 className="editorial-section-title mx-auto mt-4 w-full max-w-none text-balance text-[#141414]">
            {SERVICE_PRICING_SECTION.heading}
          </h2>
          <p className="mx-auto mt-4 w-full max-w-none text-sm leading-relaxed text-[#5C5C5C] md:text-base">
            {SERVICE_PRICING_SECTION.paragraph}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {SERVICE_PRICING_CARDS.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.06} className="min-h-0 flex">
              <article className="group flex w-full flex-col border border-[#0F172A] border-t-2 border-t-[#31C3C3] bg-[#0F172A] p-8 shadow-[0_20px_48px_-30px_rgba(15,23,42,0.5)] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#31C3C3]/35 hover:shadow-[0_28px_56px_-28px_rgba(15,23,42,0.6)] md:p-10">
                <div className="border-b border-white/10 pb-6">
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-[#FAFAF8] md:text-[1.75rem]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/65">{card.description}</p>
                </div>

                <div className="mt-6 flex items-stretch gap-3">
                  <span className="w-0.5 shrink-0 bg-[#31C3C3]" aria-hidden />
                  <div>
                    <p className="font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-none tracking-tight text-[#FAFAF8]">
                      {card.price}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/45">
                      {card.priceNote}
                    </p>
                  </div>
                </div>

                <ul className="mt-8 flex flex-1 flex-col gap-3.5 border-t border-white/10 pt-8">
                  {card.included.map((line) => (
                    <li key={line} className="flex gap-3 text-sm leading-relaxed text-white/75">
                      <span className="mt-2 h-px w-3 shrink-0 bg-[#31C3C3]" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <EditorialBoxCta
                    href={card.cta}
                    variant="on-dark"
                    className="w-full justify-center py-3 transition-colors duration-300 hover:!border-[#31C3C3] hover:!bg-[#31C3C3] hover:!text-white"
                  >
                    {card.ctaLabel}
                  </EditorialBoxCta>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
