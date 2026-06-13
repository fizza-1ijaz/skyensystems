"use client";

import { Reveal } from "@/components/landing/Reveal";
import { ENGAGEMENT_MODELS } from "@/lib/pricing-page-data";

export function PricingEngagementOverview() {
  return (
    <section className="border-t border-[#DADAD8] bg-[#F4F4F2] pt-20 pb-10 md:pt-28 md:pb-12">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="w-full text-center">
          <h2 className="editorial-section-title mx-auto w-full max-w-none text-balance text-[#141414]">
            How we typically engage.
          </h2>
          <p className="mx-auto mt-4 w-full max-w-none text-sm leading-relaxed text-[#5C5C5C] md:text-base">
            Engagement models define how we embed, deliver, and remain accountable — before package
            scope or retainer cadence is selected.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {ENGAGEMENT_MODELS.map((model, index) => {
            const variantB = index % 2 === 1;

            return (
              <Reveal key={model.title} delay={index * 0.05}>
                <article
                  className={`group border p-8 transition-all duration-200 ease-out hover:-translate-y-1 md:p-10 ${
                    variantB
                      ? "border-[rgba(49,195,195,0.15)] bg-[rgba(49,195,195,0.04)] hover:border-[rgba(49,195,195,0.28)]"
                      : "border-[#DADAD8] bg-[#FAFAF8] hover:border-[#141414]/20"
                  }`}
                >
                  <div className="relative pl-0 transition-all duration-200 group-hover:pl-4">
                    <span
                      className="absolute left-0 top-0 h-0 w-0.5 bg-[#31C3C3] transition-all duration-200 group-hover:h-full"
                      aria-hidden
                    />
                    <h3 className="font-heading text-xl font-bold tracking-tight text-[#141414] md:text-2xl">
                      {model.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#5C5C5C]">{model.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
