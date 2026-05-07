import Link from "next/link";

export function ProductsPageContent() {
  const products = [
    {
      title: "Studiely",
      status: "Live",
      tagline: "Learning, made personal.",
      description:
        "A full-stack education platform built and maintained in-house, live on iOS, Android, and Web.",
      cta: "Visit Studiely",
      href: "https://studiely.com",
      external: true,
    },
    {
      title: "Make My Lesson",
      status: "Arriving soon",
      tagline: "Teaching, reimagined.",
      description:
        "AI-powered lesson planning for educators, currently in final build. Join the waitlist for early access.",
      cta: "Join Waitlist",
      href: "/contact-us",
      external: false,
    },
    {
      title: "Linguatude",
      status: "Coming soon",
      tagline: "English, unlocked.",
      description:
        "A comprehensive English test prep platform with adaptive practice and real exam simulations.",
      cta: "Notify Me",
      href: "/contact-us",
      external: false,
    },
  ];

  return (
    <div className="pb-24 pt-28">
      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Built by us, for real users</p>
          <h1 className="text-4xl font-extrabold text-[#0F172A] md:text-6xl">
            We do not just build for clients.
            <span className="bg-gradient-to-r from-[#6D5DF6] to-[#C8A96A] bg-clip-text text-transparent"> We build for ourselves.</span>
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            These are Skyen Group products built by the same team behind your client projects.
          </p>
        </div>
      </section>

      <section className="border-t border-white/40 px-6 py-16 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {products.map((product, index) => (
            <article key={product.title} className={`rounded-3xl border border-white/50 bg-white/75 p-6 shadow-[0_20px_50px_-30px_rgba(108,99,255,0.7)] backdrop-blur-xl ${index === 0 ? "md:col-span-2" : ""}`}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">{product.status}</p>
              <h2 className="text-2xl font-bold text-[#0F172A]">{product.title}</h2>
              <p className="mt-1 text-sm font-semibold text-gradient">{product.tagline}</p>
              <p className="mt-4 text-sm text-slate-600">{product.description}</p>
              <div className="mt-5 h-28 rounded-2xl bg-gradient-to-r from-[#6C63FF22] via-[#8B5CF626] to-[#00C2FF1f]" />
              {product.external ? (
                <a href={product.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-lg bg-gradient-to-r from-[#6C63FF] to-[#00C2FF] px-5 py-2.5 text-sm font-semibold text-white">
                  {product.cta}
                </a>
              ) : (
                <Link href={product.href} className="mt-6 inline-block rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700">
                  {product.cta}
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
