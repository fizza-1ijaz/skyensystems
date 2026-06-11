"use client";

import { DigitalMarketingFaqSection } from "@/components/services/digital-marketing/DigitalMarketingFaqSection";
import { DigitalMarketingFinalCta } from "@/components/services/digital-marketing/DigitalMarketingFinalCta";
import { DigitalMarketingGrowthStack } from "@/components/services/digital-marketing/DigitalMarketingGrowthStack";
import { DigitalMarketingHero } from "@/components/services/digital-marketing/DigitalMarketingHero";
import { DigitalMarketingProblemSolution } from "@/components/services/digital-marketing/DigitalMarketingProblemSolution";
import { DigitalMarketingProcessSection } from "@/components/services/digital-marketing/DigitalMarketingProcessSection";
import { DigitalMarketingRelatedWork } from "@/components/services/digital-marketing/DigitalMarketingRelatedWork";
import { DigitalMarketingServiceOverview } from "@/components/services/digital-marketing/DigitalMarketingServiceOverview";
import { DigitalMarketingTrustStrip } from "@/components/services/digital-marketing/DigitalMarketingTrustStrip";
import { DigitalMarketingUseCases } from "@/components/services/digital-marketing/DigitalMarketingUseCases";
import { DigitalMarketingWhatWeDo } from "@/components/services/digital-marketing/DigitalMarketingWhatWeDo";
import { DigitalMarketingWhyChoose } from "@/components/services/digital-marketing/DigitalMarketingWhyChoose";

export function DigitalMarketingServicePage() {
  return (
    <div className="landing-editorial bg-[#FAFAF8] text-[#141414]">
      <DigitalMarketingHero />
      <DigitalMarketingTrustStrip />
      <DigitalMarketingServiceOverview />
      <DigitalMarketingWhatWeDo />
      <DigitalMarketingProblemSolution />
      <DigitalMarketingWhyChoose />
      <DigitalMarketingProcessSection />
      <DigitalMarketingGrowthStack />
      <DigitalMarketingUseCases />
      <DigitalMarketingRelatedWork />
      <DigitalMarketingFaqSection />
      <DigitalMarketingFinalCta />
    </div>
  );
}
