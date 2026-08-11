import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, HeartHandshake, ShieldCheck, BookOpen, Handshake } from "lucide-react";
import CTA from "@/components/CTA";
import { dictionaries } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/routes";

const icons = { ShieldCheck, HeartHandshake, Handshake, BookOpen };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === "en" ? "en" : "es";
  const dict = dictionaries[lang];
  return {
    title: dict.aboutPage.title,
    description: dict.aboutPage.description,
    alternates: {
      canonical: `/${lang}/sobre-nosotros`,
      languages: { es: "/es/sobre-nosotros", en: "/en/sobre-nosotros" },
    },
  };
}

export default async function SobreNosotrosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === "en" ? "en" : "es";
  const dict = dictionaries[lang];
  const p = dict.aboutPage;

  return (
    <>
      <header className="relative overflow-hidden bg-ink pb-20 pt-36">
        <div className="container-xl grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              {p.kicker}
            </span>
            <h1 className="mt-3 font-display text-4xl font-semibold text-paper md:text-5xl">
              {p.heading}
            </h1>
            <p className="mt-5 text-mist/70">{p.intro}</p>
          </div>
          <div className="relative h-72 overflow-hidden rounded-3xl md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
              alt={p.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </header>

      <section className="section bg-paper">
        <div className="container-xl grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-mist bg-white p-8 shadow-soft">
            <Target className="text-gold" size={28} />
            <h2 className="mt-4 text-lg font-semibold text-ink">{p.mission.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.mission.text}</p>
          </div>
          <div className="rounded-2xl border border-mist bg-white p-8 shadow-soft">
            <Eye className="text-gold" size={28} />
            <h2 className="mt-4 text-lg font-semibold text-ink">{p.vision.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.vision.text}</p>
          </div>
          <div className="rounded-2xl border border-mist bg-white p-8 shadow-soft">
            <HeartHandshake className="text-gold" size={28} />
            <h2 className="mt-4 text-lg font-semibold text-ink">{p.promise.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.promise.text}</p>
          </div>
        </div>
      </section>

      <section className="section bg-ink">
        <div className="container-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            {p.valuesKicker}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-paper md:text-4xl">
            {p.valuesTitle}
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {p.values.map((v) => {
              const Icon = icons[v.icon];
              return (
                <div key={v.title} className="glass rounded-2xl p-8 text-center">
                  <Icon className="mx-auto text-gold" size={28} />
                  <p className="mt-4 font-semibold text-paper">{v.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
