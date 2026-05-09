"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    name: "Studiely",
    status: "Live on App Store and Play Store",
    tag: "AI-powered study tool.",
    blurb:
      "Smart flashcards, adaptive quizzes, personalised revision. For students who want to study smarter.",
    logo: "/logo-studiely.jpeg",
    href: "https://studiely.com",
    cta: "Visit me",
  },
  {
    name: "Make My Lesson",
    status: "In development",
    tag: "AI lesson plan generator for teachers.",
    blurb:
      "Curriculum-aligned, time-saving, editable. For educators who have enough on their plate.",
    logo: "/logo-makemylesson.png",
    href: "https://makemylesson.ai",
    cta: "Visit me",
  },
  {
    name: "Linguatude",
    status: "In development",
    tag: "Language learning that's actually effective.",
    blurb:
      "AI conversation practice + spaced repetition + gamification. For anyone ready to actually become fluent.",
    logo: "/logo-linguatude.jpg",
    href: "https://linguatude.com",
    cta: "Visit me",
  },
];

export function ProductsShowcase() {
  return (
    <section className="bg-[#0B1220] px-6 py-20 text-white md:px-10">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
            OUR PRODUCTS
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">We don't just build for clients. We build for users.</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-300">
            Products built and tested by the same team that builds your projects.
          </p>
        </motion.div>

        <div className="no-scrollbar flex snap-x gap-5 overflow-x-auto pb-4">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.42, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group flex min-w-[18rem] flex-col snap-start rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur xl:min-w-[22rem]"
            >
              <div className="mb-4 flex justify-center">
                <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-white/15 bg-white/10 p-1">
                  <Image
                    src={product.logo}
                    alt={`${product.name} logo`}
                    fill
                    sizes="56px"
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mb-4 flex flex-col items-center justify-center gap-1">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <span className="text-xs text-slate-400">{product.status}</span>
              </div>
              <p className="text-sm font-semibold text-gradient">{product.tag}</p>
              <p className="mt-3 flex-grow text-sm leading-7 text-slate-300">{product.blurb}</p>
              <Link
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg bg-[#112B44] px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_30px_-18px_rgba(17,43,68,0.75)] transition-all duration-300 hover:bg-[#1B3E5E] hover:shadow-[0_18px_36px_-18px_rgba(17,43,68,0.95)]"
              >
                {product.cta}
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
