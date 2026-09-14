"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { getIcon } from "@/lib/icons";
import { useScrollReveal } from "@/lib/hooks/useScrollEffects";
import type { ServicePage } from "@/content/services";

interface ServicesSectionProps {
  services: ServicePage[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  const { isVisible, ref } = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-mist py-24 lg:py-32">
      <div className="px-5 sm:px-8 lg:px-16">
        <div
          ref={ref as any}
          className={`max-w-3xl transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[30px] opacity-0"
          }`}
        >
          <p className="text-micro text-brand">Serviços VTEX</p>
          <h2 className="text-mega mt-4 font-display">
            Do go-live à evolução contínua
          </h2>
        </div>
      </div>

      <div className="mt-16 overflow-x-auto">
        <div className="flex gap-6 px-5 pb-8 sm:px-8 lg:gap-8 lg:px-16">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/v2/servicos/${service.slug}`}
              className="group relative flex w-[320px] shrink-0 flex-col justify-between rounded-none border-2 border-ink bg-white p-8 transition-all duration-300 hover:scale-[1.02] hover:border-brand hover:shadow-2xl lg:w-[380px]"
              style={{
                transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (index * 0.5)}deg)`,
                animationDelay: `${index * 0.1}s`,
              }}
              data-cursor-hover
            >
              <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
                <Icon icon={ArrowUpRight} className="text-brand" size={24} />
              </div>

              <div>
                <Icon
                  icon={getIcon(service.icon)}
                  className="text-brand"
                  size={32}
                />
                <h3 className="mt-6 font-display text-2xl font-semibold leading-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 h-1 w-12 bg-brand transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/v2/servicos"
          className="v2-link inline-block text-sm font-semibold text-brand"
        >
          Ver todos os serviços
        </Link>
      </div>
    </section>
  );
}
