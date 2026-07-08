import Link from "next/link";

export function EditorialHeroCta() {
  return (
    <div className="editorial-hero-cta-wrap pointer-events-auto mt-8 shrink-0 self-end md:absolute md:bottom-8 md:right-12 md:mt-0 md:self-auto">
      <Link
        href="/contact-us"
        className="editorial-hero-cta group relative flex items-center justify-center rounded-full bg-[#31C3C3] text-center shadow-[0_24px_48px_-16px_rgba(49,195,195,0.65)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.94]"
        aria-label="Book a Free Consultation With Skyen Systems"
      >
        <span className="editorial-hero-cta-label max-w-[10.5rem] shrink-0 px-3 font-semibold text-white">
          Book a Free Consultation
        </span>
      </Link>
    </div>
  );
}
