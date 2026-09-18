import type { MetadataRoute } from "next";
import { adsServices } from "@/content/ads-services";
import { posts } from "@/content/blog/posts";
import { cases } from "@/content/cases";
import { iugisServices } from "@/content/iugis-services";
import { services } from "@/content/services";
import { trackingServices } from "@/content/tracking-services";
import { uappiServices } from "@/content/uappi-services";
import { wakeServices } from "@/content/wake-services";
import { siteConfig } from "@/lib/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/servicos-vtex",
    "/servicos-uappi",
    "/servicos-wake",
    "/automacoes-iugis",
    "/tracking-e-medicao",
    "/google-ads-e-meta-ads",
    "/cases",
    "/blog",
    "/sobre",
    "/contato",
    "/privacidade",
    "/termos",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = [
    ...services.map((service) => ({ path: `/servicos-vtex/${service.slug}` })),
    ...uappiServices.map((service) => ({ path: `/servicos-uappi/${service.slug}` })),
    ...wakeServices.map((service) => ({ path: `/servicos-wake/${service.slug}` })),
    ...iugisServices.map((service) => ({ path: `/automacoes-iugis/${service.slug}` })),
    ...trackingServices.map((service) => ({ path: `/tracking-e-medicao/${service.slug}` })),
    ...adsServices.map((service) => ({ path: `/google-ads-e-meta-ads/${service.slug}` })),
  ].map(({ path }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const caseRoutes = cases.map((item) => ({
    url: `${siteConfig.url}/cases/${item.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseRoutes, ...blogRoutes];
}
