"use client";

import type { ReactNode } from "react";
import { FAQ_CHAPTERS } from "@/lib/faq-editorial-data";
import { Reveal } from "@/components/landing/Reveal";

function ChapterItem({
  item,
  index,
  dark,
}: {
  item: { q: string; a: ReactNode };
  index: number;
  dark?: boolean;
}) {
  const muted = dark ? "text-[#B8B8B8]" : "text-[#5C5C5C]";
  const ink = dark ? "text-[#FAFAF8]" : "text-[#141414]";
  const border = dark ? "border-[#3A3A3A]" : "border-[#E5E5E3]";
  const layout = index % 3;

  if (layout === 2) {
    return (
      <article className={`border-l-4 border-[#6C63FF] ${dark ? "bg-[#0F0F0F]" : "bg-white"} p-6 md:p-8`}>
        <h4 className={`font-heading text-xl font-bold ${ink}`}>{item.q}</h4>
        <div className={`mt-4 text-sm leading-relaxed md:text-base [&_a]:text-[#6C63FF] ${muted}`}>
          {item.a}
        </div>
      </article>
    );
  }

  if (layout === 1) {
    return (
      <article className={`grid gap-4 border ${border} p-6 md:grid-cols-2 md:gap-8 md:p-8 ${dark ? "bg-[#141414]" : "bg-[#FAFAF8]"}`}>
        <h4 className={`font-heading text-lg font-bold ${ink} md:text-xl`}>{item.q}</h4>
        <div className={`text-sm leading-relaxed md:text-base [&_a]:text-[#6C63FF] ${muted}`}>{item.a}</div>
      </article>
    );
  }

  return (
    <article className={`border-t ${border} py-8 md:py-10`}>
      <div className="grid gap-3 md:grid-cols-12 md:gap-8">
        <h4 className={`font-heading text-lg font-bold md:col-span-5 md:text-xl ${ink}`}>{item.q}</h4>
        <div className={`text-sm leading-relaxed md:col-span-7 md:text-base [&_a]:text-[#6C63FF] ${muted}`}>
          {item.a}
        </div>
      </div>
    </article>
  );
}

export function FaqChapters() {
  return (
    <>
      {FAQ_CHAPTERS.map((chapter, chapterIndex) => {
        const dark = chapterIndex % 2 === 1;
        const bg = dark ? "bg-[#141414] text-[#FAFAF8]" : "bg-white text-[#141414]";
        const faint = dark ? "text-[#9A9A9A]" : "text-[#8A8A8A]";

        return (
          <section
            key={chapter.id}
            id={chapter.id}
            className={`scroll-mt-20 border-b border-[#E5E5E3] py-20 md:py-28 ${bg}`}
          >
            <div className="mx-auto max-w-[1440px] px-6 md:px-10">
              <Reveal>
                <h2 className="editorial-section-title text-balance">
                  {chapter.title}
                </h2>
                <p className={`mt-3 max-w-xl text-base ${dark ? "text-[#B8B8B8]" : "text-[#5C5C5C]"}`}>
                  {chapter.subtitle}
                </p>
              </Reveal>

              <div className="mt-12 space-y-6">
                {chapter.items.map((item, index) => (
                  <Reveal key={item.q} delay={index * 0.04}>
                    <ChapterItem item={item} index={index} dark={dark} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
