"use client";

import { EditorialHero } from "@/components/landing/EditorialHero";
import { CapabilitiesGrid } from "@/components/landing/CapabilitiesGrid";
import { SelectedWork } from "@/components/landing/SelectedWork";
import { HowWeEngage } from "@/components/landing/HowWeEngage";
import { IndustriesSection } from "@/components/landing/IndustriesSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { LandingCta } from "@/components/landing/LandingCta";

export function LandingPage() {
  return (
    <div className="landing-editorial bg-[#F4F4F2] text-[#141414]">
      <EditorialHero />
      <CapabilitiesGrid />
      <SelectedWork />
      <HowWeEngage />
      <IndustriesSection />
      <TrustSection />
      <LandingCta />
    </div>
  );
}
