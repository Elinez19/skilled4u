import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { TrustedBy } from "../components/sections/TrustedBy";
import { ServiceCategories } from "../components/sections/ServiceCategories";
import { Services } from "../components/sections/Services";
import { FeatureGrid } from "../components/sections/FeatureGrid";
import { SecureSection } from "../components/sections/SecureSection";
import { SeamlessSection } from "../components/sections/SeamlessSection";
import { CtaSection } from "../components/sections/CtaSection";
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
        <ServiceCategories />
        <Services />
        <FeatureGrid />
        <SecureSection />
        <SeamlessSection />
        <CostEstimates />
        <CtaSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
