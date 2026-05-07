export function AboutPageContent() {
  return (
    <div className="pb-8 pt-12">
      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Who we are</p>
          <h1 className="text-4xl font-extrabold leading-tight text-[#0F172A] md:text-6xl">
            Built by builders. Backed by
            <span className="bg-gradient-to-r from-[#6D5DF6] to-[#C8A96A] bg-clip-text text-transparent"> experience.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Skyen Systems is the digital services arm of the Skyen Group. We build client products with the same engineering and design quality we use for our own platforms.
          </p>
        </div>
      </section>

      <section className="border-y border-white/40 bg-white/35 px-6 py-14 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["3+", "Live products built in-house"],
            ["2", "International offices"],
            ["6", "Core service areas"],
            ["3-4", "Week avg. website delivery"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-white/50 bg-white/70 p-6 backdrop-blur-xl">
              <p className="text-4xl font-extrabold text-[#0F172A]">{value}</p>
              <p className="mt-2 text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Our story</p>
            <h2 className="text-3xl font-bold text-[#0F172A] md:text-4xl">Why Skyen Systems exists.</h2>
            <div className="mt-6 space-y-4 text-slate-600">
              <p>We built Skyen Systems to offer businesses a high-capability team with transparent pricing and reliable delivery.</p>
              <p>Our team has built and shipped live products like Studiely across web and mobile. That means we bring product-level thinking to every client engagement.</p>
              <p>When we take on your project, we are not experimenting. We are applying proven systems and standards.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/50 bg-white/75 p-8 text-center backdrop-blur-xl lg:text-left">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">Values</p>
            <div className="space-y-4 text-slate-600">
              <p><strong className="text-[#0F172A]">Honesty over comfort:</strong> We say what is true, not what is easy.</p>
              <p><strong className="text-[#0F172A]">Speed without shortcuts:</strong> Fast delivery with quality controls.</p>
              <p><strong className="text-[#0F172A]">Ownership of outcomes:</strong> We care about business impact, not just output.</p>
              <p><strong className="text-[#0F172A]">Quality first:</strong> The same standard for client and in-house products.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

