import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

/**
 * Wordmark: CREDI (blanco/negro) + PLUS (dorado), con una flecha dorada
 * minimalista que atraviesa la parte superior de "PLUS" apuntando hacia
 * arriba-derecha, simbolizando crecimiento financiero.
 */
export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const base = variant === "dark" ? "#F8F8F8" : "#101010";

  return (
    <Link
      href="/"
      aria-label="CrediPlus — Página de inicio"
      className={`inline-flex items-center ${className}`}
    >
      <svg
        viewBox="0 0 300 60"
        role="img"
        aria-hidden="true"
        className="h-8 w-auto md:h-9"
      >
        <text
          x="0"
          y="42"
          fontFamily="Poppins, sans-serif"
          fontWeight="600"
          fontSize="38"
          fill={base}
          letterSpacing="0.5"
        >
          CREDI
        </text>
        <text
          x="146"
          y="42"
          fontFamily="Poppins, sans-serif"
          fontWeight="700"
          fontSize="38"
          fill="#D4AF37"
          letterSpacing="0.5"
        >
          PLUS
        </text>
        <path
          d="M148 16 L226 4 L214 2 M226 4 L221 15"
          stroke="#D4AF37"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </Link>
  );
}
