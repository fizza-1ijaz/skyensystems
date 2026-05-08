import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ValueProps } from "@/components/home/ValueProps";
import { ProductsShowcase } from "@/components/home/ProductsShowcase";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { PricingSection } from "@/components/home/PricingSection";
import { FoundingBanner } from "@/components/home/FoundingBanner";

export const metadata: Metadata = {
  title: "Web Development Company for Small Business | Skyen Systems",
  description:
    "Affordable web development, mobile apps, AI solutions, and digital marketing for small businesses. Start your project with Skyen Systems.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Skyen Systems",
    url: "https://skyensystems.com",
    logo: "https://skyensystems.com/logo-png.png",
    email: "contact@skyensystems.com",
    areaServed: ["US", "Pakistan", "Bahrain"],
    sameAs: [
      "https://apps.apple.com/us/app/studiely-your-daily-study-app/id6758246110",
      "https://play.google.com/store/apps/details?id=com.skyensolutions.eduplayce.eduplayce",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <ProblemSection />
      <ServicesGrid />
      <ValueProps />
      <ProductsShowcase />
      <PricingSection />
      <FoundingBanner />
    </>
  );
}
