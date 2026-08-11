import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, HeartHandshake, ShieldCheck, BookOpen, Handshake } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce la misión, visión y valores de CrediPlus: ayudar a la comunidad latina en Estados Unidos a fortalecer su historial crediticio con honestidad y educación.",
  alternates: { canonical: "/sobre-nosotros" },
};

const values = [
  { icon: ShieldCheck, title: "Transparencia" },
  { icon: HeartHandshake, title: "Honestidad" },
  { icon: Handshake, title: "Compromiso" },
  { icon: BookOpen, title: "Educación" },
];

export default function SobreNosotrosPage() {
  return (
    <>
      <header className="relative overflow-hidden bg-ink pb-20 pt-36">
        <div className="container-xl grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Sobre nosotros
            </span>
            <h1 className="mt-3 text-4xl font-semibold text-paper md:text-5xl">
              Acompañamos a la comunidad latina hacia un mejor futuro financiero
            </h1>
            <p className="mt-5 text-mist/70">
              CrediPlus nació para cerrar una brecha real: la falta de
              información financiera clara, en español, para quienes están
              construyendo su vida en Estados Unidos.
            </p>
          </div>
          <div className="relative h-72 overflow-hidden rounded-3xl md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
              alt="Equipo de asesores de CrediPlus conversando en una reunión de trabajo"
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
            <h2 className="mt-4 text-lg font-semibold text-ink">Misión</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Ayudar a la comunidad latina en Estados Unidos a mejorar su
              historial crediticio mediante asesoría personalizada, educación
              financiera y soluciones transparentes que les permitan alcanzar
              sus metas.
            </p>
          </div>
          <div className="rounded-2xl border border-mist bg-white p-8 shadow-soft">
            <Eye className="text-gold" size={28} />
            <h2 className="mt-4 text-lg font-semibold text-ink">Visión</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Ser una referencia confiable para la comunidad hispana en
              Estados Unidos, reconocida por su honestidad, claridad y
              excelente servicio.
            </p>
          </div>
          <div className="rounded-2xl border border-mist bg-white p-8 shadow-soft">
            <HeartHandshake className="text-gold" size={28} />
            <h2 className="mt-4 text-lg font-semibold text-ink">
              Nuestra promesa
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Creemos que un mejor crédito abre la puerta a nuevas
              oportunidades. Nuestro compromiso es acompañarte con honestidad,
              claridad y un servicio cercano.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-ink">
        <div className="container-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Nuestros valores
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-paper md:text-4xl">
            Lo que guía cada conversación con nuestros clientes
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="glass rounded-2xl p-8 text-center"
              >
                <v.icon className="mx-auto text-gold" size={28} />
                <p className="mt-4 font-semibold text-paper">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
