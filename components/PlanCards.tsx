"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { useState } from "react";
import { iugisPlans } from "@/content/iugis";
import { Icon } from "./ui/Icon";

export function PlanCards() {
  const [active, setActive] = useState(
    iugisPlans.find((p) => p.popular)?.id ?? iugisPlans[0].id,
  );

  return (
    <div className="mt-14 grid gap-6 lg:grid-cols-3">
      {iugisPlans.map((plan) => {
        const highlighted = active === plan.id || plan.popular;
        return (
          <article
            key={plan.id}
            onMouseEnter={() => setActive(plan.id)}
            onFocus={() => setActive(plan.id)}
            tabIndex={0}
            className={`flex flex-col rounded-2xl p-8 outline-none transition duration-300 ring-1 ${
              highlighted
                ? "scale-[1.02] bg-navy text-white shadow-2xl shadow-brand/20 ring-brand"
                : "bg-white text-navy ring-navy/10 hover:ring-brand/30"
            }`}
          >
            {plan.popular ? (
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-soft">
                Mais popular
              </p>
            ) : (
              <p
                className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                  highlighted ? "text-brand-soft" : "text-brand"
                }`}
              >
                Plano
              </p>
            )}
            <h2 className="mt-3 font-display text-3xl tracking-tight">{plan.name}</h2>
            <p
              className={`mt-3 text-sm leading-relaxed ${
                highlighted ? "text-white/70" : "text-slate"
              }`}
            >
              {plan.description}
            </p>
            <p className="mt-6 text-2xl font-semibold">{plan.priceLabel}</p>
            <ul
              className={`mt-6 flex-1 space-y-2.5 text-sm ${
                highlighted ? "text-white/85" : "text-graphite"
              }`}
            >
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <Icon
                    icon={Check}
                    size={16}
                    className={highlighted ? "mt-0.5 shrink-0 text-brand-soft" : "mt-0.5 shrink-0 text-brand"}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href={plan.href}
              className={`mt-8 inline-flex justify-center rounded-md px-5 py-3 text-sm font-semibold transition ${
                highlighted
                  ? "bg-brand text-white hover:bg-brand-hover"
                  : "bg-navy text-white hover:bg-deep"
              }`}
            >
              {plan.cta}
            </Link>
          </article>
        );
      })}
    </div>
  );
}
