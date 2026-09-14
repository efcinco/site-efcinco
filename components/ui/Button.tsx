import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
};

const variants = {
  primary:
    "bg-brand text-white hover:bg-brand-hover shadow-[0_12px_32px_rgba(30,95,199,0.35)]",
  secondary:
    "bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/16 backdrop-blur",
  ghost:
    "bg-transparent text-navy ring-1 ring-navy/15 hover:bg-mist hover:ring-brand/30",
  light:
    "bg-white text-navy hover:bg-ice shadow-sm",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold tracking-wide transition duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
