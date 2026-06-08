import { EditorialHero } from "@/components/landing/EditorialHero";
import { IndustriesSection } from "@/components/landing/IndustriesSection";
import { LandingCta } from "@/components/landing/LandingCta";
import { FeaturedBlogs } from "@/components/home/FeaturedBlogs";
import { TrustCredibilityStrip } from "@/components/home/sections/TrustCredibilityStrip";
import { ServicesOverviewSection } from "@/components/home/sections/ServicesOverviewSection";
import { ProblemSolutionSection } from "@/components/home/sections/ProblemSolutionSection";
import { FeaturedProductsSection } from "@/components/home/sections/FeaturedProductsSection";
import { CaseStudiesSection } from "@/components/home/sections/CaseStudiesSection";
import { HomeProcessSection } from "@/components/home/sections/ProcessSection";
import { WhyChooseSection } from "@/components/home/sections/WhyChooseSection";
import { AiAutomationHighlight } from "@/components/home/sections/AiAutomationHighlight";
import { TechnologyStackSection } from "@/components/home/sections/TechnologyStackSection";
import { TestimonialsSection } from "@/components/home/sections/TestimonialsSection";
import { HomeFaqSection } from "@/components/home/sections/HomeFaqSection";

export function LandingPage() {
  return (
    <div className="landing-editorial bg-[#F4F4F2] text-[#141414]">
      {/* 1. Hero Section */}
      <EditorialHero />

      {/* 2. Trust / Credibility Strip */}
      <TrustCredibilityStrip />

      {/* 3. Services Overview */}
      <ServicesOverviewSection />

      {/* 4. Problem → Solution */}
      <ProblemSolutionSection />

      {/* 5. Featured Products */}
      <FeaturedProductsSection />

      {/* 6. Case Studies */}
      <CaseStudiesSection />

      {/* 7. Industries We Serve */}
      <IndustriesSection />

      {/* 8. Process */}
      <HomeProcessSection />

      {/* 9. Why Choose Skyen Systems */}
      <WhyChooseSection />

      {/* 10. AI & Automation Highlight */}
      <AiAutomationHighlight />

      {/* 11. Technology Stack */}
      <TechnologyStackSection />

      {/* 12. Testimonials / Client Outcomes */}
      <TestimonialsSection />

      {/* 13. Blog */}
      <FeaturedBlogs />

      {/* 14. FAQ */}
      <HomeFaqSection />

      {/* 15. Final CTA */}
      <LandingCta />
    </div>
  );
}
