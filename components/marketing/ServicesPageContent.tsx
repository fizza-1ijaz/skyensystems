"use client";

import { motion } from "framer-motion";
import { 
  Check, 
  ChevronRight, 
  ArrowRight,
  Database,
  Layers,
  Sparkles,
  Zap,
  TrendingUp,
  Puzzle,
  Briefcase,
  Monitor
} from "lucide-react";
import Link from "next/link";

interface ServiceItem {
  name: string;
  description: string;
  features: string[];
}

interface Category {
  title: string;
  items: ServiceItem[];
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

const toSlug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const categoryIcons: Record<string, any> = {
  "Enterprise Systems & Operations": Database,
  "Custom Application Development": Layers,
  "AI & Data Integration": Sparkles,
  "Digital Experience & Design": Monitor,
  "Growth & Marketing": TrendingUp,
  "Consulting & Strategy": Puzzle,
  "Virtual Administrative Support": Briefcase,
};

export function ServicesPageContent({ categories }: { categories: Category[] }) {
  return (
    <div className="flex flex-col gap-20 pb-24">
      {/* Services Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#e8f8f6]/70 to-transparent -z-10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f8f6] text-[#1aaebf] text-xs font-bold uppercase tracking-widest">
              Our Capabilities
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Tailored Software Services to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1fc7cf] via-[#56d3c9] to-[#2cb9cf]">
                Transform Your Organization
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Elevate your organization with end-to-end software development services. From custom engineering to AI enhancements, we are your one-stop technology partner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Navigation */}
      <section className="container mx-auto px-6">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <a 
              key={cat.title}
              href={`#${cat.title.replace(/\s+/g, '-').toLowerCase()}`}
              className="px-4 py-2 rounded-full glass border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-[#1aaebf] hover:text-white hover:border-[#1aaebf] transition-all"
            >
              {cat.title}
            </a>
          ))}
        </div>
      </section>

      {/* Categories Content */}
      <div className="space-y-32">
        {categories.map((category, categoryIndex) => {
          const Icon = categoryIcons[category.title] || Zap;
          return (
            <section 
              key={category.title} 
              id={category.title.replace(/\s+/g, '-').toLowerCase()}
              className="container mx-auto px-6 scroll-mt-32"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12"
              >
                <div className="p-4 rounded-2xl bg-slate-900 text-[#67d8cf] shadow-xl">
                  <Icon size={32} />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{category.title}</h2>
                  <div className="h-1 w-20 bg-[#1aaebf] mt-2 rounded-full" />
                </div>
              </motion.div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-8 md:grid-cols-2"
              >
                {category.items.map((item, itemIndex) => (
                  <motion.article
                    key={item.name}
                    id={toSlug(item.name)}
                    variants={itemVariants}
                    className="group relative flex flex-col p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-[#8ce2d9] transition-all overflow-hidden scroll-mt-32"
                  >
                    {/* Decorative Background Blob */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#e8f8f6] rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 pr-12 relative z-10 text-center">{item.name}</h3>
                    <p className="text-slate-600 leading-relaxed mb-8 relative z-10">{item.description}</p>
                    
                    <div className="mt-auto space-y-4 relative z-10">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#1aaebf]">Key Features</div>
                      <ul className="grid grid-cols-1 gap-3">
                        {item.features.slice(0, 4).map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-slate-500">
                            <div className="mt-1 p-0.5 rounded-full bg-[#e8f8f6] text-[#1aaebf]">
                              <Check size={12} />
                            </div>
                            {feature}
                          </li>
                        ))}
                        {item.features.length > 4 && (
                          <li className="text-xs font-semibold text-slate-400 pl-6">
                            + {item.features.length - 4} more specialized features
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-center relative z-10">
                      <Link href="/contact-us" className="text-sm font-bold text-slate-900 flex items-center gap-2 group/btn">
                        Get Started <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </section>
          );
        })}
      </div>

      {/* Global Call to Action */}
      <section className="container mx-auto px-6">
        <div className="relative overflow-hidden bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1fc7cf]/15 to-transparent" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Innovate Together?</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Our experts are ready to turn your complex challenges into competitive advantages. Let&apos;s build something that scales.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/contact-us" 
                className="px-10 py-5 rounded-full bg-[#1aaebf] text-white font-bold text-lg hover:bg-[#1699a8] hover:scale-105 transition-all shadow-xl shadow-[#1aaebf]/20"
              >
                Contact Our Team
              </Link>
              <Link 
                href="/about" 
                className="px-10 py-5 rounded-full glass border border-white/20 text-white font-bold text-lg hover:bg-white hover:text-slate-900 transition-all"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
