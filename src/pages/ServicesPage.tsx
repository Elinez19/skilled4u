import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { InfoSection } from "../components/sections/InfoSection";
import { CtaSection } from "../components/sections/CtaSection";
import { ServicesHero } from "../components/sections/ServicesHero";
import { ServicesDirectory } from "../components/sections/ServicesDirectory";
import { useEffect } from "react";

export function ServicesPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100">
      <Navbar />
      <main className="flex flex-col items-center overflow-hidden">
        <ServicesHero />
        <ServicesDirectory />
        <InfoSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
