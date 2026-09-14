"use client";

import { ChevronRight } from "lucide-react";
import { useProposalCart } from "./ProposalCart";

export function AddToProposalButton({ slug, title, image }: { slug: string; title: string; image?: string }) {
  const { addItem, openCart } = useProposalCart();

  function handleAdd() {
    addItem({ slug, title, image });
    openCart();
  }

  return (
    <button
      type="button"
      onClick={handleAdd}
      className="inline-flex w-full items-center justify-center rounded-lg bg-[#006db1] px-6 py-4 text-lg font-bold text-white transition hover:bg-[#005a93] active:scale-[.98]"
    >
      Adicionar à proposta <ChevronRight size={18} className="ml-1" />
    </button>
  );
}
