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
    title: dict.legal.privacidad.title,
    description: dict.legal.privacidad.metaDescription,
    alternates: {
      canonical: `/${lang}/politica-de-privacidad`,
      languages: { es: "/es/politica-de-privacidad", en: "/en/politica-de-privacidad" },
    },
  };
}

export default async function PoliticaPrivacidadPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === "en" ? "en" : "es";
  const dict = dictionaries[lang];
  const l = dict.legal.privacidad;

  return (
    <LegalLayout title={l.title} updated={dict.legal.updated}>
      <p>{l.intro(siteConfig.name)}</p>

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
            {i === 4 && (
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
