"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLang } from "@/lib/i18n/LangProvider";
import type { Locale } from "@/lib/i18n/routes";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang } = useLang();
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    if (next === lang) return;
    window.localStorage.setItem("lang", next);
    const rest = pathname?.split("/").slice(2).join("/") ?? "";
    router.push(`/${next}${rest ? `/${rest}` : ""}`);
  }

  return (
    <div className={`inline-flex items-center gap-1 text-xs font-semibold ${className}`}>
      <button
        type="button"
        onClick={() => switchTo("es")}
        aria-current={lang === "es"}
        className={lang === "es" ? "text-gold" : "text-current opacity-60 hover:opacity-100"}
      >
        ES
      </button>
      <span aria-hidden="true" className="opacity-40">
        |
      </span>
      <button
        type="button"
        onClick={() => switchTo("en")}
        aria-current={lang === "en"}
        className={lang === "en" ? "text-gold" : "text-current opacity-60 hover:opacity-100"}
      >
        EN
      </button>
    </div>
  );
}
