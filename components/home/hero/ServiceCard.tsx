"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({ service, index }: { service: any; index: number }) {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 0.4], [index % 2 === 0 ? -100 : 100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 0.4], [index % 2 === 0 ? -10 : 10, 0]);

    return (
        <>
        <motion.div
            ref={cardRef}
            style={{ x, opacity, scale, rotate }}
            className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
        >
            {/* The Content Card */}
            <div className="w-full md:w-1/2 group">
                <div className={`p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-slate-200/60 bg-white/40 backdrop-blur-3xl shadow-2xl shadow-slate-200/50 transition-all duration-700 hover:border-[#6C63FF22] hover:shadow-[#6C63FF11]`}>
                    <div className={`flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-br ${service.color} text-[#6C63FF] mb-6 md:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}>
                        <service.icon className="h-8 w-8 md:h-10 md:w-10" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 mb-4 md:mb-6">{service.title}</h2>
                    <p className="text-base md:text-lg leading-relaxed text-slate-600 mb-6 md:mb-8 font-medium">{service.desc}</p>
                    <div className="pt-6 md:pt-8 border-t border-dashed border-slate-200">
                        <div className="flex flex-wrap gap-2">
                            {service.features.split(' · ').map((f: string) => (
                                <span key={f} className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-wider">{f}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Visual Ecosystem Anchor (Spatial Integration) */}
            <div className="hidden md:flex w-full md:w-1/2 justify-center flex-col items-center">
                <div className="relative group">
                    <div className="absolute inset-0 bg-[#6C63FF] blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
                    
                    {/* Background Patterns for Desktop Ecosystem Anchor */}
                    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                        <svg className="w-full h-full opacity-10" viewBox="0 0 400 400">
                            <defs>
                                <pattern id="grid-desktop" width="50" height="50" patternUnits="userSpaceOnUse">
                                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1E3A8A" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid-desktop)" />
                            <circle cx="10%" cy="10%" r="60" fill="none" stroke="#1E40AF" strokeWidth="1" opacity="0.3" />
                            <circle cx="90%" cy="85%" r="40" fill="none" stroke="#6C63FF" strokeWidth="1" opacity="0.2" />
                            <polygon points="350,50 370,40 390,50 390,70 370,80 350,70" fill="none" stroke="#1E3A8A" strokeWidth="1" opacity="0.2" />
                        </svg>
                    </div>

                    <div className="relative border border-slate-200/40 rounded-3xl p-3 bg-white/10 backdrop-blur-md transition-all duration-700 hover:scale-105 hover:rotate-1">
                        <div className="h-72 w-[22rem] rounded-2xl border border-slate-200/60 overflow-hidden relative shadow-2xl">
                             <Image 
                                src={service.previewImage} 
                                alt={service.title}
                                width={350}
                                height={288}
                                quality={80}
                                priority={index < 2}
                                unoptimized={service.previewImage.endsWith('.jfif')}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                    </div>
                    {/* Floating infrastructure "connectors" */}
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-6 -right-6 h-14 w-14 rounded-2xl bg-white border border-slate-200 shadow-2xl flex items-center justify-center text-[#6C63FF] z-10"
                    >
                        <service.icon className="h-7 w-7" />
                    </motion.div>
                </div>
                {/* See More Link */}
                <Link 
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-[#6C63FF] font-semibold text-sm group/link transition-all duration-300 hover:gap-3"
                >
                    <span>See more</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </Link>
            </div>

            {/* Mobile "See More" Button */}
            <div className="md:hidden w-full flex justify-center mt-8 md:mt-12">
                <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#8B5CF6] text-white font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                    <span>View Service</span>
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300" />
                </Link>
            </div>
        </motion.div>

        {/* Mobile Service Image - Outside motion.div to avoid scroll animations */}
        <div className="md:hidden w-full flex justify-center mt-8 relative">
            {/* Background Patterns for Mobile Ecosystem */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-40">
                <svg className="w-full h-full opacity-20" viewBox="0 0 400 400">
                    <defs>
                        <pattern id="grid-mobile" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E3A8A" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-mobile)" />
                    <circle cx="20%" cy="30%" r="40" fill="none" stroke="#1E40AF" strokeWidth="1" opacity="0.3" />
                    <circle cx="80%" cy="70%" r="30" fill="none" stroke="#6C63FF" strokeWidth="1" opacity="0.2" />
                    <polygon points="300,50 330,35 360,50 360,80 330,95 300,80" fill="none" stroke="#1E3A8A" strokeWidth="1" opacity="0.2" />
                    <path d="M 50,300 Q 150,250 250,350" fill="none" stroke="#1E40AF" strokeWidth="1" opacity="0.2" />
                </svg>
            </div>

            <div className="relative group w-full max-w-sm px-4">
                <div className="absolute inset-0 bg-[#6C63FF] blur-[60px] opacity-15 group-hover:opacity-25 transition-opacity duration-700 rounded-2xl" />
                <div className="relative border border-slate-200/50 rounded-2xl p-2 bg-white/10 backdrop-blur-md transition-all duration-700">
                    <div className="h-48 w-full rounded-xl border border-slate-200/60 overflow-hidden relative shadow-lg">
                        <Image 
                            src={service.previewImage} 
                            alt={service.title}
                            width={400}
                            height={256}
                            quality={80}
                            priority={index < 2}
                            unoptimized={service.previewImage.endsWith('.jfif')}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
