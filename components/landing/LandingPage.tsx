import { EditorialHero } from "@/components/landing/EditorialHero";
import {
  LazyAiAutomationHighlight,
  LazyFeaturedProductsSection,
  LazyHomeFaqSection,
  LazyHomeProcessSection,
  LazyIndustriesSection,
  LazyLandingCta,
  LazyTechnologyStackSection,
  LazyTestimonialsSection,
  LazyWhyChooseSection,
} from "@/components/landing/LazyHomeSections";
import { FeaturedBlogs } from "@/components/home/FeaturedBlogs";
import { TrustCredibilityStrip } from "@/components/home/sections/TrustCredibilityStrip";
import { ServicesOverviewSection } from "@/components/home/sections/ServicesOverviewSection";
import { ProblemSolutionSection } from "@/components/home/sections/ProblemSolutionSection";

export function LandingPage() {
  return (
    <div className="landing-editorial bg-[#F4F4F2] text-[#141414]">
      <EditorialHero />

      <div className="landing-below-fold">
        <TrustCredibilityStrip />
        <ServicesOverviewSection />
        <ProblemSolutionSection />
        <LazyFeaturedProductsSection />
        <LazyIndustriesSection />
        <LazyHomeProcessSection />
        <LazyWhyChooseSection />
        <LazyAiAutomationHighlight />
        <LazyTechnologyStackSection />
        <LazyTestimonialsSection />
        <FeaturedBlogs />
        <LazyHomeFaqSection />
        <LazyLandingCta />
      </div>
    </div>
  );
}
