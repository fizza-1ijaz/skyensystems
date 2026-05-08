import type { Metadata } from "next";
import { PricingPageContent } from "@/components/marketing/PricingPageContent";

export const metadata: Metadata = {
  title: "Affordable Web Development Services | Skyen Systems",
  description:
    "Transparent fixed pricing for small business web development, apps, and digital services. No hourly surprises.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return <PricingPageContent />;
}
