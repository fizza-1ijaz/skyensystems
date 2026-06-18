"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { estimateReadingTime, formatPublishDate } from "@/components/blog/blog-ui-utils";
import { Reveal } from "@/components/landing/Reveal";
import type { FeaturedBlogPost } from "@/lib/featured-blogs";

type BlogCardProps = {
  post: FeaturedBlogPost;
  variant?: "featured" | "compact";
  revealDelay?: number;
};

function usePostMeta(post: FeaturedBlogPost) {
  const readingTime = estimateReadingTime({
    title: post.title,
    description: post.excerpt,
  });
  const href = post.isPlaceholder ? "/blog" : `/blog/${post.slug}`;

  return { readingTime, href };
}

function BlogCardImage({
  src,
  sizes,
  priority = false,
  className = "",
}: {
  src: string | null;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt=""
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${className}`}
      />
    );
  }

  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1A1A1A] to-[#31C3C3]/30 ${className}`}
      aria-hidden
    />
  );
}

function FeaturedBlogCard({ post, revealDelay = 0 }: BlogCardProps) {
  const { readingTime, href } = usePostMeta(post);

  return (
    <Reveal delay={revealDelay} className="h-full">
      <Link href={href} className="group block h-full">
        <article className="relative flex h-full min-h-[380px] flex-col justify-end overflow-hidden rounded-[1.5rem] border border-[#E8E8E6] bg-[#141414] shadow-[0_28px_80px_-48px_rgba(20,20,20,0.45)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#31C3C3]/40 hover:shadow-[0_36px_90px_-40px_rgba(49,195,195,0.35)] md:min-h-[480px] md:rounded-[1.75rem]">
          <div className="absolute inset-0">
            <BlogCardImage
              src={post.featuredImage}
              sizes="(max-width: 1024px) 100vw, 58vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/55 to-[#141414]/15 transition-opacity duration-500 group-hover:via-[#141414]/65" />
          </div>

          <div className="relative z-10 p-5 md:p-6 lg:p-7">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                {post.category}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">
                {formatPublishDate(post.publishedAt || null)} · {readingTime} min read
              </span>
            </div>

            <h3 className="mt-4 max-w-2xl font-heading text-[clamp(1.5rem,2.8vw,2.35rem)] font-bold leading-[1.08] tracking-tight text-white">
              {post.title}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75">
              {post.excerpt}
            </p>

            <span className="mt-5 inline-flex items-center gap-2.5 text-sm font-semibold text-white transition-colors group-hover:text-[#31C3C3]">
              Read article
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#31C3C3] group-hover:bg-[#31C3C3] group-hover:text-[#141414]">
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" aria-hidden />
              </span>
            </span>
          </div>
        </article>
      </Link>
    </Reveal>
  );
}

function CompactBlogCard({ post, revealDelay = 0 }: BlogCardProps) {
  const { readingTime, href } = usePostMeta(post);

  return (
    <Reveal delay={revealDelay} className="h-full">
      <Link href={href} className="group block h-full">
        <article className="flex h-full gap-3.5 overflow-hidden rounded-[1.25rem] border border-[#E8E8E6] bg-white p-3.5 shadow-[0_18px_50px_-40px_rgba(20,20,20,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-[#31C3C3]/35 hover:shadow-[0_24px_60px_-36px_rgba(49,195,195,0.28)] md:gap-4 md:rounded-[1.5rem] md:p-4">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-[#0F172A] md:h-28 md:w-28">
            <BlogCardImage src={post.featuredImage} sizes="128px" />
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#31C3C3]">
              {post.category}
            </span>
            <h3 className="mt-1.5 line-clamp-2 font-heading text-base font-bold leading-snug tracking-tight text-[#141414] transition-colors duration-300 group-hover:text-[#1A6B6B] md:text-lg">
              {post.title}
            </h3>
            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-[#5C5C5C]">
              {post.excerpt}
            </p>
            <div className="mt-3 flex items-center justify-between gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A8A8A]">
                {formatPublishDate(post.publishedAt || null)} · {readingTime} min
              </span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F4F4F2] text-[#141414] transition-all duration-300 group-hover:bg-[#31C3C3] group-hover:text-[#141414]">
                <ArrowUpRight className="h-3 w-3" aria-hidden />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </Reveal>
  );
}

export function BlogCard({
  post,
  variant = "compact",
  revealDelay = 0,
}: BlogCardProps) {
  if (variant === "featured") {
    return <FeaturedBlogCard post={post} revealDelay={revealDelay} />;
  }

  return <CompactBlogCard post={post} revealDelay={revealDelay} />;
}
