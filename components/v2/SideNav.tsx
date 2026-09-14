"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { useScrollPosition } from "@/lib/hooks/useScrollEffects";

const links = [
  { href: "/v2/servicos", label: "Serviços" },
  { href: "/v2/automacoes", label: "Automações" },
  { href: "/v2/cases", label: "Cases" },
  { href: "/v2/blog", label: "Insights" },
  { href: "/v2/sobre", label: "Sobre" },
];

export function SideNav() {
  const [open, setOpen] = useState(false);
  const { scrollProgress } = useScrollPosition();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className="fixed left-0 top-0 z-40 hidden h-screen w-24 flex-col items-center justify-between border-r-2 border-ink/15 bg-white py-8 shadow-sm lg:flex"
        aria-label="Principal"
      >
        <Link
          href="/v2"
          className="group relative"
          aria-label="eFcinco — versão clean"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-ink transition-all group-hover:scale-105 group-hover:shadow-lg">
            <span className="font-display text-xl font-bold text-white">e5</span>
          </div>
        </Link>

        <div className="flex flex-col items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative rounded-lg px-3 py-4 transition-all hover:bg-brand/5"
              title={link.label}
              data-cursor-hover
            >
              <span
                className="writing-vertical text-sm font-semibold tracking-wider text-ink/70 transition-colors group-hover:text-brand"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="relative h-24 w-1 overflow-hidden rounded-full bg-ink/15">
            <div
              className="absolute inset-x-0 bottom-0 bg-brand transition-all duration-150"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          <Link
            href="/v2/contato"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
            data-magnetic
            aria-label="Contato"
          >
            <span className="text-[10px] font-bold leading-tight">FALE<br/>CONOSCO</span>
          </Link>
        </div>
      </nav>

      <button
        type="button"
        className="fixed right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white shadow-lg lg:hidden"
        aria-expanded={open}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <div className="relative h-5 w-5">
          <span
            className={`absolute left-0 top-1 h-0.5 w-full bg-white transition-all duration-300 ${
              open ? "top-2 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[9px] h-0.5 bg-white transition-all duration-300 ${
              open ? "w-0 opacity-0" : "w-full opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-[17px] h-0.5 w-full bg-white transition-all duration-300 ${
              open ? "top-2 -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      <div
        className={`fixed inset-0 z-40 bg-ink transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center">
          <Link
            href="/v2"
            className="mb-16"
            onClick={() => setOpen(false)}
            aria-label="eFcinco"
          >
            <div className="rounded-lg bg-white px-3 py-2">
              <Image
                src="/brand/efcinco-logo.png"
                alt="eFcinco"
                width={160}
                height={36}
                className="h-8 w-auto"
                priority
              />
            </div>
          </Link>

          <nav className="flex flex-col items-center gap-8" aria-label="Menu mobile">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-medium text-white/70 transition-colors hover:text-brand-soft"
                onClick={() => setOpen(false)}
                style={{
                  animationDelay: `${i * 0.08}s`,
                  animation: open ? "slide-in-right 0.5s cubic-bezier(0.22, 1, 0.36, 1) both" : "none",
                }}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/v2/contato"
              className="mt-8 rounded-full bg-brand px-8 py-4 text-lg font-semibold text-white transition-transform hover:scale-105"
              onClick={() => setOpen(false)}
              data-magnetic
              style={{
                animationDelay: `${links.length * 0.08}s`,
                animation: open ? "scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both" : "none",
              }}
            >
              Falar com a eFcinco
            </Link>
          </nav>

          <Link
            href="/"
            className="mt-16 text-sm text-white/40 underline hover:text-white/70"
            onClick={() => setOpen(false)}
          >
            Versão clássica
          </Link>
        </div>
      </div>
    </>
  );
}
