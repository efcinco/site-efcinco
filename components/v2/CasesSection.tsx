"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "@/lib/hooks/useScrollEffects";
import type { CaseStudy } from "@/content/cases";

interface CasesSectionProps {
  cases: CaseStudy[];
}

export function CasesSection({ cases: caseList }: CasesSectionProps) {
  const { isVisible, ref } = useScrollReveal();

  const caseImages = [
    "/images/v2/analytics.jpg",
    "/images/v2/code.jpg",
    "/images/v2/chat.jpg",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="px-5 sm:px-8 lg:px-16">
        <div
          ref={ref as any}
          className={`max-w-3xl transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[30px] opacity-0"
          }`}
        >
          <p className="text-micro text-brand">Cases</p>
          <h2 className="text-mega mt-4 font-display">
            Resultados em
            <br />
            <span className="text-outline">performance</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-12 lg:grid-rows-2">
          {caseList.slice(0, 3).map((item, index) => {
            const layouts = [
              "lg:col-span-7 lg:row-span-2",
              "lg:col-span-5 lg:row-span-1",
              "lg:col-span-5 lg:row-span-1",
            ];

            return (
              <Link
                key={item.slug}
                href={`/v2/cases/${item.slug}`}
                className={`group relative overflow-hidden bg-ink ${layouts[index]}`}
                style={{
                  minHeight: index === 0 ? "600px" : "290px",
                  animationDelay: `${index * 0.15}s`,
                }}
                data-cursor-hover
              >
                <Image
                  src={caseImages[index]}
                  alt={item.title}
                  fill
                  className="object-cover opacity-40 transition-all duration-700 group-hover:scale-110 group-hover:opacity-60"
                  sizes={
                    index === 0
                      ? "(max-width: 1024px) 100vw, 58vw"
                      : "(max-width: 1024px) 100vw, 42vw"
                  }
                />

                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />

                <div className="relative flex h-full flex-col justify-end p-8 text-white lg:p-10">
                  <p className="text-micro text-brand-soft">{item.segment}</p>
                  <h3
                    className={`mt-3 font-display leading-tight ${
                      index === 0 ? "text-4xl lg:text-5xl" : "text-2xl lg:text-3xl"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-4 leading-relaxed text-white/70 ${
                      index === 0 ? "text-base lg:text-lg" : "text-sm"
                    }`}
                  >
                    {item.summary || item.challenge.substring(0, 120) + "..."}
                  </p>

                  <div className="mt-6 h-0.5 w-12 bg-brand transition-all duration-500 group-hover:w-24" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/v2/cases"
            className="inline-block rounded-full border-2 border-ink px-8 py-4 text-sm font-semibold text-ink transition-all hover:bg-ink hover:text-white"
            data-magnetic
          >
            Ver todos os cases
          </Link>
        </div>
      </div>
    </section>
  );
}
