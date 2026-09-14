"use client";

import Image from "next/image";
import { CheckCircle2, Mail, MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/lib/seo/site";
import { services } from "@/content/services";
import { useProposalCart } from "./ProposalCart";

export function MiniCart() {
  const { items, count, isOpen, closeCart, removeItem } = useProposalCart();

  if (!isOpen) return null;

  const proposalText = items.length
    ? `Olá! Gostaria de solicitar uma proposta para:\n${items.map((item) => `• ${item.title} (${item.quantity}x)`).join("\n")}`
    : "Olá! Gostaria de solicitar um diagnóstico VTEX.";
  const emailSubject = encodeURIComponent("Solicitação de proposta — eFcinco");
  const emailBody = encodeURIComponent(proposalText);
  const whatsappText = encodeURIComponent(proposalText);

  return (
    <div className="fixed inset-0 z-[100] bg-luxury-black/35 backdrop-blur-[2px]" role="presentation" onClick={closeCart}>
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="minicart-title"
        className="minicart-drawer absolute bottom-0 right-0 top-0 flex w-full max-w-md flex-col overflow-y-auto bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-soft-beige p-6">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-success"><CheckCircle2 size={18} /> Serviço inserido</span>
            <h2 id="minicart-title" className="mt-2 font-display text-3xl font-bold tracking-[-.04em] text-luxury-black">Sua proposta está pronta.</h2>
            <p className="mt-2 text-sm font-semibold text-[#006db1]">{count} {count === 1 ? "serviço selecionado" : "serviços selecionados"}</p>
          </div>
          <button type="button" onClick={closeCart} className="rounded-full p-2 text-warm-gray transition hover:bg-soft-beige hover:text-luxury-black" aria-label="Fechar minicart"><X size={20} /></button>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <ul className="divide-y divide-soft-beige">
            {items.map((item) => {
              const service = services.find((candidate) => candidate.slug === item.slug);
              return (
              <li key={item.slug} className="flex items-center gap-3 py-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-soft-beige">
                  {(item.image ?? service?.image) ? <Image src={item.image ?? service!.image} alt="" fill sizes="48px" className="object-cover" /> : null}
                </div>
                <span className="flex-1 text-sm font-semibold text-luxury-black">{item.title}</span>
                {item.quantity > 1 && <span className="font-mono text-xs font-bold text-warm-gray">×{item.quantity}</span>}
                <button type="button" onClick={() => removeItem(item.slug)} className="text-xs font-bold text-[#006db1] hover:underline">Remover</button>
              </li>
              );
            })}
          </ul>

          <div className="mt-auto border-t border-soft-beige pt-6">
            <p className="text-sm leading-relaxed text-warm-gray">Deseja enviar a solicitação por e-mail ou WhatsApp?</p>
            <div className="mt-4 grid gap-3">
            <a href={`mailto:${siteConfig.email}?subject=${emailSubject}&body=${emailBody}`} title="Enviar por e-mail" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#006db1] px-4 py-3 text-sm font-bold text-[#006db1] transition hover:bg-[#006db1]/5">
              <Mail size={17} /> Enviar por e-mail
            </a>
            <a href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappText}`} target="_blank" rel="noopener noreferrer" title="Enviar por WhatsApp" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#1ebe5d]">
              <MessageCircle size={17} /> Enviar por WhatsApp
            </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
