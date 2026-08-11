"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { emailjsConfig } from "@/lib/config";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;

    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
      setStatus("error");
      setErrorMsg(
        "El formulario aún no está conectado. Configura las claves de EmailJS en lib/config.ts (ver instrucciones en el archivo README.md)."
      );
      return;
    }

    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form,
        { publicKey: emailjsConfig.publicKey }
      );
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        "No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos directamente por correo o WhatsApp."
      );
    }
  }

  return (
    <form
      id="formulario"
      onSubmit={handleSubmit}
      noValidate
      className="glass-light rounded-3xl p-8 md:p-10"
      aria-describedby="form-status"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
            Nombre completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-ink">
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold"
          />
        </div>

        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-ink">
            ¿En qué te podemos ayudar?
          </label>
          <select
            id="service"
            name="service"
            className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold"
            defaultValue=""
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option>Revisión de reporte de crédito</option>
            <option>Educación financiera</option>
            <option>Preparación para préstamo hipotecario</option>
            <option>Preparación para financiamiento de auto</option>
            <option>Otro</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full resize-none rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold"
          />
        </div>
      </div>

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-paper transition hover:bg-black disabled:opacity-60 md:w-auto"
      >
        {status === "loading" && <Loader2 size={18} className="animate-spin" />}
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
      </motion.button>

      <div id="form-status" role="status" aria-live="polite" className="mt-4">
        {status === "success" && (
          <p className="flex items-center gap-2 text-sm font-medium text-green-700">
            <CheckCircle2 size={18} /> ¡Gracias! Recibimos tu mensaje y te
            contactaremos pronto.
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 text-sm font-medium text-red-700">
            <AlertCircle size={18} /> {errorMsg}
          </p>
        )}
      </div>
    </form>
  );
}
