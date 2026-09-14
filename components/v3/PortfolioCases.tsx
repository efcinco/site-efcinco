"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "./Badge";
import { CaseLogo } from "./CaseLogo";
import { FilterTabs } from "./FilterTabs";
import type { CaseCategory, CaseStudy } from "@/content/cases";

type PortfolioCasesProps = {
  cases: CaseStudy[];
};

const categories: { id: "all" | CaseCategory; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "migracao", label: "Migração" },
  { id: "implantacao", label: "Implantação" },
  { id: "iugis", label: "Iugis" },
  { id: "b2b", label: "B2B" },
];

export function PortfolioCases({ cases }: PortfolioCasesProps) {
  const [activeTab, setActiveTab] = useState<(typeof categories)[number]["id"]>("all");

  const filteredCases = cases.filter((item) => {
    if (activeTab === "all") return true;
    return item.categories.includes(activeTab);
  });

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-wider text-gold">
              Cases
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-luxury-black">
              Resultados com engenharia e operação
            </h2>
          </div>
          <Link
            href="/cases"
            title="Ver todos os cases"
            className="link-underline font-medium text-gold hover:text-gold-hover"
          >
            Ver todos os cases →
          </Link>
        </div>

        <div className="mt-8">
          <FilterTabs tabs={categories} activeTab={activeTab} onChange={(id) => setActiveTab(id as (typeof categories)[number]["id"])} />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCases.map((item, index) => (
            <Link
              key={item.slug}
            href={`/cases/${item.slug}`}
              title={item.title}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-soft-beige transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-gold/40"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-white">
                <CaseLogo src={item.image} alt={`Logo ${item.client}`} onDark={item.logoOnDark} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                <div className="absolute left-4 top-4">
                  <Badge variant="gold">{item.segment}</Badge>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-luxury-black transition group-hover:text-gold">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-warm-gray line-clamp-2">
                  {item.summary}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-soft-beige pt-4">
                  <span className="text-xs font-medium text-warm-gray">
                    {item.client}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold">
                    Ler case
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
