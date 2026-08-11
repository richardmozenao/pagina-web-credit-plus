"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
        >
          <motion.svg
            viewBox="0 0 100 60"
            className="h-10 w-16"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M10 45 L50 10 L90 45"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: { duration: 0.8, ease: "easeInOut" },
                },
              }}
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
