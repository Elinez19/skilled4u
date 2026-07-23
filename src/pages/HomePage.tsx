import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { TrustedBy } from "../components/sections/TrustedBy";
import { WhatWeDo } from "../components/sections/WhatWeDo";
import { StepsSection } from "../components/sections/StepsSection";
import { FeatureGrid } from "../components/sections/FeatureGrid";
import { InfoSection } from "../components/sections/InfoSection";
import { SeamlessSection } from "../components/sections/SeamlessSection";
import { CtaSection } from "../components/sections/CtaSection";
import { JoinAsPro } from "../components/sections/JoinAsPro";
import { Newsletter } from "../components/sections/Newsletter";
import { Footer } from "../components/layout/Footer";
import { ServicesCard } from "../components/sections/ServicesCard";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100">
      <Navbar />
      <main className="flex flex-col items-center overflow-hidden">
        <Hero />
        <TrustedBy />
        <WhatWeDo />
        <StepsSection />
        <FeatureGrid />
        <InfoSection />
        <SeamlessSection />
        <ServicesCard />
        <JoinAsPro />
        <CtaSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
