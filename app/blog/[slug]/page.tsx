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
  let post = null;
  try {
    post = await getBlogBySlugForConfiguredSite(slug);
  } catch {
    post = null;
  }
  if (!post) {
    return { title: "Blog | Skyen Systems" };
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
  if (!post) notFound();

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
      <article className="mx-auto max-w-4xl px-6 pb-16 pt-28 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          {post.category?.name ?? "Blog"}
        </p>
        <h1 className="mt-3 text-4xl font-extrabold text-[#0F172A] md:text-5xl">
          {post.title}
        </h1>
        {post.description ? (
          <p className="mt-4 text-lg text-slate-600">{post.description}</p>
        ) : null}

        <div className="mt-10 rounded-2xl border border-white/70 bg-white/80 p-6 text-slate-700 shadow-sm">
          <div className="prose prose-slate max-w-none">
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <p>Article content coming soon.</p>
            )}
          </div>
        </div>

        <BlogReactionButtons blogId={post.id} />

        <div className="mt-8">
          <Link href="/blog" className="text-sm font-semibold text-[#6D5DF6]">
            ← Back to blog
          </Link>
        </div>
      </article>
    </>
  );
}
