"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/faq-data";

export default function FAQ({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  const items = compact ? faqs.slice(0, 4) : faqs;

  return (
    <section className="section bg-ink">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Preguntas frecuentes
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-paper md:text-4xl">
            Respuestas claras, sin letras pequeñas
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-mist/10">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left text-base font-medium text-paper hover:text-gold"
                  >
                    {item.question}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-gold"
                    >
                      <ChevronDown size={20} />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm leading-relaxed text-mist/70">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
