import type { BlogListRow } from "@/lib/blogs";

const WORDS_PER_MINUTE = 200;

/** Presentation-only reading time estimate (list view has no full content). */
export function estimateReadingTime(post: Pick<BlogListRow, "description" | "title">): number {
  const text = `${post.title} ${post.description ?? ""}`;
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.ceil(words / WORDS_PER_MINUTE));
}

export function formatPublishDate(value: string | null): string {
  if (!value) return "Recently Published";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Recently published";

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const FEATURED_TOPICS = [
  "AI Engineering",
  "Enterprise Software",
  "Cloud Platforms",
  "Digital Transformation",
] as const;

export const EDITORIAL_INSIGHTS = [
  {
    type: "insight" as const,
    label: "Industry Insight",
    body: "Software decisions compound — architecture, delivery model, and team structure matter as much as feature scope.",
  },
  {
    type: "quote" as const,
    label: "Engineering Principle",
    body: "Build for clarity first. Systems that are understandable are systems that scale.",
  },
  {
    type: "blueprint" as const,
    label: "Architecture Note",
    body: "Every product surface connects to a delivery system — design, engineering, deployment, and iteration.",
  },
] as const;

export const BLOG_POSTS_PER_PAGE = 9;
