"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useMousePosition } from "@/lib/hooks/useScrollEffects";

export function CtaSection() {
  const [mounted, setMounted] = useState(false);
  const mousePos = useMousePosition();
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;

    const distanceX = mousePos.x - buttonCenterX;
    const distanceY = mousePos.y - buttonCenterY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < 200) {
      const strength = Math.max(0, 1 - distance / 200);
      const moveX = (distanceX / distance) * strength * 30;
      const moveY = (distanceY / distance) * strength * 30;
      setButtonPos({ x: moveX, y: moveY });
    } else {
      setButtonPos({ x: 0, y: 0 });
    }
  }, [mousePos.x, mousePos.y, mounted]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink px-5 py-24 text-white">
      <div
        className="gradient-animate absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(135deg, var(--brand), var(--navy), var(--deep))",
        }}
      />

      <div className="absolute inset-0 surface-grid opacity-10" />

      <div className="relative z-10 text-center">
        <p className="text-micro animate-slide-in-left text-brand-soft">
          Pronto para começar?
        </p>

        <h2 className="text-mega mt-6 max-w-4xl font-display animate-fade-up">
          Diagnóstico
          <br />
          <span className="text-outline-thick">VTEX</span> gratuito
        </h2>

        <p className="animate-fade-up-delay mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70 lg:text-xl">
          Avaliamos implantação, migração, SEO técnico, UX ou automações com
          objetividade. Primeira conversa sem custo.
        </p>

        <Link
          ref={buttonRef}
          href="/v2/contato"
          className="animate-scale-in mt-12 inline-block rounded-full bg-brand px-10 py-5 text-lg font-semibold text-white shadow-2xl transition-all hover:scale-110 hover:bg-brand-hover hover:shadow-brand-glow"
          data-magnetic
          style={{
            transform: `translate(${buttonPos.x}px, ${buttonPos.y}px)`,
            transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          Falar com a eFcinco
        </Link>

        <p className="mt-8 text-sm text-white/40">
          <Link href="/" className="underline hover:text-white/70">
            Voltar para versão clássica
          </Link>
        </p>
      </div>

      <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-brand opacity-10 blur-3xl" />
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-brand opacity-10 blur-3xl" />
    </section>
  );
}
