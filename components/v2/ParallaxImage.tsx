"use client";

import Image from "next/image";
import { useParallax } from "@/lib/hooks/useScrollEffects";
import type { ReactNode } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function ParallaxImage({
  src,
  alt,
  speed = 0.3,
  className = "",
  sizes = "100vw",
  priority = false,
}: ParallaxImageProps) {
  const { offset, ref } = useParallax(speed);

  return (
    <div ref={ref as any} className={`relative overflow-hidden ${className}`}>
      <div
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s linear",
        }}
        className="h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      </div>
    </div>
  );
}

interface ParallaxContainerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxContainer({
  children,
  speed = 0.2,
  className = "",
}: ParallaxContainerProps) {
  const { offset, ref } = useParallax(speed);

  return (
    <div
      ref={ref as any}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        transition: "transform 0.1s linear",
      }}
    >
      {children}
    </div>
  );
}
