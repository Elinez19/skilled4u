import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
            S
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">
            Skilled<span className="text-blue-600">4U</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Find Pros
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            For Business
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            How it Works
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            About Us
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex font-semibold">
            Log In
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6">
            Sign Up &rarr;
          </Button>
        </div>
      </div>
    </header>
  );
}
