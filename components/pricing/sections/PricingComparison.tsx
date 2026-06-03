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
        <Reveal>
          <h2 className="max-w-2xl font-heading text-4xl font-bold tracking-[-0.03em] text-[#141414] md:text-5xl">
            Package comparison.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#5C5C5C] md:text-base">
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
                Pricing above is in USD. Indicative PKR equivalents at current rates: Starter — from
                PKR 420,000&nbsp;&nbsp;|&nbsp;&nbsp;Growth — from PKR 1,120,000&nbsp;&nbsp;|&nbsp;&nbsp;Scale
                — from PKR 2,240,000. Final amounts invoiced in PKR at rates confirmed at time of
                engagement.
              </p>
              <p className="mt-3 text-sm text-[#5C5C5C]">
                Contact us for a PKR quote:{" "}
                <Link
                  href="mailto:info@skyensystems.com"
                  className="font-semibold text-[#141414] underline-offset-2 transition-colors duration-200 hover:text-[#6C63FF] hover:underline"
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
