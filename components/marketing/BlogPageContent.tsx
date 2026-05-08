import Link from "next/link";

type BlogListItem = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  category: { name: string } | null;
};

type BlogPageContentProps = {
  posts: BlogListItem[];
  emptyStateMessage?: string;
};

export function BlogPageContent({
  posts,
  emptyStateMessage = "Blogs will be visible here once they are posted.",
}: BlogPageContentProps) {
  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1);

  return (
    <div className="pb-12 pt-14">
      <section className="px-6 pb-12 pt-16 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            From our team
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#0F172A] md:text-6xl">
            Insights that help you make better digital decisions.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Actionable guides on web, apps, AI, and growth - written for small
            businesses that need clarity, not jargon.
          </p>
        </div>
      </section>

      <section className="px-6 pb-12 md:px-16">
        <div className="mx-auto max-w-6xl">
          {featuredPost ? (
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <article className="relative overflow-hidden rounded-[1.8rem] border border-[#dbe7ff] bg-[linear-gradient(125deg,#ffffff,#f3f7ff)] p-7 shadow-[0_24px_60px_-45px_rgba(67,101,174,0.7)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_70px_-45px_rgba(67,101,174,0.95)] md:p-9">
                <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 rounded-full bg-[#dce7ff80] blur-3xl" />
                <div className="relative z-10 max-w-4xl">
                  <p className="inline-flex rounded-full border border-[#d5e3ff] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.11em] text-[#4f67a0]">
                    Featured · {featuredPost.category?.name ?? "Blog"}
                  </p>
                  <h2 className="mt-4 text-2xl font-bold leading-tight text-[#0F172A] md:text-4xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
                    {featuredPost.description ??
                      "Read the full article for practical takeaways from our team."}
                  </p>
                  <span className="mt-6 inline-flex items-center text-sm font-semibold text-[#3150bf] transition-transform group-hover:translate-x-1">
                    Read featured article →
                  </span>
                </div>
              </article>
            </Link>
          ) : null}
        </div>
      </section>

      <section className="border-t border-white/40 px-6 py-12 md:px-16">
        {posts.length === 0 ? (
          <div className="mx-auto max-w-6xl rounded-2xl border border-[#dbe6ff] bg-white/90 p-8 text-center text-slate-600 shadow-[0_18px_40px_-35px_rgba(67,101,174,0.75)]">
            {emptyStateMessage}
          </div>
        ) : null}
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {secondaryPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
              <article className="flex h-full flex-col rounded-2xl border border-[#dbe6ff] bg-white/90 p-6 shadow-[0_18px_40px_-35px_rgba(67,101,174,0.75)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_56px_-34px_rgba(67,101,174,0.95)]">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#6a7fad]">
                  {post.category?.name ?? "Blog"}
                </p>
                <h2 className="text-xl font-bold leading-tight text-[#0F172A]">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {post.description ?? "Practical tips and insights from our team."}
                </p>
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-[#3150bf] transition-transform group-hover:translate-x-1">
                  Read article →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
