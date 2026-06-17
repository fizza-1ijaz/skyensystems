import { EditorialHero } from "@/components/landing/EditorialHero";
import { IndustriesSection } from "@/components/landing/IndustriesSection";
import { LandingCta } from "@/components/landing/LandingCta";
import { FeaturedBlogs } from "@/components/home/FeaturedBlogs";
import { TrustCredibilityStrip } from "@/components/home/sections/TrustCredibilityStrip";
import { ServicesOverviewSection } from "@/components/home/sections/ServicesOverviewSection";
import { ProblemSolutionSection } from "@/components/home/sections/ProblemSolutionSection";
import { FeaturedProductsSection } from "@/components/home/sections/FeaturedProductsSection";
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

      {/* 6. Industries We Serve */}
      <IndustriesSection />

      {/* 7. Process */}
      <HomeProcessSection />

      {/* 8. Why Choose Skyen Systems */}
      <WhyChooseSection />

      {/* 9. AI & Automation Highlight */}
      <AiAutomationHighlight />

      {/* 10. Technology Stack */}
      <TechnologyStackSection />

      {/* 11. Testimonials / Client Outcomes */}
      <TestimonialsSection />

      {/* 12. Blog */}
      <FeaturedBlogs />

      {/* 13. FAQ */}
      <HomeFaqSection />

      {/* 14. Final CTA */}
      <LandingCta />
    </div>
  );
}
