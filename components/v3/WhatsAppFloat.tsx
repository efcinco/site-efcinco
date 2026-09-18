"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/seo/site";

// No celular o botão só aparece depois da primeira dobra, para não cobrir o conteúdo do topo
// (o cabeçalho já tem um atalho de WhatsApp). Em telas maiores fica sempre visível.
const MOBILE_REVEAL_OFFSET = 480;

export function WhatsAppFloat() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > MOBILE_REVEAL_OFFSET);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      title="Conversar pelo WhatsApp"
      className={`fixed bottom-4 right-4 z-30 grid h-12 w-12 place-items-center rounded-full bg-whatsapp text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-whatsapp-hover focus:outline-none focus:ring-4 focus:ring-whatsapp/30 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14 sm:translate-y-0 sm:opacity-100 ${
        scrolled ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0 sm:pointer-events-auto"
      }`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true">
          <path d="M20.52 3.45A11.82 11.82 0 0 0 12.07 0C5.55 0 .25 5.3.25 11.82c0 2.08.54 4.1 1.57 5.88L.15 23.8l6.25-1.64a11.77 11.77 0 0 0 5.66 1.44h.01c6.52 0 11.82-5.3 11.82-11.82 0-3.16-1.23-6.12-3.37-8.33ZM12.07 21.6c-1.8 0-3.57-.48-5.12-1.39l-.37-.22-3.71.97.99-3.62-.24-.37a9.75 9.75 0 0 1-1.5-5.15c0-5.38 4.38-9.76 9.77-9.76 2.61 0 5.07 1.02 6.92 2.87a9.7 9.7 0 0 1 2.86 6.92c0 5.38-4.38 9.76-9.77 9.76Zm5.35-7.32c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.2-.34.22-.63.07-.29-.15-1.21-.45-2.3-1.44-.85-.75-1.42-1.68-1.59-1.97-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.19.05-.37-.02-.52-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48h-.55c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.7-.7 1.94-1.38.24-.69.24-1.28.17-1.4-.07-.12-.26-.19-.55-.34Z" />
        </svg>
    </a>
  );
}
