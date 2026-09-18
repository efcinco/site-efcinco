"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        <div>
          <FilterTabs tabs={categories} activeTab={activeTab} onChange={(id) => setActiveTab(id as (typeof categories)[number]["id"])} />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCases.map((item, index) => (
            <Link
              key={item.slug}
            href={`/cases/${item.slug}`}
              title={item.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-mist transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-brand/40"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative aspect-[16/8] overflow-hidden bg-paper">
                <div className="absolute inset-x-14 inset-y-10">
                  <CaseLogo src={item.image} alt={`Logo ${item.client}`} onDark={item.logoOnDark} sizes="(max-width: 768px) 80vw, 25vw" tight mono />
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[.7rem] font-bold uppercase tracking-[.08em] text-muted shadow-sm">{item.segment}</span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold text-ink transition group-hover:text-brand">
                  {item.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                  {item.summary}
                </p>
                {item.results[0] && (
                  <p className="mt-4 flex flex-1 items-start gap-2 text-sm font-semibold text-ink">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand" />
                    {item.results[0]}
                  </p>
                )}
                <div className="mt-4 flex items-center justify-between border-t border-mist pt-4">
                  <span className="text-xs font-medium text-muted">
                    {item.client}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
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
