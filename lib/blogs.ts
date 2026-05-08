import { cache } from "react";
import { supabase } from "@/lib/supabaseClient";

const SITE_KEY = (process.env.SITE_KEY || "studiely").trim();
const SITE_ID_OVERRIDE = process.env.SITE_ID?.trim() || "";

const SUPABASE_QUERY_RETRIES = Math.max(
  1,
  Number(process.env.SUPABASE_BUILD_RETRIES || "5"),
);
const SUPABASE_RETRY_DELAY_MS = Math.max(
  500,
  Number(process.env.SUPABASE_BUILD_RETRY_DELAY_MS || "2000"),
);

type SupabaseErrorLike = { message?: string; code?: string } | null;

function isTransientSupabaseFailure(message: string): boolean {
  if (!message) return false;
  if (message.includes("<!DOCTYPE") || message.includes("Bad gateway")) return true;
  return /502|503|504|Cloudflare|timeout|fetch failed|ECONNRESET|ETIMEDOUT|NetworkError|Failed to fetch/i.test(
    message,
  );
}

async function pause(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

function truncateForError(message: string, max = 420) {
  const t = message.replace(/\s+/g, " ").trim();
  return t.length > max ? `${t.slice(0, max)}...` : t;
}

async function execPostgrestWithRetries<T>(
  label: string,
  op: () => PromiseLike<{ data: T; error: SupabaseErrorLike }>,
): Promise<T> {
  let lastMsg = "";
  for (let attempt = 1; attempt <= SUPABASE_QUERY_RETRIES; attempt++) {
    const { data, error } = await op();
    if (!error) return data as T;

    lastMsg = error.message || error.code || "unknown error";
    if (!isTransientSupabaseFailure(lastMsg)) {
      throw new Error(`${label}: ${truncateForError(lastMsg)}`);
    }
    if (attempt >= SUPABASE_QUERY_RETRIES) break;

    await pause(SUPABASE_RETRY_DELAY_MS * attempt);
  }

  throw new Error(`${label}: ${truncateForError(lastMsg)}`);
}

const BLOG_SEO_FIELDS =
  "slug, title, description, meta_title, meta_description, cover_image_url, display_date, author_name, keywords, article_section";

export type BlogCategoryRef = {
  id: string;
  name: string;
  slug: string;
};

export type BlogListRow = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  meta_title: string | null;
  meta_description: string | null;
  cover_image_url: string | null;
  display_date: string | null;
  author_name: string | null;
  keywords: string | null;
  article_section: string | null;
  category: BlogCategoryRef | null;
};

export type BlogPostRow = BlogListRow & {
  content: string | null;
};

export type BlogCategoryRow = BlogCategoryRef & {
  sort_order: number;
};

export type BlogIndexSeo = {
  title: string;
  description: string;
  headline: string;
  subheadline: string;
  empty_state_message: string;
};

export type BlogIndexDataForSite = {
  site_id: string;
  seo: BlogIndexSeo;
  categories: BlogCategoryRow[];
  posts: BlogListRow[];
};

type SiteBlogPageRow = {
  id: string;
  blog_page_meta_title?: string | null;
  blog_page_meta_description?: string | null;
  blog_page_headline?: string | null;
  blog_page_subheadline?: string | null;
  blog_page_empty_state_message?: string | null;
};

const DEFAULT_INDEX_SEO: BlogIndexSeo = {
  title: "Blog - Study Tips, Exam Prep & Product Updates",
  description:
    "Practical revision ideas, curriculum tips, and product updates for students, schools, and modern digital teams.",
  headline: "Skyen Systems Blog",
  subheadline:
    "Explore articles on smarter digital execution, growth strategy, and product thinking.",
  empty_state_message: "Blog posts will appear here once they are published.",
};

function normalizeCategory(value: unknown): BlogCategoryRef | null {
  if (!value || Array.isArray(value) || typeof value !== "object") return null;
  const row = value as Partial<BlogCategoryRef>;
  if (!row.id || !row.name || !row.slug) return null;
  return { id: row.id, name: row.name, slug: row.slug };
}

function toSeo(site: SiteBlogPageRow | null): BlogIndexSeo {
  if (!site) return DEFAULT_INDEX_SEO;
  return {
    title: site.blog_page_meta_title?.trim() || DEFAULT_INDEX_SEO.title,
    description:
      site.blog_page_meta_description?.trim() || DEFAULT_INDEX_SEO.description,
    headline: site.blog_page_headline?.trim() || DEFAULT_INDEX_SEO.headline,
    subheadline:
      site.blog_page_subheadline?.trim() || DEFAULT_INDEX_SEO.subheadline,
    empty_state_message:
      site.blog_page_empty_state_message?.trim() ||
      DEFAULT_INDEX_SEO.empty_state_message,
  };
}

export const getSiteIdForConfiguredSite = cache(async (): Promise<string | null> => {
  if (SITE_ID_OVERRIDE) return SITE_ID_OVERRIDE;
  if (!supabase) return null;

  const data = await execPostgrestWithRetries("resolve site_id", () =>
    supabase
      .from("sites")
      .select("id")
      .eq("site_key", SITE_KEY)
      .limit(1)
      .maybeSingle() as PromiseLike<{
      data: { id: string } | null;
      error: SupabaseErrorLike;
    }>,
  );

  return data?.id ?? null;
});

async function loadBlogPageSeo(siteId: string): Promise<SiteBlogPageRow | null> {
  if (!supabase) return null;

  try {
    return await execPostgrestWithRetries("load blog page seo", () =>
      supabase
        .from("sites")
        .select(
          "id, blog_page_meta_title, blog_page_meta_description, blog_page_headline, blog_page_subheadline, blog_page_empty_state_message",
        )
        .eq("id", siteId)
        .limit(1)
        .maybeSingle() as PromiseLike<{
        data: SiteBlogPageRow | null;
        error: SupabaseErrorLike;
      }>,
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const missingColumn =
      message.includes("blog_page_empty_state_message") &&
      message.includes("does not exist");
    if (!missingColumn) throw error;

    return await execPostgrestWithRetries("load blog page seo (legacy schema)", () =>
      supabase
        .from("sites")
        .select(
          "id, blog_page_meta_title, blog_page_meta_description, blog_page_headline, blog_page_subheadline",
        )
        .eq("id", siteId)
        .limit(1)
        .maybeSingle() as PromiseLike<{
        data: SiteBlogPageRow | null;
        error: SupabaseErrorLike;
      }>,
    );
  }
}

export async function getBlogIndexDataForConfiguredSite(): Promise<BlogIndexDataForSite> {
  const siteId = await getSiteIdForConfiguredSite();

  if (!siteId || !supabase) {
    return {
      site_id: siteId ?? "",
      seo: DEFAULT_INDEX_SEO,
      categories: [],
      posts: [],
    };
  }

  const [siteRow, categoriesData, postsData] = await Promise.all([
    loadBlogPageSeo(siteId),
    execPostgrestWithRetries("load blog categories", () =>
      supabase
        .from("blog_categories")
        .select("id, name, slug, sort_order")
        .eq("site_id", siteId)
        .order("sort_order", { ascending: true })
        .order("name", { ascending: true }),
    ),
    execPostgrestWithRetries("load blogs", () =>
      supabase
        .from("blogs")
        .select(
          `id, ${BLOG_SEO_FIELDS}, category:blog_categories(id, name, slug)`,
        )
        .eq("site_id", siteId)
        .eq("status", "published")
        .order("display_date", { ascending: false }),
    ),
  ]);

  const categories = ((categoriesData ?? []) as Array<{
    id: string;
    name: string;
    slug: string;
    sort_order: number | null;
  }>).map((row) => ({
    id: row.id,
    name: row.name,
    slug: row.slug,
    sort_order: row.sort_order ?? 0,
  }));

  const posts = ((postsData ?? []) as Array<
    Omit<BlogListRow, "category"> & { category: unknown }
  >).map((row) => ({
    ...row,
    category: normalizeCategory(row.category),
  }));

  return {
    site_id: siteId,
    seo: toSeo(siteRow),
    categories,
    posts,
  };
}

export async function getBlogBySlugForConfiguredSite(
  slug: string,
): Promise<BlogPostRow | null> {
  const siteId = await getSiteIdForConfiguredSite();
  if (!siteId || !supabase) return null;

  const row = await execPostgrestWithRetries(`fetch blog "${slug}"`, () =>
    supabase
      .from("blogs")
      .select(
        `id, content, ${BLOG_SEO_FIELDS}, category:blog_categories(id, name, slug)`,
      )
      .eq("site_id", siteId)
      .eq("status", "published")
      .eq("slug", slug)
      .maybeSingle(),
  );

  if (!row) return null;
  const typedRow = row as Omit<BlogPostRow, "category"> & { category: unknown };
  return { ...typedRow, category: normalizeCategory(typedRow.category) };
}

export async function getBlogSlugsForConfiguredSite(): Promise<
  { slug: string; display_date: string | null }[]
> {
  const siteId = await getSiteIdForConfiguredSite();
  if (!siteId || !supabase) return [];

  const data = await execPostgrestWithRetries("fetch blog slugs", () =>
    supabase
      .from("blogs")
      .select("slug, display_date")
      .eq("site_id", siteId)
      .eq("status", "published"),
  );

  return (data ?? []) as { slug: string; display_date: string | null }[];
}
