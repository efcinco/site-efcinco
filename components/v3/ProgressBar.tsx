"use client";

import { useScrollProgress } from "@/lib/hooks/useScrollProgress";

export function ProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="scroll-progress"
      style={{ transform: `scaleX(${progress / 100})` }}
      aria-hidden="true"
    />
  );
}
