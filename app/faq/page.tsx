import type { Metadata } from "next";
import { FaqPageContent } from "@/components/marketing/FaqPageContent";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://skyensystems.com").replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Skyen Systems",
  description:
    "Answers to common questions about Skyen Systems' services, pricing in PKR and USD, payment methods, refund policy, office locations, and project process.",
  alternates: {
    canonical: `${siteUrl}/faq`,
  },
};

export default function FaqPage() {
  return <FaqPageContent />;
}
