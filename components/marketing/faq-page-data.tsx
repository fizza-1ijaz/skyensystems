import type { ReactNode } from "react";
import Link from "next/link";

export type FaqBlock = { q: string; a: ReactNode };

export type FaqSection = { id: string; title: string; items: FaqBlock[] };

function InfoEmail() {
  return (
    <a href="mailto:info@skyensystems.com" className="font-medium text-[#3150bf] hover:text-[#25357d]">
      Info@skyensystems.com
    </a>
  );
}

export const FAQ_SECTIONS: FaqSection[] = [
  {
    id: "about",
    title: "About Skyen Systems",
    items: [
      {
        q: "Who is Skyen Systems?",
        a: (
          <p>
            Skyen Systems is the trading name of Qismat Ventures W.L.L., a company incorporated in the Kingdom
            of Bahrain (Commercial Registration No. 190698-1). We maintain a PSEB-registered regional office in
            Lahore, Pakistan. We provide custom software development, mobile app development, UI/UX design, AI
            integration, digital marketing, and dedicated development team services to businesses in the US, UK,
            GCC, and Pakistan.
          </p>
        ),
      },
      {
        q: "Are you a registered company?",
        a: (
          <p>
            Yes. Our parent entity, Qismat Ventures W.L.L., is incorporated in Bahrain under Commercial Registration
            No. 190698-1. Our Pakistan operations are registered with the Pakistan Software Export Board (PSEB) —
            the government body that certifies and regulates Pakistani software houses operating in international
            markets.
          </p>
        ),
      },
      {
        q: "Where are your offices?",
        a: (
          <p>
            Our head office is at Office 501, Building 1025, Road 3621, Block 436, Al-Seef, Manama, Kingdom of
            Bahrain. Our regional delivery office is at 12/27 AA Commercial, Sector D, Bahria Town, Lahore, Punjab,
            Pakistan. You can find full contact details on our{" "}
            <Link href="/contact-us" className="font-medium text-[#3150bf] hover:text-[#25357d]">
              Contact
            </Link>{" "}
            page.
          </p>
        ),
      },
      {
        q: "What countries do you serve?",
        a: (
          <p>
            We work with clients across the United States, United Kingdom, Kingdom of Bahrain, Saudi Arabia, UAE, and
            Pakistan. Our primary international market focus is the US, and we have significant experience serving
            GCC-based businesses.
          </p>
        ),
      },
    ],
  },
  {
    id: "services",
    title: "Services & Process",
    items: [
      {
        q: "What services does Skyen Systems offer?",
        a: (
          <p>
            We offer end-to-end digital services: custom web development (Next.js, React, WordPress, Shopify), iOS
            and Android mobile app development, UI/UX design, AI solutions and integrations, digital marketing (SEO,
            Google Ads, Meta Ads), and dedicated development team arrangements.
          </p>
        ),
      },
      {
        q: "Do I need a fully formed idea before contacting you?",
        a: (
          <p>
            Not at all. Many of our best client relationships start with a vague goal and an open conversation. Our
            discovery process is specifically designed to help you clarify what you need, what is realistic within
            your budget, and what order to build things in. There is no cost or commitment attached to that first
            conversation.
          </p>
        ),
      },
      {
        q: "How long does a project take?",
        a: (
          <p>
            Timelines vary by scope. A standard business website (Starter tier) typically takes 3–5 weeks. A
            Growth-tier web application is typically 6–10 weeks. Mobile apps and complex platforms are quoted
            individually with a specific timeline in every proposal before work begins.
          </p>
        ),
      },
      {
        q: "Do you sign NDAs?",
        a: (
          <p>
            Yes. We are happy to sign a mutual NDA before any detailed discussion of your project. Request one at{" "}
            <InfoEmail />.
          </p>
        ),
      },
      {
        q: "Do you work with startups or only established businesses?",
        a: (
          <p>
            Both. We have helped founders go from idea to App Store launch, and we have helped established businesses
            overhaul legacy systems. What matters is that you have a clear goal and are serious about building
            something properly.
          </p>
        ),
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing & Payments",
    items: [
      {
        q: "What are your prices?",
        a: (
          <p>
            Our services start from PKR 420,000 (approximately USD 1,500) for a Starter website package. Our Growth
            tier starts from PKR 1,120,000 (approximately USD 4,000) and our Scale tier from PKR 2,240,000
            (approximately USD 8,000). All prices are fixed — we do not bill hourly. Full pricing details are on our{" "}
            <Link href="/pricing" className="font-medium text-[#3150bf] hover:text-[#25357d]">
              Pricing
            </Link>{" "}
            page. PKR amounts are indicative; final amounts are confirmed at invoice stage.
          </p>
        ),
      },
      {
        q: "What payment methods do you accept?",
        a: (
          <p>
            We accept bank transfers (local and international SWIFT wire), Stripe (Visa, Mastercard, and debit cards),
            and PayPal. We do not accept cryptocurrency of any kind, including Bitcoin, USDT, Ethereum, or
            platforms such as Skrill that process crypto transactions.
          </p>
        ),
      },
      {
        q: "Do you offer payment plans?",
        a: (
          <p>
            Yes. For projects over PKR 560,000 (approximately USD 2,000), we offer milestone-based payment schedules —
            typically 50% at project start and 50% on completion. For larger projects over PKR 2,800,000
            (approximately USD 10,000), a 3-stage payment plan is available. Dedicated team arrangements are billed
            monthly in advance.
          </p>
        ),
      },
      {
        q: "Are there any hidden fees?",
        a: (
          <p>
            No. Every proposal includes a fixed price for the agreed scope. Additional work beyond the original scope
            is always quoted and approved by you before we proceed. There are no surprise costs.
          </p>
        ),
      },
      {
        q: "Can I get a price in Pakistani Rupees?",
        a: (
          <p>
            Yes. For Pakistan-based clients, all pricing is available in PKR at prevailing exchange rates. Contact us
            at <InfoEmail /> for a PKR-denominated quote. Invoices for Pakistan engagements are issued in PKR.
          </p>
        ),
      },
    ],
  },
  {
    id: "refunds",
    title: "Refunds & Cancellations",
    items: [
      {
        q: "What is your refund policy?",
        a: (
          <p>
            If you cancel before any work has started, you receive a full refund of any deposit paid within 14
            business days. Once work has commenced, deposits are non-refundable, but you receive all completed work as
            of the cancellation date. If delivered work does not meet the specifications agreed in writing, we will redo
            the work at no cost. If we cannot meet the agreed specifications after exhausting our revision commitment,
            we will issue a partial or full refund as appropriate. Full details are in our{" "}
            <Link href="/refund-policy" className="font-medium text-[#3150bf] hover:text-[#25357d]">
              Refund Policy
            </Link>
            .
          </p>
        ),
      },
      {
        q: "Can I cancel mid-project?",
        a: (
          <p>
            Yes. Either party may terminate a project with 30 days&apos; written notice. You will receive all completed
            work to that date. Payment for work completed to the cancellation date is due within 7 business days.
          </p>
        ),
      },
      {
        q: "What if I am not happy with the delivered work?",
        a: (
          <p>
            Contact us at <InfoEmail />. We take quality seriously and will work with you to resolve any issue. Every project
            includes revision rounds for exactly this purpose. If we have genuinely failed to deliver what was agreed
            in writing, our Refund Policy covers both partial and full refunds.
          </p>
        ),
      },
    ],
  },
  {
    id: "legal",
    title: "Legal & Data",
    items: [
      {
        q: "Who owns the work you build for me?",
        a: (
          <p>
            You do. Upon receipt of full payment, all custom work created specifically for your project is legally
            assigned to you. We retain the right to display the work in our portfolio unless you request otherwise in
            writing.
          </p>
        ),
      },
      {
        q: "Is my information kept confidential?",
        a: (
          <p>
            Yes. We treat all client information as strictly confidential and do not share it except as required to
            deliver your project. We are happy to sign a mutual NDA before any discussion begins.
          </p>
        ),
      },
      {
        q: "What data do you collect about website visitors?",
        a: (
          <p>
            We collect standard analytics data (pages visited, device type, referral source) via Google Analytics 4,
            and contact information submitted through our forms. We do not sell your data. Full details are in our{" "}
            <Link href="/privacy-policy" className="font-medium text-[#3150bf] hover:text-[#25357d]">
              Privacy Policy
            </Link>
            .
          </p>
        ),
      },
      {
        q: "How do I make a formal complaint?",
        a: (
          <p>
            Email <InfoEmail /> with the subject line &apos;Complaint&apos; and we will respond within 2 business days. For
            written correspondence, contact our Pakistan office: 12/27 AA Commercial, Sector D, Bahria Town, Lahore,
            Punjab, Pakistan. Phone: +92-423-5482980.
          </p>
        ),
      },
    ],
  },
];
