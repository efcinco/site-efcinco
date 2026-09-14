"use client";

import type { FormEvent } from "react";
import { CheckCircle2, Minus, Package, Trash2 } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/seo/site";
import { useProposalCart } from "./ProposalCart";

const inputClass = "min-h-12 w-full rounded-lg border border-soft-beige bg-white px-4 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20";

export function ProposalCheckout() {
  const { items, count, removeItem } = useProposalCart();
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const productList = items.length
      ? items.map((item) => `• ${item.title} (${item.quantity} ${item.quantity === 1 ? "unidade" : "unidades"})`).join("\n")
      : "• Diagnóstico VTEX personalizado";
    const subject = encodeURIComponent(`Proposta eFcinco — ${String(form.get("empresa") || form.get("nome") || "novo contato")}`);
    const body = encodeURIComponent(
      `SOLUÇÕES NA PROPOSTA\n${productList}\n\nNome: ${String(form.get("nome") || "")}\nE-mail: ${String(form.get("email") || "")}\nEmpresa: ${String(form.get("empresa") || "")}\nPlataforma atual: ${String(form.get("plataforma") || "")}\n\nContexto e prazo:\n${String(form.get("necessidade") || "")}`,
    );
    setSent(true);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_.72fr] lg:items-start">
      <form onSubmit={handleSubmit} className="bg-white p-6 ring-1 ring-soft-beige sm:p-8">
        <p className="font-mono text-xs font-bold uppercase tracking-[.16em] text-gold-hover">Etapa 1 de 1</p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-[-.05em] text-luxury-black">Finalizar proposta</h1>
        <p className="mt-3 text-sm leading-relaxed text-warm-gray">Deixe seus dados. Um especialista recebe sua seleção e responde com o melhor caminho técnico.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Field label="Nome" name="nome" required />
          <Field label="E-mail profissional" name="email" type="email" required />
          <Field label="Empresa" name="empresa" required />
          <label className="block text-sm font-semibold text-luxury-black">Plataforma atual
            <select name="plataforma" defaultValue="VTEX IO" className={`${inputClass} mt-2 font-normal text-warm-gray`}>
              <option>VTEX IO</option><option>VTEX Legacy</option><option>Outra plataforma</option><option>Ainda não tenho loja</option>
            </select>
          </label>
        </div>
        <label className="mt-5 block text-sm font-semibold text-luxury-black">Contexto, prazo ou objetivo
          <textarea name="necessidade" required rows={5} className={`${inputClass} mt-2 py-3 font-normal text-warm-gray`} placeholder="Ex.: queremos migrar antes da próxima campanha e preservar URLs." />
        </label>
        <button type="submit" className="mt-6 inline-flex min-h-13 w-full items-center justify-center rounded-lg bg-[#006db1] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#005a93] active:scale-[.98]">
          Enviar proposta para avaliação
        </button>
        {sent && <p role="status" className="mt-4 flex items-center gap-2 text-sm text-success"><CheckCircle2 size={17} /> Seu cliente de e-mail foi aberto com a proposta preenchida.</p>}
      </form>

      <aside className="bg-luxury-black p-6 text-white sm:p-8">
        <div className="flex items-center justify-between border-b border-white/15 pb-5">
          <div><p className="font-mono text-xs font-bold uppercase tracking-[.16em] text-gold">Sua proposta</p><h2 className="mt-2 font-display text-2xl font-bold">{count} {count === 1 ? "solução" : "soluções"} selecionada{count === 1 ? "" : "s"}</h2></div>
          <Package className="text-gold" />
        </div>
        {items.length ? <ul className="divide-y divide-white/10">
          {items.map((item) => <li key={item.slug} className="flex items-center gap-3 py-5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 font-mono text-sm text-gold">{item.quantity}</span>
            <span className="flex-1 text-sm font-semibold">{item.title}</span>
            <button type="button" onClick={() => removeItem(item.slug)} className="rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white" aria-label={`Remover ${item.title}`}><Trash2 size={16} /></button>
          </li>)}
        </ul> : <div className="py-8 text-sm leading-relaxed text-white/70"><Minus className="mb-3 text-gold" />Sua vitrine ainda está vazia. Você pode solicitar um diagnóstico e montar a proposta com nossa equipe.</div>}
        <div className="mt-4 border-t border-white/15 pt-5 text-xs leading-relaxed text-white/60">Sem pagamento agora. Esta seleção orienta o escopo e não representa contratação automática.</div>
      </aside>
    </div>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return <label className="block text-sm font-semibold text-luxury-black">{label}<input name={name} type={type} required={required} className={`${inputClass} mt-2 font-normal text-warm-gray`} /></label>;
}
