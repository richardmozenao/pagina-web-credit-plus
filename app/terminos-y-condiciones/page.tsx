import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Condiciones de uso del sitio web y los servicios de CrediPlus.",
  alternates: { canonical: "/terminos-y-condiciones" },
};

export default function TerminosPage() {
  return (
    <LegalLayout title="Términos y Condiciones" updated="30 de junio de 2026">
      <div>
        <h2 className="mb-2 text-lg font-semibold text-ink">
          1. Naturaleza del servicio
        </h2>
        <p>
          {siteConfig.name} ofrece servicios de educación financiera y
          orientación general sobre el manejo del crédito personal. No somos
          una entidad gubernamental, un buró de crédito, ni una institución
          financiera, y no otorgamos préstamos ni líneas de crédito.
        </p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-ink">
          2. Ausencia de garantías
        </h2>
        <p>
          No garantizamos resultados específicos, incluyendo, sin
          limitación, el aumento de tu puntaje de crédito, la aprobación de
          un préstamo, la eliminación de deudas o información negativa de tu
          reporte de crédito. Los resultados dependen de múltiples factores
          fuera de nuestro control, incluyendo tu historial financiero
          individual y las decisiones de terceros como bancos y burós de
          crédito.
        </p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-ink">
          3. Uso del sitio web
        </h2>
        <p>
          El contenido de este sitio es de carácter informativo y educativo.
          Al usar este sitio, aceptas no utilizarlo con fines ilícitos ni de
          manera que pueda dañar, deshabilitar o sobrecargar nuestros
          servidores.
        </p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-ink">
          4. Propiedad intelectual
        </h2>
        <p>
          El contenido, diseño, textos e imágenes de este sitio son propiedad
          de {siteConfig.name} o de sus respectivos licenciantes y están
          protegidos por leyes de propiedad intelectual. No está permitida su
          reproducción sin autorización previa.
        </p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-ink">
          5. Modificaciones
        </h2>
        <p>
          Podemos actualizar estos términos en cualquier momento. El uso
          continuo del sitio después de una actualización constituye tu
          aceptación de los nuevos términos.
        </p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-ink">6. Contacto</h2>
        <p>
          Si tienes dudas sobre estos términos, escríbenos a{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-gold underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </LegalLayout>
  );
}
