/**
 * Rutas del sitio, iguales en ambos idiomas (solo cambia el prefijo /es o /en).
 * Centralizado aquí para el sitemap, el Navbar/Footer y el LanguageSwitcher.
 */
export const routes = {
  home: "",
  services: "/servicios",
  about: "/sobre-nosotros",
  faq: "/preguntas-frecuentes",
  contact: "/contacto",
  privacy: "/politica-de-privacidad",
  terms: "/terminos-y-condiciones",
  legal: "/aviso-legal",
} as const;

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export function localizedPath(locale: Locale, path: string) {
  return `/${locale}${path}`;
}
