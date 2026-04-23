import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Skyen Solutions",
  description:
    "Read the Skyen Solutions Cookie Policy to understand what cookies we use, why we use them, and how you can manage your cookie preferences.",
};

export default function CookiesPage() {
  return (
    <div className="text-[#1a2050]">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-14 md:px-10">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Cookies Policy</h1>
          <p className="text-[#4d5f99]">
            <span className="font-semibold text-[#2b3c7e]">Last Updated:</span>{" "}
            12/4/2025
          </p>
        </header>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <p className="text-[#4d5f99]">
            This Cookies Policy explains how Skyen Solutions (&ldquo;we&rdquo;,
            &ldquo;our&rdquo;, &ldquo;us&rdquo;) uses cookies and similar
            technologies on our website. Skyen Solutions operates as a trade
            name registered under Qismat Ventures W.L.L., Commercial
            Registration No. 190698-1.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">1. What Are Cookies?</h2>
          <p className="text-[#4d5f99]">
            Cookies are small text files stored on your device to improve your
            browsing experience, remember preferences, and help us analyze site
            performance.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">2. Types of Cookies We Use</h2>

          <h3 className="text-xl font-semibold">2.1 Essential Cookies</h3>
          <p className="text-[#4d5f99]">Required for website operation.</p>
          <p className="text-[#4d5f99]">Examples:</p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Login functionality</li>
            <li>Form submissions</li>
            <li>Security features</li>
          </ul>

          <h3 className="text-xl font-semibold">2.2 Analytics Cookies</h3>
          <p className="text-[#4d5f99]">
            Used to understand how users interact with the Site.
          </p>
          <p className="text-[#4d5f99]">Examples:</p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Google Analytics</li>
            <li>Traffic measurement</li>
            <li>User behavior insights</li>
          </ul>

          <h3 className="text-xl font-semibold">2.3 Functional Cookies</h3>
          <p className="text-[#4d5f99]">
            Improve functionality and personalization.
          </p>
          <p className="text-[#4d5f99]">Examples:</p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Remembering preferences</li>
            <li>Saving form data</li>
          </ul>

          <h3 className="text-xl font-semibold">2.4 Marketing & Advertising Cookies</h3>
          <p className="text-[#4d5f99]">
            Used for retargeting and personalized ads.
          </p>
          <p className="text-[#4d5f99]">Examples:</p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Meta Pixel</li>
            <li>Google Ads cookies</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">3. How We Use Cookies</h2>
          <p className="text-[#4d5f99]">We use cookies to:</p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Enhance site performance</li>
            <li>Analyze user behavior</li>
            <li>Improve design and user experience</li>
            <li>Personalize content</li>
            <li>Manage marketing campaigns</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">4. Your Cookie Choices</h2>
          <p className="text-[#4d5f99]">You may:</p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Accept all cookies</li>
            <li>Reject non-essential cookies</li>
            <li>Change cookie preferences in your browser</li>
            <li>Delete cookies manually</li>
          </ul>
          <p className="text-[#4d5f99]">
            Disabling some cookies may impact website functionality.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">5. Third-Party Cookies</h2>
          <p className="text-[#4d5f99]">
            Some cookies belong to external services. We are not responsible for
            third-party cookie practices.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">6. Updates to This Policy</h2>
          <p className="text-[#4d5f99]">
            We may update this Cookies Policy occasionally. All changes will be
            posted on this page.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">7. Contact Us</h2>
          <p className="text-[#4d5f99]">For questions, contact:</p>
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
