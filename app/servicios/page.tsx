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
import { services } from "@/lib/services-data";
import CTA from "@/components/CTA";

const icons = { FileSearch, GraduationCap, TrendingUp, Home, Car, Compass };

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Conoce los servicios de CrediPlus: revisión de reporte de crédito, educación financiera, estrategias personalizadas y preparación para préstamos hipotecarios y de auto.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <header className="bg-ink pb-16 pt-36 text-center">
        <div className="container-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Servicios
          </span>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-semibold text-paper md:text-5xl">
            Todo lo que hacemos por tu tranquilidad financiera
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-mist/70">
            Cada servicio está diseñado para informarte y prepararte, con
            honestidad, sin promesas irreales sobre tu puntaje o tus deudas.
          </p>
        </div>
      </header>

      <section className="section bg-paper">
        <div className="container-xl grid gap-8 md:grid-cols-2">
          {services.map((s) => {
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
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {s.description}
                </p>
                <Link
                  href="/contacto"
                  className="mt-6 inline-block rounded-full border border-ink px-6 py-2.5 text-sm font-semibold text-ink transition hover:border-gold hover:text-gold"
                >
                  Consultar sobre este servicio
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
