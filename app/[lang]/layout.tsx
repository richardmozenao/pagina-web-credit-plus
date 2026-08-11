import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import { LangProvider } from "@/lib/i18n/LangProvider";
import { locales, type Locale } from "@/lib/i18n/routes";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === "en" ? "en" : "es";

  return (
    <LangProvider lang={lang}>
      <Navbar />
      <main id="contenido">{children}</main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </LangProvider>
  );
}
