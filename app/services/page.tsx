import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/marketing/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services | Skyen Systems",
  description:
    "Explore web, mobile, social, branding, marketing, and custom product services from Skyen Systems.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}


