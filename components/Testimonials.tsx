"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Info } from "lucide-react";
import { useLang } from "@/lib/i18n/LangProvider";

export default function Testimonials() {
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
            {dict.testimonials.kicker}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
            {dict.testimonials.title}
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {dict.testimonials.items.map((t, i) => (
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
                  <Star key={idx} size={16} fill="#E8A33D" strokeWidth={0} />
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
          {dict.testimonials.disclaimer}
        </p>
      </div>
    </section>
  );
}
