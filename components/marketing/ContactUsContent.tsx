"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactUsContent() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    service: "",
    email: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const services = [
    "Website",
    "Mobile App",
    "Social Media Management",
    "Digital Marketing / SEO",
    "Brand Design",
    "Web Application / SaaS",
    "Founding Client Offer",
    "Not sure yet",
  ];

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
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="pb-24 pt-28">
      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Get in touch</p>
          <h1 className="text-4xl font-extrabold text-[#0F172A] md:text-6xl">Let&apos;s talk. No pitch. No pressure.</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            Tell us what you are building and we will recommend the most practical path forward.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="space-y-5 rounded-3xl border border-white/50 bg-white/75 p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-bold">Book or message</h2>
            <p className="text-slate-600">Book a free discovery call or send your requirements below.</p>
            <p className="text-sm text-slate-600">Email: hello@skyensystems.com</p>
            <p className="text-sm text-slate-600">Response time: within 24 hours</p>
            <a
              href="https://calendly.com/skyensystems/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-gradient-to-r from-[#6C63FF] to-[#00C2FF] px-5 py-3 font-semibold text-white"
            >
              Book Free Call
            </a>
            <div className="rounded-2xl border border-white/70 bg-white/80 px-4 py-6 text-sm text-slate-500">
              Calendly embed placeholder: connect your scheduling widget here.
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
                    <label className="mb-1 block text-sm font-semibold text-slate-700">Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your Name"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#6D5DF6]"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700">Business</label>
                    <input 
                      type="text" 
                      value={formData.business}
                      onChange={(e) => setFormData({...formData, business: e.target.value})}
                      placeholder="Business Name"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#6D5DF6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="email@example.com"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#6D5DF6]"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-slate-700">Service</label>
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
                    <label className="mb-1 block text-sm font-semibold text-slate-700">Budget</label>
                    <input 
                      type="text"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      placeholder="$750 - $1,500"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#6D5DF6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">Message</label>
                  <textarea 
                    required
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your project"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#6D5DF6]"
                  />
                </div>

                <div className="text-xs text-slate-500">
                  By sending this form, you agree to our <Link href="/terms" className="text-[#6D5DF6]">Terms</Link> and <Link href="/privacy-policy" className="text-[#6D5DF6]">Privacy Policy</Link>.
                </div>

                <button 
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-lg bg-gradient-to-r from-[#112B44] to-[#6D5DF6] py-3 font-semibold text-white transition-all hover:scale-[1.01] disabled:opacity-50"
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
