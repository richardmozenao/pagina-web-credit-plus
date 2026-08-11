"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileSearch,
  GraduationCap,
  TrendingUp,
  Home,
  Car,
  Compass,
  ArrowRight,
} from "lucide-react";
import { useLang } from "@/lib/i18n/LangProvider";

const icons = { FileSearch, GraduationCap, TrendingUp, Home, Car, Compass };

export default function Services() {
  const { lang, dict } = useLang();

  return (
    <section className="section bg-ink">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            {dict.services.kicker}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-paper md:text-4xl">
            {dict.services.title}
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dict.services.items.map((s, i) => {
            const Icon = icons[s.iconName];
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass flex flex-col rounded-2xl p-8"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-paper">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mist/70">{s.short}</p>
                <Link
                  href={`/${lang}/servicios#${s.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold hover:gap-3 transition-all"
                >
                  {dict.services.linkMore} <ArrowRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
