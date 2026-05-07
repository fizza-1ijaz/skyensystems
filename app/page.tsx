import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ValueProps } from "@/components/home/ValueProps";
import { ProductsShowcase } from "@/components/home/ProductsShowcase";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { PricingSection } from "@/components/home/PricingSection";
import { FoundingBanner } from "@/components/home/FoundingBanner";

export const metadata: Metadata = {
  title: "Skyen Systems – Custom Software, AI, Web & Mobile Development",
  description:
    "Skyen Systems is a full-service software house offering custom software development, AI solutions, mobile apps, web platforms, and digital transformation services for businesses worldwide.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ValueProps />
      <ProductsShowcase />
      <ServicesGrid />
      <PricingSection />
      <FoundingBanner />
    </>
  );
}
