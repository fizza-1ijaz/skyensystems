import { EditorialHero } from "@/components/landing/EditorialHero";
import { IndustriesSection } from "@/components/landing/IndustriesSection";
import { LandingCta } from "@/components/landing/LandingCta";
import {
  LazyFeaturedProductsSection,
  LazyHomeProcessSection,
  LazyTechnologyStackSection,
} from "@/components/landing/LazyHomeSections";
import { FeaturedBlogs } from "@/components/home/FeaturedBlogs";
import { TrustCredibilityStrip } from "@/components/home/sections/TrustCredibilityStrip";
import { ServicesOverviewSection } from "@/components/home/sections/ServicesOverviewSection";
import { ProblemSolutionSection } from "@/components/home/sections/ProblemSolutionSection";
import { WhyChooseSection } from "@/components/home/sections/WhyChooseSection";
import { AiAutomationHighlight } from "@/components/home/sections/AiAutomationHighlight";
import { TestimonialsSection } from "@/components/home/sections/TestimonialsSection";
import { HomeFaqSection } from "@/components/home/sections/HomeFaqSection";

export function LandingPage() {
  return (
    <div className="landing-editorial bg-[#F4F4F2] text-[#141414]">
      <EditorialHero />

      <div className="landing-below-fold">
        <TrustCredibilityStrip />
        <ServicesOverviewSection />
        <ProblemSolutionSection />
        <LazyFeaturedProductsSection />
        <IndustriesSection />
        <LazyHomeProcessSection />
        <WhyChooseSection />
        <AiAutomationHighlight />
        <LazyTechnologyStackSection />
        <TestimonialsSection />
        <FeaturedBlogs />
        <HomeFaqSection />
        <LandingCta />
      </div>
    </div>
  );
}
