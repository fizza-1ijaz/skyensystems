"use client";

import { WebDevFaqSection } from "@/components/services/web-development/WebDevFaqSection";
import { WebDevFinalCta } from "@/components/services/web-development/WebDevFinalCta";
import { WebDevHero } from "@/components/services/web-development/WebDevHero";
import { WebDevProblemSolution } from "@/components/services/web-development/WebDevProblemSolution";
import { WebDevProcessSection } from "@/components/services/web-development/WebDevProcessSection";
import { WebDevRelatedWork } from "@/components/services/web-development/WebDevRelatedWork";
import { WebDevServiceOverview } from "@/components/services/web-development/WebDevServiceOverview";
import { WebDevTechnologyStack } from "@/components/services/web-development/WebDevTechnologyStack";
import { WebDevTrustStrip } from "@/components/services/web-development/WebDevTrustStrip";
import { WebDevUseCases } from "@/components/services/web-development/WebDevUseCases";
import { WebDevWhatWeBuild } from "@/components/services/web-development/WebDevWhatWeBuild";
import { WebDevWhyChoose } from "@/components/services/web-development/WebDevWhyChoose";

export function WebDevelopmentServicePage() {
  return (
    <div className="landing-editorial bg-[#FAFAF8] text-[#141414]">
      <WebDevHero />
      <WebDevTrustStrip />
      <WebDevServiceOverview />
      <WebDevWhatWeBuild />
      <WebDevProblemSolution />
      <WebDevWhyChoose />
      <WebDevProcessSection />
      <WebDevTechnologyStack />
      <WebDevUseCases />
      <WebDevRelatedWork />
      <WebDevFaqSection />
      <WebDevFinalCta />
    </div>
  );
}
