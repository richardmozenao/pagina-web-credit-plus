"use client";

import { motion } from "framer-motion";
import { Languages, Users, GraduationCap, Eye, Award } from "lucide-react";

const benefits = [
  {
    icon: Languages,
    title: "Atención en español",
    text: "Te explicamos cada paso en tu idioma, sin tecnicismos ni letras pequeñas.",
  },
  {
    icon: Users,
    title: "Acompañamiento personalizado",
    text: "Un plan hecho a partir de tu situación real, no una receta genérica.",
  },
  {
    icon: GraduationCap,
    title: "Educación financiera",
    text: "Aprendes a leer tu reporte y a tomar decisiones informadas a largo plazo.",
  },
  {
    icon: Eye,
    title: "Transparencia",
    text: "Sin promesas irreales. Te decimos qué es posible y qué no lo es.",
  },
  {
    icon: Award,
    title: "Experiencia",
    text: "Años ayudando a familias latinas a avanzar hacia sus metas financieras.",
  },
];

export default function Benefits() {
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
            Por qué CrediPlus
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
            Un acompañamiento honesto, pensado para ti
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-mist bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:border-gold/40"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-gold transition group-hover:bg-gold group-hover:text-ink">
                <b.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-ink">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {b.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
