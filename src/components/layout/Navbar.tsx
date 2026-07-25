import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { navLinks, servicesList } from "@/data";
import { Link } from "react-router";
import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";
import { SearchServiceModal } from "@/components/sections/SearchServiceModal";

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsDropdownOpen(true);
  };

  const handleServiceSelect = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsDropdownOpen(false);
    setIsModalOpen(true);
  };

  const filteredServices = servicesList
    .map(s => s.title)
    .filter(title => title.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredServices.length > 0) {
      handleServiceSelect(filteredServices[0]);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-7xl h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
            S
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">
            Skilled<span className="text-primary">4U</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 font-medium text-sm text-muted-foreground">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="hover:text-primary transition-colors">
              {link.title}
            </a>
          ))}
        </nav>

        {/* Search Bar */}
        <div ref={dropdownRef} className="hidden md:flex flex-1 max-w-md mx-4 relative z-50">
          <form onSubmit={handleSearch} className="relative w-full flex items-center">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="I need - e.g. Cleaning" 
              className="w-full pl-9 pr-24 rounded-full bg-white border-gray-200 focus-visible:ring-primary shadow-sm"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setIsDropdownOpen(true)}
            />
            <Button 
              type="submit" 
              variant="outline"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-8 px-4 text-primary border-primary/20 hover:bg-primary/5"
            >
              Search
            </Button>
          </form>

          {/* Autocomplete Dropdown */}
          {isDropdownOpen && searchQuery && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-2 max-h-[300px] overflow-y-auto">
              {filteredServices.length > 0 ? (
                filteredServices.map((service, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleServiceSelect(service)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
                  >
                    {service}
                  </button>
                ))
              ) : (
                <div className="px-4 py-3 text-sm text-gray-500">No services found</div>
              )}
            </div>
          )}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/book" className="w-full">
            <Button className="btn btn-primary rounded-full px-6">
              Book Now &rarr;
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" />}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="text-left font-bold text-xl tracking-tight text-foreground mb-8 border-b pb-4">
                Skilled<span className="text-primary">4U</span>
              </SheetTitle>
              <nav className="flex flex-col gap-6 text-lg font-medium text-muted-foreground">
                {navLinks.map((link, idx) => (
                  <a key={idx} href={link.href} className="hover:text-primary transition-colors">
                    {link.title}
                  </a>
                ))}
                
                <div className="h-px w-full bg-border/50 my-2"></div>
                
                <Link to="/book" className="w-full">
                  <Button className="btn btn-primary rounded-full w-full py-6 text-base">
                    Book Now &rarr;
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      <SearchServiceModal 
        isOpen={isModalOpen}
        onClose={setIsModalOpen}
        selectedService={selectedService}
      />
    </header>
  );
}
