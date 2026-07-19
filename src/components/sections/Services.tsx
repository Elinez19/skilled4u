import { Button } from "@/components/ui/button";
import { servicesList } from "@/data";

export function Services() {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Any Skill, On-Demand
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Request a pro for any task and get matched in seconds.
          </p>
        </div>
        <Button variant="outline" className="hidden md:inline-flex mt-6 md:mt-0 font-semibold border-border">
          View All Services
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {servicesList.map((service, index) => (
          <div 
            key={index} 
            className="border border-border/50 rounded-3xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col items-start group bg-card"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
              {service.description}
            </p>
            <a href="#" className="text-primary font-semibold text-sm flex items-center hover:text-primary/90 transition-colors mt-auto">
              Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </div>
        ))}
      </div>
      
      <Button variant="outline" className="md:hidden w-full mt-8 font-semibold border-border">
        View All Services
      </Button>
    </section>
  );
}
