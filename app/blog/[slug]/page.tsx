import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogReactionButtons } from "@/components/blog/BlogReactionButtons";
import {
  getBlogBySlugForConfiguredSite,
  getBlogSlugsForConfiguredSite,
} from "@/lib/blogs";

type BlogSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const dynamicParams = true;

const FALLBACK_BLOG_POSTS: Record<
  string,
  { title: string; description: string; category: { name: string }; content: string }
> = {
  "how-much-should-a-website-cost-for-a-small-business": {
    title: "How Much Should a Website Cost for a Small Business?",
    description: "A practical 2025 pricing breakdown without agency fluff.",
    category: { name: "Web Design" },
    content:
      "<p>Website pricing depends on scope, complexity, integrations, and timeline. For most small businesses, a basic informational website is the most affordable starting point, while custom portals and advanced automations cost more.</p><p>Focus on outcomes instead of page count: lead capture, conversion flow, speed, mobile quality, and SEO readiness have more business impact than visual extras.</p><p>Before selecting an agency, ask for a clear scope, timeline, and post-launch support terms so you can compare proposals fairly.</p>",
  },
  "why-your-website-is-not-getting-customers": {
    title: "Why Your Website Is Not Getting Customers",
    description: "The most common conversion blockers and how to fix them.",
    category: { name: "Growth" },
    content:
      "<p>Traffic without conversions usually points to messaging or UX gaps. If visitors cannot quickly understand what you do and why you are credible, they leave.</p><p>Common blockers include weak CTA hierarchy, slow pages, poor mobile layouts, and unclear service positioning. Improving these areas can lift qualified enquiries significantly.</p><p>Start with analytics and heatmaps, then prioritize quick wins: simplify hero copy, improve trust signals, and reduce friction in forms.</p>",
  },
  "management-vs-marketing-what-is-the-difference": {
    title: "Management vs Marketing: What Is the Difference?",
    description: "A clear framework for choosing the right service.",
    category: { name: "Social Media" },
    content:
      "<p>Social media management is about consistency and operations: publishing, moderation, and day-to-day brand presence. Marketing is growth-focused and campaign-led, with clear performance targets.</p><p>If your goal is audience trust and routine engagement, management is the base. If your goal is leads and revenue growth, marketing strategy and paid campaigns are essential.</p><p>Most growing businesses need both, but in the right order and budget mix.</p>",
  },
};

export async function generateStaticParams() {
  try {
    const slugs = await getBlogSlugsForConfiguredSite();
    return [
      ...slugs.map((item) => ({ slug: item.slug })),
      ...Object.keys(FALLBACK_BLOG_POSTS).map((slug) => ({ slug })),
    ];
  } catch {
    return Object.keys(FALLBACK_BLOG_POSTS).map((slug) => ({ slug }));
  }
}

export async function generateMetadata({
  params,
}: BlogSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  let post = null;
  try {
    post = await getBlogBySlugForConfiguredSite(slug);
  } catch {
    post = null;
  }
  if (!post) {
    const fallbackPost = FALLBACK_BLOG_POSTS[slug];
    if (!fallbackPost) return { title: "Blog | Skyen Systems" };
    return {
      title: fallbackPost.title,
      description: fallbackPost.description,
      alternates: {
        canonical: `/blog/${slug}`,
      },
    };
  }
  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.description || undefined,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
  const { slug } = await params;
  let post = null;
  try {
    post = await getBlogBySlugForConfiguredSite(slug);
  } catch {
    post = null;
  }
  const fallbackPost = FALLBACK_BLOG_POSTS[slug];
  const finalPost = post
    ? post
    : fallbackPost
      ? {
          id: `fallback-${slug}`,
          slug,
          title: fallbackPost.title,
          description: fallbackPost.description,
          meta_title: null,
          meta_description: null,
          cover_image_url: null,
          display_date: null,
          author_name: null,
          keywords: null,
          article_section: null,
          category: fallbackPost.category,
          content: fallbackPost.content,
        }
      : null;
  if (!finalPost) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: finalPost.title,
    description: finalPost.meta_description || finalPost.description || "",
    author: {
      "@type": "Organization",
      name: "Skyen Systems",
    },
    publisher: {
      "@type": "Organization",
      name: "Skyen Systems",
      logo: {
        "@type": "ImageObject",
        url: "https://skyensystems.com/logo-png.png",
      },
    },
    mainEntityOfPage: `https://skyensystems.com/blog/${finalPost.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="mx-auto max-w-4xl px-6 pb-16 pt-28 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          {finalPost.category?.name ?? "Blog"}
        </p>
        <h1 className="mt-3 text-4xl font-extrabold text-[#0F172A] md:text-5xl">
          {finalPost.title}
        </h1>
        {finalPost.description ? (
          <p className="mt-4 text-lg text-slate-600">{finalPost.description}</p>
        ) : null}

        <div className="mt-10 rounded-2xl border border-white/70 bg-white/80 p-6 text-slate-700 shadow-sm">
          <div className="prose prose-slate max-w-none">
            {finalPost.content ? (
              <div dangerouslySetInnerHTML={{ __html: finalPost.content }} />
            ) : (
              <p>Article content coming soon.</p>
            )}
          </div>
        </div>

        <BlogReactionButtons blogId={finalPost.id} />

        <div className="mt-8">
          <Link href="/blog" className="text-sm font-semibold text-[#6D5DF6]">
            ← Back to blog
          </Link>
        </div>
      </article>
    </>
  );
}
