import type { Metadata } from "next";
import { PricingPage } from "@/components/pricing/PricingPage";

export const metadata: Metadata = {
  title: "Engagement Models & Investment | Skyen Systems",
  description:
    "Transparent fixed pricing and engagement models for custom software, AI solutions, web platforms, and dedicated teams. Bahrain & Pakistan delivery.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingRoute() {
  return <PricingPage />;
};
