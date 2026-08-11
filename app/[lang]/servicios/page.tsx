import type { Metadata } from "next";
import Link from "next/link";
import {
  FileSearch,
  GraduationCap,
  TrendingUp,
  Home,
  Car,
  Compass,
} from "lucide-react";
import CTA from "@/components/CTA";
import { dictionaries } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/routes";

const icons = { FileSearch, GraduationCap, TrendingUp, Home, Car, Compass };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === "en" ? "en" : "es";
  const dict = dictionaries[lang];
  return {
    title: dict.servicesPage.title,
    description: dict.servicesPage.description,
    alternates: {
      canonical: `/${lang}/servicios`,
      languages: { es: "/es/servicios", en: "/en/servicios" },
    },
  };
}

export default async function ServiciosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === "en" ? "en" : "es";
  const dict = dictionaries[lang];
  const p = dict.servicesPage;

  return (
    <>
      <header className="bg-ink pb-16 pt-36 text-center">
        <div className="container-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            {p.kicker}
          </span>
          <h1 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-semibold text-paper md:text-5xl">
            {p.heading}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-mist/70">{p.subheading}</p>
        </div>
      </header>

      <section className="section bg-paper">
        <div className="container-xl grid gap-8 md:grid-cols-2">
          {dict.services.items.map((s) => {
            const Icon = icons[s.iconName];
            return (
              <article
                key={s.slug}
                id={s.slug}
                className="scroll-mt-28 rounded-2xl border border-mist bg-white p-8 shadow-soft"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-gold">
                  <Icon size={22} />
                </div>
                <h2 className="text-xl font-semibold text-ink">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{s.description}</p>
                <Link
                  href={`/${lang}/contacto`}
                  className="mt-6 inline-block rounded-full border border-ink px-6 py-2.5 text-sm font-semibold text-ink transition hover:border-gold hover:text-gold"
                >
                  {dict.services.ctaButton}
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
