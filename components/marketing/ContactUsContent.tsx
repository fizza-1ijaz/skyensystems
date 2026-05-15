"use client";

import { useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import contactBoardAnimation from "@/public/anims/Man with contact us board.json";
import arrowDownAnimation from "@/public/anims/Arrow down.json";

const OFFICE_EMAIL = "Info@skyensystems.com";

export default function ContactUsContent() {
  const [formData, setFormData] = useState({
    fullName: "",
    service: "",
    email: "",
    company: "",
    budget: "",
    projectDescription: "",
    source: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const services = [
    "Web Development",
    "Mobile App",
    "UI/UX Design",
    "AI Solutions",
    "Digital Marketing",
    "Dedicated Teams",
    "Products",
    "Other",
  ];
  const budgetRanges = [
    "Under $2,000",
    "$2,000–$5,000",
    "$5,000–$15,000",
    "$15,000+",
    "Not sure yet",
  ];
  const sourceOptions = ["Google", "LinkedIn", "Referral", "Social Media", "Other"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        if (typeof window !== "undefined") {
          const withDataLayer = window as Window & {
            dataLayer?: Array<Record<string, string>>;
            gtag?: (...args: unknown[]) => void;
          };
          withDataLayer.dataLayer = withDataLayer.dataLayer || [];
          withDataLayer.dataLayer.push({
            event: "contact_form_submit",
            service_interest: formData.service,
            budget_range: formData.budget,
          });
          if (typeof withDataLayer.gtag === "function") {
            withDataLayer.gtag("event", "contact_form_submit", {
              service_interest: formData.service,
              budget_range: formData.budget,
            });
          }
        }
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="pb-8 pt-12">
      <section className="relative px-6 py-16 md:px-16 overflow-hidden">
        <div className="fixed right-[-20px] top-24 md:top-28 lg:top-32 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 pointer-events-none z-10">
          <Lottie animationData={contactBoardAnimation} loop={true} />
        </div>
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Get in touch</p>
          <h1 className="text-4xl font-extrabold text-[#0F172A] md:text-6xl">Let&apos;s talk. No pitch. No pressure.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Tell us what you are building and we will recommend the most practical path forward.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8">
            {/* Form first - full width */}
            <div className="rounded-[2.5rem] border-8 border-[#8B9FD9] overflow-hidden shadow-2xl w-full">
              {/* Window chrome */}
              <div className="bg-[#6B7CB8] px-6 py-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white/40"></div>
                <div className="w-3 h-3 rounded-full bg-white/40"></div>
                <div className="w-3 h-3 rounded-full bg-white/40"></div>
              </div>

              {/* Form content */}
              <div className="bg-white">
                {status === "success" ? (
                  <div className="space-y-4 py-20 px-8 text-center">
                    <h2 className="text-3xl font-bold text-[#0F172A]">Message sent</h2>
                    <p className="text-slate-600">We will be in touch shortly.</p>
                    <button onClick={() => setStatus("idle")} className="font-semibold text-[#6D5DF6]">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-4 md:p-6">
                    <div className="space-y-3">
                      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
                        <div>
                          <label className="mb-0.5 block text-xs font-semibold text-slate-700">Full Name</label>
                          <input 
                            required
                            type="text" 
                            value={formData.fullName}
                            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                            placeholder="Your name"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#6D5DF6]"
                          />
                        </div>
                        <div>
                          <label className="mb-0.5 block text-xs font-semibold text-slate-700">Email Address</label>
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="your@email.com"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#6D5DF6]"
                          />
                        </div>
                        <div>
                          <label className="mb-0.5 block text-xs font-semibold text-slate-700">Company</label>
                          <input 
                            type="text" 
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            placeholder="Your company"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#6D5DF6]"
                          />
                        </div>
                        <div>
                          <label className="mb-0.5 block text-xs font-semibold text-slate-700">Service</label>
                          <select
                            required
                            value={formData.service}
                            onChange={(e) => setFormData({...formData, service: e.target.value})}
                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#6D5DF6]"
                          >
                            <option value="">Select</option>
                            {services.map((service) => <option key={service} value={service}>{service}</option>)}
                          </select>
                        </div>
                      </div>

                      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                        <div>
                          <label className="mb-0.5 block text-xs font-semibold text-slate-700">Budget Range</label>
                          <select
                            required
                            value={formData.budget}
                            onChange={(e) => setFormData({...formData, budget: e.target.value})}
                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#6D5DF6]"
                          >
                            <option value="">Select budget</option>
                            {budgetRanges.map((range) => <option key={range} value={range}>{range}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="mb-0.5 block text-xs font-semibold text-slate-700">How found us?</label>
                          <select
                            required
                            value={formData.source}
                            onChange={(e) => setFormData({...formData, source: e.target.value})}
                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#6D5DF6]"
                          >
                            <option value="">Select</option>
                            {sourceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="mb-0.5 block text-xs font-semibold text-slate-700">Project Description</label>
                          <textarea 
                            required
                            minLength={50}
                            rows={2} 
                            value={formData.projectDescription}
                            onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}
                            placeholder="Tell us about your project"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#6D5DF6] resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="my-3 border-t border-slate-200"></div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-xs text-slate-500">
                        By sending this form, you agree to our <Link href="/terms-of-service" className="text-[#6D5DF6]">Terms</Link> and <Link href="/privacy-policy" className="text-[#6D5DF6]">Privacy Policy</Link>.
                      </div>

                      <div className="relative flex-shrink-0">
                        <button 
                          type="submit"
                          disabled={status === "submitting"}
                          className="flex items-center gap-2 rounded-lg bg-[#112B44] px-8 py-2 text-sm font-semibold text-white transition-all hover:scale-[1.01] hover:bg-[#1B3E5E] disabled:opacity-50 whitespace-nowrap"
                        >
                          {status === "submitting" ? "Sending..." : "Send"}
                          <span className="text-lg leading-none">→</span>
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Info card below the form - visually enhanced */}
            <div className="rounded-3xl bg-gradient-to-br from-[#e6f7ff] to-[#d6efff] p-6 shadow-lg border border-transparent">
              <div className="mb-6 text-center lg:text-left">
                <h2 className="text-2xl font-extrabold text-[#0F172A]">Send us a message</h2>
                <p className="mt-2 text-slate-700">Share your requirements below and our team will reply by email.</p>
              </div>

              <div className="grid gap-4 lg:grid-cols-3 lg:items-start lg:gap-6">
                <div className="flex flex-col gap-4">
                  <div className="w-full rounded-xl bg-white p-4 shadow-sm relative overflow-visible text-center lg:text-left">
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Email</p>
                    <p className="mt-1 font-semibold text-[#0F172A]">{OFFICE_EMAIL}</p>

                    <div className="absolute right-4 top-1 md:top-1/2 md:-translate-y-1/2 w-8 h-8 pointer-events-none transform rotate-90 hidden sm:block">
                      <Lottie animationData={arrowDownAnimation} loop={true} />
                    </div>
                  </div>

                  <div className="w-full rounded-xl bg-white p-4 shadow-sm text-center lg:text-left">
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Response Time</p>
                    <p className="mt-1 font-semibold text-[#0F172A]">
                      We aim to reply within four business hours when possible.
                    </p>
                  </div>

                  <div className="w-full rounded-xl bg-white p-4 shadow-sm text-center lg:text-left">
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Important</p>
                    <p className="mt-1 text-slate-600">
                      Preferred contact method is via the form above. You may also reach us by phone during office hours.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm text-left text-sm text-slate-600">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Bahrain Head Office</p>
                  <div className="mt-3 space-y-1.5 leading-relaxed">
                    <p className="font-semibold text-[#0F172A]">Qismat Ventures W.L.L. (CR No. 190698-1)</p>
                    <p>Office 501, Building 1025, Road 3621, Block 436</p>
                    <p>Al-Seef, Manama, Kingdom of Bahrain — 0428</p>
                    <p>Phone: +973 8048045</p>
                    <p>Email: {OFFICE_EMAIL}</p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm text-left text-sm text-slate-600">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Pakistan Office (PSEB Registered)
                  </p>
                  <div className="mt-3 space-y-1.5 leading-relaxed">
                    <p>12/27 AA Commercial, Sector D, Bahria Town</p>
                    <p>Lahore, Punjab, Pakistan</p>
                    <p>Phone: +92-423-5482980</p>
                    <p>Email: {OFFICE_EMAIL}</p>
                    <p>Hours: Monday–Friday, 9:00am–6:00pm PKT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
