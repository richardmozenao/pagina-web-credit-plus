"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
  { href: "/preguntas-frecuentes", label: "Preguntas Frecuentes" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastY, setLastY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setHidden(y > lastY && y > 120);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      animate={{ y: hidden ? -96 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="container-xl flex h-20 items-center justify-between"
      >
        <Logo variant="dark" />

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                  pathname === link.href ? "text-gold" : "text-paper"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contacto"
          className="hidden rounded-full border border-gold bg-gold px-6 py-2.5 text-sm font-semibold text-ink transition hover:bg-transparent hover:text-gold md:inline-block"
        >
          Agenda tu consulta
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="text-paper md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="glass md:hidden"
          >
            <ul className="container-xl flex flex-col gap-1 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-lg px-3 py-3 text-base font-medium ${
                      pathname === link.href
                        ? "text-gold"
                        : "text-paper hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contacto"
                  className="block rounded-full bg-gold px-4 py-3 text-center text-sm font-semibold text-ink"
                >
                  Agenda tu consulta
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
