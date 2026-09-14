"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { services } from "@/content/services";
import { Icon } from "./ui/Icon";

const serviceLinks = services.map((service) => ({
  href: `/servicos/${service.slug}`,
  label: service.shortTitle,
}));

const iugisLinks = [
  { href: "/iugis", label: "Visão geral" },
  { href: "/iugis/chatbot", label: "Chatbot IA" },
  { href: "/iugis/automacoes", label: "Automações Commerce" },
  { href: "/iugis/planos", label: "Planos" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [iugisOpen, setIugisOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-deep/90 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0 transition hover:opacity-90"
          onClick={() => setOpen(false)}
          aria-label="eFcinco — página inicial"
        >
          <Image
            src="/brand/efcinco-logo.png"
            alt="eFcinco"
            width={180}
            height={40}
            className="h-8 w-auto mix-blend-lighten sm:h-9"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Principal">
          <NavDropdown
            label="Serviços"
            open={servicesOpen}
            setOpen={setServicesOpen}
            links={serviceLinks}
          />
          <NavDropdown
            label="Automações"
            open={iugisOpen}
            setOpen={setIugisOpen}
            links={iugisLinks}
          />
          <NavLink href="/cases">Cases</NavLink>
          <NavLink href="/v3/blog">Insights</NavLink>
          <NavLink href="/sobre">Sobre</NavLink>
          <Link
            href="/contato"
            className="ml-3 rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-hover"
          >
            Contato
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-white ring-1 ring-white/20 transition hover:bg-white/5 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon icon={open ? X : Menu} className="text-white" size={22} />
        </button>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        inert={open ? undefined : true}
        className={`overflow-hidden border-t border-white/10 bg-deep transition-all duration-300 lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "pointer-events-none max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="px-5 py-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
            Serviços
          </p>
          <div className="mb-4 grid gap-1">
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm text-white/85"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
            Automações
          </p>
          <div className="mb-4 grid gap-1">
            {iugisLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm text-white/85"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="grid gap-1 border-t border-white/10 pt-3">
            <Link href="/cases" className="py-2 text-sm" onClick={() => setOpen(false)}>
              Cases
            </Link>
            <Link href="/v3/blog" className="py-2 text-sm" onClick={() => setOpen(false)}>
              Insights
            </Link>
            <Link href="/sobre" className="py-2 text-sm" onClick={() => setOpen(false)}>
              Sobre
            </Link>
            <Link
              href="/contato"
              className="mt-2 rounded-md bg-brand px-4 py-3 text-center text-sm font-semibold"
              onClick={() => setOpen(false)}
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="nav-link rounded-md px-3 py-2 text-sm font-medium text-white/80 transition hover:text-white"
    >
      {children}
    </Link>
  );
}

function NavDropdown({
  label,
  open,
  setOpen,
  links,
}: {
  label: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  links: { href: string; label: string }[];
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="nav-link rounded-md px-3 py-2 text-sm font-medium text-white/80 transition hover:text-white"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {label}
      </button>
      {open ? (
        <div className="absolute left-0 top-full z-50 min-w-64 rounded-xl border border-white/10 bg-navy p-2 shadow-2xl">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-lg px-3 py-2.5 text-sm text-white/85 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
