import { Suspense } from "react";
import { fetchFeaturedBlogs } from "@/lib/featured-blogs";
import { FeaturedBlogsClient } from "@/components/home/FeaturedBlogsClient";
import { FeaturedBlogsSkeleton } from "@/components/home/FeaturedBlogsSkeleton";

async function FeaturedBlogsContent() {
  const posts = await fetchFeaturedBlogs(3);
  if (posts.length === 0) return null;
  return <FeaturedBlogsClient posts={posts} />;
}

export function FeaturedBlogs() {
  return (
    <Suspense fallback={<FeaturedBlogsSkeleton />}>
      <FeaturedBlogsContent />
    </Suspense>
  );
}
