import type { BlogHeading } from "@/lib/blog-content";

type BlogArticleBodyProps = {
  html: string;
  headings: BlogHeading[];
};

export function BlogArticleBody({ html, headings }: BlogArticleBodyProps) {
  const tocHeadings = headings.filter((heading) => heading.text.length > 0);

  return (
    <div
      className={
        tocHeadings.length > 0
          ? "lg:grid lg:grid-cols-[minmax(0,13.5rem)_minmax(0,1fr)] lg:gap-12 xl:gap-14"
          : ""
      }
    >
      {tocHeadings.length > 0 ? (
        <aside className="mb-8 lg:mb-0">
          <nav
            aria-label="Table of contents"
            className="rounded-2xl border border-[#DADAD8] bg-[#FAFAF8] p-5 lg:sticky lg:top-24"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#31C3C3]">
              On this page
            </p>
            <ol className="mt-4 space-y-2.5">
              {tocHeadings.map((heading) => (
                <li key={heading.id} className={heading.level === 3 ? "pl-3" : undefined}>
                  <a
                    href={`#${heading.id}`}
                    className={`block text-sm leading-snug transition-colors hover:text-[#31C3C3] ${
                      heading.level === 2
                        ? "font-semibold text-[#141414]"
                        : "text-[#5C5C5C]"
                    }`}
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
      ) : null}

      <div className="min-w-0 rounded-2xl border border-[#DADAD8] bg-[#FAFAF8] p-6 md:p-8 lg:p-10 xl:p-12">
        {html ? (
          <div className="blog-prose" dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <p className="text-base text-[#5C5C5C]">Article content coming soon.</p>
        )}
      </div>
    </div>
  );
}
