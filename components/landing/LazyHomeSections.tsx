"use client";

import dynamic from "next/dynamic";
import { LazyWhenVisible } from "@/components/ui/LazyWhenVisible";

const FeaturedProductsSection = dynamic(
  () =>
    import("@/components/home/sections/FeaturedProductsSection").then((mod) => ({
      default: mod.FeaturedProductsSection,
    })),
  { ssr: false },
);

const HomeProcessSection = dynamic(
  () =>
    import("@/components/home/sections/ProcessSection").then((mod) => ({
      default: mod.HomeProcessSection,
    })),
  { ssr: false },
);

const TechnologyStackSection = dynamic(
  () =>
    import("@/components/home/sections/TechnologyStackSection").then((mod) => ({
      default: mod.TechnologyStackSection,
    })),
  { ssr: false },
);

const IndustriesSection = dynamic(
  () =>
    import("@/components/landing/IndustriesSection").then((mod) => ({
      default: mod.IndustriesSection,
    })),
  { ssr: false },
);

const WhyChooseSection = dynamic(
  () =>
    import("@/components/home/sections/WhyChooseSection").then((mod) => ({
      default: mod.WhyChooseSection,
    })),
  { ssr: false },
);

const AiAutomationHighlight = dynamic(
  () =>
    import("@/components/home/sections/AiAutomationHighlight").then((mod) => ({
      default: mod.AiAutomationHighlight,
    })),
  { ssr: false },
);

const TestimonialsSection = dynamic(
  () =>
    import("@/components/home/sections/TestimonialsSection").then((mod) => ({
      default: mod.TestimonialsSection,
    })),
  { ssr: false },
);

const HomeFaqSection = dynamic(
  () =>
    import("@/components/home/sections/HomeFaqSection").then((mod) => ({
      default: mod.HomeFaqSection,
    })),
  { ssr: false },
);

const LandingCta = dynamic(
  () =>
    import("@/components/landing/LandingCta").then((mod) => ({
      default: mod.LandingCta,
    })),
  { ssr: false },
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

export function LazyIndustriesSection() {
  return (
    <LazyWhenVisible minHeight={560}>
      <IndustriesSection />
    </LazyWhenVisible>
  );
}

export function LazyWhyChooseSection() {
  return (
    <LazyWhenVisible minHeight={520}>
      <WhyChooseSection />
    </LazyWhenVisible>
  );
}

export function LazyAiAutomationHighlight() {
  return (
    <LazyWhenVisible minHeight={480}>
      <AiAutomationHighlight />
    </LazyWhenVisible>
  );
}

export function LazyTestimonialsSection() {
  return (
    <LazyWhenVisible minHeight={420}>
      <TestimonialsSection />
    </LazyWhenVisible>
  );
}

export function LazyHomeFaqSection() {
  return (
    <LazyWhenVisible minHeight={480}>
      <HomeFaqSection />
    </LazyWhenVisible>
  );
}

export function LazyLandingCta() {
  return (
    <LazyWhenVisible minHeight={520}>
      <LandingCta />
    </LazyWhenVisible>
  );
}
