"use client";

import type { BlogCategoryRow } from "@/lib/blogs";

type BlogCategoryFiltersProps = {
  categories: BlogCategoryRow[];
  activeSlug: string | null;
  onChange: (slug: string | null) => void;
};

export function BlogCategoryFilters({
  categories,
  activeSlug,
  onChange,
}: BlogCategoryFiltersProps) {
  if (categories.length === 0) return null;

  return (
    <section className="border-b border-[#DADAD8] bg-[#F4F4F2] pb-0">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
          <button
            type="button"
            onClick={() => onChange(null)}
            className={`-mb-px border-b-2 pb-3 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
              activeSlug === null
                ? "border-[#6C63FF] text-[#141414]"
                : "border-transparent text-[#8A8A8A] hover:text-[#141414]"
            }`}
          >
            All
          </button>
          {categories.map((category) => {
            const isActive = activeSlug === category.slug;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onChange(category.slug)}
                className={`-mb-px border-b-2 pb-3 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
                  isActive
                    ? "border-[#6C63FF] text-[#141414]"
                    : "border-transparent text-[#8A8A8A] hover:text-[#141414]"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
