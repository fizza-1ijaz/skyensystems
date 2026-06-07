"use client";

import { useExchangeRate } from "@/hooks/useExchangeRate";
import { PricingComparison } from "@/components/pricing/sections/PricingComparison";
import { PricingCostFactors } from "@/components/pricing/sections/PricingCostFactors";
import { PricingEngagementOverview } from "@/components/pricing/sections/PricingEngagementOverview";
import { PricingEstimator } from "@/components/pricing/sections/PricingEstimator";
import { PricingFaq } from "@/components/pricing/sections/PricingFaq";
import { PricingFinalCta } from "@/components/pricing/sections/PricingFinalCta";
import { PricingTrust } from "@/components/pricing/sections/PricingTrust";

export function PricingPage() {
  const { fx, rateLoading, panelBusy, loadRate } = useExchangeRate();

  return (
    <div className="landing-editorial bg-[#F4F4F2] text-[#141414]">
      <PricingEstimator
        fx={fx}
        rateLoading={rateLoading}
        panelBusy={panelBusy}
        onRetry={() => loadRate({ isRefresh: true })}
      />
      <PricingEngagementOverview />
      <PricingComparison />
      <PricingCostFactors />
      <PricingTrust />
      <PricingFaq />
      <PricingFinalCta />
    </div>
  );
}
