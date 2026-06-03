import type { Metadata } from "next";
import { WhoWeArePage } from "@/components/about/who-we-are/WhoWeArePage";

export const metadata: Metadata = {
  title: "Who We Are | Skyen Systems",
  description:
    "Editorial company profile — our story, principles, methodology, and culture as a PSEB-registered software engineering consultancy.",
  alternates: {
    canonical: "/about/who-we-are",
  },
};

export default function WhoWeAreRoute() {
  return <WhoWeArePage />;
}
