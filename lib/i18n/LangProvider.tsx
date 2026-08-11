"use client";

import { createContext, useContext } from "react";
import { dictionaries, type Dictionary } from "./dictionaries";
import type { Locale } from "./routes";

const LangContext = createContext<{ lang: Locale; dict: Dictionary } | null>(null);

/**
 * El diccionario contiene funciones (interpolación de siteConfig en textos
 * legales), así que no puede pasarse como prop de un Server Component a
 * este Client Component — React no puede serializar funciones a través de
 * ese límite. En su lugar, solo se pasa el idioma (un string) y este
 * componente resuelve el diccionario localmente, dentro del bundle cliente.
 */
export function LangProvider({
  lang,
  children,
}: {
  lang: Locale;
  children: React.ReactNode;
}) {
  const dict = dictionaries[lang];

  return (
    <LangContext.Provider value={{ lang, dict }}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return ctx;
}
