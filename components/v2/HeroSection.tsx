"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { useScrollReveal } from "@/lib/hooks/useScrollEffects";
import { ParallaxImage } from "./ParallaxImage";

export function HeroSection() {
  const { isVisible: titleVisible, ref: titleRef } = useScrollReveal();
  const { isVisible: subtextVisible, ref: subtextRef } = useScrollReveal();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-16">
      <div className="relative z-10 w-full max-w-7xl">
        <p className="text-micro animate-slide-in-left text-brand">
          Especialistas em E-commerce
        </p>

        <h1
          ref={titleRef as any}
          className={`text-hero mt-6 max-w-5xl font-display transition-all duration-1000 ${
            titleVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-[-50px] opacity-0"
          }`}
        >
          VTEX, Uappi
          <br />
          <span className="text-outline">e Iugis</span>
          <br />
          <span className="text-brand">para seu negócio</span>
        </h1>

        <div
          ref={subtextRef as any}
          className={`mt-12 max-w-lg transition-all delay-300 duration-1000 ${
            subtextVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-[-30px] opacity-0"
          }`}
        >
          <p className="text-lg leading-relaxed text-slate sm:text-xl">
            Implantação VTEX e Uappi, SEO técnico, UX de conversão e automações via Iugis.
            Escolha a plataforma certa para seu projeto.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/v2/contato"
              className="cursor-magnetic rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-brand-hover"
              data-magnetic
            >
              Falar com a equipe
            </Link>
            <Link
              href="/v2/servicos"
              className="group rounded-full border-2 border-ink px-7 py-4 text-sm font-semibold text-ink transition-all hover:bg-ink hover:text-white"
            >
              Ver serviços
            </Link>
          </div>
        </div>
      </div>

      <ParallaxImage
        src="/images/v2/hero.jpg"
        alt="E-commerce e tecnologia"
        speed={0.4}
        className="absolute right-[-10%] top-[15%] h-[35vh] w-[45vw] clip-diagonal opacity-20 lg:opacity-30"
        sizes="50vw"
      />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <Icon icon={ArrowDown} className="text-ink/30" size={24} />
      </div>
    </section>
  );
}
