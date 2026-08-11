import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Más crédito, más oportunidades",
  description:
    "CrediPlus ayuda a la comunidad latina en Estados Unidos a entender su crédito, educarse financieramente y prepararse para comprar casa o auto. Atención 100% en español.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Benefits />
      <Services />
      <Process />
      <Testimonials />
      <FAQ compact />
      <CTA />
    </>
  );
}
