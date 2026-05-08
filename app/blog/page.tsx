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

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function BlogPage() {
  try {
    const blogData = await getBlogIndexDataForConfiguredSite();
    return (
      <BlogPageContent
        posts={blogData.posts}
        emptyStateMessage={blogData.seo.empty_state_message}
      />
    );
  } catch {
    return (
      <BlogPageContent
        posts={[]}
        emptyStateMessage="Blogs will be visible here once they are posted."
      />
    );
  }
}
