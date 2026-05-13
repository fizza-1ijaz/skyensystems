"use client";

type TabKey = "packages" | "retainers" | "individual";

const PACKAGES = [
  {
    name: "Start",
    price: "$750",
    cta: "/contact?plan=start",
    description: "Everything you need to show up professionally online — website, social setup, and brand.",
    features: [
      "Professional website — up to 6 pages",
      "Mobile responsive + SEO-ready structure",
      "Social media profile optimization (3 platforms)",
      "Google Business Profile setup or optimization",
      "Basic brand kit — logo, colors, fonts",
      "Google Analytics setup",
      "30 days post-launch support",
    ],
  },
  {
    name: "Grow",
    price: "$1,500",
    cta: "/contact?plan=grow",
    featured: true,
    description: "The full digital foundation to scale with confidence — brand, web, social, and content.",
    features: [
      "Everything in START",
      "Website expanded to 10 pages + blog setup",
      "Full brand identity + brand guide document",
      "30 branded social post templates",
      "1 month social media management included",
      "Email newsletter template design",
      "60 days post-launch support",
    ],
  },
  {
    name: "Lead",
    price: "$4,000+",
    cta: "/contact?plan=lead",
    description: "Complete digital transformation — web, app, brand, SEO, and marketing. Custom scoped in discovery.",
    features: [
      "Everything in GROW",
      "Custom web app or mobile app (iOS + Android)",
      "Advanced SEO — keyword research + Search Console",
      "Paid ad campaign setup + ad creatives",
      "Dedicated project manager",
      "Quarterly strategy call",
      "90 days post-launch support",
    ],
  },
];

const RETAINERS = [
  {
    name: "Steady",
    price: "$400/mo",
    cta: "/contact?plan=steady",
    description: "Consistent social presence across 2 platforms. Ideal for businesses that need to stay visible without the daily stress.",
    features: [
      "3 posts per week across 2 platforms",
      "Custom graphics for every post — no stock templates",
      "Caption writing + hashtag strategy",
      "Community management — comments and DMs",
      "Monthly performance report",
    ],
  },
  {
    name: "Amplify",
    price: "$600/mo",
    cta: "/contact?plan=amplify",
    featured: true,
    description: "Higher frequency, more platforms, paid ad management. For businesses ready to grow their reach and run campaigns.",
    features: [
      "5 posts per week across 3 platforms",
      "Custom graphics + 1 reel or video per week",
      "Bi-weekly strategy call",
      "Paid ad campaign management (client pays ad spend)",
      "Full community management",
      "Bi-weekly performance report",
    ],
  },
  {
    name: "Shield",
    price: "$100/mo",
    cta: "/contact?plan=shield",
    description: "Monthly website care — updates, security, backups, and performance monitoring. Peace of mind for your site.",
    features: [
      "Up to 5 content updates per month",
      "Security monitoring and backups",
      "Performance optimization checks",
      "Monthly website health report",
    ],
  },
];

const INDIVIDUAL = [
  { name: "Logo Design (3 concepts, 2 revision rounds)", price: "$125", us: "$800–$2,500", save: "~85%" },
  { name: "Landing Page — single, conversion-focused", price: "$200", us: "$1,500–$3,000", save: "~87%" },
  { name: "Brand Identity Package — full system", price: "$300", us: "$2,000–$6,000", save: "~90%" },
  { name: "Social Media Audit + Strategy Document", price: "$100", us: "$500–$1,500", save: "~80%" },
  { name: "SEO Audit + Full Report", price: "$150", us: "$800–$2,000", save: "~82%" },
  { name: "Mobile App — iOS or Android", price: "From $2,000", us: "$15,000–$40,000", save: "~87%" },
  { name: "Mobile App — iOS + Android", price: "From $3,500", us: "$25,000–$80,000", save: "~90%" },
  { name: "Web Application / SaaS MVP", price: "From $2,500", us: "$15,000–$50,000", save: "~85%" },
];

export default function PricingPanels({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: TabKey;
  setSelectedTab: (tab: TabKey) => void;
}) {
  return (
    <>
      {/* Tabs: Launch Packages / Monthly Retainers / Individual Services */}
      <div className="mt-6 mb-6 flex items-center gap-3">
        {[
          { key: "packages", label: "Launch Packages" },
          { key: "retainers", label: "Monthly Retainers" },
          { key: "individual", label: "Individual Services" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setSelectedTab(t.key as TabKey)}
            className={`pricing-tab px-4 py-2 rounded-lg text-sm font-semibold ${selectedTab === t.key ? "bg-[#1E3A8A] text-white" : "bg-white/60 text-[#0F172A] border"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Pricing panels */}
      <div>
        {selectedTab === "packages" && (
          <div className="grid gap-6 md:grid-cols-3">
            {PACKAGES.map((p: any) => (
              <div key={p.name} className={`rounded-2xl border p-6 bg-white shadow-sm ${p.featured ? "ring-2 ring-[#1E3A8A]/30" : ""}`}>
                {p.featured && <div className="mb-2 inline-block px-3 py-1 rounded-full bg-[#1E3A8A] text-white text-xs font-bold">Most popular</div>}
                <h3 className="text-xl font-bold">{p.name}</h3>
                <div className="text-3xl font-extrabold mt-2 mb-2">{p.price}</div>
                <p className="text-sm text-slate-600 mb-4">{p.description}</p>
                <ul className="mb-4 list-disc list-inside text-sm text-slate-700 space-y-1">
                  {p.features.map((f: any, i: number) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <a href={p.cta} className="inline-block w-full text-center rounded-lg bg-[#1E3A8A] text-white py-2 font-semibold">Get started →</a>
              </div>
            ))}
          </div>
        )}

        {selectedTab === "retainers" && (
          <div className="grid gap-6 md:grid-cols-3">
            {RETAINERS.map((p: any) => (
              <div key={p.name} className={`rounded-2xl border p-6 bg-white shadow-sm ${p.featured ? "ring-2 ring-[#1E3A8A]/30" : ""}`}>
                {p.featured && <div className="mb-2 inline-block px-3 py-1 rounded-full bg-[#1E3A8A] text-white text-xs font-bold">Most popular</div>}
                <h3 className="text-xl font-bold">{p.name}</h3>
                <div className="text-2xl font-extrabold mt-2 mb-2">{p.price}</div>
                <p className="text-sm text-slate-600 mb-4">{p.description}</p>
                <ul className="mb-4 list-disc list-inside text-sm text-slate-700 space-y-1">
                  {p.features.map((f: any, i: number) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <a href={p.cta} className={`inline-block w-full text-center rounded-lg ${p.featured ? "bg-[#1E3A8A] text-white" : "bg-white border border-[#1E3A8A] text-[#1E3A8A]"} py-2 font-semibold`}>Get started →</a>
              </div>
            ))}
          </div>
        )}

        {selectedTab === "individual" && (
          <div className="space-y-4">
            <div className="md:hidden space-y-3">
              {INDIVIDUAL.map((s: any) => (
                <article key={s.name} className="rounded-2xl border border-[#1E3A8A22] bg-white/95 p-4 shadow-sm">
                  <h3 className="text-sm font-semibold leading-snug text-slate-900">{s.name}</h3>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Our Price</div>
                      <div className="mt-1 font-bold text-slate-900">{s.price}</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">You Save</div>
                      <div className="mt-1 font-bold text-slate-900">{s.save}</div>
                    </div>
                  </div>
                  <div className="mt-3 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-600">
                    <span className="block text-[11px] font-semibold uppercase tracking-wide text-slate-500">US Agency Rate</span>
                    <span className="mt-1 block font-medium text-slate-700">{s.us}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="pb-3 text-sm font-semibold">Service</th>
                    <th className="pb-3 text-sm font-semibold">Our Price</th>
                    <th className="pb-3 text-sm font-semibold">US Agency Rate</th>
                    <th className="pb-3 text-sm font-semibold">You Save</th>
                  </tr>
                </thead>
                <tbody>
                  {INDIVIDUAL.map((s: any) => (
                    <tr key={s.name} className="border-t">
                      <td className="py-3 text-sm">{s.name}</td>
                      <td className="py-3 text-sm font-semibold">{s.price}</td>
                      <td className="py-3 text-sm text-slate-600">{s.us}</td>
                      <td className="py-3 text-sm">{s.save}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
