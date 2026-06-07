"use client";

import Link from "next/link";
import { motion, type MotionStyle } from "framer-motion";
import { formatPublishDate } from "@/components/blog/blog-ui-utils";
import { BlogCardImage } from "@/components/home/BlogCardImage";
import { FEATURED_BLOGS_MOTION } from "@/components/home/featured-blogs-constants";
import type { FeaturedBlogPost } from "@/lib/featured-blogs";

const cardHoverVariants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: FEATURED_BLOGS_MOTION.hover.lift,
    scale: FEATURED_BLOGS_MOTION.hover.cardScale,
    transition: FEATURED_BLOGS_MOTION.hover.spring,
  },
};

type FeaturedBlogCardProps = {
  post: FeaturedBlogPost;
  motionStyle?: MotionStyle;
  revealDelay?: number;
};

export function FeaturedBlogCard({
  post,
  motionStyle,
  revealDelay = 0,
}: FeaturedBlogCardProps) {
  return (
    <motion.article
      style={motionStyle}
      initial={{ opacity: 0, y: FEATURED_BLOGS_MOTION.enter.y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: FEATURED_BLOGS_MOTION.enter.duration,
        delay: revealDelay,
        ease: FEATURED_BLOGS_MOTION.enter.ease,
      }}
      className="h-full"
    >
      <motion.div
        className="h-full"
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={cardHoverVariants}
      >
      <Link
        href={post.isPlaceholder ? "/blog" : `/blog/${post.slug}`}
        className="group block h-full"
      >
        <div className="relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-[2rem] border border-[#E5E5E3] bg-white shadow-[0_28px_70px_-42px_rgba(20,20,20,0.4)] transition-[border-color,box-shadow] duration-300 hover:border-brand-cyan/35 hover:shadow-[0_36px_80px_-40px_rgba(49,195,195,0.32)] md:min-h-[520px]">
          <div className="relative min-h-[240px] flex-1 overflow-hidden bg-[#0F172A] md:min-h-[300px]">
            <BlogCardImage
              src={post.featuredImage}
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
              featured
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#141414]/55 via-[#141414]/10 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-white/0 transition-colors duration-500 group-hover:bg-white/[0.04]" />
            <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/12 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
              {post.category}
            </span>
          </div>

          <div className="relative p-6 md:p-8">
            <time
              dateTime={post.publishedAt || undefined}
              className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A8A8A]"
            >
              {formatPublishDate(post.publishedAt || null)}
            </time>
            <h3 className="mt-3 font-heading text-2xl font-bold leading-[1.08] tracking-tight text-[#141414] transition-colors duration-300 group-hover:text-brand-cyan md:text-3xl lg:text-4xl">
              {post.title}
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#5C5C5C] md:text-base">
              {post.excerpt}
            </p>
          </div>
        </div>
      </Link>
      </motion.div>
    </motion.article>
  );
}
