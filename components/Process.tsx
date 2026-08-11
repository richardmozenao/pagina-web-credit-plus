"use client";

import { motion } from "framer-motion";
import { PhoneCall, SearchCheck, ClipboardList, LineChart } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Consulta",
    text: "Conversamos sobre tu situación actual y tus metas financieras, sin costo ni compromiso.",
  },
  {
    icon: SearchCheck,
    title: "Análisis",
    text: "Revisamos tu reporte de crédito y te explicamos con claridad lo que encontramos.",
  },
  {
    icon: ClipboardList,
    title: "Plan personalizado",
    text: "Diseñamos contigo una estrategia realista, adaptada a tu historial y objetivos.",
  },
  {
    icon: LineChart,
    title: "Seguimiento",
    text: "Te acompañamos en el camino, ajustando el plan a medida que avanzas.",
  },
];

export default function Process() {
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
            Nuestro proceso
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
            Cuatro pasos claros, sin sorpresas
          </h2>
        </motion.div>

        <div className="relative mt-16 grid gap-10 md:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-mist md:block"
          />
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-start"
            >
              <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-gold">
                <step.icon size={20} />
              </div>
              <span className="text-xs font-semibold text-gold">
                Paso {i + 1}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
