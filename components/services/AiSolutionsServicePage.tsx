"use client";

import { AiSolutionsFaqSection } from "@/components/services/ai-solutions/AiSolutionsFaqSection";
import { AiSolutionsFinalCta } from "@/components/services/ai-solutions/AiSolutionsFinalCta";
import { AiSolutionsHero } from "@/components/services/ai-solutions/AiSolutionsHero";
import { AiSolutionsProblemSolution } from "@/components/services/ai-solutions/AiSolutionsProblemSolution";
import { AiSolutionsProcessSection } from "@/components/services/ai-solutions/AiSolutionsProcessSection";
import { AiSolutionsRelatedWork } from "@/components/services/ai-solutions/AiSolutionsRelatedWork";
import { AiSolutionsServiceOverview } from "@/components/services/ai-solutions/AiSolutionsServiceOverview";
import { AiSolutionsTechnologyStack } from "@/components/services/ai-solutions/AiSolutionsTechnologyStack";
import { AiSolutionsTrustStrip } from "@/components/services/ai-solutions/AiSolutionsTrustStrip";
import { AiSolutionsUseCases } from "@/components/services/ai-solutions/AiSolutionsUseCases";
import { AiSolutionsWhatWeBuild } from "@/components/services/ai-solutions/AiSolutionsWhatWeBuild";
import { AiSolutionsWhyChoose } from "@/components/services/ai-solutions/AiSolutionsWhyChoose";

export function AiSolutionsServicePage() {
  return (
    <div className="landing-editorial bg-[#FAFAF8] text-[#141414]">
      <AiSolutionsHero />
      <AiSolutionsTrustStrip />
      <AiSolutionsServiceOverview />
      <AiSolutionsWhatWeBuild />
      <AiSolutionsProblemSolution />
      <AiSolutionsWhyChoose />
      <AiSolutionsProcessSection />
      <AiSolutionsTechnologyStack />
      <AiSolutionsUseCases />
      <AiSolutionsRelatedWork />
      <AiSolutionsFaqSection />
      <AiSolutionsFinalCta />
    </div>
  );
}
