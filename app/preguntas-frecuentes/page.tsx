import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { faqs } from "@/lib/faq-data";
import { faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description:
    "Resolvemos las dudas más comunes sobre los servicios de educación financiera y orientación de crédito de CrediPlus.",
  alternates: { canonical: "/preguntas-frecuentes" },
};

export default function FAQPage() {
  return (
    <>
      <header className="bg-ink pb-4 pt-36 text-center">
        <div className="container-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Ayuda
          </span>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-semibold text-paper md:text-5xl">
            Preguntas frecuentes
          </h1>
        </div>
      </header>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <FAQ />
      <CTA />
    </>
  );
}
