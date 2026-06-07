"use client";

import { PROOF_BLOCKS } from "@/lib/services-page-data";
import { EditorialBoxCta } from "@/components/ui/EditorialBoxCta";
import { Reveal } from "@/components/landing/Reveal";

export function ProofOfExpertise() {
  return (
    <section className="bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-4xl font-bold tracking-[-0.03em] text-[#141414] md:text-5xl">
            Evidence — not claims.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {PROOF_BLOCKS.map((block, index) => (
            <Reveal key={index} delay={index * 0.04} className={block.span}>
              {block.type === "metric" ? (
                <div className="flex h-full min-h-[10rem] flex-col justify-end border border-[#E5E5E3] bg-white p-6 md:p-8">
                  <p className="font-heading text-5xl font-bold text-[#141414]">{block.value}</p>
                  <p className="mt-2 text-sm text-[#5C5C5C]">{block.label}</p>
                </div>
              ) : null}
              {block.type === "case" ? (
                <div className="flex h-full min-h-[10rem] flex-col justify-between border border-[#E5E5E3] bg-[#141414] p-6 text-[#FAFAF8] md:p-8">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#31C3C3]">Case</p>
                  <div>
                    <h3 className="font-heading text-2xl font-bold">{block.title}</h3>
                    <p className="mt-2 text-sm text-[#B8B8B8]">{block.description}</p>
                  </div>
                </div>
              ) : null}
              {block.type === "quote" ? (
                <div className="flex h-full min-h-[10rem] flex-col justify-center border-l-4 border-[#31C3C3] bg-white p-6 md:p-8">
                  <p className="font-heading text-xl leading-snug text-[#141414] md:text-2xl">
                    &ldquo;{block.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-[0.12em] text-[#8A8A8A]">
                    {block.role}
                  </p>
                </div>
              ) : null}
              {block.type === "credential" ? (
                <div className="flex h-full min-h-[10rem] flex-col justify-end border border-[#E5E5E3] bg-white p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#31C3C3]">Credential</p>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-[#141414]">{block.title}</h3>
                  <p className="mt-2 text-sm text-[#5C5C5C]">{block.description}</p>
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-wrap gap-6">
          <EditorialBoxCta href="/portfolio">Portfolio</EditorialBoxCta>
          <EditorialBoxCta href="/about/who-we-are" variant="neutral">
            About our practice
          </EditorialBoxCta>
        </Reveal>
      </div>
    </section>
  );
}
