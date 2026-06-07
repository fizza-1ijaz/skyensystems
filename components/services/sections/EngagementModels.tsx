"use client";

import { ENGAGEMENT_MODELS } from "@/lib/services-page-data";
import { EditorialBoxCta } from "@/components/ui/EditorialBoxCta";
import { Reveal } from "@/components/landing/Reveal";

export function EngagementModels() {
  return (
    <section className="bg-[#F4F4F2] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="max-w-3xl font-heading text-4xl font-bold tracking-[-0.03em] text-[#141414] md:text-5xl">
            How we embed — strategic operating models, not pricing cards.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {ENGAGEMENT_MODELS.map((model, index) => (
            <Reveal key={model.title} delay={index * 0.07}>
              <article
                className={`flex h-full flex-col border border-[#E5E5E3] bg-white p-7 md:p-9 ${
                  index === 0 ? "lg:-mt-4" : index === 2 ? "lg:mt-4" : ""
                }`}
                style={
                  index === 1
                    ? {
                        clipPath:
                          "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)",
                      }
                    : undefined
                }
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#31C3C3]">
                  {model.subtitle}
                </p>
                <h3 className="mt-4 font-heading text-2xl font-bold text-[#141414]">{model.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[#5C5C5C]">
                  {model.description}
                </p>
                <p className="mt-6 border-t border-[#F0F0EE] pt-4 text-xs font-medium uppercase tracking-[0.1em] text-[#8A8A8A]">
                  {model.fit}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <EditorialBoxCta href="/pricing">View pricing frameworks</EditorialBoxCta>
        </Reveal>
      </div>
    </section>
  );
}
