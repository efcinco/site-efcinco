import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} | Agência VTEX e Plataforma Iugis`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "browser",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    lang: siteConfig.language,
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
