"use client";

import { EditorialBoxButton } from "@/components/ui/EditorialBoxCta";

type BlogEmptyStateProps = {
  message: string;
  onReset: () => void;
};

export function BlogEmptyState({ message, onReset }: BlogEmptyStateProps) {
  return (
    <section className="bg-[#F4F4F2] pb-20 md:pb-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mx-auto max-w-xl border border-[#DADAD8] bg-[#FAFAF8] px-8 py-12 text-center md:px-12 md:py-16">
          <p className="font-heading text-2xl font-bold tracking-tight text-[#141414] md:text-3xl">
            No articles matched your search.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#5C5C5C] md:text-base">{message}</p>
          <EditorialBoxButton type="button" onClick={onReset} className="mt-8" variant="neutral">
            Reset filters
          </EditorialBoxButton>
        </div>
      </div>
    </section>
  );
}
