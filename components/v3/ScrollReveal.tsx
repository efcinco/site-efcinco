"use client";

import { useIntersectionReveal } from "@/lib/hooks/useIntersectionReveal";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right";
  className?: string;
};

export function ScrollReveal({
  children,
  animation = "fade-up",
  className = "",
}: ScrollRevealProps) {
  const { ref, isVisible } = useIntersectionReveal({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`${isVisible ? `animate-${animation}` : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}
