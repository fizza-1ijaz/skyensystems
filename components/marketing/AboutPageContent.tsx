export function AboutPageContent() {
  return (
    <div className="pb-8 pt-12">
      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">WHO WE ARE</p>
          <h1 className="text-4xl font-extrabold leading-tight text-[#0F172A] md:text-6xl">
            We build digital products for businesses that want to grow.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Skyen Systems is a PSEB-registered software house based in Pakistan with a regional office in Bahrain. We work with small and medium businesses across the United States — and increasingly across the world — building websites, apps, AI tools, and running the digital marketing that makes them matter.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            We started with a belief that excellent digital work shouldn&apos;t require a Fortune 500 budget or navigating a dozen different agencies. One team, with deep skills across every discipline, working as a true extension of your business — that&apos;s what we built.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Our team includes senior developers, product designers, AI specialists, and digital marketers. Everyone on every project is a Skyen team member — not a contractor, not a marketplace match.
          </p>
        </div>
      </section>

      <section className="border-y border-white/40 bg-white/35 px-6 py-14 md:px-16">
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/50 bg-white/70 p-8 text-center backdrop-blur-xl lg:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">PSEB Registration</p>
          <p className="text-slate-600">
            <span className="font-semibold text-[#0F172A]">What PSEB means for you:</span>{" "}
            Pakistan&apos;s Software Export Board (PSEB) certifies and regulates Pakistani software houses operating in international markets. PSEB registration means verified technical capability, business legitimacy, and professional conduct standards. When you work with Skyen Systems, you&apos;re working with a formally registered, government-recognised technology company.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/50 bg-white/75 p-8 text-center backdrop-blur-xl lg:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Our Offices</p>
          <div className="space-y-4 text-slate-600">
            <p>
              <strong className="text-[#0F172A]">Pakistan HQ:</strong> [Insert full address] · hello@skyensystems.com · [Insert phone]
            </p>
            <p>
              <strong className="text-[#0F172A]">Bahrain Regional:</strong> [Insert full address] · [Insert phone]
            </p>
            <p>
              <strong className="text-[#0F172A]">US inquiries:</strong> contact@skyensystems.com · Response within 4 hours (US business hours)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

