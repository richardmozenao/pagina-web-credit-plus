"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Mantiene <html lang="..."> sincronizado con el segmento /es o /en de la
 * URL. El layout raíz no conoce el idioma (vive un nivel por encima de
 * app/[lang]), así que este componente lo ajusta en el cliente.
 */
export default function HtmlLangSync() {
  const pathname = usePathname();

  useEffect(() => {
    const seg = pathname?.split("/")[1];
    if (seg === "es" || seg === "en") {
      document.documentElement.lang = seg;
    }
  }, [pathname]);

  return null;
}
