import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { TrustedBy } from "../components/sections/TrustedBy";
import { WhatWeDo } from "../components/sections/WhatWeDo";
import { FeatureGrid } from "../components/sections/FeatureGrid";
import { InfoSection } from "../components/sections/InfoSection";
import { SeamlessSection } from "../components/sections/SeamlessSection";
import { CtaSection } from "../components/sections/CtaSection";
import { JoinAsPro } from "../components/sections/JoinAsPro";
import { Newsletter } from "../components/sections/Newsletter";
import { Footer } from "../components/layout/Footer";
import { CostEstimates } from "../components/sections/CostEstimates";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100">
      <Navbar />
      <main className="flex flex-col items-center overflow-hidden">
        <Hero />
        <TrustedBy />
        <WhatWeDo />
        <FeatureGrid />
        <InfoSection />
        <SeamlessSection />
        <CostEstimates />
        <JoinAsPro />
        <CtaSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
