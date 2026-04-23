"use client";

import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Lightbulb, 
  ShieldCheck, 
  Accessibility, 
  Zap,
  Users,
  CheckCircle2,
  Globe2
} from "lucide-react";

const values = [
  { name: "Innovation", icon: Lightbulb, description: "Pushing boundaries in technical excellence." },
  { name: "Integrity", icon: ShieldCheck, description: "Transparent and honest partnerships." },
  { name: "Accessibility", icon: Accessibility, description: "Inclusive digital solutions for everyone." },
  { name: "Impact", icon: Zap, description: "Meaningful growth for our clients." },
];

const teamRoles = [
  "LMS & Odoo Developers",
  "Mobile App Developers",
  "Full-Stack Web Developers",
  "Graphic Designers",
  "AI Specialists",
  "Digital Marketing Specialists",
  "Virtual Assistants",
];

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

export function AboutPageContent() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* About Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#e8f8f6]/70 to-transparent -z-10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f8f6] text-[#1aaebf] text-xs font-bold uppercase tracking-widest">
              Our Journey
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
              Redefining Business Through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1fc7cf] via-[#56d3c9] to-[#2cb9cf]">
                Innovation & Purpose
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Skyen Systems is a global software development company dedicated to helping organizations modernize, digitize, and scale with advanced engineering and AI-driven solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-slate-900 underline decoration-[#1aaebf] decoration-4 underline-offset-8 text-center">A Founder&apos;s Vision</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded by a veteran educator with over 15 years of international expertise across Pakistan, Saudi Arabia, China, and Spain, we bridge the gap between human workflow and technological innovation.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We leverage this unique cross-cultural perspective to build software that isn&apos;t just code, but a strategic asset for growth and global connectivity.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center font-bold text-xs text-slate-500">
                    S
                  </div>
                ))}
              </div>
              <div className="text-sm font-semibold text-slate-500">
                120+ Successful Global Projects
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 border border-white/40 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 text-[#1fc7cf]/10">
              <Globe2 size={160} />
            </div>
            <div className="space-y-8 relative z-10">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-[#1aaebf] font-bold uppercase tracking-widest text-xs">
                  <Target size={16} />Our Mission
                </div>
                <p className="text-xl font-semibold text-slate-800 text-center">To empower organizations with intuitive, AI-enhanced software that drives growth.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-[#1aaebf] font-bold uppercase tracking-widest text-xs">
                  <Eye size={16} />Our Vision
                </div>
                <p className="text-xl font-semibold text-slate-800 text-center">A world where technology seamlessly supports every team&apos;s journey toward success.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-bold text-[#1aaebf] uppercase tracking-[0.2em]">Our Values</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900">The Principles That Guide Us</h3>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#e8f8f6] text-[#1aaebf] flex items-center justify-center mb-6 mx-auto">
                  <value.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{value.name}</h4>
                <p className="text-slate-500 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Capability */}
      <section className="container mx-auto px-6">
        <div className="glass rounded-[3rem] p-12 md:p-20 border border-white/20 shadow-xl overflow-hidden relative">
          <div className="absolute -bottom-20 -right-20 text-[#1fc7cf] opacity-5">
            <Users size={300} />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6 text-left">
              <h2 className="text-4xl font-bold text-slate-900">Our Diverse <br /> Expert Faculty</h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                We bring together specialized talent from across the globe, combining tactical expertise with strategic foresight.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {teamRoles.map((role, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 border border-white/40 shadow-sm transition-transform hover:scale-105">
                  <CheckCircle2 className="text-[#1aaebf] flex-shrink-0" size={20} />
                  <span className="text-sm font-semibold text-slate-700">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

