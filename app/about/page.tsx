import type { Metadata } from "next";
import { AboutPageContent } from "@/components/marketing/AboutPageContent";

export const metadata: Metadata = {
  title: "PSEB Registered Software Company | Skyen Systems",
  description:
    "Learn how Skyen Systems helps small businesses with web, app, AI, and marketing services as a PSEB-registered software company.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
