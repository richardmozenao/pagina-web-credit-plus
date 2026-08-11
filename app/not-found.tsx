"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Home, MessageCircle } from "lucide-react";
import { dictionaries } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/routes";

/**
 * Página global de 404: se muestra fuera de /es y /en (rutas inexistentes
 * en la raíz), así que detecta el idioma como el redirector de "/" en vez
 * de depender de LangProvider.
 */
export default function NotFound() {
  const [lang, setLang] = useState<Locale>("es");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    setLang(
      saved === "es" || saved === "en"
        ? saved
        : navigator.language.toLowerCase().startsWith("es")
          ? "es"
          : "en"
    );
  }, []);

  const dict = dictionaries[lang];

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center">
      <span className="text-gradient-gold text-7xl font-bold md:text-8xl">404</span>
      <h1 className="mt-6 text-2xl font-semibold text-paper md:text-3xl">
        {dict.notFound.title}
      </h1>
      <p className="mt-3 max-w-md text-sm text-mist/60">{dict.notFound.text}</p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href={`/${lang}`}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink"
        >
          <Home size={16} /> {dict.notFound.home}
        </Link>
        <Link
          href={`/${lang}/contacto`}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-mist/30 px-7 py-3.5 text-sm font-semibold text-paper hover:border-gold hover:text-gold"
        >
          <MessageCircle size={16} /> {dict.notFound.contact}
        </Link>
      </div>
    </section>
  );
}
