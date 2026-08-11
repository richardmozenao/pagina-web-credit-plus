"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe, ChevronDown } from "lucide-react";
import { useLang } from "@/lib/i18n/LangProvider";
import type { Locale } from "@/lib/i18n/routes";

const LANGUAGES: { code: Locale; label: string; flag: string }[] = [
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "en", label: "English", flag: "🇺🇸" },
];

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang } = useLang();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function switchTo(next: Locale) {
    setOpen(false);
    if (next === lang) return;
    window.localStorage.setItem("lang", next);
    const rest = pathname?.split("/").slice(2).join("/") ?? "";
    router.push(`/${next}${rest ? `/${rest}` : ""}`);
  }

  return (
    <div ref={rootRef} className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/30 px-4 py-1.5 text-xs font-medium tracking-wide text-gold backdrop-blur-sm transition hover:border-gold/70"
      >
        <Globe size={14} />
        {current.label}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute left-0 top-full z-20 mt-2 min-w-[10rem] overflow-hidden rounded-2xl border border-gold/30 bg-ink/95 py-1 text-xs font-medium tracking-wide text-paper shadow-lg backdrop-blur-sm"
        >
          {LANGUAGES.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === lang}
                onClick={() => switchTo(l.code)}
                className={`flex w-full items-center gap-2 px-4 py-2 text-left transition hover:bg-gold/10 ${
                  l.code === lang ? "text-gold" : "text-paper"
                }`}
              >
                <span aria-hidden="true">{l.flag}</span>
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
