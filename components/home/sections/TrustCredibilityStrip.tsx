import { TRUST_STRIP_ITEMS } from "@/lib/homepage-data";
import { Reveal } from "@/components/landing/Reveal";

function TrustStripCard({ item }: { item: (typeof TRUST_STRIP_ITEMS)[number] }) {
  return (
    <div className="relative flex h-full min-h-[6.5rem] flex-col bg-white px-5 py-4 transition-[transform,box-shadow] duration-300 hover:z-10 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_18px_44px_-14px_rgba(49,195,195,0.35)] motion-reduce:transform-none motion-reduce:hover:shadow-none md:min-h-[7rem] md:px-6 md:py-5">
      <p className="min-h-[2.5rem] font-heading text-sm font-bold uppercase leading-snug tracking-[0.14em] text-[#141414] md:min-h-[2.75rem] md:text-base">
        {item.label}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-[#6B6B6B] md:text-sm">{item.detail}</p>
    </div>
  );
}

export function TrustCredibilityStrip() {
  return (
    <section
      className="border-y border-[#E5E5E3] bg-white py-6 md:py-8"
      aria-label="Trust and credibility"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-stretch gap-px bg-[#E5E5E3] sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_STRIP_ITEMS.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.04} className="h-full min-h-0">
              <TrustStripCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
