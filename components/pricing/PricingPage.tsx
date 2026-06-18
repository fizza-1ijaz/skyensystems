"use client";

import { PricingCurrencyConverter } from "@/components/pricing/sections/PricingCurrencyConverter";
import { PricingCostFactors } from "@/components/pricing/sections/PricingCostFactors";
import { PricingEngagementOverview } from "@/components/pricing/sections/PricingEngagementOverview";
import { PricingImportantNote } from "@/components/pricing/sections/PricingImportantNote";
import { PricingPackageDirection } from "@/components/pricing/sections/PricingPackageDirection";
import { PricingFaq } from "@/components/pricing/sections/PricingFaq";
import { PricingFinalCta } from "@/components/pricing/sections/PricingFinalCta";
import { PricingHero } from "@/components/pricing/sections/PricingHero";
import { PricingServiceCards } from "@/components/pricing/sections/PricingServiceCards";

export function PricingPage() {
  return (
    <div className="landing-editorial bg-[#F4F4F2] text-[#141414]">
      <PricingHero />
      <PricingServiceCards />
      <PricingCurrencyConverter />
      <PricingPackageDirection />
      <PricingEngagementOverview />
      <PricingCostFactors />
      <PricingImportantNote />
      <PricingFaq />
      <PricingFinalCta />
    </div>
  );
}
