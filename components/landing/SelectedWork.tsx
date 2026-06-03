"use client";

import Image from "next/image";
import Link from "next/link";
import { SELECTED_WORK } from "@/components/landing/landing-data";
import { Reveal } from "@/components/landing/Reveal";

export function SelectedWork() {
  return (
    <section className="overflow-hidden bg-[#141414] py-20 text-[#FAFAF8] md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-4xl font-bold tracking-[-0.03em] md:text-5xl">
            Products we built. Standards we bring to every client.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-0">
          {SELECTED_WORK.map((project, index) => {
            const logoRight = index % 2 === 1;
            return (
              <Reveal key={project.name} delay={index * 0.06}>
                <article className="border-t border-[#2E2E2E] py-12 md:py-16">
                  <div className="grid gap-8 md:grid-cols-12 md:items-center md:gap-10">
                    <div
                      className={`flex justify-center px-4 md:col-span-5 md:px-0 ${
                        logoRight
                          ? "md:order-2 md:justify-end md:pr-10 lg:pr-16"
                          : "md:justify-start md:pl-10 lg:pl-16"
                      }`}
                    >
                      <div className="relative h-40 w-40 overflow-hidden rounded-[1.75rem] sm:h-48 sm:w-48 md:h-56 md:w-56">
                        <Image
                          src={project.logo}
                          alt={`${project.name} logo`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 192px, 224px"
                        />
                      </div>
                    </div>

                    <div
                      className={
                        logoRight
                          ? "md:col-span-7 md:order-1 max-md:pl-6 md:pl-10 lg:pl-16"
                          : "md:col-span-7"
                      }
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6C63FF]">
                        {project.category}
                      </p>
                      <h3 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
                        {project.name}
                      </h3>
                      <p className="mt-4 max-w-md text-sm leading-relaxed text-[#B8B8B8]">
                        {project.description}
                      </p>
                      <div className="mt-8 inline-flex border-l-2 border-[#6C63FF] pl-5">
                        <div>
                          <p className="font-heading text-3xl font-bold">{project.metric}</p>
                          <p className="text-xs uppercase tracking-[0.16em] text-[#8A8A8A]">
                            {project.metricLabel}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-[#2E2E2E] pt-6 text-center md:mt-10 md:pt-8">
                    <Link
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm font-semibold uppercase tracking-[0.12em] text-[#FAFAF8] underline-offset-4 hover:text-[#6C63FF] hover:underline"
                    >
                      View project →
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8">
          <Link
            href="/portfolio"
            className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6C63FF]"
          >
            Full portfolio →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
