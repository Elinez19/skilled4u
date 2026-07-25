import { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { ALL_SERVICES } from "@/constants/services";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ITEMS_PER_PAGE = 9;

export function ServicesDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter services based on search query
  const filteredServices = ALL_SERVICES.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.subServices?.some(sub => sub.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentServices = filteredServices.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Handle page change
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 400, behavior: "smooth" }); // scroll to top of directory
    }
  };

  // Reset pagination when searching
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full">
      
      {/* Search Bar */}
      <div className="mb-12 max-w-2xl mx-auto relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          placeholder="Search for a service... (e.g. Plumbing, Cleaning)"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg"
        />
      </div>

      {/* Results Count */}
      <div className="mb-8 text-slate-500 text-center">
        Showing {currentServices.length} of {filteredServices.length} services
      </div>

      {/* Services Grid */}
      {currentServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{service.name}</h4>
                
                {/* Displaying some sub-services as description */}
                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                  {service.subServices 
                    ? service.subServices.join(" • ")
                    : "Professional " + service.name.toLowerCase() + " by verified artisans."}
                </p>
                
                <Link to="/book" className="mt-auto w-full block">
                  <Button size="lg" className="w-full font-semibold group text-base py-6">
                    Book Now <span className="ml-2 group-hover:translate-x-1 transition-transform">&gt;</span>
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-100">
          <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-xl font-bold text-slate-700 mb-2">No services found</h3>
          <p className="text-slate-500">We couldn't find any services matching "{searchQuery}".</p>
          <Button 
            variant="outline" 
            className="mt-6"
            onClick={() => {
              setSearchQuery("");
              setCurrentPage(1);
            }}
          >
            Clear Search
          </Button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-16">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="rounded-full w-10 h-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-1 mx-2">
            {Array.from({ length: totalPages }).map((_, i) => {
              const page = i + 1;
              const isCurrent = page === currentPage;
              
              // Simple pagination rendering (could be improved for many pages)
              if (totalPages > 5) {
                if (page !== 1 && page !== totalPages && Math.abs(page - currentPage) > 1) {
                  if (page === 2 || page === totalPages - 1) {
                    return <span key={page} className="text-slate-400 px-1">...</span>;
                  }
                  return null;
                }
              }
              
              return (
                <Button
                  key={page}
                  variant={isCurrent ? "default" : "ghost"}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-full font-medium ${isCurrent ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  {page}
                </Button>
              );
            })}
          </div>

          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="rounded-full w-10 h-10"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </section>
  );
}
