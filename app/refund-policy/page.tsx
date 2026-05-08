import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Skyen Systems",
  description:
    "Read the Skyen Systems Refund Policy covering deposits, work in progress, quality issues, dedicated teams, and refund request timelines.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="text-[#1a2050]">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 pb-14 pt-28 md:px-10 md:pt-32">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Refund Policy</h1>
          <p className="text-[#4d5f99]">
            <span className="font-semibold text-[#2b3c7e]">URL:</span> /refund-policy
          </p>
          <p className="text-[#4d5f99]">
            <span className="font-semibold text-[#2b3c7e]">Effective Date:</span>{" "}
            6 May 2026
          </p>
        </header>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">Our Commitment</h2>
          <p className="text-[#4d5f99]">
            We are committed to delivering excellent work. If we fail to deliver
            what was agreed, we will make it right - through additional work, partial
            refunds, or full refunds where appropriate.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">Deposits</h2>
          <p className="text-[#4d5f99]">
            All project deposits are non-refundable once work has commenced. A
            deposit represents our commitment to allocate team time and resources to
            your project. If you cancel before any work begins, we refund the deposit
            in full within 14 business days.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">Work in Progress</h2>
          <p className="text-[#4d5f99]">
            If you cancel after work has begun, you are entitled to delivery of all
            completed work as of the cancellation date. Payment for work completed to
            that date is due within 7 business days of cancellation.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">Quality Issues</h2>
          <p className="text-[#4d5f99]">
            If work delivered does not meet the specifications agreed in your Project
            Agreement, we will redo the work at no additional charge until it meets
            the agreed specifications. If after exhausting our revision commitment the
            work still does not meet agreed specifications, we will provide a partial
            or full refund as appropriate.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">Dedicated Teams</h2>
          <p className="text-[#4d5f99]">
            Monthly billing in advance. 30 days&apos; written notice required to
            terminate. Final month&apos;s fee is due in full. No refund available for
            the final month&apos;s fee once billed.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">Digital Products</h2>
          <p className="text-[#4d5f99]">
            In-app purchases and subscriptions are subject to Apple App Store / Google
            Play refund policies. For issues with our products:
            <a
              href="mailto:info@skyensystem.com"
              className="font-medium text-[#3150bf] hover:text-[#25357d]"
            >
              {" "}
              Info@skyensystem.com
            </a>
            .
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">Requesting a Refund</h2>
          <p className="text-[#4d5f99]">
            Email
            <a
              href="mailto:info@skyensystem.com"
              className="font-medium text-[#3150bf] hover:text-[#25357d]"
            >
              {" "}
              Info@skyensystem.com
            </a>{" "}
            with your project reference and reason. Response within 5 business days.
            Approved refunds processed within 14 business days.
          </p>
        </section>
      </main>
    </div>
  );
}
