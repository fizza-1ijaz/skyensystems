"use client";

import Image from "next/image";
import { EditorialBoxCta } from "@/components/ui/EditorialBoxCta";
import { SELECTED_WORK } from "@/components/landing/landing-data";
import { Reveal } from "@/components/landing/Reveal";

export function SelectedWork() {
  return (
    <section className="overflow-hidden bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal className="flex justify-center">
          <h2 className="editorial-section-title max-w-2xl text-balance text-center text-[#141414]">
            Products we built. Standards we bring to every client.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {SELECTED_WORK.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.06} className="min-h-0">
              <article className="group flex h-full flex-col border border-[#2E2E2E] bg-[#1A1A1A] p-6 transition-[border-color,box-shadow] duration-300 hover:border-[#31C3C3]/40 hover:shadow-[0_24px_60px_-40px_rgba(49,195,195,0.25)] md:p-8">
                <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-2xl border border-[#2E2E2E] bg-[#141414]">
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    fill
                    className="object-contain p-2"
                    sizes="80px"
                  />
                </div>

                <p className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#31C3C3]">
                  {project.category}
                </p>
                <h3 className="mt-2 text-center font-heading text-2xl font-bold text-[#FAFAF8]">
                  {project.name}
                </h3>
                <p className="mt-4 flex-grow text-center text-sm leading-relaxed text-[#B8B8B8]">
                  {project.description}
                </p>

                <div className="mt-8 border-t border-[#2E2E2E] pt-6 text-center">
                  <p className="font-heading text-lg font-bold text-[#FAFAF8]">{project.metric}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#8A8A8A]">
                    {project.metricLabel}
                  </p>
                </div>

                <div className="mt-6 flex justify-center">
                  <EditorialBoxCta
                    href={project.href}
                    variant="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View product
                  </EditorialBoxCta>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <EditorialBoxCta href="/products">View all products</EditorialBoxCta>
        </Reveal>
      </div>
    </section>
  );
}
