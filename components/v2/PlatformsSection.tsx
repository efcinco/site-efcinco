"use client";

import Link from "next/link";
import { ParallaxImage, ParallaxContainer } from "./ParallaxImage";
import { useScrollReveal } from "@/lib/hooks/useScrollEffects";

export function PlatformsSection() {
  const { isVisible, ref } = useScrollReveal();

  return (
    <section className="relative min-h-screen overflow-hidden bg-ink py-24 text-white lg:py-32">
      <ParallaxImage
        src="/images/v2/store.jpg"
        alt="Loja virtual"
        speed={0.5}
        className="absolute inset-0 opacity-20"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/90 to-navy/80" />

      <div className="relative z-10 px-5 sm:px-8 lg:px-16">
        <ParallaxContainer speed={-0.15} className="max-w-4xl">
          <p className="text-micro text-brand-soft">Plataformas</p>
          
          <h2
            ref={ref as any}
            className={`text-mega mt-6 font-display transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[50px] opacity-0"
            }`}
          >
            VTEX e Uappi
            <br />
            <span className="text-outline-thick">+ Iugis</span> para automações
          </h2>

          <div className="mt-12 max-w-2xl space-y-6 text-lg leading-relaxed text-white/70">
            <p>
              Atuamos tanto com{" "}
              <span className="font-semibold text-brand-soft">VTEX IO e Legacy</span>
              {" "}quanto com{" "}
              <span className="font-semibold text-brand-soft">Uappi</span>.
              Escolhemos a plataforma que melhor atende seu negócio — implantação, migração, SEO técnico e UX.
            </p>
            <p>
              Para automações, trabalhamos com{" "}
              <span className="font-semibold text-white/90">Iugis</span>: chatbot com IA,
              recuperação de carrinho, rastreio e integrações WhatsApp.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/v2/servicos"
              className="rounded-full border-2 border-brand-soft px-8 py-4 text-sm font-semibold text-brand-soft transition-all hover:bg-brand-soft hover:text-ink"
              data-magnetic
            >
              Ver serviços
            </Link>
            <Link
              href="/v2/automacoes"
              className="rounded-full border-2 border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10"
              data-magnetic
            >
              Ver automações
            </Link>
          </div>
        </ParallaxContainer>

        <ParallaxContainer speed={0.25} className="mt-24 lg:mt-32">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Implantação VTEX & Uappi",
                desc: "Go-live com as principais plataformas de e-commerce do mercado.",
              },
              {
                title: "SEO Técnico Multi-plataforma",
                desc: "Core Web Vitals, structured data e indexabilidade otimizada.",
              },
              {
                title: "Automações via Iugis",
                desc: "Chatbot IA, recuperação de carrinho e integrações WhatsApp.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`border-l-4 border-brand pl-6 transition-all duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-[-30px] opacity-0"
                }`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </ParallaxContainer>
      </div>
    </section>
  );
}
