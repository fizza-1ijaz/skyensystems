import Link from "next/link";

type CtaLinkProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "text";
};

const variantClasses: Record<NonNullable<CtaLinkProps["variant"]>, string> = {
  primary:
    "inline-flex items-center justify-center rounded-full bg-[#112B44] px-6 py-3 font-semibold text-white shadow-lg shadow-[#112B44]/30 transition duration-300 hover:-translate-y-0.5 hover:bg-[#1B3E5E]",
  secondary:
    "inline-flex items-center justify-center rounded-full border border-[#bfd0ff] bg-white/80 px-6 py-3 font-semibold text-[#28346f] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#9eb9ff] hover:bg-white",
  text: "inline-flex font-semibold text-[#3150bf] transition hover:text-[#25357d]",
};

export function CtaLink({ href, label, variant = "primary" }: CtaLinkProps) {
  return (
    <Link href={href} className={variantClasses[variant]}>
      {label}
    </Link>
  );
}
