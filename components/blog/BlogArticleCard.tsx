"use client";

import Image from "next/image";
import Link from "next/link";
import { estimateReadingTime, formatPublishDate } from "@/components/blog/blog-ui-utils";
import { Reveal } from "@/components/landing/Reveal";
import type { BlogListRow } from "@/lib/blogs";

export type BlogCardVariant = "standard" | "large" | "editorial";

type BlogArticleCardProps = {
  post: BlogListRow;
  variant?: BlogCardVariant;
  delay?: number;
};

export function BlogArticleCard({
  post,
  variant = "standard",
  delay = 0,
}: BlogArticleCardProps) {
  const readingTime = estimateReadingTime(post);
  const isLarge = variant === "large";
  const isEditorial = variant === "editorial";

  return (
    <Reveal delay={delay} className={isLarge ? "md:col-span-2" : ""}>
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <article
          className={`relative flex h-full flex-col border border-[#DADAD8] bg-[#FAFAF8] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#141414]/25 ${
            isLarge ? "md:grid md:grid-cols-2 md:items-stretch" : ""
          } ${isEditorial ? "lg:flex-row" : ""}`}
        >
          <span
            className="absolute left-0 top-0 h-0 w-0.5 bg-[#31C3C3] transition-all duration-200 group-hover:h-full"
            aria-hidden
          />

          {!isEditorial && post.cover_image_url ? (
            <div
              className={`relative overflow-hidden bg-[#0F172A] ${
                isLarge ? "aspect-[16/10] md:aspect-auto md:min-h-[16rem]" : "aspect-[16/10]"
              }`}
            >
              <Image
                src={post.cover_image_url}
                alt=""
                fill
                sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
          ) : null}

          <div className={`flex flex-1 flex-col p-5 sm:p-7 md:p-8 ${isLarge ? "md:py-10" : ""}`}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#31C3C3]">
              {post.category?.name ?? "Blog"}
            </p>
            <h3
              className={`mt-3 font-heading font-bold leading-snug tracking-tight text-[#141414] transition-colors duration-200 group-hover:text-[#31C3C3] ${
                isLarge ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
              }`}
            >
              {post.title}
            </h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
              {post.description ?? "Practical perspectives from our engineering and product teams."}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A8A8A]">
              <span>{formatPublishDate(post.display_date)}</span>
              <span aria-hidden>·</span>
              <span>{readingTime} min read</span>
            </div>
          </div>
        </article>
      </Link>
    </Reveal>
  );
}
