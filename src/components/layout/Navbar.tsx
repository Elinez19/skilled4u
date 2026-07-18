import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-7xl h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xl">
            S
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">
            Skilled<span className="text-emerald-600">4U</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
          <a href="#" className="hover:text-emerald-600 transition-colors">
            Find Pros
          </a>
          <a href="#" className="hover:text-emerald-600 transition-colors">
            For Business
          </a>
          <a href="#" className="hover:text-emerald-600 transition-colors">
            How it Works
          </a>
          <a href="#" className="hover:text-emerald-600 transition-colors">
            About Us
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="font-semibold">
            Log In
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full px-6">
            Sign Up &rarr;
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" />}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="text-left font-bold text-xl tracking-tight text-slate-900 mb-8 border-b pb-4">
                Skilled<span className="text-emerald-600">4U</span>
              </SheetTitle>
              <nav className="flex flex-col gap-6 text-lg font-medium text-slate-600">
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  Find Pros
                </a>
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  For Business
                </a>
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  How it Works
                </a>
                <a href="#" className="hover:text-emerald-600 transition-colors">
                  About Us
                </a>
                
                <div className="h-px w-full bg-gray-100 my-2"></div>
                
                <a href="#" className="hover:text-emerald-600 transition-colors font-semibold py-2">
                  Log In
                </a>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full w-full py-6 text-base">
                  Sign Up &rarr;
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
