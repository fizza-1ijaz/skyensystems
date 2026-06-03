"use client";

import { LocationsHero } from "@/components/about/locations/sections/LocationsHero";
import { GlobalFootprint } from "@/components/about/locations/sections/GlobalFootprint";
import { LocationShowcase } from "@/components/about/locations/sections/LocationShowcase";
import { GlobalModel } from "@/components/about/locations/sections/GlobalModel";
import { DeliveryModel } from "@/components/about/locations/sections/DeliveryModel";
import { LocationStats } from "@/components/about/locations/sections/LocationStats";
import { LocationsCta } from "@/components/about/locations/sections/LocationsCta";

export function LocationsPage() {
  return (
    <div className="landing-editorial bg-[#F4F4F2] text-[#141414]">
      <LocationsHero />
      <GlobalFootprint />
      <LocationShowcase />
      <GlobalModel />
      <DeliveryModel />
      <LocationStats />
      <LocationsCta />
    </div>
  );
}
