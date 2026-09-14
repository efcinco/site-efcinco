export const siteConfig = {
  name: "eFcinco",
  legalName: "eFcinco",
  tagline: "Parceira técnica de lojistas VTEX",
  description:
    "A eFcinco é especializada em implantação, migração e evolução de e-commerces na plataforma VTEX, com SEO técnico, GEO (Generative Engine Optimization), UX de conversão e a plataforma Iugis de automação e IA para WhatsApp.",
  url: "https://www.efcinco.com.br",
  locale: "pt_BR",
  language: "pt-BR",
  email: "contato@efcinco.com.br",
  phone: "+55 48 99133-8767",
  whatsapp: "5548991338767",
  foundingYear: 2014,
  sameAs: [
    "https://www.linkedin.com/company/efcinco",
    "https://www.instagram.com/efcinco",
  ],
  iugis: {
    name: "Iugis",
    description:
      "Plataforma de automação e inteligência para e-commerce e WhatsApp: chatbot com IA, recuperação de carrinho e rastreio de pedidos.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
