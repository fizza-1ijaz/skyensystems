"use client";

import { Reveal } from "@/components/landing/Reveal";
import { UI_UX_WHAT_WE_DESIGN } from "@/lib/ui-ux-design-service-data";

export function UiUxWhatWeDesign() {
  return (
    <section className="border-b border-[#E5E5E3] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
            {UI_UX_WHAT_WE_DESIGN.label}
          </p>
          <h2 className="editorial-section-title mt-4 text-balance text-[#141414]">
            {UI_UX_WHAT_WE_DESIGN.heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
            {UI_UX_WHAT_WE_DESIGN.paragraph}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {UI_UX_WHAT_WE_DESIGN.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.05} className="min-h-0">
              <article className="flex h-full flex-col border border-[#E5E5E3] bg-[#FAFAF8] p-6 transition-[border-color,box-shadow] duration-300 hover:border-[#141414] hover:shadow-[0_20px_50px_-40px_rgba(20,20,20,0.25)] md:p-8">
                <h3 className="font-heading text-xl font-bold tracking-tight text-[#141414] md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
                  {card.description}
                </p>
                <p className="mt-5 text-xs font-medium uppercase tracking-[0.1em] text-[#8A8A8A]">
                  {card.tags}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
