import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogArticleBody } from "@/components/blog/BlogArticleBody";
import { formatPublishDate } from "@/components/blog/blog-ui-utils";
import {
  estimateReadingTimeFromHtml,
  prepareBlogArticleContent,
} from "@/lib/blog-content";
import {
  getBlogBySlugForConfiguredSite,
  getBlogSlugsForConfiguredSite,
} from "@/lib/blogs";
import { SITE_IMAGE_QUALITY } from "@/lib/site-image";

type BlogSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  try {
    const slugs = await getBlogSlugsForConfiguredSite();
    return slugs.map((item) => ({ slug: item.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: BlogSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlugForConfiguredSite(slug);
  if (!post) return { title: "Blog | Skyen Systems" };

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
  const post = await getBlogBySlugForConfiguredSite(slug);
  if (!post) notFound();

  const { html, headings } = prepareBlogArticleContent(post.content ?? "");
  const readingTime = estimateReadingTimeFromHtml(post.content ?? "");

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.meta_description || post.description || "",
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
    mainEntityOfPage: `https://skyensystems.com/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="landing-editorial mx-auto max-w-[1280px] px-6 pb-16 md:px-10">
        <header className="max-w-4xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#31C3C3]">
            {post.category?.name ?? post.article_section ?? "Blog"}
          </p>
          <h1 className="mt-4 font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#141414]">
            {post.title}
          </h1>
          {post.description ? (
            <p className="mt-5 text-lg leading-relaxed text-[#5C5C5C] md:text-xl">
              {post.description}
            </p>
          ) : null}
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A8A8A]">
            <span>{formatPublishDate(post.date_published)}</span>
            <span aria-hidden>·</span>
            <span>{readingTime} min read</span>
            {post.author_name ? (
              <>
                <span aria-hidden>·</span>
                <span>{post.author_name}</span>
              </>
            ) : null}
          </div>
        </header>

        {post.cover_image_url ? (
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl border border-[#DADAD8] bg-[#0F172A]">
            <Image
              src={post.cover_image_url}
              alt=""
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              quality={SITE_IMAGE_QUALITY.hero}
              className="object-cover"
            />
          </div>
        ) : null}

        <div className="mt-10">
          <BlogArticleBody html={html} headings={headings} />
        </div>

        <div className="mt-8">
          <Link
            href="/blog"
            className="text-sm font-semibold text-[#31C3C3] transition-colors hover:text-[#2AB0B0]"
          >
            ← Back to blog
          </Link>
        </div>
      </article>
    </>
  );
}
