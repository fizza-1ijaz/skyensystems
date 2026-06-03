"use client";

import { FaqHero } from "@/components/faq/sections/FaqHero";
import { FaqQuickNav } from "@/components/faq/sections/FaqQuickNav";
import { FaqFeatured } from "@/components/faq/sections/FaqFeatured";
import { FaqChapters } from "@/components/faq/sections/FaqChapters";
import { FaqClientConcerns } from "@/components/faq/sections/FaqClientConcerns";
import { FaqHowWeWork } from "@/components/faq/sections/FaqHowWeWork";
import { FaqFinalCta } from "@/components/faq/sections/FaqFinalCta";

export function FaqPage() {
  return (
    <div className="landing-editorial bg-[#F4F4F2] text-[#141414]">
      <FaqHero />
      <FaqQuickNav />
      <FaqFeatured />
      <FaqChapters />
      <FaqClientConcerns />
      <FaqHowWeWork />
      <FaqFinalCta />
    </div>
  );
}
