import type { Metadata } from "next";
import { PricingPage } from "@/components/pricing/PricingPage";

export const metadata: Metadata = {
  title: "Pricing | Skyen Systems",
  description:
    "Explore starting prices for websites, mobile apps, AI solutions, UI/UX design, SEO, digital marketing, and dedicated software development teams by Skyen Systems.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingRoute() {
  return <PricingPage />;
};
