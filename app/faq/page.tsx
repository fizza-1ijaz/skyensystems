import type { Metadata } from "next";
import { FaqPage as FaqPageView } from "@/components/faq/FaqPage";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://skyensystems.com").replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Before You Build — Client Guide | Skyen Systems",
  description:
    "A strategic guide for prospective clients — project process, pricing, engagement models, security, and how Skyen Systems delivers transparent software partnerships.",
  alternates: {
    canonical: `${siteUrl}/faq`,
  },
};

export default function FaqRoute() {
  return <FaqPageView />;
}
