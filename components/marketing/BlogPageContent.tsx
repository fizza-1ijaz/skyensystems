import type { BlogCategoryRow, BlogIndexSeo, BlogListRow } from "@/lib/blogs";
import { BlogPage } from "@/components/blog/BlogPage";

type BlogPageContentProps = {
  posts: BlogListRow[];
  categories?: BlogCategoryRow[];
  seo?: BlogIndexSeo;
  emptyStateMessage?: string;
};

export function BlogPageContent({
  posts,
  categories = [],
  seo,
  emptyStateMessage,
}: BlogPageContentProps) {
  return (
    <BlogPage
      posts={posts}
      categories={categories}
      seo={
        seo ?? {
          title: "Blog | Skyen Systems",
          description: "",
          headline: "Skyen Systems Blog",
          subheadline:
            "Perspectives from our engineering and product teams — on building software, applying AI responsibly, and delivering digital transformation with clarity and discipline.",
          empty_state_message:
            emptyStateMessage ?? "Blog posts will appear here once they are published.",
        }
      }
      emptyStateMessage={emptyStateMessage}
    />
  );
}
