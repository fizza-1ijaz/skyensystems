"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-2xl border border-[#d4ddf2] bg-white p-7 shadow-sm">
      <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-[#3f4670]">Name</span>
          <input className="rounded-xl border border-[#d1daf0] px-4 py-3" required />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-[#3f4670]">Organization</span>
          <input className="rounded-xl border border-[#d1daf0] px-4 py-3" required />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-[#3f4670]">Service</span>
          <input className="rounded-xl border border-[#d1daf0] px-4 py-3" required />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-[#3f4670]">Email</span>
          <input
            type="email"
            className="rounded-xl border border-[#d1daf0] px-4 py-3"
            required
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-[#3f4670]">Phone</span>
          <input className="rounded-xl border border-[#d1daf0] px-4 py-3" required />
        </label>
        <label className="flex flex-col gap-2 md:col-span-2">
          <span className="text-sm font-medium text-[#3f4670]">Message</span>
          <textarea
            className="min-h-32 rounded-xl border border-[#d1daf0] px-4 py-3"
            required
          />
        </label>
        <button
          type="submit"
          className="rounded-full bg-[#212241] px-6 py-3 font-semibold text-white transition hover:bg-[#2b2f5a] md:col-span-2 md:w-fit"
        >
          Send Message
        </button>
      </form>
      {submitted ? (
        <p className="mt-5 rounded-xl border border-[#cad6f2] bg-[#f4f7ff] px-4 py-3 text-[#2b4c9c]">
          Thank you. We&apos;ll respond within 24 hours.
        </p>
      ) : null}
    </div>
  );
}
