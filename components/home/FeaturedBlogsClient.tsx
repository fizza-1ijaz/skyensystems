"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { EditorialBoxCta } from "@/components/ui/EditorialBoxCta";
import { BlogCard } from "@/components/home/BlogCard";
import { FeaturedBlogCard } from "@/components/home/FeaturedBlogCard";
import { FEATURED_BLOGS_MOTION } from "@/components/home/featured-blogs-constants";
import { useFeaturedBlogsParallax } from "@/hooks/useFeaturedBlogsParallax";
import type { FeaturedBlogPost } from "@/lib/featured-blogs";

type FeaturedBlogsClientProps = {
  posts: FeaturedBlogPost[];
};

export function FeaturedBlogsClient({ posts }: FeaturedBlogsClientProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const parallax = useFeaturedBlogsParallax(sectionRef);

  const [featured, topRight, bottomRight] = posts;
  const secondary = [topRight, bottomRight].filter(Boolean) as FeaturedBlogPost[];

  const featuredStyle = parallax
    ? { y: parallax.featuredY, rotate: parallax.featuredRotate }
    : undefined;
  const topRightStyle = parallax ? { y: parallax.topRightY } : undefined;
  const bottomRightStyle = parallax ? { y: parallax.bottomRightY } : undefined;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#FAFAF8] py-20 md:py-28"
      aria-labelledby="featured-blogs-heading"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(560px,75vw)] w-[min(560px,75vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(49,195,195,0.14)_0%,rgba(49,195,195,0.04)_42%,transparent_72%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: FEATURED_BLOGS_MOTION.enter.duration,
            ease: FEATURED_BLOGS_MOTION.enter.ease,
          }}
          className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8A8A]">
              Insights
            </p>
            <h2
              id="featured-blogs-heading"
              className="mt-3 font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#141414]"
            >
              Our blogs
            </h2>
          </div>
          <EditorialBoxCta href="/blog" variant="accent">
            View all blogs
          </EditorialBoxCta>
        </motion.div>

        {/* Desktop + tablet editorial layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-12 lg:gap-8">
          {featured ? (
            <div className="md:col-span-2 lg:col-span-7">
              <FeaturedBlogCard
                post={featured}
                motionStyle={featuredStyle}
                revealDelay={0}
              />
            </div>
          ) : null}

          <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-5 lg:gap-8">
            {secondary[0] ? (
              <BlogCard
                post={secondary[0]}
                motionStyle={topRightStyle}
                revealDelay={FEATURED_BLOGS_MOTION.enter.stagger}
              />
            ) : null}
            {secondary[1] ? (
              <BlogCard
                post={secondary[1]}
                motionStyle={bottomRightStyle}
                revealDelay={FEATURED_BLOGS_MOTION.enter.stagger * 2}
              />
            ) : null}
          </div>
        </div>

        {/* Mobile swipe rail — parallax disabled, reveal preserved */}
        <div className="md:hidden">
          <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className="w-[min(88vw,340px)] shrink-0 snap-center"
              >
                {index === 0 ? (
                  <FeaturedBlogCard post={post} revealDelay={index * 0.08} />
                ) : (
                  <BlogCard post={post} revealDelay={index * 0.08} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
