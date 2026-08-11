"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappConfig } from "@/lib/config";

export default function WhatsAppButton() {
  const href = `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(
    whatsappConfig.defaultMessage
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
      <span className="sr-only">Escríbenos por WhatsApp</span>
    </motion.a>
  );
}
