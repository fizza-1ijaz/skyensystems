"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ContactUsContent() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    service: "General Inquiry",
    email: "",
    phone: "",
    message: "",
    agreeTerms: false,
    agreePrivacy: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const services = [
    "General Inquiry",
    "LMS Solutions",
    "Odoo Implementation",
    "Mobile App Development",
    "AI Integration",
    "Web Development",
    "Digital Marketing",
    "Virtual Assistance",
    "Social Media Handling",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms || !formData.agreePrivacy) return;

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
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col gap-20 pb-24">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest">
              Contact Skyen Team
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
              Let&apos;s build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Future of Education
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Explore custom EdTech solutions, LMS, Odoo, and more with Skyen Solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Get in Touch</h2>
              <p className="text-slate-500">Reach out via any of these channels or fill the form.</p>
            </div>

            <div className="grid gap-6">
              {[
                { icon: Mail, label: "Email Us", value: "info@skyensolutions.com", color: "bg-blue-50 text-blue-600" },
                { icon: Phone, label: "Call Us", value: "00923316786786", color: "bg-indigo-50 text-indigo-600" },
                { icon: MapPin, label: "Office", value: "12/27 AA Commercial Sector D Bahria Town Lahore", color: "bg-cyan-50 text-cyan-600" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 p-6 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className={`p-4 rounded-2xl ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-lg font-bold text-slate-800">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 opacity-10">
                <MessageSquare size={200} />
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Direct Support</h3>
              <p className="text-slate-400 mb-6 relative z-10">We respond within 24 hours on business days at <strong>info@skyensolutions.com</strong>.</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@skyensolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 font-bold hover:gap-4 transition-all relative z-10"
              >
                Contact Directly <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[3rem] border border-white/40 shadow-2xl relative"
          >
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 space-y-6"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Thank You!</h2>
                <p className="text-slate-600">We have received your message. Typically, we respond within 24 hours on business days.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your Name" 
                      className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Organization (Optional)</label>
                    <input 
                      type="text" 
                      value={formData.organization}
                      onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      placeholder="Your Company" 
                      className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="email@example.com" 
                      className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone</label>
                    <input 
                      required
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+1 (555) 000-0000" 
                      className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Service of Interest</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none appearance-none cursor-pointer"
                  >
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                  <textarea 
                    required
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="How can we help you?" 
                    className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none"
                  />
                </div>

                {/* Required Checkboxes */}
                <div className="space-y-4 pt-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      required
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})}
                      className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-slate-600">
                      I agree to the <Link href="/terms" className="text-blue-600 font-bold hover:underline">Terms of Use</Link>.
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      required
                      checked={formData.agreePrivacy}
                      onChange={(e) => setFormData({...formData, agreePrivacy: e.target.checked})}
                      className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-slate-600">
                      I consent to the processing of my personal data as described in your <Link href="/privacy-policy" className="text-blue-600 font-bold hover:underline">Privacy Policy</Link> and <Link href="/gdpr" className="text-blue-600 font-bold hover:underline">GDPR Compliance Notice</Link>.
                    </span>
                  </label>
                </div>

                <button 
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                  <Send size={20} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
