import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  magnetic?: boolean;
  title?: string;
};

const variants = {
  primary:
    "bg-[#006db1] text-white hover:bg-[#005a93] shadow-lg hover:shadow-xl transition-all duration-300",
  secondary:
    "bg-charcoal text-white hover:bg-warm-gray transition-all duration-300",
  ghost:
    "bg-transparent text-luxury-black hover:bg-soft-beige transition-all duration-300",
  outline:
    "bg-transparent text-[#006db1] border border-[#006db1] hover:bg-[#006db1] hover:text-white transition-all duration-300",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

function titleFromChildren(children: ReactNode) {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) {
    const text = children.filter((child) => typeof child === "string").join(" ").trim();
    return text || undefined;
  }
  return undefined;
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  magnetic = false,
  title,
}: ButtonProps) {
  return (
    <Link
      href={href}
      title={title ?? titleFromChildren(children)}
      className={`inline-flex items-center justify-center rounded-lg font-semibold ${
        magnetic ? "magnetic-button" : ""
      } ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
