"use client";

import { useState } from "react";

type TrustItem = {
  type: "badge" | "logo";
  content: string;
  alt?: string;
};

const trustItems: TrustItem[] = [
  { type: "badge", content: "⭐ +10 anos VTEX" },
  { type: "badge", content: "🏆 Partner Certificado" },
  { type: "badge", content: "⚡ 50+ lojas ativas" },
  { type: "badge", content: "✓ 99% uptime Iugis" },
  { type: "badge", content: "🔒 LGPD Compliant" },
  { type: "badge", content: "📈 SEO Specialist" },
];

export function TrustBar() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="relative overflow-hidden border-b border-soft-beige bg-[var(--gold)] py-3 before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-10 before:bg-gradient-to-r before:from-[var(--gold)] before:to-transparent after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-10 after:bg-gradient-to-l after:from-[var(--gold)] after:to-transparent">
      <div
        className="flex gap-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`marquee flex gap-8 ${isPaused ? "" : ""}`}
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {/* Duplicate for infinite scroll */}
          {[...trustItems, ...trustItems].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center gap-2 px-4 py-1.5 bg-white rounded-full text-sm font-medium text-warm-gray whitespace-nowrap"
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
