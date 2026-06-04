"use client";

import { FAQ_NAV_CATEGORIES } from "@/lib/faq-editorial-data";
import { Reveal } from "@/components/landing/Reveal";

export function FaqQuickNav() {
  return (
    <section className="border-b border-[#E5E5E3] bg-[#FAFAF8] py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="max-w-xl font-heading text-3xl font-bold tracking-[-0.03em] text-[#141414] md:text-4xl">
            Navigate by topic.
          </h2>
        </Reveal>

        <nav className="mt-10 border-t border-[#E5E5E3]" aria-label="FAQ topics">
          {FAQ_NAV_CATEGORIES.map((cat, index) => (
            <Reveal key={cat.id} delay={index * 0.03}>
              <a
                href={`#${cat.id}`}
                className="group grid gap-2 border-b border-[#E5E5E3] py-5 transition-colors hover:bg-white md:grid-cols-12 md:items-center md:gap-6 md:py-6"
              >
                <span className="font-mono text-xs text-[#8A8A8A] md:col-span-1">{cat.num}</span>
                <span className="font-heading text-xl font-bold text-[#141414] transition-colors group-hover:text-[#6C63FF] md:col-span-4 md:text-2xl">
                  {cat.label}
                </span>
                <span className="text-sm text-[#8A8A8A] max-md:opacity-100 md:col-span-7 md:text-right md:opacity-0 md:transition-opacity md:group-hover:opacity-100">
                  Jump to section →
                </span>
              </a>
            </Reveal>
          ))}
        </nav>
      </div>
    </section>
  );
}
