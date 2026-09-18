"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { iugisPlans } from "@/content/iugis";

export function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="planos-iugis" className="py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        <div className="text-center">
          <p className="eyebrow">
            Planos Iugis
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Escolha a potência da sua automação
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Três caminhos: atendimento com IA, automações de venda ou uma operação sob medida.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="pricing-toggle"
              aria-label="Alternar entre planos mensais e anuais"
            >
              <span
                className={`pricing-toggle-btn ${!isAnnual ? "active" : ""}`}
              >
                Mensal
              </span>
              <span className={`pricing-toggle-btn ${isAnnual ? "active" : ""}`}>
                Anual
              </span>
            </button>
            {isAnnual && (
              <Badge variant="success" className="animate-scale-in">
                Economize 20%
              </Badge>
            )}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {iugisPlans.map((plan, index) => {
            const monthlyPrice = parseFloat(plan.price || "0");
            const annualPrice = monthlyPrice > 0 ? Math.round(monthlyPrice * 0.8) : 0;
            const displayPrice = isAnnual && annualPrice > 0 ? annualPrice : monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 ${
                  plan.popular
                    ? "theme-dark bg-white ring-2 ring-brand shadow-xl lg:-translate-y-2"
                    : "bg-white ring-1 ring-mist shadow-sm hover:shadow-lg"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`p-8 ${plan.popular ? "bg-ink text-white" : ""}`}>
                  <div className="flex items-center justify-between gap-3">
                    <p className={`font-display text-lg font-bold ${plan.popular ? "text-white" : "text-ink"}`}>
                      {plan.name}
                    </p>
                    {plan.popular && (
                      <span className="rounded-full bg-brand px-3 py-1 text-[.7rem] font-bold uppercase tracking-[.08em] text-white">
                        Mais escolhido
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-2 text-sm ${
                      plan.popular ? "text-white/80" : "text-muted"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="mt-6">
                    {displayPrice > 0 ? (
                      <>
                        <div className="flex items-baseline gap-2">
                          <span
                            className={`font-display text-4xl font-extrabold tracking-tight ${
                              plan.popular ? "text-white" : "text-ink"
                            }`}
                          >
                            R$ {displayPrice}
                          </span>
                          <span
                            className={`text-sm ${
                              plan.popular ? "text-white/60" : "text-muted"
                            }`}
                          >
                            /mês
                          </span>
                        </div>
                        {isAnnual && (
                          <p
                            className={`mt-1 text-sm ${
                              plan.popular ? "text-white/60" : "text-muted"
                            }`}
                          >
                            Faturado anualmente
                          </p>
                        )}
                      </>
                    ) : (
                      <p
                        className={`font-display text-2xl font-extrabold ${
                          plan.popular ? "text-white" : "text-ink"
                        }`}
                      >
                        Sob consulta
                      </p>
                    )}
                  </div>

                  <Button
                    href={plan.href}
                    variant={plan.popular ? "primary" : "outline"}
                    className="mt-8 w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>

                <div
                  className={`flex-1 p-8 ${plan.popular ? "bg-charcoal text-white" : ""}`}
                >
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check
                          size={18}
                          className="mt-0.5 shrink-0 text-accent"
                        />
                        <span
                          className={plan.popular ? "text-white/90" : "text-muted"}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
