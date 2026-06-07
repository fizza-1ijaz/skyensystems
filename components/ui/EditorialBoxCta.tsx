import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

export type EditorialBoxCtaVariant = "accent" | "neutral" | "on-dark" | "primary";

const baseClasses =
  "inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-200";

const variantClasses: Record<EditorialBoxCtaVariant, string> = {
  accent:
    "border-brand-cyan/20 bg-brand-cyan-tint text-brand-cyan hover:border-brand-cyan/45 hover:bg-brand-cyan-tint-soft",
  neutral:
    "border-[#DADAD8] bg-white text-[#141414] hover:border-brand-cyan/35 hover:text-brand-cyan",
  "on-dark":
    "border-white/20 bg-white/10 text-[#FAFAF8] hover:border-brand-cyan/40 hover:bg-white/[0.14] hover:text-white",
  primary: "border-transparent bg-brand-cyan text-white hover:bg-[#2AB0B0]",
};

export function editorialBoxCtaClasses(
  variant: EditorialBoxCtaVariant = "accent",
  className = "",
) {
  return [baseClasses, variantClasses[variant], className].filter(Boolean).join(" ");
}

type EditorialBoxCtaProps = {
  href: string;
  children: ReactNode;
  variant?: EditorialBoxCtaVariant;
  className?: string;
  target?: string;
  rel?: string;
};

export function EditorialBoxCta({
  href,
  children,
  variant = "accent",
  className = "",
  target,
  rel,
}: EditorialBoxCtaProps) {
  return (
    <Link
      href={href}
      className={editorialBoxCtaClasses(variant, className)}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
}

type EditorialBoxButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: EditorialBoxCtaVariant;
};

export function EditorialBoxButton({
  children,
  variant = "neutral",
  className = "",
  type = "button",
  ...props
}: EditorialBoxButtonProps) {
  return (
    <button type={type} className={editorialBoxCtaClasses(variant, className)} {...props}>
      {children}
    </button>
  );
}
