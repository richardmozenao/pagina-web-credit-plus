import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
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
    title: dict.contactPage.title,
    description: dict.contactPage.description,
    alternates: {
      canonical: `/${lang}/contacto`,
      languages: { es: "/es/contacto", en: "/en/contacto" },
    },
  };
}

export default async function ContactoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === "en" ? "en" : "es";
  const dict = dictionaries[lang];
  const p = dict.contactPage;

  const infoItems = [
    { icon: Mail, label: p.info.email, value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    {
      icon: Phone,
      label: p.info.phone,
      value: siteConfig.phoneDisplay,
      href: `tel:${siteConfig.phoneDisplay.replace(/[^0-9]/g, "")}`,
    },
    {
      icon: MapPin,
      label: p.info.location,
      value: `${siteConfig.address.city}, ${siteConfig.address.state}`,
      href: undefined,
    },
    { icon: Clock, label: p.info.schedule, value: p.info.scheduleValue, href: undefined },
  ];

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
        <div className="container-xl grid gap-10 lg:grid-cols-[0.9fr_1.4fr]">
          <div className="space-y-4">
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-mist bg-white p-6 shadow-soft"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-gold">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-ink/40">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium text-ink hover:text-gold">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-ink">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
