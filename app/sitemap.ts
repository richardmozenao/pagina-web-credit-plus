import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { routes, locales } from "@/lib/i18n/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = Object.values(routes);

  return locales.flatMap((lang) =>
    paths.map((route) => ({
      url: `${siteConfig.url}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.7,
    }))
  );
}
