import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/servicios",
    "/sobre-nosotros",
    "/preguntas-frecuentes",
    "/contacto",
    "/politica-de-privacidad",
    "/terminos-y-condiciones",
    "/aviso-legal",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
