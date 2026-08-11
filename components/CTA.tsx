"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.15),transparent_60%)]"
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="container-xl relative"
      >
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-paper md:text-5xl">
          Da el primer paso hacia un mejor futuro financiero
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-mist/70">
          Agenda una consulta gratuita y conversemos, en español, sobre cómo
          fortalecer tu perfil crediticio.
        </p>
        <Link
          href="/contacto"
          className="mt-9 inline-block rounded-full bg-gold px-10 py-4 text-sm font-semibold text-ink shadow-gold transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          Agenda tu consulta gratuita
        </Link>
      </motion.div>
    </section>
  );
}
