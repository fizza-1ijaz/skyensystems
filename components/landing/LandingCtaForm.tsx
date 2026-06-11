"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { LANDING_CTA } from "@/lib/homepage-data";

const fieldLabel =
  "text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45";
const fieldInput =
  "w-full rounded-lg border border-white/10 bg-[#0f1724] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#31C3C3]/60";
const fieldSelect = `${fieldInput} cursor-pointer appearance-none`;

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
  email: string;
  service: string;
  targetMarket: string;
  message: string;
};

const initialForm: FormState = {
  fullName: "",
  email: "",
  service: "",
  targetMarket: "Australia",
  message: "",
};

export function LandingCtaForm() {
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
      `Target Market: ${form.targetMarket}`,
      "",
      form.message.trim(),
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          service: form.service,
          budget: "Not sure yet",
          projectDescription,
          source: "Homepage CTA",
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
            budget_range: "Not sure yet",
          });
          if (typeof withDataLayer.gtag === "function") {
            withDataLayer.gtag("event", "contact_form_submit", {
              service_interest: form.service,
              budget_range: "Not sure yet",
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

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-white/10 bg-[#1a2332]/90 p-6 text-center shadow-[0_32px_80px_-48px_rgba(0,0,0,0.65)] md:p-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#31C3C3]">
          Message received
        </p>
        <h3 className="mt-3 font-heading text-2xl font-bold text-white md:text-3xl">
          Thank you — we&apos;ll be in touch shortly.
        </h3>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-white/60">
          Our team will review your brief and respond within four business hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-[#31C3C3] transition-colors hover:text-[#2AB0B0]"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[#1a2332]/90 p-6 shadow-[0_32px_80px_-48px_rgba(0,0,0,0.65)] md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-heading text-xl font-bold text-white md:text-2xl">
          {LANDING_CTA.form.title}
        </h3>
        <span className="shrink-0 rounded-full border border-[#31C3C3]/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#31C3C3]">
          {LANDING_CTA.form.badge}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/55">{LANDING_CTA.form.subtitle}</p>

      <form onSubmit={handleSubmit} className="mt-8">
        <div className="grid gap-6 text-left sm:grid-cols-2">
          <Field label="Name" htmlFor="landing-cta-name">
            <input
              id="landing-cta-name"
              required
              type="text"
              autoComplete="name"
              value={form.fullName}
              onChange={update("fullName")}
              placeholder="Your name"
              className={fieldInput}
            />
          </Field>

          <Field label="Email" htmlFor="landing-cta-email">
            <input
              id="landing-cta-email"
              required
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={update("email")}
              placeholder="you@company.com"
              className={fieldInput}
            />
          </Field>

          <Field label="Service needed" htmlFor="landing-cta-service">
            <select
              id="landing-cta-service"
              required
              value={form.service}
              onChange={update("service")}
              className={fieldSelect}
            >
              <option value="">Select service</option>
              {LANDING_CTA.form.services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Target market" htmlFor="landing-cta-market">
            <select
              id="landing-cta-market"
              required
              value={form.targetMarket}
              onChange={update("targetMarket")}
              className={fieldSelect}
            >
              {LANDING_CTA.form.targetMarkets.map((market) => (
                <option key={market} value={market}>
                  {market}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Project details" htmlFor="landing-cta-message" className="sm:col-span-2">
            <textarea
              id="landing-cta-message"
              required
              minLength={50}
              rows={4}
              value={form.message}
              onChange={update("message")}
              placeholder="Tell us about your website, app, AI system, software platform, or marketing goal..."
              className={`${fieldInput} resize-none leading-relaxed`}
            />
          </Field>
        </div>

        {status === "error" ? (
          <p className="mt-6 text-center text-sm text-white/80">
            Something went wrong. Please try again or email{" "}
            <Link href="mailto:info@skyensystems.com" className="text-[#31C3C3] hover:underline">
              info@skyensystems.com
            </Link>
            .
          </p>
        ) : null}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-6 w-full rounded-lg bg-[#31C3C3] px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#141414] transition-colors hover:bg-[#2AB0B0] disabled:opacity-50"
        >
          {status === "submitting" ? "Sending…" : LANDING_CTA.form.submitLabel}
        </button>

        <p className="mt-4 text-center text-xs leading-relaxed text-white/40">
          {LANDING_CTA.form.footer}
        </p>
      </form>
    </div>
  );
}
