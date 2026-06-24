"use client";

import { useEffect, useMemo, useState } from "react";
import { BLOG_POSTS_PER_PAGE } from "@/components/blog/blog-ui-utils";
import { BlogArticleGrid } from "@/components/blog/sections/BlogArticleGrid";
import { BlogCategoryFilters } from "@/components/blog/sections/BlogCategoryFilters";
import { BlogEmptyState } from "@/components/blog/sections/BlogEmptyState";
import { BlogFinalCta } from "@/components/blog/sections/BlogFinalCta";
import { BlogHero } from "@/components/blog/sections/BlogHero";
import { BlogPagination } from "@/components/blog/sections/BlogPagination";
import { BlogSearchBar } from "@/components/blog/sections/BlogSearchBar";
import type { BlogCategoryRow, BlogIndexSeo, BlogListRow } from "@/lib/blogs";

type BlogPageProps = {
  posts: BlogListRow[];
  categories: BlogCategoryRow[];
  seo: BlogIndexSeo;
  emptyStateMessage?: string;
};

function filterPosts(
  posts: BlogListRow[],
  search: string,
  categorySlug: string | null,
): BlogListRow[] {
  const query = search.trim().toLowerCase();
  if (!query && !categorySlug) return posts;

  return posts.filter((post) => {
    const categoryMatch = !categorySlug || post.category?.slug === categorySlug;
    if (!categoryMatch) return false;
    if (!query) return true;

    const haystack = [
      post.title,
      post.description ?? "",
      post.keywords ?? "",
      post.category?.name ?? "",
      post.author_name ?? "",
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });
}

export function BlogPage({
  posts,
  categories,
  seo,
  emptyStateMessage = "Blog posts will appear here once they are published.",
}: BlogPageProps) {
  const [search, setSearch] = useState("");
  const [categorySlug, setCategorySlug] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const hasActiveFilters = search.trim().length > 0 || categorySlug !== null;

  const filteredPosts = useMemo(
    () => filterPosts(posts, search, categorySlug),
    [posts, search, categorySlug],
  );

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / BLOG_POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * BLOG_POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + BLOG_POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  useEffect(() => {
    setPage(1);
  }, [search, categorySlug]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const handleReset = () => {
    setSearch("");
    setCategorySlug(null);
    setPage(1);
  };

  const showEmpty = posts.length === 0 || (hasActiveFilters && filteredPosts.length === 0);

  return (
    <div className="landing-editorial bg-[#F4F4F2] text-[#141414]">
      <BlogHero headline={seo.headline} subheadline={seo.subheadline} />
      <BlogSearchBar value={search} onChange={setSearch} />
      <BlogCategoryFilters
        categories={categories}
        activeSlug={categorySlug}
        onChange={setCategorySlug}
      />

      {showEmpty ? (
        <BlogEmptyState
          message={
            posts.length === 0
              ? emptyStateMessage
              : "Try adjusting your search or category filter to find what you're looking for."
          }
          onReset={handleReset}
        />
      ) : (
        <>
          <BlogArticleGrid posts={paginatedPosts} />
          <BlogPagination
            page={currentPage}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}

      <BlogFinalCta />
    </div>
  );
}
