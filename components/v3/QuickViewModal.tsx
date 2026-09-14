"use client";

import { X, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import type { ServicePage } from "@/content/services";
import { Button } from "./Button";

type QuickViewModalProps = {
  isOpen: boolean;
  onClose: () => void;
  service: ServicePage;
  href?: string;
};

export function QuickViewModal({
  isOpen,
  onClose,
  service,
  href,
}: QuickViewModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`modal-backdrop ${isOpen ? "open" : ""}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-soft-beige bg-white p-6">
          <h2
            id="modal-title"
            className="font-display text-2xl font-bold text-luxury-black"
          >
            {service.title}
          </h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-soft-beige"
            aria-label="Fechar modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-base leading-relaxed text-warm-gray">
            {service.answer}
          </p>

          <div className="mt-6">
            <h3 className="font-semibold text-luxury-black">Entregáveis</h3>
            <ul className="mt-3 space-y-2">
              {service.deliverables.slice(0, 5).map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-warm-gray">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-soft-beige p-4">
              <h4 className="text-sm font-semibold text-luxury-black">Para quem é</h4>
              <ul className="mt-2 space-y-1 text-sm text-warm-gray">
                {service.forWho.slice(0, 3).map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-soft-beige p-4">
              <h4 className="text-sm font-semibold text-luxury-black">Não é para</h4>
              <ul className="mt-2 space-y-1 text-sm text-warm-gray">
                {service.notFor.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <Button href={href ?? `/servicos-vtex/${service.slug}`} className="flex-1">
              Ver página completa
            </Button>
            <Button href="/contato" variant="outline" className="flex-1">
              Falar agora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
