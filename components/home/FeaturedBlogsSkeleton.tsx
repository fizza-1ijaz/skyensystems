export function FeaturedBlogsSkeleton() {
  return (
    <section
      className="relative overflow-hidden bg-[#FAFAF8] py-20 md:py-28"
      aria-busy="true"
      aria-label="Loading blog posts"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <div className="h-3 w-20 animate-pulse rounded-full bg-[#E5E5E3]" />
            <div className="h-10 w-72 animate-pulse rounded-2xl bg-[#E5E5E3]" />
            <div className="h-4 w-full max-w-xl animate-pulse rounded bg-[#E5E5E3]" />
          </div>
          <div className="h-11 w-36 animate-pulse rounded-xl bg-[#E5E5E3]" />
        </div>

        <div className="mt-12 grid gap-4 lg:mt-14 lg:grid-cols-12 lg:gap-5">
          <div className="h-[380px] animate-pulse rounded-[1.75rem] bg-[#ECECEA] md:h-[480px] lg:col-span-7" />
          <div className="flex flex-col gap-4 lg:col-span-5 lg:gap-5">
            <div className="h-36 animate-pulse rounded-[1.5rem] bg-[#ECECEA] md:h-40" />
            <div className="h-36 animate-pulse rounded-[1.5rem] bg-[#ECECEA] md:h-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
