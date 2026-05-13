import Link from "next/link";
import Image from "next/image";
import {
  HEAD_OFFICE_ADDRESS_BLOCK,
  HEAD_OFFICE_CR,
  HEAD_OFFICE_LABEL,
  HEAD_OFFICE_PHONE,
  LEGAL_ENTITY_LINE,
  OFFICE_EMAIL,
  REGIONAL_OFFICE_ADDRESS_BLOCK,
  REGIONAL_OFFICE_HOURS,
  REGIONAL_OFFICE_LABEL,
  REGIONAL_OFFICE_NAME,
  REGIONAL_OFFICE_PHONE,
  REGIONAL_OFFICE_PSEB_PLACEHOLDER,
} from "@/lib/company-offices";

const servicesLinks = [
  { label: "Web Development", href: "/services" },
  { label: "Mobile Apps", href: "/services" },
  { label: "UI/UX Design", href: "/services" },
  { label: "AI Solutions", href: "/services" },
  { label: "Digital Marketing", href: "/services" },
  { label: "Dedicated Teams", href: "/services" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact-us" },
];

const productsLinks = [
  { label: "Studiely", href: "https://studiely.com" },
  { label: "Make My Lesson", href: "https://makemylesson.ai" },
  { label: "Linguatude", href: "https://linguatude.com" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookies Policy", href: "/cookies-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
];

export function Footer() {
  return (
    <footer className="mt-0 border-t border-slate-800 bg-[#0F172A]">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-12 md:px-10">
        <div className="mb-12 flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative overflow-hidden rounded-xl border border-slate-700 shadow-xl shadow-black/20">
              <Image
                src="/logo.jpeg"
                alt="Skyen Systems logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              SKYEN <span className="text-[#8B8CFF]">SYSTEMS</span>
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-8 md:gap-12 md:grid-cols-4">
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-400">Services</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="tactile-footer-link inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-400">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="tactile-footer-link inline-flex text-sm font-semibold text-slate-300 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-400">Products</h4>
            <ul className="space-y-3">
              {productsLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    className="tactile-footer-link inline-flex text-sm font-semibold text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-400">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="tactile-footer-link inline-flex text-sm font-semibold text-slate-300 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 border-t border-slate-700/60 pt-5 text-xs leading-relaxed text-slate-400">
              <p>
                Accepted Payments: Bank Transfer (SWIFT/Local) | Stripe (Visa/Mastercard) | PayPal
              </p>
              <p className="text-slate-300">We do not accept cryptocurrency payments of any kind.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-slate-800 pt-10 text-left md:grid-cols-2">
          <div className="space-y-2 text-xs leading-relaxed text-slate-400">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{HEAD_OFFICE_LABEL}</p>
            <p className="font-semibold text-slate-200">{LEGAL_ENTITY_LINE}</p>
            {HEAD_OFFICE_ADDRESS_BLOCK.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>{HEAD_OFFICE_CR}</p>
            <p>Phone: {HEAD_OFFICE_PHONE}</p>
            <p>Email: {OFFICE_EMAIL}</p>
          </div>
          <div className="space-y-2 text-xs leading-relaxed text-slate-400">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{REGIONAL_OFFICE_LABEL}</p>
            <p className="font-semibold text-slate-200">{REGIONAL_OFFICE_NAME}</p>
            {REGIONAL_OFFICE_ADDRESS_BLOCK.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>{REGIONAL_OFFICE_PSEB_PLACEHOLDER}</p>
            <p>Phone: {REGIONAL_OFFICE_PHONE}</p>
            <p>Email: {OFFICE_EMAIL}</p>
            <p>{REGIONAL_OFFICE_HOURS}</p>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center">
          <p className="text-xs font-bold tracking-wide text-slate-500">
            © 2025 Skyen Systems - a trade name of Qismat Ventures W.L.L. (CR
            190698-1)
          </p>
        </div>
      </div>
    </footer>
  );
}


