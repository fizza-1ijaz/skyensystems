"use client";

import { BlogArticleCard } from "@/components/blog/BlogArticleCard";
import type { BlogListRow } from "@/lib/blogs";

type BlogArticleGridProps = {
  posts: BlogListRow[];
};

export function BlogArticleGrid({ posts }: BlogArticleGridProps) {
  return (
    <section className="bg-[#F4F4F2] pb-14 pt-6 md:pb-20 md:pt-8">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <BlogArticleCard key={post.id} post={post} delay={index * 0.04} />
          ))}
        </div>
      </div>
    </section>
  );
}
