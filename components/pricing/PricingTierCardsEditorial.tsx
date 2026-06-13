"use client";

import { Reveal } from "@/components/landing/Reveal";
import { EditorialBoxCta } from "@/components/ui/EditorialBoxCta";
import type { LaunchOrRetainerPlan } from "@/components/marketing/pricingPanelsData";

function PriceHighlight({ price }: { price: string }) {
  return (
    <div className="flex items-stretch gap-3">
      <span className="w-0.5 shrink-0 bg-[#31C3C3]" aria-hidden />
      <div>
        <p className="font-heading text-[clamp(2rem,4vw,2.75rem)] font-bold leading-none tracking-tight text-[#FAFAF8]">
          {price}
        </p>
        <span className="mt-2 block h-px w-full bg-[#31C3C3]/50" aria-hidden />
      </div>
    </div>
  );
}

export function PricingTierCardsEditorial({
  plans,
}: {
  plans: LaunchOrRetainerPlan[];
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch lg:gap-6">
      {plans.map((plan, index) => {
        const featured = Boolean(plan.featured);

        return (
          <Reveal key={plan.name} delay={index * 0.06} className="min-h-0 flex">
            <article
              className={`group flex w-full flex-col border border-[#0F172A] border-t-2 border-t-[#31C3C3] bg-[#0F172A] p-8 transition-all duration-200 ease-out hover:-translate-y-1 md:p-10 ${
                featured
                  ? "relative z-10 shadow-[0_28px_56px_-32px_rgba(15,23,42,0.55)] lg:-my-2 lg:py-12 hover:border-[#31C3C3]/40 hover:shadow-[0_32px_64px_-28px_rgba(15,23,42,0.65)]"
                  : "shadow-[0_20px_48px_-30px_rgba(15,23,42,0.5)] hover:border-[#31C3C3]/35 hover:shadow-[0_28px_56px_-28px_rgba(15,23,42,0.6)]"
              }`}
            >
              <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-start md:justify-between md:gap-6">
                <div>
                  {featured ? (
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#31C3C3]">
                      Recommended
                    </p>
                  ) : null}
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-[#FAFAF8] md:text-[1.75rem]">
                    {plan.name}
                  </h3>
                </div>
                <div className="shrink-0">
                  <PriceHighlight price={plan.price} />
                </div>
              </div>

              {plan.description ? (
                <p className="mt-6 text-sm leading-relaxed text-white/65">{plan.description}</p>
              ) : null}

              <ul className="mt-8 flex flex-1 flex-col gap-3.5 border-t border-white/10 pt-8">
                {plan.features.map((line) => (
                  <li key={line} className="flex gap-3 text-sm leading-relaxed text-white/75">
                    <span className="mt-2 h-px w-3 shrink-0 bg-[#31C3C3]" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <EditorialBoxCta
                  href={plan.cta}
                  variant="on-dark"
                  className="w-full justify-center py-3 transition-colors duration-300 hover:!border-[#31C3C3] hover:!bg-[#31C3C3] hover:!text-white"
                >
                  Get started
                </EditorialBoxCta>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
