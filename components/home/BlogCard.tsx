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

type BlogCardProps = {
  post: FeaturedBlogPost;
  motionStyle?: MotionStyle;
  revealDelay?: number;
};

export function BlogCard({ post, motionStyle, revealDelay = 0 }: BlogCardProps) {
  return (
    <motion.article
      style={motionStyle}
      initial={{ opacity: 0, y: FEATURED_BLOGS_MOTION.enter.y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
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
        <div className="relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-[1.75rem] border border-[#E5E5E3] bg-white shadow-[0_20px_50px_-40px_rgba(20,20,20,0.35)] transition-[border-color,box-shadow] duration-300 hover:border-brand-cyan/30 hover:shadow-[0_28px_60px_-36px_rgba(49,195,195,0.28)]">
          <div className="relative aspect-[16/10] overflow-hidden bg-[#0F172A]">
            <BlogCardImage
              src={post.featuredImage}
              sizes="(max-width: 1024px) 45vw, 320px"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#141414]/35 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
              {post.category}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-5 md:p-6">
            <time
              dateTime={post.publishedAt || undefined}
              className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A8A8A] transition-opacity duration-300 group-hover:opacity-80"
            >
              {formatPublishDate(post.publishedAt || null)}
            </time>
            <h3 className="mt-3 font-heading text-xl font-bold leading-snug tracking-tight text-[#141414] transition-colors duration-300 group-hover:text-brand-cyan md:text-2xl">
              {post.title}
            </h3>
            <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-[#5C5C5C]">
              {post.excerpt}
            </p>
          </div>
        </div>
      </Link>
      </motion.div>
    </motion.article>
  );
}
