"use client";

import { MobileAppFaqSection } from "@/components/services/mobile-apps/MobileAppFaqSection";
import { MobileAppFinalCta } from "@/components/services/mobile-apps/MobileAppFinalCta";
import { MobileAppHero } from "@/components/services/mobile-apps/MobileAppHero";
import { MobileAppProblemSolution } from "@/components/services/mobile-apps/MobileAppProblemSolution";
import { MobileAppProcessSection } from "@/components/services/mobile-apps/MobileAppProcessSection";
import { MobileAppRelatedWork } from "@/components/services/mobile-apps/MobileAppRelatedWork";
import { MobileAppServiceOverview } from "@/components/services/mobile-apps/MobileAppServiceOverview";
import { MobileAppTechnologyStack } from "@/components/services/mobile-apps/MobileAppTechnologyStack";
import { MobileAppTrustStrip } from "@/components/services/mobile-apps/MobileAppTrustStrip";
import { MobileAppUseCases } from "@/components/services/mobile-apps/MobileAppUseCases";
import { MobileAppWhatWeBuild } from "@/components/services/mobile-apps/MobileAppWhatWeBuild";
import { MobileAppWhyChoose } from "@/components/services/mobile-apps/MobileAppWhyChoose";

export function MobileAppServicePage() {
  return (
    <div className="landing-editorial bg-[#FAFAF8] text-[#141414]">
      <MobileAppHero />
      <MobileAppTrustStrip />
      <MobileAppServiceOverview />
      <MobileAppWhatWeBuild />
      <MobileAppProblemSolution />
      <MobileAppWhyChoose />
      <MobileAppProcessSection />
      <MobileAppTechnologyStack />
      <MobileAppUseCases />
      <MobileAppRelatedWork />
      <MobileAppFaqSection />
      <MobileAppFinalCta />
    </div>
  );
}
