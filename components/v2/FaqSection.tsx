"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/hooks/useScrollEffects";

interface Faq {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: Faq[];
}

export function FaqSection({ faqs }: FaqSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isVisible, ref } = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-mist py-24 lg:py-32">
      <div className="px-5 sm:px-8 lg:px-16">
        <div
          ref={ref as any}
          className={`mb-16 max-w-3xl transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[30px] opacity-0"
          }`}
        >
          <p className="text-micro text-brand">FAQ</p>
          <h2 className="text-mega mt-4 font-display">Perguntas frequentes</h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full border-l-4 py-4 pl-6 text-left transition-all ${
                  activeIndex === index
                    ? "border-brand bg-white"
                    : "border-transparent hover:border-ink/20 hover:bg-white/50"
                }`}
              >
                <p
                  className={`font-semibold transition-colors ${
                    activeIndex === index
                      ? "text-lg text-brand lg:text-xl"
                      : "text-base text-ink/70"
                  }`}
                >
                  {faq.question}
                </p>
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="sticky top-24 rounded-none bg-white p-8 shadow-xl lg:p-12">
              <div
                key={activeIndex}
                className="animate-slide-right"
                style={{
                  animationDuration: "0.5s",
                }}
              >
                <p className="text-micro text-brand">Resposta</p>
                <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-ink lg:text-3xl">
                  {faqs[activeIndex].question}
                </h3>
                <p className="mt-6 text-base leading-relaxed text-slate lg:text-lg">
                  {faqs[activeIndex].answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
