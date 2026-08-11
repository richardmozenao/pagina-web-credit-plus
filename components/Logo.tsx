import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

/**
 * Wordmark oficial de CreditPlus — archivo original del manual de marca
 * (BancoDeImagenes/LOGO.jpeg). El manual prohíbe recrear el logo con
 * tipografías del sistema, así que se usa siempre esta imagen tal cual
 * fue aprobada, nunca un SVG reconstruido a mano.
 */
export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="CreditPlus — Página de inicio"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/brand/logo.jpg"
        alt="CreditPlus"
        width={300}
        height={60}
        priority
        className="h-14 w-auto rounded-md md:h-16"
      />
    </Link>
  );
}
