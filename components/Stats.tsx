"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { useLang } from "@/lib/i18n/LangProvider";

function Counter({ value, suffix, locale }: { value: number; suffix: string; locale: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString(locale)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { lang, dict } = useLang();
  const locale = lang === "es" ? "es-US" : "en-US";

  return (
    <section className="border-y border-gold/15 bg-ink py-14">
      <div className="container-xl grid grid-cols-1 gap-10 text-center sm:grid-cols-2">
        {dict.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="font-display text-4xl font-semibold text-gold md:text-5xl">
              <Counter value={s.value} suffix={s.suffix} locale={locale} />
            </div>
            <p className="mt-2 text-sm text-mist/60">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
