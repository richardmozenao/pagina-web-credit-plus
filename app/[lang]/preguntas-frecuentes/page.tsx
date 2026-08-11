import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { faqJsonLd } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/routes";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === "en" ? "en" : "es";
  const dict = dictionaries[lang];
  return {
    title: dict.faqPage.title,
    description: dict.faqPage.description,
    alternates: {
      canonical: `/${lang}/preguntas-frecuentes`,
      languages: { es: "/es/preguntas-frecuentes", en: "/en/preguntas-frecuentes" },
    },
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === "en" ? "en" : "es";
  const dict = dictionaries[lang];
  const p = dict.faqPage;

  return (
    <>
      <header className="bg-ink pb-4 pt-36 text-center">
        <div className="container-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            {p.kicker}
          </span>
          <h1 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-semibold text-paper md:text-5xl">
            {p.heading}
          </h1>
        </div>
      </header>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(dict.faq.items)) }}
      />
      <FAQ />
      <CTA />
    </>
  );
}
