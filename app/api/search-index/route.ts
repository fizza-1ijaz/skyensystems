import { NextResponse } from "next/server";
import { getBlogIndexDataForConfiguredSite } from "@/lib/blogs";
import { blogPostToSearchItem } from "@/lib/search-index";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const blogData = await getBlogIndexDataForConfiguredSite();
    const items = blogData.posts.map(blogPostToSearchItem);
    return NextResponse.json({ items });
  } catch {
    return NextResponse.json({ items: [] });
  }
}
