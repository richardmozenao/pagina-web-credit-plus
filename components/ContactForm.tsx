"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { staticFormsConfig, siteConfig } from "@/lib/config";
import { useLang } from "@/lib/i18n/LangProvider";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const { dict } = useLang();
  const f = dict.contactPage.form;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;

    if (!staticFormsConfig.accessKey) {
      setStatus("error");
      setErrorMsg(f.notConfigured);
      return;
    }

    const data = new FormData(form);

    try {
      const res = await fetch("https://api.staticforms.dev/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          accessKey: staticFormsConfig.accessKey,
          subject: `Nueva consulta desde ${siteConfig.name}`,
          replyTo: data.get("email"),
          honeypot: data.get("botcheck") ?? "",
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error(result.message ?? "Static Forms request failed");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(f.sendError);
    }
  }

  return (
    <form
      id="formulario"
      onSubmit={handleSubmit}
      className="glass-light rounded-3xl p-8 md:p-10"
      aria-describedby="form-status"
    >
      {/* Honeypot anti-spam: Static Forms descarta el envío si este campo llega lleno */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
            {f.name}
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
            {f.email}
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
            {f.phone}
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
            {f.serviceLabel}
          </label>
          <select
            id="service"
            name="service"
            className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold"
            defaultValue=""
          >
            <option value="" disabled>
              {f.servicePlaceholder}
            </option>
            {f.serviceOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
            {f.message}
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
        {status === "loading" ? f.submitting : f.submit}
      </motion.button>

      <div id="form-status" role="status" aria-live="polite" className="mt-4">
        {status === "success" && (
          <p className="flex items-center gap-2 text-sm font-medium text-green-700">
            <CheckCircle2 size={18} /> {f.success}
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
