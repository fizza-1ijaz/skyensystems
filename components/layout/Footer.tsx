import Link from "next/link";
import Image from "next/image";
import { Mail, Globe, Code, MessageSquare, ArrowRight } from "lucide-react";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact-us" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "GDPR Compliance", href: "/gdpr" },
];

const socialLinks = [
  { icon: Globe, href: "#", color: "hover:text-blue-400" },
  { icon: Code, href: "#", color: "hover:text-slate-900" },
  { icon: MessageSquare, href: "#", color: "hover:text-blue-600" },
  { icon: Mail, href: "#", color: "hover:text-red-500" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-2 space-y-8">
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
                Skyen<span className="text-blue-600">Systems</span>
              </span>
            </Link>
            <p className="max-w-md text-slate-500 leading-relaxed italic">
              &ldquo;Engineering high-performance digital solutions that turn complex business challenges into competitive advantages.&rdquo;
            </p>
            <div className="flex gap-5">
              {socialLinks.map((social, i) => (
                <Link key={i} href={social.href} className={`text-slate-400 transition-colors ${social.color}`}>
                  <social.icon size={22} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4">
              {mainLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Skyen Systems. Engineered with Precision.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Based in Spain & Global</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


