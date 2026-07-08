"use client";

import dynamic from "next/dynamic";
import { LazyWhenVisible } from "@/components/ui/LazyWhenVisible";

const FeaturedProductsSection = dynamic(() =>
  import("@/components/home/sections/FeaturedProductsSection").then((mod) => ({
    default: mod.FeaturedProductsSection,
  })),
);

const HomeProcessSection = dynamic(() =>
  import("@/components/home/sections/ProcessSection").then((mod) => ({
    default: mod.HomeProcessSection,
  })),
);

const TechnologyStackSection = dynamic(() =>
  import("@/components/home/sections/TechnologyStackSection").then((mod) => ({
    default: mod.TechnologyStackSection,
  })),
);

export function LazyFeaturedProductsSection() {
  return (
    <LazyWhenVisible minHeight={520}>
      <FeaturedProductsSection />
    </LazyWhenVisible>
  );
}

export function LazyHomeProcessSection() {
  return (
    <LazyWhenVisible minHeight={640}>
      <HomeProcessSection />
    </LazyWhenVisible>
  );
}

export function LazyTechnologyStackSection() {
  return (
    <LazyWhenVisible minHeight={480}>
      <TechnologyStackSection />
    </LazyWhenVisible>
  );
}
