import { Button } from "@/components/ui/button";
import { Wrench, Zap, Droplets, Sparkles, Hammer } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Wrench className="w-6 h-6 text-emerald-600" />,
      title: "Home Maintenance",
      description: "General repairs, mounting, and everyday fixes for your home.",
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      title: "Electrical Works",
      description: "Safe and reliable electrical installations and troubleshooting.",
    },
    {
      icon: <Droplets className="w-6 h-6 text-emerald-600" />,
      title: "Plumbing",
      description: "Expert plumbers for leaks, installations, and pipe repairs.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
      title: "Cleaning Services",
      description: "Deep cleaning, regular housekeeping, and move-out cleans.",
    },
    {
      icon: <Hammer className="w-6 h-6 text-emerald-600" />,
      title: "Renovations",
      description: "Major home improvements and structural remodeling projects.",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Service Smarter, Live Better
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl">
            Find the right skilled professional for any task, big or small.
          </p>
        </div>
        <Button variant="outline" className="hidden md:inline-flex mt-6 md:mt-0 font-semibold border-gray-200">
          View All Services
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:border-emerald-100 transition-all duration-300 flex flex-col items-start group bg-white"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
              {service.description}
            </p>
            <a href="#" className="text-emerald-600 font-semibold text-sm flex items-center hover:text-emerald-700 transition-colors mt-auto">
              Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </div>
        ))}
      </div>
      
      <Button variant="outline" className="md:hidden w-full mt-8 font-semibold border-gray-200">
        View All Services
      </Button>
    </section>
  );
}
