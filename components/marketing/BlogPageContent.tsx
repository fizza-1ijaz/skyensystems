"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function BlogPageContent() {
  const posts = [
    {
      category: "Web Design",
      title: "How Much Should a Website Cost for a Small Business?",
      excerpt: "A practical 2025 pricing breakdown without agency fluff.",
    },
    {
      category: "Growth",
      title: "Why Your Website Is Not Getting Customers",
      excerpt: "The most common conversion blockers and how to fix them.",
    },
    {
      category: "Social Media",
      title: "Management vs Marketing: What Is the Difference?",
      excerpt: "A clear framework for choosing the right service.",
    },
  ];

  return (
    <div className="pb-8 pt-12">
      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">From our team</p>
          <h1 className="text-4xl font-extrabold text-[#0F172A] md:text-6xl">Thinking out loud.</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Practical content for businesses making digital decisions.
          </p>
        </div>
      </section>

      <section className="border-t border-white/40 px-6 py-16 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-white/50 bg-white/75 p-6 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.1em] text-[#6D5DF6]">{post.category}</p>
              <h2 className="text-center text-xl font-bold text-[#0F172A]">{post.title}</h2>
              <p className="mt-3 text-center text-sm text-slate-600">{post.excerpt}</p>
              <Link href="/contact-us" className="mt-5 inline-block text-sm font-semibold text-[#6D5DF6]">
                Read soon
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
