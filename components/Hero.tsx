"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-ink pt-20">
      <Image
        src="https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1800&q=80"
        alt="Familia latina sonriendo frente a su nueva casa, celebrando un logro financiero"
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/30" />

      <div className="container-xl relative z-10 grid gap-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/30 px-4 py-1.5 text-xs font-medium tracking-wide text-gold backdrop-blur-sm">
            <ShieldCheck size={14} /> Atención 100% en español
          </span>

          <h1 className="text-4xl font-semibold leading-tight text-paper md:text-6xl">
            Tu crédito puede{" "}
            <span className="text-gradient-gold">abrirte nuevas oportunidades.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist/80">
            Te acompañamos a entender tu reporte de crédito, tomar mejores
            decisiones financieras y prepararte con confianza para tu próxima
            casa, tu próximo auto o la tarjeta que necesitas.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contacto"
              className="rounded-full bg-gold px-8 py-4 text-center text-sm font-semibold text-ink shadow-gold transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Agenda tu consulta
            </Link>
            <a
              href="/contacto#formulario"
              className="rounded-full border border-mist/30 px-8 py-4 text-center text-sm font-semibold text-paper transition hover:border-gold hover:text-gold"
            >
              Escríbenos
            </a>
          </div>

          <p className="mt-6 text-xs text-mist/50">
            Servicio educativo e informativo. No garantizamos aumentos de
            puntaje ni eliminación de deudas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
