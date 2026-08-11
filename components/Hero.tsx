"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n/LangProvider";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Hero() {
  const { lang, dict } = useLang();

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-ink pt-20">
      <Image
        src="https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1800&q=80"
        alt={dict.hero.imageAlt}
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/30" />

      <div className="container-xl relative z-10 grid gap-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <LanguageSwitcher className="mb-6" />

          <h1 className="font-display text-4xl font-semibold leading-tight text-paper md:text-6xl">
            {dict.hero.titlePre}{" "}
            <span className="text-gradient-gold">{dict.hero.titleGradient}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist/80">
            {dict.hero.description}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href={`/${lang}/contacto`}
              className="rounded-full bg-gold px-8 py-4 text-center text-sm font-semibold text-ink shadow-gold transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              {dict.hero.ctaPrimary}
            </Link>
            <a
              href={`/${lang}/contacto#formulario`}
              className="rounded-full border border-mist/30 px-8 py-4 text-center text-sm font-semibold text-paper transition hover:border-gold hover:text-gold"
            >
              {dict.hero.ctaSecondary}
            </a>
          </div>

          <p className="mt-6 text-xs text-mist/50">{dict.hero.disclaimer}</p>
        </motion.div>
      </div>
    </section>
  );
}
