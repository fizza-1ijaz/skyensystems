"use client";

import { useState } from "react";
import Link from "next/link";

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
      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Get in touch</p>
          <h1 className="text-4xl font-extrabold text-[#0F172A] md:text-6xl">Let&apos;s talk. No pitch. No pressure.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Tell us what you are building and we will recommend the most practical path forward.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="space-y-5 rounded-3xl border border-white/50 bg-white/75 p-8 text-center backdrop-blur-xl lg:text-left">
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <p className="text-slate-600">Share your requirements below and our team will reply by email.</p>
            <p className="text-sm text-slate-600">Email: Info@skyensystem.com</p>
            <p className="text-sm text-slate-600">
              We respond to all enquiries within 4 business hours during US Eastern business hours (Mon–Fri 9am–6pm ET).
            </p>
            <div className="rounded-2xl border border-white/70 bg-white/80 px-4 py-6 text-sm text-slate-500">
              We only handle enquiries via email form submissions.
            </div>
          </div>

          <div className="rounded-3xl border border-white/50 bg-white/80 p-6 shadow-sm backdrop-blur-xl">
            {status === "success" ? (
              <div className="space-y-4 py-20 text-center">
                <h2 className="text-3xl font-bold text-[#0F172A]">Message sent</h2>
                <p className="text-slate-600">We will be in touch shortly.</p>
                <button onClick={() => setStatus("idle")} className="font-semibold text-[#6D5DF6]">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#6D5DF6]"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Info@skyensystem.com"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#6D5DF6]"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label className="mb-1 block text-sm font-semibold text-slate-700">Company Name</label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Your company"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#6D5DF6]"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700">Service of Interest</label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#6D5DF6]"
                    >
                      <option value="">Select service</option>
                      {services.map((service) => <option key={service} value={service}>{service}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700">Budget Range</label>
                    <select
                      required
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#6D5DF6]"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => <option key={range} value={range}>{range}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">Project Description</label>
                  <textarea 
                    required
                    minLength={50}
                    rows={4} 
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}
                    placeholder="Tell us about your project (minimum 50 characters)"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#6D5DF6]"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">How did you find us?</label>
                  <select
                    required
                    value={formData.source}
                    onChange={(e) => setFormData({...formData, source: e.target.value})}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#6D5DF6]"
                  >
                    <option value="">Select one</option>
                    {sourceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                  </select>
                </div>

                <div className="text-xs text-slate-500">
                  By sending this form, you agree to our <Link href="/terms-of-service" className="text-[#6D5DF6]">Terms</Link> and <Link href="/privacy-policy" className="text-[#6D5DF6]">Privacy Policy</Link>.
                </div>

                <button 
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-lg bg-[#112B44] py-3 font-semibold text-white transition-all hover:scale-[1.01] hover:bg-[#1B3E5E] disabled:opacity-50"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
