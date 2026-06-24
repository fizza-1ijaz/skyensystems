import { unstable_noStore as noStore } from "next/cache";
import { getRecentBlogsForConfiguredSite, type BlogListRow } from "@/lib/blogs";

export type FeaturedBlogPost = {
  id: string;
  slug: string;
  title: string;
  featuredImage: string | null;
  category: string;
  publishedAt: string;
  excerpt: string;
};

export function mapBlogToFeaturedPost(row: BlogListRow): FeaturedBlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    featuredImage: row.cover_image_url,
    category: row.category?.name ?? row.article_section ?? "Blog",
    publishedAt: row.date_published ?? "",
    excerpt:
      row.description?.trim() ||
      "Practical perspectives from our engineering and product teams.",
  };
}

/** Server-side fetch for homepage featured blogs from Supabase. */
export async function fetchFeaturedBlogs(limit = 3): Promise<FeaturedBlogPost[]> {
  noStore();
  const rows = await getRecentBlogsForConfiguredSite(limit);
  return rows.map(mapBlogToFeaturedPost);
}
