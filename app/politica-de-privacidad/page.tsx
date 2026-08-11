import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Cómo CrediPlus recopila, usa y protege tu información personal.",
  alternates: { canonical: "/politica-de-privacidad" },
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalLayout title="Política de Privacidad" updated="30 de junio de 2026">
      <p>
        En {siteConfig.name} respetamos tu privacidad y nos comprometemos a
        proteger la información personal que nos compartes. Esta política
        explica qué información recopilamos, cómo la usamos y qué derechos
        tienes sobre ella.
      </p>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-ink">
          1. Información que recopilamos
        </h2>
        <p>
          Recopilamos la información que nos proporcionas directamente a
          través de nuestro formulario de contacto, correo electrónico o
          WhatsApp, como tu nombre, correo electrónico, número de teléfono y
          el contenido de tu mensaje. También podemos recopilar información
          técnica básica de navegación (como el tipo de dispositivo o
          navegador) con fines de mejora del sitio.
        </p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-ink">
          2. Cómo usamos tu información
        </h2>
        <p>
          Usamos tu información únicamente para responder tus consultas,
          brindarte los servicios solicitados y, si nos autorizas, enviarte
          contenido educativo relacionado con finanzas personales. No
          vendemos ni alquilamos tu información a terceros.
        </p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-ink">
          3. Cómo protegemos tu información
        </h2>
        <p>
          Implementamos medidas razonables, técnicas y organizativas, para
          proteger tu información contra accesos no autorizados, pérdida o
          uso indebido.
        </p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-ink">
          4. Servicios de terceros
        </h2>
        <p>
          Utilizamos proveedores externos, como el servicio de envío de
          formularios EmailJS, únicamente para procesar y entregarnos los
          mensajes que envías a través de nuestro sitio. Estos proveedores
          tienen sus propias políticas de privacidad.
        </p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-ink">5. Tus derechos</h2>
        <p>
          Puedes solicitarnos en cualquier momento que actualicemos o
          eliminemos tu información personal escribiéndonos a{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-gold underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-ink">
          6. Cambios a esta política
        </h2>
        <p>
          Podemos actualizar esta política ocasionalmente. Publicaremos
          cualquier cambio en esta misma página junto con la fecha de
          actualización.
        </p>
      </div>
    </LegalLayout>
  );
}
