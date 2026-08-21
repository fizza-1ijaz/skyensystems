import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Qismat Ventures",
  description:
    "Read the Qismat Ventures Privacy Policy covering data collection, App Tracking Transparency, advertising, children's privacy, and your rights.",
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
            July 23, 2026
          </p>
        </header>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <p className="text-[#4d5f99]">
            Qismat Ventures W.L.L (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;) develops and publishes mobile games for iOS through the Apple
            App Store. We are committed to protecting your privacy and handling your
            information responsibly. This Privacy Policy explains what information we
            collect, how we use it, and the choices available to you when using our
            games.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <p className="text-[#4d5f99]">
            Depending on the game and your device settings, we may collect the
            following information:
          </p>

          <h3 className="text-xl font-semibold">Automatically Collected Information</h3>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>
              Device identifiers (such as Apple&apos;s Identifier for Advertisers
              (IDFA), when permission is granted, and Identifier for Vendors (IDFV))
            </li>
            <li>IP address</li>
            <li>Device model and operating system version</li>
            <li>Language and region settings</li>
            <li>General location information (country or region)</li>
            <li>Crash reports and diagnostic information</li>
          </ul>

          <h3 className="text-xl font-semibold">Gameplay and Usage Information</h3>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Game progress and achievements</li>
            <li>Session duration and gameplay statistics</li>
            <li>In-game events and interactions</li>
            <li>Performance and stability data</li>
          </ul>

          <h3 className="text-xl font-semibold">Information You Provide</h3>
          <p className="text-[#4d5f99]">
            We may collect information that you voluntarily provide when you:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Contact customer support</li>
            <li>Participate in surveys or promotions</li>
            <li>Authenticate using Apple services such as Game Center</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
          <p className="text-[#4d5f99]">We use collected information to:</p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Operate, maintain, and improve our games</li>
            <li>Save your gameplay progress and preferences</li>
            <li>Provide customer support</li>
            <li>Analyze gameplay trends and improve user experience</li>
            <li>Detect bugs, fraud, and security issues</li>
            <li>Comply with legal obligations</li>
            <li>
              Display advertisements that may be personalized or non-personalized,
              depending on your permissions, age, region, and applicable laws
            </li>
          </ul>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">
            3. App Tracking Transparency (ATT)
          </h2>
          <p className="text-[#4d5f99]">
            For devices running iOS 14.5 or later, we request permission through
            Apple&apos;s App Tracking Transparency (ATT) framework before accessing
            the Identifier for Advertisers (IDFA) or tracking your activity across
            apps and websites owned by other companies.
          </p>
          <p className="text-[#4d5f99]">
            If you choose &quot;Ask App Not to Track,&quot; we will not use your IDFA for
            personalized advertising. You may still receive advertisements, but they
            will be contextual or non-personalized.
          </p>
          <p className="text-[#4d5f99]">
            You can change your tracking preference at any time in your device&apos;s
            Settings &gt; Privacy &amp; Security &gt; Tracking.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">4. Third-Party Services</h2>
          <p className="text-[#4d5f99]">
            Our games may use trusted third-party services to provide analytics,
            advertising, and other functionality. These providers may collect and
            process information according to their own privacy policies.
          </p>
          <p className="text-[#4d5f99]">Examples include:</p>

          <h3 className="text-xl font-semibold">Analytics</h3>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Google Firebase Analytics</li>
            <li>Unity Analytics</li>
          </ul>

          <h3 className="text-xl font-semibold">Advertising</h3>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Google AdMob</li>
            <li>Unity Ads</li>
            <li>AppLovin</li>
          </ul>

          <p className="text-[#4d5f99]">
            These third-party providers may act as independent data controllers for
            information they collect.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">5. Children&apos;s Privacy</h2>
          <p className="text-[#4d5f99]">
            Protecting children&apos;s privacy is important to us. We comply with the
            Children&apos;s Online Privacy Protection Act (COPPA), Apple&apos;s App Store
            Review Guidelines, and other applicable child privacy laws.
          </p>
          <p className="text-[#4d5f99]">
            For games directed toward children or mixed audiences:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>We may use an age-screening mechanism where appropriate.</li>
            <li>
              We do not knowingly collect personal information from children without
              verifiable parental consent where required by law.
            </li>
            <li>
              Personalized advertising is disabled for users identified as children.
            </li>
            <li>
              We do not collect precise location information from children.
            </li>
            <li>
              We limit data collection to what is necessary to support the game&apos;s
              functionality and comply with Apple&apos;s Kids Category requirements where
              applicable.
            </li>
          </ul>
          <p className="text-[#4d5f99]">
            If you believe your child has provided personal information without your
            consent, please contact us. We will promptly investigate and delete the
            information where required.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">6. Data Retention</h2>
          <p className="text-[#4d5f99]">
            We retain information only for as long as necessary to:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Provide and improve our services</li>
            <li>Resolve disputes</li>
            <li>Enforce our agreements</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="text-[#4d5f99]">
            When information is no longer required, it will be securely deleted or
            anonymized.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">7. Your Privacy Rights</h2>
          <p className="text-[#4d5f99]">
            Depending on your country or region, you may have rights regarding your
            personal information, including the right to:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Object to certain processing activities</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
          <p className="text-[#4d5f99]">
            To exercise these rights, please contact us using the details below.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">8. International Data Transfers</h2>
          <p className="text-[#4d5f99]">
            Your information may be transferred to and processed in countries other
            than your own, including countries where our service providers operate.
          </p>
          <p className="text-[#4d5f99]">
            Where required by applicable law, we implement appropriate safeguards to
            protect your information during international transfers.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">9. Data Security</h2>
          <p className="text-[#4d5f99]">
            We implement reasonable technical and organizational measures to protect
            your information against unauthorized access, alteration, disclosure, or
            destruction. However, no method of electronic storage or transmission over
            the internet is completely secure.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">10. Changes to This Privacy Policy</h2>
          <p className="text-[#4d5f99]">
            We may update this Privacy Policy from time to time to reflect changes in
            our services, legal requirements, or Apple&apos;s policies.
          </p>
          <p className="text-[#4d5f99]">
            The updated version will be posted with a revised Effective Date.
            Continued use of our games after changes become effective constitutes
            acceptance of the updated Privacy Policy.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">11. Contact Us</h2>
          <p className="text-[#4d5f99]">
            If you have any questions, requests, or concerns regarding this Privacy
            Policy or your personal information, please contact us:
          </p>
          <div className="space-y-3 text-[#4d5f99]">
            <p>
              <span className="font-semibold text-[#2b3c7e]">Company</span>
              <br />
              Qismat Ventures W.L.L
            </p>
            <p>
              <span className="font-semibold text-[#2b3c7e]">Email</span>
              <br />
              <a
                href="mailto:admin@qismatventures.com"
                className="font-medium text-[#3150bf] hover:text-[#25357d]"
              >
                admin@qismatventures.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-[#2b3c7e]">Address</span>
              <br />
              Office 501, Building 1025, Road 3621, Block 436, Al-Seef, Bahrain
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
