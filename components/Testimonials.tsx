"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Info } from "lucide-react";

const testimonials = [
  {
    name: "Marisol R.",
    city: "Houston, TX",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    quote:
      "Me explicaron mi reporte de crédito con paciencia y en español. Por fin entendí qué estaba pasando con mi historial.",
  },
  {
    name: "Jorge M.",
    city: "Orlando, FL",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote:
      "El plan que armamos juntos fue realista y claro. Sentí que trabajaban conmigo, no solo para venderme algo.",
  },
  {
    name: "Ana P.",
    city: "Phoenix, AZ",
    rating: 5,
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    quote:
      "Aprendí mucho sobre cómo funciona el crédito aquí en Estados Unidos. Hoy me siento más segura tomando decisiones.",
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-paper">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Testimonios
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
            Historias de personas que confiaron en nosotros
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-mist bg-white p-8 shadow-soft"
            >
              <div className="flex items-center gap-1 text-gold" aria-hidden="true">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={16} fill="#D4AF37" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-ink/70">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src={t.photo}
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink/50">{t.city}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="mx-auto mt-8 flex max-w-xl items-start gap-2 text-center text-xs text-ink/45">
          <Info size={14} className="mt-0.5 shrink-0" />
          Los testimonios y fotografías mostrados son ejemplos ilustrativos
          creados para fines de diseño y no representan clientes reales de
          CrediPlus.
        </p>
      </div>
    </section>
  );
}
