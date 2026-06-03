"use client";

import { ServicesHero } from "@/components/services/sections/ServicesHero";
import { WhatWeBuild } from "@/components/services/sections/WhatWeBuild";
import { CapabilitiesArchitecture } from "@/components/services/sections/CapabilitiesArchitecture";
import { ServiceModules } from "@/components/services/sections/ServiceModules";
import { TechnologyEcosystem } from "@/components/services/sections/TechnologyEcosystem";
import { EngagementModels } from "@/components/services/sections/EngagementModels";
import { ServicesProcess } from "@/components/services/sections/ServicesProcess";
import { ProofOfExpertise } from "@/components/services/sections/ProofOfExpertise";
import { ServicesFinalCta } from "@/components/services/sections/ServicesFinalCta";

export function ServicesPage() {
  return (
    <div className="landing-editorial bg-[#F4F4F2] text-[#141414]">
      <ServicesHero />
      <WhatWeBuild />
      <CapabilitiesArchitecture />
      <ServiceModules />
      <TechnologyEcosystem />
      <EngagementModels />
      <ServicesProcess />
      <ProofOfExpertise />
      <ServicesFinalCta />
    </div>
  );
}
