"use client";

import dynamic from "next/dynamic";
import { BlogBlueprintBackdropStatic } from "@/components/blog/BlogBlueprintBackdropStatic";

const BlogBlueprintBackdropParallax = dynamic(
  () =>
    import("@/components/blog/BlogBlueprintBackdropParallax").then((mod) => ({
      default: mod.BlogBlueprintBackdropParallax,
    })),
  { ssr: false },
);

type BlogBlueprintBackdropProps = {
  className?: string;
  variant?: "light" | "dark";
  parallax?: boolean;
};

/** Blog/marketing sections that may enable parallax. Layout uses `BlogBlueprintBackdropStatic` directly. */
export function BlogBlueprintBackdrop({
  className = "",
  variant = "light",
  parallax = false,
}: BlogBlueprintBackdropProps) {
  if (parallax) {
    return <BlogBlueprintBackdropParallax className={className} variant={variant} />;
  }

  return <BlogBlueprintBackdropStatic className={className} variant={variant} />;
}
