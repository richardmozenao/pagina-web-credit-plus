import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Información legal e identificación del titular del sitio web de CrediPlus.",
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegalPage() {
  return (
    <LegalLayout title="Aviso Legal" updated="30 de junio de 2026">
      <div>
        <h2 className="mb-2 text-lg font-semibold text-ink">
          Identificación
        </h2>
        <p>
          Este sitio web es operado por {siteConfig.name}, con domicilio en{" "}
          {siteConfig.address.city}, {siteConfig.address.state},{" "}
          {siteConfig.address.country}. Para cualquier consulta legal, puedes
          escribir a{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-gold underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-ink">
          Naturaleza informativa
        </h2>
        <p>
          {siteConfig.name} no es una entidad gubernamental, no está afiliada
          al gobierno de Estados Unidos, ni es un buró de crédito, banco o
          institución de préstamos. Los servicios ofrecidos son de carácter
          educativo y de orientación general; no constituyen asesoría legal
          ni financiera individualizada de carácter vinculante.
        </p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-ink">
          Sin garantías de resultados
        </h2>
        <p>
          No garantizamos aumentos de puntaje de crédito, aprobación de
          préstamos ni eliminación de deudas o información de tu reporte de
          crédito. Cualquier ejemplo, testimonio o cifra presentada en este
          sitio tiene fines ilustrativos, salvo que se indique lo contrario.
        </p>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold text-ink">
          Enlaces a terceros
        </h2>
        <p>
          Este sitio puede contener enlaces a sitios de terceros (como redes
          sociales o WhatsApp). No nos hacemos responsables por el contenido
          o las políticas de privacidad de sitios externos.
        </p>
      </div>
    </LegalLayout>
  );
}
