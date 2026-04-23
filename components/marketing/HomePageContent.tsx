"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Code, 
  Cpu, 
  Smartphone, 
  LineChart, 
  Rocket, 
  Shield, 
  Users, 
  Zap,
  CheckCircle2,
  Globe2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Custom Software",
    description: "Tailored platforms built for your specific business workflows.",
    href: "/services#custom-learning-management-systems-lms",
    icon: Code,
    color: "bg-[#1fc7cf]",
    size: "col-span-2 md:col-span-1 row-span-2",
  },
  {
    title: "AI & Automation",
    description: "Unlock efficiency with intelligent insights.",
    href: "/services#intelligent-assistants-chatbots",
    icon: Cpu,
    color: "bg-indigo-500",
    size: "col-span-2 md:col-span-1 row-span-1",
  },
  {
    title: "Mobile Apps",
    description: "High-performance iOS and Android experiences.",
    href: "/services#mobile-first-apps-ios-android",
    icon: Smartphone,
    color: "bg-cyan-500",
    size: "col-span-2 md:col-span-1 row-span-1",
  },
  {
    title: "Tech Consulting",
    description: "Expert guidance on scalability and architecture.",
    href: "/services#strategic-technology-consulting",
    icon: LineChart,
    color: "bg-violet-500",
    size: "col-span-2 md:col-span-2 row-span-1",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "Deep dive into your goals and technical needs.",
    icon: Rocket,
  },
  {
    step: "02",
    title: "Design",
    description: "Architecting user-focused scalable systems.",
    icon: Shield,
  },
  {
    step: "03",
    title: "Develop",
    description: "Building secure, high-performance solutions.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Deploy",
    description: "Continuous support and optimization.",
    icon: Globe2,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function HomePageContent() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-48 md:pb-32">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-[#1fc7cf] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-[#56d3c9] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#34bccf] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 text-balance">
              Building the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1fc7cf] via-[#56d3c9] to-[#2cb9cf] underline decoration-[#8ce2d9]">
                Scalable Software
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We engineer high-performance digital solutions—from custom AI platforms to seamless mobile apps—helping forward-thinking businesses scale with confidence and precision.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                href="/contact" 
                className="group relative flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-white font-bold transition-all hover:bg-slate-800 hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="#services" 
                className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-slate-900 font-bold border border-slate-200 transition-all hover:bg-slate-50 w-full sm:w-auto"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6">
        <div className="glass rounded-3xl p-8 md:p-12 border border-white/40 shadow-2xl shadow-[#1fc7cf]/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Projects Delivered", value: "120+" },
            { label: "Countries Served", value: "18" },
            { label: "Client Satisfaction", value: "98%" },
            { label: "Expert Engineers", value: "45+" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Bento Grid */}
      <section id="services" className="container mx-auto px-6 space-y-12">
        <div className="max-w-2xl">
          <h2 className="text-sm font-bold text-[#1aaebf] uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900">Comprehensive Solutions for Modern Businesses</h3>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-[#8ce2d9] ${service.size}`}
            >
              <div className={`inline-flex p-3 rounded-2xl ${service.color} text-white mb-6 shadow-lg shadow-inherit/20`}>
                <service.icon size={28} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
              
              <Link href={service.href} className="inline-flex items-center text-sm font-bold text-[#1aaebf] gap-1 group/link">
                Learn Details 
                <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
              </Link>

              {/* Decorative Background Icon */}
              <service.icon size={120} className="absolute -bottom-10 -right-10 text-slate-50 opacity-10 transition-transform group-hover:scale-110" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-900 py-24 rounded-[3rem] mx-4 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mb-16">
            <h2 className="text-sm font-bold text-[#67d8cf] uppercase tracking-[0.2em] mb-4">The Workflow</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">How We Turn Ideas into Assets</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0" />
            
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 space-y-6 group"
              >
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#67d8cf] mb-2 transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <step.icon size={32} />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#1fc7cf] text-white flex items-center justify-center text-xs font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-12 border border-white/20 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 text-[#1fc7cf] opacity-10">
            <CheckCircle2 size={120} />
          </div>
          
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Trusted by Businesses Worldwide</h2>
          <p className="text-xl italic text-slate-600 leading-relaxed relative z-10">
            &ldquo;The LMS Skyen built didn&apos;t just digitize our courses-it transformed how our teachers create and students engage. It feels like it was built by someone who&apos;s actually been in a classroom.&rdquo;
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#e8f8f6] flex items-center justify-center text-[#1aaebf]">
              <Users size={24} />
            </div>
            <div className="text-left">
              <div className="font-bold text-slate-900">Dr. Sarah Chen</div>
              <div className="text-sm text-slate-500">Director of Digital Learning, Future Academy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6">
        <div className="relative overflow-hidden bg-[#1a2050] rounded-[3rem] p-12 md:p-24 text-center text-white">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Ready to Build Something <br /> Powerful?</h2>
            <p className="text-xl text-[#c8efeb] max-w-xl mx-auto">
              Join dozens of industry leaders who have scaled their operations with Skyen Systems.
            </p>
            <Link 
              href="/contact-us" 
              className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-5 text-[#1a2050] font-bold transition-all hover:bg-[#e8f8f6] hover:scale-105 active:scale-95 shadow-xl"
            >
              Start Your Journey Today
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

