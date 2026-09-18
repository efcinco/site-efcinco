import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "accent" | "outline" | "success" | "alert";
  className?: string;
};

const variants = {
  accent: "badge-accent",
  outline: "badge-outline",
  success: "bg-success/10 text-success border border-success/20",
  alert: "bg-alert/10 text-alert border border-alert/20",
};

export function Badge({
  children,
  variant = "accent",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
