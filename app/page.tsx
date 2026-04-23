import type { Metadata } from "next";
import { HomePageContent } from "@/components/marketing/HomePageContent";

export const metadata: Metadata = {
  title: "Skyen Systems – Custom Software, AI, Web & Mobile Development",
  description:
    "Skyen Systems is a full-service software house offering custom software development, AI solutions, mobile apps, web platforms, and digital transformation services for businesses worldwide.",
};

export default function Home() {
  return <HomePageContent />;
}
