"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/landing/Reveal";
import { EditorialBoxButton } from "@/components/ui/EditorialBoxCta";
import { OFFICE_EMAIL } from "@/lib/company-offices";
import {
  CONTACT_COUNTRIES,
  CONTACT_PROJECT_STAGES,
  CONTACT_SERVICES,
} from "@/lib/contact-page-data";

const eyebrowClass =
  "text-[10px] font-semibold uppercase tracking-[0.24em] text-[#31C3C3]";
const fieldLabel = "text-xs font-semibold text-[#141414]";
const fieldInput =
  "w-full min-h-12 rounded-[0.875rem] border border-[#DADAD8] bg-white px-3.5 py-3 text-sm text-[#141414] outline-none transition-colors placeholder:text-[#ABABAB] focus:border-[#31C3C3] focus:ring-4 focus:ring-[#31C3C3]/10";

type FormState = {
  fullName: string;
  email: string;
  company: string;
  country: string;
  service: string;
  projectStage: string;
  message: string;
};

const initialForm: FormState = {
  fullName: "",
  email: "",
  company: "",
  country: "Australia",
  service: "Web Development",
  projectStage: "I have an idea",
  message: "",
};

export function ContactSimpleForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const projectDescription = [
      `Country: ${form.country}`,
      `Project stage: ${form.projectStage}`,
      form.company.trim() ? `Company: ${form.company.trim()}` : "",
      "",
      form.message.trim(),
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          company: form.company,
          email: form.email,
          service: form.service,
          budget: "Not specified",
          projectDescription,
          source: "Contact page",
        }),
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
            service_interest: form.service,
            budget_range: "Not specified",
          });
          if (typeof withDataLayer.gtag === "function") {
            withDataLayer.gtag("event", "contact_form_submit", {
              service_interest: form.service,
              budget_range: "Not specified",
            });
          }
        }
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="pb-10 pt-2 md:pb-12">
      <div className="mx-auto max-w-[980px] px-6">
        <Reveal>
          {status === "success" ? (
            <div className="rounded-[1.75rem] border border-[#DADAD8] bg-white px-8 py-14 text-center shadow-[0_18px_50px_rgba(10,24,42,0.08)] md:px-12">
              <p className={eyebrowClass}>Message Received</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-[#141414]">
                Thank you — we&apos;ll be in touch shortly.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#5C5C5C]">
                Our team will review your request and respond within four business hours when
                possible.
              </p>
              <EditorialBoxButton
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-8"
                variant="neutral"
              >
                Send Another Request
              </EditorialBoxButton>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-[1.75rem] border border-[#DADAD8] bg-white p-6 shadow-[0_18px_50px_rgba(10,24,42,0.08)] md:p-8"
            >
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="font-heading text-[clamp(1.5rem,3vw,1.75rem)] font-bold tracking-[-0.03em] text-[#141414]">
                    Send a Project Request
                  </h2>
                  <p className="mt-1.5 text-sm text-[#5C5C5C]">
                    Share a few details and our team will get back to you.
                  </p>
                </div>
                <span className="inline-flex shrink-0 self-start rounded-full bg-[#E8F6F5] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#087c7a]">
                  Response within 4 business hours
                </span>
              </div>

              <div className="grid gap-3.5 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <label htmlFor="contact-name" className={fieldLabel}>
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    autoComplete="name"
                    value={form.fullName}
                    onChange={update("fullName")}
                    placeholder="Your name"
                    className={fieldInput}
                  />
                </div>

                <div className="grid gap-1.5">
                  <label htmlFor="contact-email" className={fieldLabel}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="name@company.com"
                    className={fieldInput}
                  />
                </div>

                <div className="grid gap-1.5">
                  <label htmlFor="contact-company" className={fieldLabel}>
                    Company / Brand
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    autoComplete="organization"
                    value={form.company}
                    onChange={update("company")}
                    placeholder="Company or product name"
                    className={fieldInput}
                  />
                </div>

                <div className="grid gap-1.5">
                  <label htmlFor="contact-country" className={fieldLabel}>
                    Country
                  </label>
                  <select
                    id="contact-country"
                    value={form.country}
                    onChange={update("country")}
                    className={fieldInput}
                  >
                    {CONTACT_COUNTRIES.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-1.5">
                  <label htmlFor="contact-service" className={fieldLabel}>
                    Service Needed
                  </label>
                  <select
                    id="contact-service"
                    required
                    value={form.service}
                    onChange={update("service")}
                    className={fieldInput}
                  >
                    {CONTACT_SERVICES.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-1.5">
                  <label htmlFor="contact-stage" className={fieldLabel}>
                    Project Stage
                  </label>
                  <select
                    id="contact-stage"
                    value={form.projectStage}
                    onChange={update("projectStage")}
                    className={fieldInput}
                  >
                    {CONTACT_PROJECT_STAGES.map((stage) => (
                      <option key={stage} value={stage}>
                        {stage}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-1.5 sm:col-span-2">
                  <label htmlFor="contact-message" className={fieldLabel}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    minLength={20}
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us what you want to build, improve, or discuss."
                    className={`${fieldInput} min-h-[7.5rem] resize-y`}
                  />
                </div>
              </div>

              {status === "error" ? (
                <p className="mt-4 text-center text-sm text-[#141414]">
                  Something went wrong. Please try again or email{" "}
                  <Link href="mailto:info@skyensystems.com" className="text-[#31C3C3] hover:underline">
                    {OFFICE_EMAIL}
                  </Link>
                  .
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-4 inline-flex w-full min-h-[3.25rem] items-center justify-center bg-[#141414] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#FAFAF8] transition-colors hover:bg-[#31C3C3] hover:text-[#141414] disabled:opacity-50"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
                }}
              >
                {status === "submitting" ? "Sending…" : "Send Project Request"}
              </button>
              <p className="mt-3 text-center text-xs font-medium text-[#8A8A8A]">
                No long process — just send the basics and we&apos;ll guide the next step.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
