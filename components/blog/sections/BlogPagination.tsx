"use client";

type BlogPaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function BlogPagination({ page, totalPages, onPageChange }: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <section className="border-t border-[#DADAD8] bg-[#F4F4F2] pb-16 pt-8 md:pb-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <nav
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          aria-label="Blog pagination"
        >
          <button
            type="button"
            onClick={() => onPageChange(page - 1)}
            disabled={page <= 1}
            className="border-b-2 border-transparent pb-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#8A8A8A] transition-colors duration-200 hover:border-[#141414] hover:text-[#141414] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          {pages.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => onPageChange(p)}
              className={`border-b-2 pb-1 font-heading text-sm font-bold transition-colors duration-200 ${
                p === page
                  ? "border-[#31C3C3] text-[#141414]"
                  : "border-transparent text-[#8A8A8A] hover:border-[#141414]/30 hover:text-[#141414]"
              }`}
            >
              {String(p).padStart(2, "0")}
            </button>
          ))}

          <button
            type="button"
            onClick={() => onPageChange(page + 1)}
            disabled={page >= totalPages}
            className="border-b-2 border-transparent pb-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#8A8A8A] transition-colors duration-200 hover:border-[#141414] hover:text-[#141414] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </nav>
      </div>
    </section>
  );
}
