import type { Metadata } from "next";
import { AboutPageContent } from "@/components/marketing/AboutPageContent";

export const metadata: Metadata = {
  title: "About Skyen Solutions – Global Software Development Company",
  description:
    "Learn about Skyen Solutions, a software development company founded by a teacher with 15+ years of global experience delivering LMS, Odoo, AI, web, and digital solutions.",
  keywords: [
    "About software development company",
    "global software experts",
    "custom software solutions",
    "Skyen Solutions",
  ],
};

export default function AboutPage() {
  return <AboutPageContent />;
}
