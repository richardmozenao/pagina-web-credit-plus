"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Redirector de idioma. GitHub Pages no permite redirects de servidor, así
 * que "/" detecta el idioma preferido del navegador (o la preferencia ya
 * guardada por el LanguageSwitcher) y navega a /es o /en. El <noscript>
 * de abajo es la red de seguridad para navegadores sin JS.
 */
export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    const lang =
      saved === "es" || saved === "en"
        ? saved
        : navigator.language.toLowerCase().startsWith("es")
          ? "es"
          : "en";
    router.replace(`/${lang}`);
  }, [router]);

  return (
    <noscript>
      <p>
        <a href="/es">Continuar en español</a> · <a href="/en">Continue in English</a>
      </p>
    </noscript>
  );
}
