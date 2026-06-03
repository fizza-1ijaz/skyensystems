"use client";

import { CULTURE_BLOCKS } from "@/lib/who-we-are-data";
import { Reveal } from "@/components/landing/Reveal";

export function WhoWeAreCulture() {
  return (
    <section className="border-b border-[#E5E5E3] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-4xl font-bold tracking-[-0.03em] text-[#141414] md:text-5xl">
            How we work — in practice.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {CULTURE_BLOCKS.map((block, index) => (
            <Reveal key={index} delay={index * 0.04} className={block.span}>
              {block.type === "statement" ? (
                <div className="flex h-full min-h-[10rem] items-end border-l-4 border-[#6C63FF] bg-[#FAFAF8] p-6 md:p-8">
                  <p className="font-heading text-2xl font-bold leading-snug text-[#141414] md:text-3xl">
                    {block.quote}
                  </p>
                </div>
              ) : null}
              {block.type === "metric" ? (
                <div className="flex h-full min-h-[10rem] flex-col justify-end border border-[#E5E5E3] p-6 md:p-8">
                  <p className="font-heading text-5xl font-bold text-[#141414]">{block.value}</p>
                  <p className="mt-2 text-sm text-[#5C5C5C]">{block.label}</p>
                </div>
              ) : null}
              {block.type === "credential" ? (
                <div className="flex h-full min-h-[10rem] flex-col justify-end border border-[#E5E5E3] bg-[#141414] p-6 text-[#FAFAF8] md:p-8">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#6C63FF]">Credential</p>
                  <h3 className="mt-2 font-heading text-2xl font-bold">{block.title}</h3>
                  <p className="mt-2 text-sm text-[#B8B8B8]">{block.description}</p>
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
