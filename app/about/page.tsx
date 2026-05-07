import type { Metadata } from "next";
import { AboutPageContent } from "@/components/marketing/AboutPageContent";

export const metadata: Metadata = {
  title: "About | Skyen Systems",
  description:
    "Learn about Skyen Systems, the digital services arm of the Skyen Group.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
