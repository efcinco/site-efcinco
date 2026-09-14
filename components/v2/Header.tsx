"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";

const links = [
  { href: "/v2/servicos", label: "Serviços" },
  { href: "/v2/automacoes", label: "Automações" },
  { href: "/v2/cases", label: "Cases" },
  { href: "/v2/blog", label: "Insights" },
  { href: "/v2/sobre", label: "Sobre" },
];

export function HeaderV2() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? doc.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-white/90 backdrop-blur-md">
      <div
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-brand transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
        <Link
          href="/v2"
          className="shrink-0 rounded-md bg-ink px-2.5 py-1.5"
          onClick={() => setOpen(false)}
          aria-label="eFcinco — versão clean"
        >
          <Image
            src="/brand/efcinco-logo.png"
            alt="eFcinco"
            width={160}
            height={36}
            className="h-6 w-auto mix-blend-lighten sm:h-7"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink/70 transition hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/v2/contato"
            className="ml-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-hover"
          >
            Contato
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-ink ring-1 ring-ink/10 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon icon={open ? X : Menu} className="text-ink" size={22} />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-ink/8 transition-all duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2.5 text-sm font-medium text-ink/80"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/v2/contato"
            className="mt-2 rounded-full bg-brand px-4 py-3 text-center text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Contato
          </Link>
        </div>
      </div>
    </header>
  );
}
