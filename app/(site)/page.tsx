import { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

import FAQ from "@/components/FAQ";
import TechnologiesWeUtilize from "@/components/Technologies";
import AboutUs from "@/components/AboutUs";
import Process from "@/components/Process";

export const metadata: Metadata = {
  title: "KeenSight Analytics",
  description: "Empowering Businesses Through Advanced Data and AI Solutions",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <TechnologiesWeUtilize />
      <AboutUs />
      <FAQ />
    </main>
  );
}
