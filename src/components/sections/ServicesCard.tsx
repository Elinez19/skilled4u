import { costEstimates } from "../../data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ServicesCard() {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 w-full max-w-7xl mx-auto bg-slate-50 rounded-[2.5rem] my-12">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Pricing Guide</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Transparent Cost Estimates
        </h3>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Compare standardized quotes for common services to help you make smart hiring decisions with zero hidden fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {costEstimates.map((estimate, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow border border-slate-100 rounded-3xl bg-white">
            <div className="aspect-4/3 w-full relative">
              <img 
                src={estimate.image} 
                alt={estimate.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-foreground mb-3">{estimate.title}</h4>
              <p className="text-muted-foreground text-sm mb-4">
                <span className="text-foreground font-semibold">{estimate.priceRange}</span> <span className="text-muted-foreground/80">{estimate.condition}</span>
              </p>
              <a href={estimate.link} className="text-primary hover:text-primary/90 text-sm font-bold transition-colors group inline-flex items-center">
                Read more <span className="ml-1 group-hover:translate-x-1 inline-block transition-transform">&raquo;</span>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button size="lg" className="px-8 font-semibold rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors shadow-sm hover:shadow-md">
          View All Cost Estimates
        </Button>
      </div>
    </section>
  );
}
