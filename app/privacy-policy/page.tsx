import type { Metadata } from "next";
import {
  OFFICE_EMAIL,
  OFFICE_EMAIL_MAILTO,
  PRIVACY_DATA_PROCESSING_LOCATIONS,
} from "@/lib/company-offices";

export const metadata: Metadata = {
  title: "Privacy Policy | Skyen Systems",
  description:
    "Read the Skyen Systems Privacy Policy covering data collection, usage, retention, security, and your privacy rights.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="text-[#1a2050]">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 pb-14 pt-28 md:px-10 md:pt-32">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-[#4d5f99]">
            <span className="font-semibold text-[#2b3c7e]">URL:</span> /privacy-policy
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
          <h2 className="text-2xl font-semibold">1. About This Policy</h2>
          <p className="text-[#4d5f99]">
            Skyen Systems (&apos;Company&apos;, &apos;we&apos;, &apos;us&apos;,
            &apos;our&apos;) is committed to protecting your personal
            information. This Privacy Policy explains how we collect, use,
            store, disclose, and protect your personal data when you visit
            skyensystems.com, use our services, or interact with our products
            (Studiely, Make My Lesson, Linguatude). By using our website or
            services, you agree to the practices described in this policy.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <h3 className="text-xl font-semibold">2.1 Information You Provide Directly</h3>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Contact information: name, email address, phone number, company name</li>
            <li>
              Project information: descriptions, requirements, files, and documents
              shared with us for project delivery
            </li>
            <li>
              Payment information: processed by Stripe/PayPal - we do not store card
              details directly
            </li>
            <li>Communications: emails, messages, meeting notes, and support tickets</li>
            <li>
              Account information (Phase 2 Client Portal): username, hashed
              password, preferences
            </li>
          </ul>

          <h3 className="text-xl font-semibold">
            2.2 Information Collected Automatically
          </h3>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>
              Technical data: IP address, browser type, device information,
              operating system
            </li>
            <li>
              Usage data: pages visited, time spent, click patterns, referral source
              URLs
            </li>
            <li>
              Cookie data: see our Cookies Policy (Section 7.3) for full details
            </li>
          </ul>

          <h3 className="text-xl font-semibold">2.3 Information from Third Parties</h3>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Google Analytics 4: aggregated, anonymised usage patterns</li>
            <li>
              Advertising platforms (Google Ads, Meta Ads): ad interaction data if
              you arrived via our ads
            </li>
            <li>
              App stores (Apple App Store, Google Play): aggregate download and rating
              data for Studiely
            </li>
          </ul>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>To provide and deliver the services you have engaged us for</li>
            <li>To communicate about your project, enquiries, and updates</li>
            <li>To process payments for services</li>
            <li>
              To improve our website, products, and services through anonymised
              analytics
            </li>
            <li>
              To send service communications - invoices, project updates, and support
              responses
            </li>
            <li>
              To send marketing communications only with your consent (unsubscribe any
              time)
            </li>
            <li>To comply with our legal obligations</li>
            <li>To protect our legitimate business interests and prevent fraud</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">4. How We Share Your Information</h2>
          <p className="text-[#4d5f99]">
            We do not sell your personal information. We share data only in these
            circumstances:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>
              Service providers: payment processors, email services, cloud storage,
              analytics - all bound by data processing agreements
            </li>
            <li>Legal requirements: if required by law, court order, or government authority</li>
            <li>
              Business transfers: if Skyen Systems is acquired, your data may transfer
              (you will be notified)
            </li>
            <li>With your consent: for any other sharing not described above</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">5. Data Retention</h2>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>
              Client project files and communications: 7 years (standard business
              record-keeping)
            </li>
            <li>Marketing data: until you unsubscribe or request deletion</li>
            <li>Website analytics: 26 months (Google Analytics default)</li>
            <li>Payment records: 7 years (tax and legal requirements)</li>
            <li>
              Account data (client portal): retained while account is active + 90
              days after closure
            </li>
          </ul>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">6. Your Rights</h2>
          <p className="text-[#4d5f99]">
            Depending on your location, you may have rights to: access data we hold
            about you; correction of inaccurate data; deletion (&apos;right to be
            forgotten&apos;); data portability; objection to marketing processing; and
            restriction of processing. To exercise any right:
            <a
              href={OFFICE_EMAIL_MAILTO}
              className="font-medium text-[#3150bf] hover:text-[#25357d]"
            >
              {" "}
              {OFFICE_EMAIL}
            </a>
            . We respond within 30 days.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">7. International Data Transfers</h2>
          <p className="text-[#4d5f99]">
            {PRIVACY_DATA_PROCESSING_LOCATIONS} We implement appropriate technical and
            organisational safeguards including standard contractual clauses where
            relevant. For EEA/UK users: we process data under contract performance,
            legitimate interests, and consent as applicable under GDPR and UK GDPR.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">8. Security</h2>
          <p className="text-[#4d5f99]">
            We implement encryption in transit (TLS/SSL), access controls, regular
            security reviews, and staff training. No internet transmission is 100%
            secure. We commit to prompt notification of any breach affecting your
            data.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">9. Children&apos;s Privacy</h2>
          <p className="text-[#4d5f99]">
            Our website and business services are not directed at children under 13.
            We do not knowingly collect personal information from children. If you
            believe we have done so inadvertently, contact
            <a
              href={OFFICE_EMAIL_MAILTO}
              className="font-medium text-[#3150bf] hover:text-[#25357d]"
            >
              {" "}
              {OFFICE_EMAIL}
            </a>{" "}
            immediately and we will delete the data. Note for Studiely: students
            under 13 must have verifiable parental consent.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">10. Updates to This Policy</h2>
          <p className="text-[#4d5f99]">
            Material changes will be communicated via email to clients and a notice
            on our website. The updated policy takes effect 30 days after
            notification unless legally required sooner.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">11. Contact — Privacy Matters</h2>
          <div className="space-y-3 text-[#4d5f99]">
            <p className="font-semibold text-[#2b3c7e]">Privacy Officer, Skyen Systems</p>
            <p>12/27 AA Commercial, Sector D, Bahria Town, Lahore, Punjab, Pakistan</p>
            <p>
              Email:{" "}
              <a
                href={OFFICE_EMAIL_MAILTO}
                className="font-medium text-[#3150bf] hover:text-[#25357d]"
              >
                {OFFICE_EMAIL}
              </a>
              {"  |  "}
              Phone: +92-423-5482980
            </p>
            <p>Response within 30 days.</p>
            <p className="pt-1 leading-relaxed">
              Head Office: Qismat Ventures W.L.L., Office 501, Building 1025, Road 3621, Block 436,
              Al-Seef, Manama, Kingdom of Bahrain — CR No. 190698-1
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
