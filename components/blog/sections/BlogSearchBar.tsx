"use client";

type BlogSearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function BlogSearchBar({ value, onChange }: BlogSearchBarProps) {
  return (
    <section className="bg-[#F4F4F2] pb-8 pt-2">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mx-auto w-full max-w-[820px]">
          <label htmlFor="blog-search" className="sr-only">
            Search articles
          </label>
          <div className="border-b border-[#DADAD8] pb-4 transition-colors duration-200 focus-within:border-[#31C3C3]/60">
            <input
              id="blog-search"
              type="search"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Search articles, insights, and perspectives"
              className="w-full bg-transparent font-heading text-xl font-semibold tracking-tight text-[#141414] outline-none placeholder:text-[#8A8A8A] md:text-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
