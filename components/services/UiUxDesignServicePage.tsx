"use client";

import { UiUxDesignStack } from "@/components/services/ui-ux-design/UiUxDesignStack";
import { UiUxFaqSection } from "@/components/services/ui-ux-design/UiUxFaqSection";
import { UiUxFinalCta } from "@/components/services/ui-ux-design/UiUxFinalCta";
import { UiUxHero } from "@/components/services/ui-ux-design/UiUxHero";
import { UiUxProblemSolution } from "@/components/services/ui-ux-design/UiUxProblemSolution";
import { UiUxProcessSection } from "@/components/services/ui-ux-design/UiUxProcessSection";
import { UiUxRelatedWork } from "@/components/services/ui-ux-design/UiUxRelatedWork";
import { UiUxServiceOverview } from "@/components/services/ui-ux-design/UiUxServiceOverview";
import { UiUxTrustStrip } from "@/components/services/ui-ux-design/UiUxTrustStrip";
import { UiUxUseCases } from "@/components/services/ui-ux-design/UiUxUseCases";
import { UiUxWhatWeDesign } from "@/components/services/ui-ux-design/UiUxWhatWeDesign";
import { UiUxWhyChoose } from "@/components/services/ui-ux-design/UiUxWhyChoose";

export function UiUxDesignServicePage() {
  return (
    <div className="landing-editorial bg-[#FAFAF8] text-[#141414]">
      <UiUxHero />
      <UiUxTrustStrip />
      <UiUxServiceOverview />
      <UiUxWhatWeDesign />
      <UiUxProblemSolution />
      <UiUxWhyChoose />
      <UiUxProcessSection />
      <UiUxDesignStack />
      <UiUxUseCases />
      <UiUxRelatedWork />
      <UiUxFaqSection />
      <UiUxFinalCta />
    </div>
  );
}
