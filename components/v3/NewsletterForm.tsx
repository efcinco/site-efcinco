"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function NewsletterForm({ inverted: _inverted = false }: { inverted?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div>
      {status === "success" ? (
        <div className="rounded-lg bg-success/10 px-4 py-3 text-sm font-medium text-success">
          ✓ Inscrito! Verifique seu e-mail.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            required
            aria-label="E-mail para newsletter"
            className="min-h-12 flex-1 rounded-full border border-white/20 bg-white px-5 py-3 text-sm text-luxury-black transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
          />
          <button
            type="submit"
            className="min-h-12 rounded-full bg-[#006db1] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#005a93]"
            aria-label="Quero receber"
          >
            <span className="inline-flex items-center gap-2">
              Quero receber <Send size={15} />
            </span>
          </button>
        </form>
      )}
    </div>
  );
}
