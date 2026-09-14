"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    step: "01",
    title: "Diagnóstico",
    description: "Mapeamos operação, riscos técnicos e oportunidades de conversão.",
  },
  {
    step: "02",
    title: "Estratégia",
    description: "Definimos roadmap com milestones claros e critérios de aceite.",
  },
  {
    step: "03",
    title: "Execução",
    description: "Implementamos em ciclos curtos com validação contínua.",
  },
  {
    step: "04",
    title: "Evolução",
    description: "Otimizamos performance, SEO, UX e automações com base em dados.",
  },
];

export function MethodologySteps() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const ratio = Math.min(1, Math.max(0, (entry.intersectionRatio - 0.15) / 0.7));
        setProgress(ratio);
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i / 20) },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative mt-12">
      <div className="absolute left-0 right-0 top-5 hidden h-px bg-navy/10 lg:block" />
      <div
        className="absolute left-0 top-5 hidden h-px origin-left bg-brand transition-transform duration-300 lg:block"
        style={{ width: "100%", transform: `scaleX(${progress})` }}
      />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((item, index) => {
          const active = progress >= index / (steps.length - 1) - 0.05;
          return (
            <div key={item.step} className="relative">
              <div
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition-colors duration-500 ${
                  active
                    ? "border-brand bg-brand text-white"
                    : "border-navy/15 bg-white text-slate"
                }`}
              >
                {item.step}
              </div>
              <h3 className="font-display text-2xl tracking-tight text-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
