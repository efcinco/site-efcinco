import type { Metadata } from "next";
import { siteConfig } from "./site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  canonicalPath?: string;
  image?: string;
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

export function buildMetadata({
  title,
  description,
  path = "/",
  canonicalPath,
  image = "/og-default.png",
  noIndex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  keywords,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const canonical = absoluteUrl(canonicalPath ?? path);
  const fullTitle =
    title === siteConfig.name
      ? `${siteConfig.name} | Agência VTEX e Plataforma Iugis`
      : `${title} | ${siteConfig.name}`;

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
          url: image,
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
      images: [image],
    },
  };
}

