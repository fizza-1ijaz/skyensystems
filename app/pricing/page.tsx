import type { Metadata } from "next";
import { PricingPageContent } from "@/components/marketing/PricingPageContent";

export const metadata: Metadata = {
  title: "Pricing | Skyen Systems",
  description: "Transparent service pricing, retainers, and package options.",
};

export default function PricingPage() {
  return <PricingPageContent />;
}
