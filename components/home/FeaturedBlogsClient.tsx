"use client";

import { BlogCard } from "@/components/home/BlogCard";
import { Reveal } from "@/components/landing/Reveal";
import { EditorialBoxCta } from "@/components/ui/EditorialBoxCta";
import type { FeaturedBlogPost } from "@/lib/featured-blogs";

type FeaturedBlogsClientProps = {
  posts: FeaturedBlogPost[];
};

export function FeaturedBlogsClient({ posts }: FeaturedBlogsClientProps) {
  const [featured, ...secondary] = posts;

  return (
    <section
      className="relative overflow-hidden bg-[#FAFAF8] py-20 md:py-28"
      aria-labelledby="featured-blogs-heading"
    >
      <div
        className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#31C3C3]/12 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#141414]/6 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
              Insights
            </p>
            <h2
              id="featured-blogs-heading"
              className="editorial-section-title mt-4 text-[#141414]"
            >
              Latest From Our Blog
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#5C5C5C] md:text-base">
              Practical perspectives on engineering, AI, product design, and delivery from the
              Skyen team.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="shrink-0">
            <EditorialBoxCta href="/blog" variant="accent">
              View All Blogs
            </EditorialBoxCta>
          </Reveal>
        </div>

        {featured ? (
          <div className="mt-12 grid gap-4 lg:mt-14 lg:grid-cols-12 lg:gap-5">
            <div className="lg:col-span-7">
              <BlogCard post={featured} variant="featured" revealDelay={0.06} />
            </div>

            <div className="flex flex-col gap-4 lg:col-span-5 lg:gap-5">
              {secondary.map((post, index) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  variant="compact"
                  revealDelay={0.12 + index * 0.06}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
