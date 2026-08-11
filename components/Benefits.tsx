"use client";

import { motion } from "framer-motion";
import { Languages, Users, GraduationCap, Eye, Award } from "lucide-react";
import { useLang } from "@/lib/i18n/LangProvider";

const icons = { Languages, Users, GraduationCap, Eye, Award };

export default function Benefits() {
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
            {dict.benefits.kicker}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
            {dict.benefits.title}
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {dict.benefits.items.map((b, i) => {
            const Icon = icons[b.icon];
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-mist bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:border-gold/40"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-gold transition group-hover:bg-gold group-hover:text-ink">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-ink">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{b.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
