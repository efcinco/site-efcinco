import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // V3 URLs were the public preview. Preserve equity on the root structure.
      { source: "/v3", destination: "/", permanent: true },
      {
        source: "/v3/servicos/:slug*",
        destination: "/servicos-vtex/:slug*",
        permanent: true,
      },
      {
        source: "/v3/servicos-uappi/:slug*",
        destination: "/servicos-uappi/:slug*",
        permanent: true,
      },
      {
        source: "/v3/servicos-wake/:slug*",
        destination: "/servicos-wake/:slug*",
        permanent: true,
      },
      {
        source: "/v3/iugis/:slug*",
        destination: "/automacoes-iugis/:slug*",
        permanent: true,
      },
      {
        source: "/v3/blog/:slug*",
        destination: "/blog/:slug*",
        permanent: true,
      },
      {
        source: "/v3/cases/:slug*",
        destination: "/cases/:slug*",
        permanent: true,
      },
      { source: "/v3/contato", destination: "/contato", permanent: true },
      { source: "/v3/sobre", destination: "/sobre", permanent: true },
      { source: "/v3/:path*", destination: "/", permanent: true },
      // V1/V2 content was superseded by the V3 storefront.
      { source: "/v2/:path*", destination: "/", permanent: true },
      {
        source: "/servicos/:slug*",
        destination: "/servicos-vtex/:slug*",
        permanent: true,
      },
      {
        source: "/iugis/chatbot",
        destination: "/automacoes-iugis",
        permanent: true,
      },
      {
        source: "/iugis/automacoes",
        destination: "/automacoes-iugis",
        permanent: true,
      },
      {
        source: "/iugis/planos",
        destination: "/automacoes-iugis",
        permanent: true,
      },
      {
        source: "/iugis/:slug*",
        destination: "/automacoes-iugis/:slug*",
        permanent: true,
      },
      // Domínio/conteúdo legado Iugis → eFcinco
      {
        source: "/planos",
        destination: "/automacoes-iugis",
        permanent: true,
      },
      {
        source: "/pricing",
        destination: "/automacoes-iugis",
        permanent: true,
      },
      {
        source: "/automacoes",
        destination: "/automacoes-iugis",
        permanent: true,
      },
      {
        source: "/chatbot",
        destination: "/automacoes-iugis",
        permanent: true,
      },
      // Atalhos antigos possíveis do site eFcinco
      {
        source: "/implantacao",
        destination: "/servicos-vtex/implantacao-vtex-io",
        permanent: true,
      },
      {
        source: "/migracao",
        destination: "/servicos-vtex/migracao-vtex-io",
        permanent: true,
      },
      {
        source: "/manutencao",
        destination: "/servicos-vtex/manutencao-vtex",
        permanent: true,
      },
      {
        source: "/seo",
        destination: "/servicos-vtex/seo-vtex",
        permanent: true,
      },
      {
        source: "/geo",
        destination: "/servicos-vtex/seo-vtex",
        permanent: true,
      },
      {
        source: "/consultoria",
        destination: "/servicos-vtex/consultoria-vtex",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
