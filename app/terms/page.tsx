import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Skyen Solutions",
  description:
    "Review the Skyen Solutions Terms of Use governing access to our website, services, payments, liability, and legal conditions.",
};

export default function TermsPage() {
  return (
    <div className="text-[#1a2050]">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-14 md:px-10">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Terms of Use</h1>
          <p className="text-[#4d5f99]">
            <span className="font-semibold text-[#2b3c7e]">Last Updated:</span>{" "}
            12/4/2025
          </p>
        </header>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <p className="text-[#4d5f99]">
            These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and
            use of the Skyen Solutions website (&ldquo;Site&rdquo;) and
            services. &ldquo;Skyen Solutions&rdquo; refers to services provided
            by Qismat Ventures W.L.L., a company registered in the Kingdom of
            Bahrain under CR 190698-1. By accessing this Site, you agree to
            these Terms.
          </p>
          <p className="text-[#4d5f99]">
            If you do not agree, do not use the website.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">1. Use of the Website</h2>
          <p className="text-[#4d5f99]">You agree to:</p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Use the site only for lawful purposes</li>
            <li>Not interfere with website functionality</li>
            <li>Not attempt to access restricted areas or systems</li>
            <li>Provide accurate information when submitting forms</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">2. Intellectual Property</h2>
          <p className="text-[#4d5f99]">
            All content, branding, graphics, text, images, logos, code, and
            materials on this Site are the property of Skyen Solutions or used
            with permission.
          </p>
          <p className="text-[#4d5f99]">You may not:</p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Copy</li>
            <li>Distribute</li>
            <li>Modify</li>
            <li>Republish</li>
            <li>Sell</li>
            <li>Create derivative works</li>
          </ul>
          <p className="text-[#4d5f99]">...without our written consent.</p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">3. Service Descriptions</h2>
          <p className="text-[#4d5f99]">
            We aim to provide accurate descriptions of our services (e.g., Odoo
            development, mobile apps, AI, digital marketing). However, we do
            not guarantee that content is free of errors or omissions.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">4. Quotes, Proposals & Payments</h2>
          <p className="text-[#4d5f99]">
            Any quotes or proposals provided via this Site or email:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Are estimates unless stated otherwise</li>
            <li>May change based on project scope</li>
            <li>Require agreed payment terms before work begins</li>
          </ul>
          <p className="text-[#4d5f99]">Late payments may result in:</p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Work delays</li>
            <li>Suspension of services</li>
            <li>Additional fees</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">5. User Submissions</h2>
          <p className="text-[#4d5f99]">
            By submitting ideas, materials, forms, project details, or files,
            you grant us permission to use them for service delivery and
            communication purposes.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">6. Third-Party Tools & Services</h2>
          <p className="text-[#4d5f99]">
            We may integrate third-party tools (e.g., hosting providers,
            analytics, payment gateways). We are not responsible for their
            performance or privacy practices.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
          <p className="text-[#4d5f99]">
            Skyen Solutions is not liable for any damages resulting from:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Website unavailability</li>
            <li>Errors in content</li>
            <li>Delays in service delivery</li>
            <li>Loss of data</li>
            <li>Third-party issues</li>
          </ul>
          <p className="text-[#4d5f99]">
            To the fullest extent permitted by law, our liability is limited to
            the amount paid for services rendered.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">8. Disclaimer</h2>
          <p className="text-[#4d5f99]">
            The Site is offered &ldquo;as is&rdquo; without warranties. We do
            not guarantee:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Error-free operation</li>
            <li>Uninterrupted access</li>
            <li>Accuracy of information</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">9. Termination</h2>
          <p className="text-[#4d5f99]">
            We may restrict or terminate access to our Site without notice if we
            believe you have violated these Terms.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">10. Governing Law</h2>
          <p className="text-[#4d5f99]">
            These Terms are governed by the laws of Kingdom of Bahrain,
            excluding conflict-of-law rules.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">11. Changes to Terms</h2>
          <p className="text-[#4d5f99]">
            We may update these Terms at any time. Changes will take effect when
            posted on this page.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">12. Contact Us</h2>
          <p className="text-[#4d5f99]">For questions about these Terms, contact:</p>
          <p className="text-[#4d5f99]">
            Email:{" "}
            <a
              href="mailto:info@skyensolutions.com"
              className="font-medium text-[#3150bf] hover:text-[#25357d]"
            >
              info@skyensolutions.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
