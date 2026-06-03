"use client";

import Link from "next/link";
import { Reveal } from "@/components/landing/Reveal";
import type { LaunchOrRetainerPlan } from "@/components/marketing/pricingPanelsData";

function PriceHighlight({
  price,
  featured = false,
}: {
  price: string;
  featured?: boolean;
}) {
  return (
    <div className="flex items-stretch gap-3">
      <span
        className={`w-0.5 shrink-0 ${featured ? "bg-[#6C63FF]" : "bg-[#6C63FF]/70"}`}
        aria-hidden
      />
      <div>
        <p
          className={`font-heading font-bold leading-none tracking-tight ${
            featured
              ? "text-[clamp(2rem,4vw,2.75rem)] text-[#FAFAF8]"
              : "text-[clamp(1.75rem,3.5vw,2.35rem)] text-[#141414]"
          }`}
        >
          {price}
        </p>
        <span
          className={`mt-2 block h-px ${featured ? "w-full bg-[#6C63FF]/50" : "w-full max-w-[9rem] bg-[#6C63FF]/35"}`}
          aria-hidden
        />
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
              className={`group flex w-full flex-col border transition-all duration-200 ease-out hover:-translate-y-1 ${
                featured
                  ? "relative z-10 border-[#0F172A] border-t-2 border-t-[#6C63FF] bg-[#0F172A] p-8 shadow-[0_28px_56px_-32px_rgba(15,23,42,0.55)] md:p-10 lg:-my-2 lg:py-12 hover:border-[#6C63FF]/40 hover:shadow-[0_32px_64px_-28px_rgba(15,23,42,0.65)]"
                  : "border-[#DADAD8] bg-white p-8 hover:border-[#141414]/25 md:p-10"
              }`}
            >
              <div
                className={`flex flex-col gap-6 border-b pb-6 sm:flex-row sm:items-start sm:justify-between ${
                  featured ? "border-white/10" : "border-[#E5E5E3]"
                }`}
              >
                <div>
                  {featured ? (
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6C63FF]">
                      Recommended
                    </p>
                  ) : null}
                  <h3
                    className={`font-heading text-2xl font-bold tracking-tight md:text-[1.75rem] ${
                      featured ? "text-[#FAFAF8]" : "text-[#141414]"
                    }`}
                  >
                    {plan.name}
                  </h3>
                </div>
                <div className="shrink-0">
                  <PriceHighlight price={plan.price} featured={featured} />
                </div>
              </div>

              {plan.description ? (
                <p
                  className={`mt-6 text-sm leading-relaxed ${
                    featured ? "text-white/65" : "text-[#5C5C5C]"
                  }`}
                >
                  {plan.description}
                </p>
              ) : null}

              <ul
                className={`mt-8 flex flex-1 flex-col gap-3.5 border-t pt-8 ${
                  featured ? "border-white/10" : "border-[#E5E5E3]"
                }`}
              >
                {plan.features.map((line) => (
                  <li
                    key={line}
                    className={`flex gap-3 text-sm leading-relaxed ${
                      featured ? "text-white/75" : "text-[#4A4A4A]"
                    }`}
                  >
                    <span
                      className={`mt-2 h-px w-3 shrink-0 ${featured ? "bg-[#6C63FF]" : "bg-[#6C63FF]/55"}`}
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link
                  href={plan.cta}
                  className={`inline-flex w-full items-center justify-center py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
                    featured
                      ? "bg-[#6C63FF] text-white hover:bg-[#5A52E8]"
                      : "border-b-2 border-[#141414] text-[#141414] hover:border-[#6C63FF] hover:text-[#6C63FF]"
                  }`}
                >
                  Get started →
                </Link>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
