"use client";

import { Reveal } from "@/components/landing/Reveal";
import { EditorialBoxCta } from "@/components/ui/EditorialBoxCta";

export function ProductsQuoteBand() {
  return (
    <section className="border-y border-[#DADAD8] bg-[#FAFAF8] py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <blockquote className="mx-auto max-w-4xl text-center">
            <p className="font-heading text-2xl font-bold leading-snug tracking-tight text-[#141414] md:text-3xl">
              &ldquo;Studiely isn&apos;t a demo. It isn&apos;t a portfolio piece. It&apos;s a live
              product with real users — built entirely by our in-house team. When we say we can build
              your app, this is what we mean.&rdquo;
            </p>
          </blockquote>
        </Reveal>
        <Reveal delay={0.08} className="mt-8 text-center">
          <EditorialBoxCta
            href="/contact-us"
            variant="neutral"
            className="transition-colors duration-300 hover:border-[#31C3C3] hover:bg-[#31C3C3] hover:!text-white"
          >
            See our mobile app service
          </EditorialBoxCta>
        </Reveal>
      </div>
    </section>
  );
}
