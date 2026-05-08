import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GENERAL LEGAL DISCLAIMERS | Skyen Solutions",
  description:
    "Read the General Legal Disclaimers for Skyen Solutions regarding informational use, third-party links, liability, and technology performance.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="text-[#1a2050]">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 pb-14 pt-28 md:px-10 md:pt-32">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">
            General Legal Disclaimers
          </h1>
          <p className="text-[#4d5f99]">
            <span className="font-semibold text-[#2b3c7e]">Effective Date:</span>{" "}
            6 May 2026
          </p>
        </header>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">Disclaimer 1: General Information</h2>
          <p className="text-[#4d5f99]">
            Skyen Solutions provides general information for educational and
            business purposes.
          </p>
          <p className="text-[#4d5f99]">
            We do not guarantee that content on this website is complete,
            accurate, or up-to-date.
          </p>
          <p className="text-[#4d5f99]">
            &ldquo;Skyen Solutions&rdquo; refers to services provided by Qismat
            Ventures W.L.L., a company registered in the Kingdom of Bahrain
            under CR 190698-1.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">Disclaimer 2: No Professional Liability</h2>
          <p className="text-[#4d5f99]">Any advice or recommendations offered through:</p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>blog posts</li>
            <li>consultations</li>
            <li>articles</li>
            <li>downloadable resources</li>
          </ul>
          <p className="text-[#4d5f99]">
            ...are informational only and do not constitute legal, academic, or
            business advice.
          </p>
          <p className="text-[#4d5f99]">
            Skyen Solutions is not responsible for decisions made based on
            information from this website.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">Disclaimer 3: External Links</h2>
          <p className="text-[#4d5f99]">Our Site may contain external links.</p>
          <p className="text-[#4d5f99]">
            We are not responsible for third-party content, privacy practices,
            or security.
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">Disclaimer 4: Technology & Performance</h2>
          <p className="text-[#4d5f99]">We do not guarantee:</p>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>uninterrupted access</li>
            <li>error-free performance</li>
            <li>compatibility with all devices</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">SEO Checklist for Developer</h2>
          <ul className="list-disc space-y-1 pl-6 text-[#4d5f99]">
            <li>
              XML Sitemap generated and submitted via plugin (e.g., Rank Math or
              Yoast SEO).
            </li>
            <li>Robots.txt file configured.</li>
            <li>All pages have unique, SEO-optimized Meta Titles & Descriptions.</li>
            <li>
              All images have descriptive alt text (e.g., not
              &quot;image01.png&quot; but
              &quot;teacher-using-lms-dashboard-on-tablet&quot;).
            </li>
            <li>[ ] URL slugs are clean and keyword-rich.</li>
            <li>
              Schema Markup implemented (Organization, Local Business if
              applicable, Website, BlogPosting).
            </li>
            <li>SSL Certificate installed (HTTPS).</li>
            <li>404 Error page designed and set.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
