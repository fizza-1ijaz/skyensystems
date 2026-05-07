"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    name: "Studiely",
    status: "Live",
    tag: "Learning, made personal.",
    blurb: "A full-stack education platform live on iOS, Android, and Web.",
    href: "/products/studiely#product-showcase",
    cta: "Visit Studiely",
  },
  {
    name: "Make My Lesson",
    status: "Arriving soon",
    tag: "Teaching, reimagined.",
    blurb: "AI-powered lesson planning with instant structured plans.",
    href: "/products/make-my-lesson#product-showcase",
    cta: "Join waitlist",
  },
  {
    name: "Linguatude",
    tag: "English, unlocked.",
    status: "Coming soon",
    blurb: "Adaptive English test prep with real exam simulations.",
    href: "/products/linguatude#product-showcase",
    cta: "Notify me",
  },
];

export function ProductsShowcase() {
  return (
    <section className="bg-[#0B1220] px-6 py-20 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold md:text-4xl">We do not just build for clients. We build for <span className="text-gradient">ourselves.</span></h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            Meet the Skyen Group products built by the same team and standards we bring to client projects.
          </p>
        </motion.div>

        <div className="no-scrollbar flex snap-x gap-5 overflow-x-auto pb-4">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group min-w-[18rem] snap-start rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur xl:min-w-[22rem]"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                {product.name === "Studiely" ? (
                  <span className="inline-flex items-center gap-2 text-xs text-[#7efeb0]">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#7efeb0]" />
                    Live
                  </span>
                ) : (
                  <span className="text-xs text-slate-400">{product.status}</span>
                )}
              </div>
              <p className="text-sm font-semibold text-gradient">{product.tag}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{product.blurb}</p>
              <Link href={product.href} className="mt-6 inline-block rounded-lg border border-[#1E3A8A66] px-4 py-2 text-sm font-semibold text-[#1E3A8A] transition-colors group-hover:bg-white/10">
                {product.cta}
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
