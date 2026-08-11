import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { siteConfig } from "@/lib/config";
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
    title: dict.legal.terminos.title,
    description: dict.legal.terminos.metaDescription,
    alternates: {
      canonical: `/${lang}/terminos-y-condiciones`,
      languages: { es: "/es/terminos-y-condiciones", en: "/en/terminos-y-condiciones" },
    },
  };
}

export default async function TerminosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === "en" ? "en" : "es";
  const dict = dictionaries[lang];
  const l = dict.legal.terminos;

  return (
    <LegalLayout title={l.title} updated={dict.legal.updated}>
      {l.sections.map((section, i) => (
        <div key={section.heading}>
          <h2 className="mb-2 text-lg font-semibold text-ink">{section.heading}</h2>
          <p>
            {section.body(
              siteConfig.name,
              siteConfig.address.city,
              siteConfig.address.state,
              siteConfig.address.country
            )}
            {i === 5 && (
              <>
                {" "}
                <a href={`mailto:${siteConfig.email}`} className="text-gold underline">
                  {siteConfig.email}
                </a>
                .
              </>
            )}
          </p>
        </div>
      ))}
    </LegalLayout>
  );
}
