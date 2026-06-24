"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { estimateReadingTime, formatPublishDate } from "@/components/blog/blog-ui-utils";
import { Reveal } from "@/components/landing/Reveal";
import { SITE_IMAGE_QUALITY } from "@/lib/site-image";
import type { BlogListRow } from "@/lib/blogs";

type BlogArticleCardProps = {
  post: BlogListRow;
  delay?: number;
};

export function BlogArticleCard({ post, delay = 0 }: BlogArticleCardProps) {
  const readingTime = estimateReadingTime(post);

  return (
    <Reveal delay={delay} className="h-full">
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <article className="flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[#DADAD8] bg-[#FAFAF8] shadow-[0_18px_50px_-40px_rgba(20,20,20,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-[#31C3C3]/35 hover:shadow-[0_24px_60px_-36px_rgba(49,195,195,0.28)]">
          <div className="relative aspect-[16/10] overflow-hidden bg-[#0F172A]">
            {post.cover_image_url ? (
              <Image
                src={post.cover_image_url}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                quality={SITE_IMAGE_QUALITY.content}
                loading="lazy"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            ) : (
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1A1A1A] to-[#31C3C3]/30"
                aria-hidden
              />
            )}
          </div>

          <div className="flex flex-1 flex-col p-5 md:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#31C3C3]">
              {post.category?.name ?? "Blog"}
            </p>
            <h3 className="mt-3 line-clamp-3 font-heading text-xl font-bold leading-snug tracking-tight text-[#141414] transition-colors duration-200 group-hover:text-[#31C3C3] md:text-2xl">
              {post.title}
            </h3>
            <p className="mt-4 line-clamp-3 flex-1 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
              {post.description ?? "Practical perspectives from our engineering and product teams."}
            </p>
            <div className="mt-6 flex items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A8A8A]">
                <span>{formatPublishDate(post.date_published)}</span>
                <span aria-hidden>·</span>
                <span>{readingTime} min read</span>
              </div>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F4F4F2] text-[#141414] transition-all duration-300 group-hover:bg-[#31C3C3] group-hover:text-[#141414]">
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </Reveal>
  );
}
