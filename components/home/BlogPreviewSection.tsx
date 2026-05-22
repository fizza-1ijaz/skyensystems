import Link from "next/link";
import { getRecentBlogsForConfiguredSite } from "@/lib/blogs";

export async function BlogPreviewSection() {
  let posts: Awaited<ReturnType<typeof getRecentBlogsForConfiguredSite>> = [];

  try {
    posts = await getRecentBlogsForConfiguredSite(3);
  } catch {
    posts = [];
  }

  if (posts.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
      <div className="mb-6 flex flex-col items-center justify-between gap-3 md:flex-row">
        <div className="text-center md:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            From our team
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Thinking out loud.</h2>
        </div>
        <Link
          href="/blog"
          className="whitespace-nowrap text-sm font-semibold text-[#6C63FF]"
        >
          All posts →
        </Link>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
            <article className="rounded-2xl border border-white/50 bg-white/75 p-6 transition-shadow group-hover:shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6C63FF]">
                {post.category?.name ?? "Blog"}
              </p>
              <h3 className="mt-2 text-lg font-bold group-hover:text-[#6C63FF]">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                {post.description?.trim() ||
                  "Read the full article for practical takeaways from our team."}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
