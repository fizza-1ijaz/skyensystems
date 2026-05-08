import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Skyen Systems",
  description:
    "Read Skyen Systems Terms of Service covering project scope, payments, revisions, IP, confidentiality, liability, and termination.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="text-[#1a2050]">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 pb-14 pt-28 md:px-10 md:pt-32">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="text-[#4d5f99]">
            <span className="font-semibold text-[#2b3c7e]">URL:</span> /terms-of-service
          </p>
          <p className="text-[#4d5f99]">
            <span className="font-semibold text-[#2b3c7e]">Effective Date:</span>{" "}
            6 May 2026
          </p>
          <p className="text-[#4d5f99]">
            <span className="font-semibold text-[#2b3c7e]">Last Updated:</span>{" "}
            May 2026
          </p>
        </header>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">1. Agreement to Terms</h2>
          <p className="text-[#4d5f99]">
            These Terms of Service (&apos;Terms&apos;) govern your use of
            skyensystems.com and your engagement of Skyen Systems&apos; services. By
            using our website or engaging our services, you agree to these Terms. If
            you are entering into these Terms on behalf of a business, you represent
            that you have authority to bind that business.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">2. Our Services</h2>
          <p className="text-[#4d5f99]">
            Skyen Systems provides digital services including web development, mobile
            app development, UI/UX design, AI solutions, digital marketing, and
            dedicated team arrangements. Specific deliverables, timelines, fees, and
            conditions for each engagement are set out in a Project Agreement or
            Statement of Work (SOW) provided to you before work begins.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">3. Payment</h2>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Projects under $2,000: 100% payment before work begins</li>
            <li>
              Projects $2,000-$10,000: 50% deposit before work begins, 50% upon
              completion
            </li>
            <li>
              Projects over $10,000: milestone-based payment schedule as set out in
              the Project Agreement
            </li>
            <li>Dedicated teams: invoiced monthly in advance</li>
            <li>Overdue payments accrue interest at 1.5% per month after 30 days</li>
            <li>
              We reserve the right to pause work if payments are overdue by more than
              14 days
            </li>
          </ul>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">4. Revisions</h2>
          <p className="text-[#4d5f99]">
            Each pricing tier includes a specified number of revision rounds. A
            &apos;revision round&apos; means one consolidated set of feedback reviewed and
            implemented. Additional revisions beyond those included are charged at our
            standard hourly rate, quoted before implementation.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">5. Client Responsibilities</h2>
          <p className="text-[#4d5f99]">
            You agree to: provide required content, assets, and approvals within
            agreed timeframes; designate a single point of contact for project
            decisions; respond to review requests within 5 business days. Delays
            caused by late client responses may result in revised timelines or
            additional charges.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">6. Intellectual Property</h2>
          <h3 className="text-xl font-semibold">6.1 Work Product</h3>
          <p className="text-[#4d5f99]">
            Upon receipt of full payment, all custom work product created
            specifically for your project is assigned to you. We retain the right to
            display the work in our portfolio unless you request otherwise in writing.
          </p>
          <h3 className="text-xl font-semibold">6.2 Pre-existing IP</h3>
          <p className="text-[#4d5f99]">
            We retain ownership of our pre-existing tools, frameworks, libraries, and
            methodologies. Open-source components are licensed under their respective
            licences.
          </p>
          <h3 className="text-xl font-semibold">6.3 Your Content</h3>
          <p className="text-[#4d5f99]">
            You retain all rights to content and materials you provide. You grant us
            a limited licence to use this content solely for delivering your project.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">7. Confidentiality</h2>
          <p className="text-[#4d5f99]">
            We treat all client information as confidential and will not share it
            except as required to deliver your project (e.g., with subcontractors
            under equivalent confidentiality obligations).
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">8. Limitation of Liability</h2>
          <p className="text-[#4d5f99]">
            To the maximum extent permitted by law, Skyen Systems&apos; total
            liability for any claim shall not exceed the total fees paid by you in
            the 3 months preceding the claim. We are not liable for indirect,
            consequential, incidental, or special damages, including lost profits or
            data loss.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">9. Termination</h2>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Either party may terminate a Project Agreement with 30 days&apos; written notice</li>
            <li>Fees for completed work to date are payable upon termination</li>
            <li>
              Deposits are non-refundable once work has commenced (see Refund
              Policy, Section 7.4)
            </li>
            <li>Upon termination, we deliver all completed work to you within 14 days</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">10. Governing Law</h2>
          <p className="text-[#4d5f99]">
            These Terms are governed by the laws of Pakistan. Good-faith resolution
            is attempted before formal proceedings. Contact:
            <a
              href="mailto:info@skyensystem.com"
              className="font-medium text-[#3150bf] hover:text-[#25357d]"
            >
              {" "}
              Info@skyensystem.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
