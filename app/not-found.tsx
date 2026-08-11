import Link from "next/link";
import { Home, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center">
      <span className="text-gradient-gold text-7xl font-bold md:text-8xl">
        404
      </span>
      <h1 className="mt-6 text-2xl font-semibold text-paper md:text-3xl">
        Esta página no está disponible
      </h1>
      <p className="mt-3 max-w-md text-sm text-mist/60">
        El enlace que intentaste abrir no existe o fue movido. Puedes volver
        al inicio o escribirnos si necesitas ayuda.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink"
        >
          <Home size={16} /> Volver al inicio
        </Link>
        <Link
          href="/contacto"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-mist/30 px-7 py-3.5 text-sm font-semibold text-paper hover:border-gold hover:text-gold"
        >
          <MessageCircle size={16} /> Contactar soporte
        </Link>
      </div>
    </section>
  );
}
