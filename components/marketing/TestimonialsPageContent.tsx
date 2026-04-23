"use client";

import { motion } from "framer-motion";
import { Star, Quote, QuoteIcon, CheckCircle2 } from "lucide-react";

interface Testimonial {
  name: string;
  rating: number;
  feedback: string;
  result: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function TestimonialsPageContent({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="flex flex-col gap-20 pb-24">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest">
              Success Stories
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
              Trusted by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Industry Leaders
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Discover how Skyen Systems has helped businesses world-wide modernize their infrastructure and achieve unprecedented growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="container mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((entry, idx) => (
            <motion.article
              key={entry.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col p-8 rounded-[2rem] border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all"
            >
              <div className="absolute -top-4 -right-4 p-4 rounded-2xl bg-blue-50 text-blue-400 opacity-20 group-hover:opacity-100 transition-opacity">
                <QuoteIcon size={40} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(entry.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-lg text-slate-700 font-medium leading-relaxed mb-8 relative z-10">
                &ldquo;{entry.feedback}&rdquo;
              </blockquote>

              <div className="mt-auto space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                    {entry.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{entry.name}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Client Partner</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3 group-hover:bg-blue-50 transition-colors">
                  <CheckCircle2 className="text-blue-500" size={20} />
                  <div className="text-sm font-bold text-slate-600 group-hover:text-blue-700 transition-colors">
                    {entry.result}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Trust Quote */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8 glass p-12 rounded-[3rem] border border-white/40 shadow-xl">
          <div className="inline-flex p-4 rounded-3xl bg-slate-900 text-white mb-6">
            <Quote size={32} />
          </div>
          <p className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
            &ldquo;Our philosophy is simple: engineering excellence at every touchpoint. We don&apos;t just deliver software; we deliver competitive advantage.&rdquo;
          </p>
          <div className="text-blue-600 font-bold tracking-widest uppercase text-xs">
            Skyen Systems Leadership Team
          </div>
        </div>
      </section>
    </div>
  );
}
