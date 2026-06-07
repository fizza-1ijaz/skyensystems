"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { Reveal } from "@/components/landing/Reveal";
import { EditorialBoxButton } from "@/components/ui/EditorialBoxCta";
import {
  BUDGET_RANGES,
  PROJECT_TYPES,
  TIMELINE_OPTIONS,
} from "@/lib/contact-page-data";

const fieldLabel =
  "text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8A8A8A]";
const fieldInput =
  "w-full border-0 border-b border-[#DADAD8] bg-transparent py-3.5 text-sm text-[#141414] outline-none transition-colors placeholder:text-[#ABABAB] focus:border-[#31C3C3]";
const fieldSelect = `${fieldInput} cursor-pointer appearance-none rounded-none`;

function Field({
  label,
  htmlFor,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className={fieldLabel}>
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

type FormState = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

const initialForm: FormState = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
};

export function ContactInquiryForm() {
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

    const projectDescription = [`Timeline: ${form.timeline}`, "", form.message.trim()].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          company: form.company,
          email: form.email,
          phone: form.phone,
          service: form.projectType,
          budget: form.budget,
          timeline: form.timeline,
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
            service_interest: form.projectType,
            budget_range: form.budget,
          });
          if (typeof withDataLayer.gtag === "function") {
            withDataLayer.gtag("event", "contact_form_submit", {
              service_interest: form.projectType,
              budget_range: form.budget,
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
    <section id="inquiry" className="bg-[#F4F4F2] pb-20 pt-0 md:pb-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mx-auto flex w-full max-w-[800px] flex-col items-center text-center">
          <Reveal className="w-full">
            <h2 className="editorial-section-title text-balance text-[#141414]">
              Tell us about your project.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#5C5C5C] md:text-base">
              The more context you share, the more useful our first response will be. We typically
              reply within four business hours.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-12 w-full md:mt-14">
            {status === "success" ? (
              <div className="border border-[#DADAD8] bg-[#FAFAF8] px-10 py-14 text-center shadow-[0_24px_60px_-48px_rgba(20,20,20,0.18)] md:px-16 md:py-16">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#31C3C3]">
                  Message received
                </p>
                <h3 className="mt-3 font-heading text-3xl font-bold text-[#141414]">
                  Thank you — we&apos;ll be in touch shortly.
                </h3>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#5C5C5C]">
                  A member of our team will review your inquiry and respond by email. If your
                  project is time-sensitive, write directly to{" "}
                  <Link href="mailto:info@skyensystems.com" className="text-[#31C3C3] hover:underline">
                    info@skyensystems.com
                  </Link>
                  .
                </p>
                <EditorialBoxButton
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8"
                  variant="neutral"
                >
                  Send another inquiry
                </EditorialBoxButton>
              </div>
            ) : (
              <div className="border border-[#DADAD8] bg-[#FAFAF8] px-5 py-10 shadow-[0_24px_60px_-48px_rgba(20,20,20,0.18)] sm:px-8 sm:py-12 md:px-14 md:py-16 lg:px-16">
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-10 text-left md:grid-cols-2 md:gap-x-10 md:gap-y-11">
                    <Field label="Name" htmlFor="contact-name">
                      <input
                        id="contact-name"
                        required
                        type="text"
                        autoComplete="name"
                        value={form.fullName}
                        onChange={update("fullName")}
                        placeholder="Your full name"
                        className={fieldInput}
                      />
                    </Field>

                    <Field label="Company" htmlFor="contact-company">
                      <input
                        id="contact-company"
                        type="text"
                        autoComplete="organization"
                        value={form.company}
                        onChange={update("company")}
                        placeholder="Organization name"
                        className={fieldInput}
                      />
                    </Field>

                    <Field label="Email" htmlFor="contact-email">
                      <input
                        id="contact-email"
                        required
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="you@company.com"
                        className={fieldInput}
                      />
                    </Field>

                    <Field label="Phone" htmlFor="contact-phone">
                      <input
                        id="contact-phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        placeholder="Optional"
                        className={fieldInput}
                      />
                    </Field>

                    <Field label="Project type" htmlFor="contact-type">
                      <select
                        id="contact-type"
                        required
                        value={form.projectType}
                        onChange={update("projectType")}
                        className={fieldSelect}
                      >
                        <option value="">Select type</option>
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Budget range" htmlFor="contact-budget">
                      <select
                        id="contact-budget"
                        required
                        value={form.budget}
                        onChange={update("budget")}
                        className={fieldSelect}
                      >
                        <option value="">Select range</option>
                        {BUDGET_RANGES.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Timeline" htmlFor="contact-timeline" className="md:col-span-2">
                      <select
                        id="contact-timeline"
                        required
                        value={form.timeline}
                        onChange={update("timeline")}
                        className={fieldSelect}
                      >
                        <option value="">Select timeline</option>
                        {TIMELINE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Message" htmlFor="contact-message" className="md:col-span-2">
                      <textarea
                        id="contact-message"
                        required
                        minLength={50}
                        rows={5}
                        value={form.message}
                        onChange={update("message")}
                        placeholder="Describe your product, goals, constraints, and what success looks like."
                        className={`${fieldInput} resize-none leading-relaxed`}
                      />
                    </Field>
                  </div>

                  {status === "error" ? (
                    <p className="mt-8 text-center text-sm text-[#141414]">
                      Something went wrong. Please try again or email{" "}
                      <Link href="mailto:info@skyensystems.com" className="text-[#31C3C3] hover:underline">
                        info@skyensystems.com
                      </Link>
                      .
                    </p>
                  ) : null}

                  <div className="mt-12 flex flex-col items-center border-t border-[#DADAD8] pt-10">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex w-full items-center justify-center sm:w-auto sm:min-w-[240px] bg-[#141414] px-10 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#FAFAF8] transition-colors hover:bg-[#31C3C3] hover:text-[#141414] disabled:opacity-50"
                      style={{
                        clipPath:
                          "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
                      }}
                    >
                      {status === "submitting" ? "Sending…" : "Submit inquiry"}
                    </button>

                    <p className="mt-6 max-w-sm text-center text-xs leading-relaxed text-[#8A8A8A]">
                      By submitting, you agree to our{" "}
                      <Link href="/terms-of-service" className="text-[#141414] underline-offset-2 hover:underline">
                        Terms
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy-policy" className="text-[#141414] underline-offset-2 hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
