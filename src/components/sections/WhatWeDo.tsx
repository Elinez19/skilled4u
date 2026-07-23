import { Button } from "@/components/ui/button";
import { Plug, Droplets, Snowflake, Sofa, Truck } from "lucide-react";

export function WhatWeDo() {
  const services = [
    {
      icon: <Plug className="w-8 h-8" />,
      title: "Electrician",
      description: "Certified electricians for wiring, installations, repairs, and all your power needs - residential and commercial."
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Plumbing",
      description: "Licensed plumbers for leaks, pipe repairs, tank installations, and full bathroom fittings."
    },
    {
      icon: <Snowflake className="w-8 h-8" />,
      title: "AC Repair & Servicing",
      description: "Installation, servicing and repairs for all air conditioning units, split units, cassettes, and centralized systems."
    },
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Carpentry",
      description: "Furniture assembly, wardrobe fitting, ceilings, tiling, and full interior finishing work."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Moving & Relocation",
      description: "Professional home and office movers for packing, loading, and delivery - anywhere in Nigeria."
    }
  ];

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 w-full max-w-7xl mx-auto bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">What We Do</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Every Service Your Home Needs
        </h3>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          From emergency repairs to scheduled maintenance - skilled4U connects you to Nigeria's most trusted artisans & technicians
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-start"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
            <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
              {service.description}
            </p>
            <Button variant="ghost" className="mt-auto text-primary hover:text-primary/90 hover:bg-primary/5 p-0 h-auto font-semibold group">
              Book Now <span className="ml-2 group-hover:translate-x-1 transition-transform">&gt;</span>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
