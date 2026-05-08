import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR COMPLIANCE NOTICE | Skyen Solutions",
  description:
    "Review the GDPR Compliance Notice from Skyen Solutions to understand EU/EEA data rights, legal bases for processing, and international transfer safeguards.",
  alternates: {
    canonical: "/gdpr",
  },
};

export default function GdprPage() {
  return (
    <div className="text-[#1a2050]">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 pb-14 pt-28 md:px-10 md:pt-32">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">
            GDPR Compliance Notice
          </h1>
          <p className="text-[#4d5f99]">
            <span className="font-semibold text-[#2b3c7e]">Effective Date:</span>{" "}
            6 May 2026
          </p>
          <p className="text-[#4d5f99]">
            <span className="font-semibold text-[#2b3c7e]">Last Updated:</span>{" "}
            12/4/2025
          </p>
        </header>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <p className="text-[#4d5f99]">
            Skyen Solutions is committed to protecting the personal data of users
            located in the European Union (EU) and European Economic Area (EEA)
            in accordance with the General Data Protection Regulation (GDPR).
            &ldquo;Skyen Solutions&rdquo; refers to services provided by Qismat
            Ventures W.L.L., a company registered in the Kingdom of Bahrain
            under CR 190698-1.
          </p>
          <p className="text-[#4d5f99]">
            This notice explains your rights under GDPR and how we process EU
            users&apos; data.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">
            1. Legal Basis for Processing Personal Data
          </h2>
          <p className="text-[#4d5f99]">
            We collect and process personal data under the following legal bases
            defined by GDPR:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-[#4d5f99]">
            <li>
              Contractual necessity: To provide requested services, respond to
              inquiries, and communicate project-related updates.
            </li>
            <li>
              Legitimate interests: To improve our website, analyze user
              behavior, and ensure security.
            </li>
            <li>
              Consent: For marketing emails, cookies, analytics, and optional
              features.
            </li>
            <li>
              Legal obligation: To comply with tax, accounting, and regulatory
              requirements.
            </li>
          </ul>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">2. Your GDPR Rights</h2>
          <p className="text-[#4d5f99]">
            If you are located in the EU/EEA, you have the right to:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Access your personal data</li>
            <li>Request correction (rectification)</li>
            <li>Request deletion (right to be forgotten)</li>
            <li>Restrict processing of your data</li>
            <li>Object to processing for marketing or profiling</li>
            <li>Withdraw consent at any time</li>
            <li>
              Data portability - receive a copy of your data in machine-readable
              format
            </li>
          </ul>
          <p className="text-[#4d5f99]">Submit requests to:</p>
          <p className="text-[#4d5f99]">
            Email:{" "}
            <a
              href="mailto:info@skyensystem.com"
              className="font-medium text-[#3150bf] hover:text-[#25357d]"
            >
              Info@skyensystem.com
            </a>
          </p>
          <p className="text-[#4d5f99]">
            We may request identity verification before fulfilling requests.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">3. International Transfers</h2>
          <p className="text-[#4d5f99]">
            Your data may be transferred to countries outside the EU/EEA where
            our servers or partners operate.
          </p>
          <p className="text-[#4d5f99]">
            We ensure that such transfers are protected by:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Standard Contractual Clauses (SCC)</li>
            <li>Adequate safeguards</li>
            <li>Data minimization principles</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">4. Data Retention</h2>
          <p className="text-[#4d5f99]">
            We retain data only for as long as necessary for the purposes
            described in our Privacy Policy or as required by law.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">5. Right to Lodge a Complaint</h2>
          <p className="text-[#4d5f99]">
            If you believe your GDPR rights have been violated, you may file a
            complaint with your local Data Protection Authority (DPA).
          </p>
        </section>
      </main>
    </div>
  );
}
