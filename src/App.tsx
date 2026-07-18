import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";
import { TrustedBy } from "./components/sections/TrustedBy";
import { Services } from "./components/sections/Services";

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      <Navbar />
      <main className="flex flex-col items-center overflow-hidden">
        <Hero />
        <Features />
        <TrustedBy />
        <Services />
      </main>
      <footer className="w-full border-t border-gray-100 py-12 mt-10">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Skilled4U. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
