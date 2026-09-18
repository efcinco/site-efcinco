import type { Metadata } from "next";
import { siteConfig } from "./site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  canonicalPath?: string;
  image?: string;
  /** Rótulo curto exibido acima do título na imagem de compartilhamento. */
  eyebrow?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  keywords?: string | string[];
};

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}

const sectionLabels: [prefix: string, label: string][] = [
  ["/servicos-vtex", "Serviços VTEX"],
  ["/servicos-uappi", "Serviços Uappi"],
  ["/servicos-wake", "Serviços Wake"],
  ["/automacoes-iugis", "Automações Iugis"],
  ["/tracking-e-medicao", "Tracking e medição"],
  ["/google-ads-e-meta-ads", "Google Ads e Meta Ads"],
  ["/cases", "Cases"],
  ["/blog", "Conteúdos"],
  ["/sobre", "Sobre"],
  ["/contato", "Contato"],
];

function sectionFor(path: string) {
  return sectionLabels.find(([prefix]) => path === prefix || path.startsWith(`${prefix}/`))?.[1];
}

export function ogImageUrl(title: string, eyebrow?: string) {
  const params = new URLSearchParams({ title });
  if (eyebrow) params.set("eyebrow", eyebrow);
  return `/og?${params.toString()}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  canonicalPath,
  image,
  eyebrow,
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  keywords,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const canonical = absoluteUrl(canonicalPath ?? path);
  const isHome = title === siteConfig.name;
  // Evita "Sobre a eFcinco | eFcinco": só acrescenta a marca quando ela não aparece no título.
  const fullTitle = isHome
    ? `${siteConfig.name} | Agência VTEX e Plataforma Iugis`
    : title.includes(siteConfig.name)
      ? title
      : `${title} | ${siteConfig.name}`;
  const ogImage =
    image ??
    (isHome
      ? ogImageUrl(siteConfig.tagline, "Agência VTEX e Plataforma Iugis")
      : ogImageUrl(title, eyebrow ?? sectionFor(path)));

  return {
    title: fullTitle,
    description,
    ...(keywords ? { keywords } : {}),
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
      languages: {
        "pt-BR": canonical,
      },
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
            authors,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

