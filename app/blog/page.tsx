import type { Metadata } from "next";
import { BlogPageContent } from "@/components/marketing/BlogPageContent";
import { getBlogIndexDataForConfiguredSite } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blog | Skyen Systems",
  description: "Digital insights on web, mobile, marketing, and growth.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  try {
    const blogData = await getBlogIndexDataForConfiguredSite();
    return <BlogPageContent posts={blogData.posts} />;
  } catch {
    return <BlogPageContent />;
  }
}
