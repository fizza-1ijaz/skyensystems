export function FeaturedBlogsSkeleton() {
  return (
    <section
      className="bg-[#FAFAF8] py-20 md:py-28"
      aria-busy="true"
      aria-label="Loading blog posts"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="space-y-3">
            <div className="h-3 w-20 animate-pulse rounded bg-[#E5E5E3]" />
            <div className="h-10 w-48 animate-pulse rounded bg-[#E5E5E3]" />
          </div>
          <div className="h-11 w-36 animate-pulse rounded-xl bg-[#E5E5E3]" />
        </div>

        <div className="hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-12">
          <div className="h-[520px] animate-pulse rounded-[2rem] bg-[#ECECEA] md:col-span-2 lg:col-span-7" />
          <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-5 lg:gap-8">
            <div className="h-[250px] animate-pulse rounded-[1.75rem] bg-[#ECECEA]" />
            <div className="h-[250px] animate-pulse rounded-[1.75rem] bg-[#ECECEA]" />
          </div>
        </div>

        <div className="flex gap-4 md:hidden">
          <div className="h-[380px] w-[88vw] max-w-[340px] shrink-0 animate-pulse rounded-[2rem] bg-[#ECECEA]" />
          <div className="h-[380px] w-[88vw] max-w-[340px] shrink-0 animate-pulse rounded-[1.75rem] bg-[#ECECEA]" />
        </div>
      </div>
    </section>
  );
}
