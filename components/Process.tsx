"use client";

import { motion } from "framer-motion";
import { PhoneCall, SearchCheck, ClipboardList, LineChart } from "lucide-react";
import { useLang } from "@/lib/i18n/LangProvider";

const icons = { PhoneCall, SearchCheck, ClipboardList, LineChart };

export default function Process() {
  const { dict } = useLang();

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
            {dict.process.kicker}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
            {dict.process.title}
          </h2>
        </motion.div>

        <div className="relative mt-16 grid gap-10 md:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-mist md:block"
          />
          {dict.process.steps.map((step, i) => {
            const Icon = icons[step.icon];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col items-start"
              >
                <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-gold">
                  <Icon size={20} />
                </div>
                <span className="text-xs font-semibold text-gold">
                  {dict.process.stepLabel} {i + 1}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{step.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
