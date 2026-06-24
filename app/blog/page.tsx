import type { Metadata } from "next";
import { BlogPageContent } from "@/components/marketing/BlogPageContent";
import { getBlogIndexDataForConfiguredSite } from "@/lib/blogs";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | Skyen Systems",
  description: "Digital insights on web, mobile, marketing, and growth.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const blogData = await getBlogIndexDataForConfiguredSite();
  return (
    <BlogPageContent
      posts={blogData.posts}
      categories={blogData.categories}
      seo={blogData.seo}
      emptyStateMessage={blogData.seo.empty_state_message}
    />
  );
}
