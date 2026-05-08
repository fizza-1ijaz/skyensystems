import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy | Skyen Systems",
  description:
    "Read the Skyen Systems Cookies Policy covering strictly necessary, analytics, and marketing cookies and how to manage preferences.",
  alternates: {
    canonical: "/cookies-policy",
  },
};

function CookiesTable({
  rows,
}: {
  rows: Array<{ cookie: string; purpose: string; duration: string }>;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-[#d5e0ff]">
      <table className="min-w-full bg-white/90 text-left text-sm text-[#4d5f99]">
        <thead className="bg-[#eef3ff] text-[#2b3c7e]">
          <tr>
            <th className="px-4 py-3 font-semibold">Cookie</th>
            <th className="px-4 py-3 font-semibold">Purpose</th>
            <th className="px-4 py-3 font-semibold">Duration</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.cookie} className="border-t border-[#e4ebff]">
              <td className="px-4 py-3 font-mono text-xs text-[#2b3c7e]">{row.cookie}</td>
              <td className="px-4 py-3">{row.purpose}</td>
              <td className="px-4 py-3">{row.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CookiesPolicyPage() {
  return (
    <div className="text-[#1a2050]">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 pb-14 pt-28 md:px-10 md:pt-32">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Cookies Policy</h1>
          <p className="text-[#4d5f99]">
            <span className="font-semibold text-[#2b3c7e]">URL:</span> /cookies-policy
          </p>
          <p className="text-[#4d5f99]">
            <span className="font-semibold text-[#2b3c7e]">Effective Date:</span>{" "}
            6 May 2026
          </p>
        </header>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <p className="text-[#4d5f99]">
            Cookies are small text files placed on your device when you visit a
            website. We use three categories:
          </p>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">Strictly Necessary Cookies</h2>
          <CookiesTable
            rows={[
              {
                cookie: "session_id",
                purpose: "Maintains your session and form state during a visit",
                duration: "Session",
              },
              {
                cookie: "csrf_token",
                purpose: "Security - prevents cross-site request forgery attacks",
                duration: "Session",
              },
            ]}
          />
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">Analytics Cookies</h2>
          <CookiesTable
            rows={[
              {
                cookie: "_ga",
                purpose: "Google Analytics - distinguishes users (anonymised)",
                duration: "2 years",
              },
              {
                cookie: "_ga_[ID]",
                purpose: "Google Analytics - maintains session state",
                duration: "2 years",
              },
            ]}
          />
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <h2 className="text-2xl font-semibold">Marketing Cookies</h2>
          <CookiesTable
            rows={[
              {
                cookie: "_fbp",
                purpose: "Meta (Facebook) Pixel - conversion and ad measurement",
                duration: "90 days",
              },
              {
                cookie: "_gcl_au",
                purpose: "Google Ads conversion tracking",
                duration: "90 days",
              },
            ]}
          />
        </section>

        <section className="space-y-4 rounded-2xl border border-[#c9d8ff] bg-white/90 p-6 shadow-md shadow-[#5678f8]/10">
          <p className="text-[#4d5f99]">
            Managing cookies: You can manage preferences through our cookie consent
            banner or browser settings. Disabling analytics/marketing cookies will
            not affect website functionality. Contact:
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
      </main>
    </div>
  );
}
