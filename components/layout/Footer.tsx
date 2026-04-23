import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact-us" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "GDPR Compliance", href: "/gdpr" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-2 gap-8 md:gap-12 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 space-y-8">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative overflow-hidden rounded-xl border border-blue-200/50 shadow-md">
                <Image
                  src="/logo.jpeg"
                  alt="Skyen Systems logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#1b2151]">
                Skyen<span className="text-[#1aaebf]">Systems</span>
              </span>
            </Link>
            <p className="max-w-md text-slate-500 leading-relaxed italic">
              &ldquo;Engineering high-performance digital solutions that turn complex business challenges into competitive advantages.&rdquo;
            </p>
          </div>

          {/* Links Column */}
          <div className="col-span-1">
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4">
              {mainLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-semibold text-slate-600 hover:text-[#1aaebf] transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="col-span-1">
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-semibold text-slate-600 hover:text-[#1aaebf] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 text-center">
          <p className="text-xs font-bold text-slate-400 tracking-wide">
            © 2025 Skyen Systems - a trade name of Qismat Ventures W.L.L. (CR
            190698-1)
          </p>
        </div>
      </div>
    </footer>
  );
}


