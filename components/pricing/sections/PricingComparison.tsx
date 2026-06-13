"use client";

import Link from "next/link";
import { useState } from "react";
import { PricingBlueprintBackdrop } from "@/components/pricing/PricingBlueprintBackdrop";
import { PricingPanelsEditorial } from "@/components/pricing/PricingPanelsEditorial";
import { Reveal } from "@/components/landing/Reveal";

export function PricingComparison() {
  const [selectedTab, setSelectedTab] = useState<"packages" | "retainers" | "individual">(
    "packages",
  );

  return (
    <section className="relative overflow-hidden bg-[#F4F4F2] pt-10 pb-20 md:pt-12 md:pb-28">
      <PricingBlueprintBackdrop className="opacity-[0.035]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="w-full text-center">
          <h2 className="editorial-section-title mx-auto w-full max-w-none text-balance text-[#141414]">
            Package comparison.
          </h2>
          <p className="mx-auto mt-4 w-full max-w-none text-sm leading-relaxed text-[#5C5C5C] md:text-base">
            Select a category to review launch packages, monthly retainers, or individual service
            rates. All figures are starting points — final quotes are fixed after discovery.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <PricingPanelsEditorial selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </Reveal>

        <div className="mt-14 space-y-0 border-t border-[#DADAD8]">
          <Reveal delay={0.1}>
            <div className="border-b border-[#DADAD8] py-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A8A]">
                Pakistan clients
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#5C5C5C]">
                Pricing above is in USD. Indicative PKR equivalents at current rates:
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-[#5C5C5C] sm:flex-row sm:flex-wrap sm:gap-x-6">
                <li>Starter — from PKR 420,000</li>
                <li>Growth — from PKR 1,120,000</li>
                <li>Scale — from PKR 2,240,000</li>
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-[#5C5C5C]">
                Final amounts invoiced in PKR at rates confirmed at time of engagement.
              </p>
              <p className="mt-3 text-sm text-[#5C5C5C]">
                Contact us for a PKR quote:{" "}
                <Link
                  href="mailto:info@skyensystems.com"
                  className="font-semibold text-[#141414] underline-offset-2 transition-colors duration-200 hover:text-[#31C3C3] hover:underline"
                >
                  Info@skyensystems.com
                </Link>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="border-b border-[#DADAD8] py-8">
              <p className="text-sm leading-relaxed text-[#5C5C5C]">
                Prices are starting points. All quotes are fixed-price — no hourly billing surprises.
                Payment plans are available for projects over USD $2,000 (approx. PKR 560,000 at
                indicative rates). Exchange rate is indicative; final PKR amounts are confirmed at
                invoice stage.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="py-8">
              <p className="text-sm leading-relaxed text-[#5C5C5C]">
                <span className="font-semibold text-[#141414]">Payment methods:</span> We accept
                international bank transfers, Stripe (Visa/Mastercard/Debit), and PayPal. We do not
                accept cryptocurrency, Bitcoin, USDT, Skrill, or any crypto-based payment platform.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
