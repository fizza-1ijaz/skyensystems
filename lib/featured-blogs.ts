import { getRecentBlogsForConfiguredSite, type BlogListRow } from "@/lib/blogs";

export type FeaturedBlogPost = {
  id: string;
  slug: string;
  title: string;
  featuredImage: string | null;
  category: string;
  publishedAt: string;
  excerpt: string;
  isPlaceholder?: boolean;
};

/** Shown on the homepage until the CMS has published posts. */
export const PLACEHOLDER_FEATURED_BLOGS: FeaturedBlogPost[] = [
  {
    id: "placeholder-1",
    slug: "blog",
    title: "How we ship product-grade software without agency overhead",
    featuredImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=800&q=80",
    category: "Engineering",
    publishedAt: "2026-03-01",
    excerpt:
      "A look at how one accountable team runs discovery, build, and launch — without handoffs, ticket queues, or seven vendors.",
    isPlaceholder: true,
  },
  {
    id: "placeholder-2",
    slug: "blog",
    title: "AI in production: what actually works for growing teams",
    featuredImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=800&q=80",
    category: "AI Systems",
    publishedAt: "2026-02-18",
    excerpt:
      "Practical copilots, automation, and LLM integrations — beyond demos and into measurable operational value.",
    isPlaceholder: true,
  },
  {
    id: "placeholder-3",
    slug: "blog",
    title: "Design systems that engineering teams can actually implement",
    featuredImage:
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=1200&h=800&q=80",
    category: "Product Design",
    publishedAt: "2026-02-05",
    excerpt:
      "Research-led UX, interface systems, and prototypes that reduce rework and speed up delivery.",
    isPlaceholder: true,
  },
];

export function mapBlogToFeaturedPost(row: BlogListRow): FeaturedBlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    featuredImage: row.cover_image_url,
    category: row.category?.name ?? "Blog",
    publishedAt: row.display_date ?? "",
    excerpt:
      row.description?.trim() ||
      "Practical perspectives from our engineering and product teams.",
  };
}

/** Server-side fetch for homepage featured blogs. Falls back to placeholders when empty. */
export async function fetchFeaturedBlogs(limit = 3): Promise<FeaturedBlogPost[]> {
  try {
    const rows = await getRecentBlogsForConfiguredSite(limit);
    const posts = rows.map(mapBlogToFeaturedPost);
    if (posts.length > 0) return posts;
  } catch {
    // CMS unavailable — show placeholders below.
  }

  return PLACEHOLDER_FEATURED_BLOGS.slice(0, Math.max(1, limit));
}
