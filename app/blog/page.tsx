import type { Metadata } from "next";
import { BlogPageContent } from "@/components/marketing/BlogPageContent";

export const metadata: Metadata = {
  title: "Blog | Skyen Systems",
  description: "Digital insights on web, mobile, marketing, and growth.",
};

export default function BlogPage() {
  return <BlogPageContent />;
}
