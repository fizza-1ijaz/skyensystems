"use client";

import type { ReactNode } from "react";
import { BlogArticleCard } from "@/components/blog/BlogArticleCard";
import { BlogEditorialSeparator } from "@/components/blog/sections/BlogEditorialSeparator";
import type { BlogListRow } from "@/lib/blogs";

type BlogArticleGridProps = {
  posts: BlogListRow[];
};

function cardVariant(index: number): "standard" | "large" | "editorial" {
  if (index % 8 === 0) return "large";
  if (index % 8 === 4) return "editorial";
  return "standard";
}

export function BlogArticleGrid({ posts }: BlogArticleGridProps) {
  const items: ReactNode[] = [];

  posts.forEach((post, index) => {
    if (index > 0 && index % 5 === 0) {
      items.push(
        <BlogEditorialSeparator key={`sep-${index}`} index={Math.floor(index / 5) - 1} />,
      );
    }

    items.push(
      <BlogArticleCard
        key={post.id}
        post={post}
        variant={cardVariant(index)}
        delay={(index % 5) * 0.04}
      />,
    );
  });

  return (
    <section className="bg-[#F4F4F2] py-14 md:py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{items}</div>
      </div>
    </section>
  );
}
