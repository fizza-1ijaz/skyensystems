import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About Skyen Systems | Digital Product & AI Development Company",
  description:
    "Skyen Systems is a digital product company helping Australian and US businesses build websites, mobile apps, AI solutions, UI/UX designs, SEO systems, and dedicated software development teams.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutRoute() {
  return <AboutPage />;
}
