"use client";

import { WhoWeAreHero } from "@/components/about/who-we-are/sections/WhoWeAreHero";
import { WhoWeAreFoundation } from "@/components/about/who-we-are/sections/WhoWeAreFoundation";
import { WhoWeAreStory } from "@/components/about/who-we-are/sections/WhoWeAreStory";
import { WhoWeAreMethodology } from "@/components/about/who-we-are/sections/WhoWeAreMethodology";
import { WhoWeAreLeadership } from "@/components/about/who-we-are/sections/WhoWeAreLeadership";
import { WhoWeAreCulture } from "@/components/about/who-we-are/sections/WhoWeAreCulture";
import { WhoWeAreCta } from "@/components/about/who-we-are/sections/WhoWeAreCta";

export function WhoWeArePage() {
  return (
    <div className="landing-editorial bg-[#F4F4F2] text-[#141414]">
      <WhoWeAreHero />
      <WhoWeAreFoundation />
      <WhoWeAreStory />
      <WhoWeAreMethodology />
      <WhoWeAreLeadership />
      <WhoWeAreCulture />
      <WhoWeAreCta />
    </div>
  );
}
