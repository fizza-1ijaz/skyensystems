import { unstable_cache } from "next/cache";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabaseClient";

const SITE_KEY = (process.env.SITE_KEY || "skyen-systems").trim();
const SITE_ID_OVERRIDE = process.env.SITE_ID?.trim() || "";

type FeaturedBlogRow = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  cover_image_url: string | null;
  date_published: string | null;
  article_section: string | null;
  category: { id: string; name: string; slug: string } | null;
};

export type FeaturedBlogPost = {
  id: string;
  slug: string;
  title: string;
  featuredImage: string | null;
  category: string;
  publishedAt: string;
  excerpt: string;
};

export function mapBlogToFeaturedPost(row: FeaturedBlogRow): FeaturedBlogPost {
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

async function resolveSiteId(): Promise<string | null> {
  if (SITE_ID_OVERRIDE) return SITE_ID_OVERRIDE;
  const client = getSupabase();
  if (!isSupabaseConfigured() || !client) return null;

  const { data, error } = await client
    .from("sites")
    .select("id")
    .eq("site_key", SITE_KEY)
    .limit(1)
    .maybeSingle();

  if (error || !data?.id) return null;
  return data.id;
}

async function fetchFeaturedBlogsRaw(limit: number): Promise<FeaturedBlogPost[]> {
  const siteId = await resolveSiteId();
  const client = getSupabase();
  if (!siteId || !client) return [];

  const { data, error } = await client
    .from("blogs")
    .select(
      "id, slug, title, description, cover_image_url, date_published, article_section, category:blog_categories(id, name, slug)",
    )
    .eq("site_id", siteId)
    .eq("status", "published")
    .order("date_published", { ascending: false })
    .limit(limit);

  if (error || !data?.length) return [];

  return data.map((row) => {
    const category = Array.isArray(row.category) ? row.category[0] : row.category;
    return mapBlogToFeaturedPost({
      id: row.id,
      slug: row.slug,
      title: row.title,
      description: row.description,
      cover_image_url: row.cover_image_url,
      date_published: row.date_published,
      article_section: row.article_section,
      category: category ?? null,
    });
  });
}

const getFeaturedBlogsCached = unstable_cache(
  fetchFeaturedBlogsRaw,
  ["featured-blogs", SITE_KEY],
  { revalidate: 3600, tags: ["featured-blogs"] },
);

/** Cached server-side fetch for homepage featured blogs (ISR-friendly). */
export async function fetchFeaturedBlogs(limit = 3): Promise<FeaturedBlogPost[]> {
  return getFeaturedBlogsCached(limit);
}
