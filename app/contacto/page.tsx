import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Agenda tu consulta gratuita con CrediPlus. Escríbenos por correo, WhatsApp o completa el formulario y te contactaremos en español.",
  alternates: { canonical: "/contacto" },
};

const infoItems = [
  { icon: Mail, label: "Correo", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Teléfono", value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phoneDisplay.replace(/[^0-9]/g, "")}` },
  { icon: MapPin, label: "Ubicación", value: `${siteConfig.address.city}, ${siteConfig.address.state}`, href: undefined },
  { icon: Clock, label: "Horario", value: "Lun – Vie · 9:00 am – 6:00 pm", href: undefined },
];

export default function ContactoPage() {
  return (
    <>
      <header className="bg-ink pb-16 pt-36 text-center">
        <div className="container-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Contacto
          </span>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-semibold text-paper md:text-5xl">
            Hablemos sobre tu próximo paso financiero
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-mist/70">
            Completa el formulario o escríbenos directamente. Te respondemos
            en español, sin presión ni compromiso.
          </p>
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
                  <p className="text-xs uppercase tracking-wide text-ink/40">
                    {item.label}
                  </p>
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
