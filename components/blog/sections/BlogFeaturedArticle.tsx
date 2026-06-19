"use client";

import Image from "next/image";
import Link from "next/link";
import { BlogBlueprintBackdrop } from "@/components/blog/BlogBlueprintBackdrop";
import { estimateReadingTime, formatPublishDate } from "@/components/blog/blog-ui-utils";
import { Reveal } from "@/components/landing/Reveal";
import { SITE_IMAGE_QUALITY } from "@/lib/site-image";
import type { BlogListRow } from "@/lib/blogs";

type BlogFeaturedArticleProps = {
  post: BlogListRow;
};

export function BlogFeaturedArticle({ post }: BlogFeaturedArticleProps) {
  const readingTime = estimateReadingTime(post);

  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] py-14 md:py-20">
      <BlogBlueprintBackdrop className="opacity-[0.035]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <Link href={`/blog/${post.slug}`} className="group grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
                {post.category?.name ?? "Featured"}
              </p>
              <h2 className="mt-4 break-words font-heading text-[clamp(1.5rem,5vw,2.75rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#141414] transition-colors duration-200 group-hover:text-[#31C3C3]">
                {post.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5C5C5C] md:text-lg">
                {post.description ??
                  "Read the full article for engineering perspectives and practical takeaways from our team."}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8A8A8A]">
                <span>{formatPublishDate(post.date_published)}</span>
                <span aria-hidden>·</span>
                <span>{readingTime} min read</span>
              </div>
              <span className="mt-8 inline-flex items-center bg-[#31C3C3] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 group-hover:bg-[#2AB0B0]">
                Read article
              </span>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden border border-[#DADAD8] bg-[#0F172A] lg:col-span-6">
              {post.cover_image_url ? (
                <Image
                  src={post.cover_image_url}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  quality={SITE_IMAGE_QUALITY.hero}
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              ) : (
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(49,195,195,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(49,195,195,0.25) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
              )}
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
