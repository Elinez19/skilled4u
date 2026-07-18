import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, UserCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="px-4 md:px-6 pt-6 pb-12 w-full flex justify-center">
      {/* Dark blue background container, similar to the green one in design */}
      <div className="bg-slate-900 rounded-[2rem] w-full max-w-7xl overflow-hidden relative flex flex-col md:flex-row items-center justify-between p-8 md:p-16 lg:p-20">
        
        {/* Left Content */}
        <div className="z-10 flex flex-col items-start max-w-xl mb-12 md:mb-0">
          <Badge 
            variant="outline" 
            className="mb-6 border-white/20 text-white bg-white/5 hover:bg-white/10 px-4 py-1.5 text-sm font-medium rounded-full"
          >
            Your Needs. Our Priority.
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Connecting you with <span className="text-blue-400">skilled artisans.</span>
          </h1>
          
          <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-md leading-relaxed">
            Find trusted professionals for your everyday needs and your biggest projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-8 py-6 text-base">
              Find an Artisan &rarr;
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent font-semibold rounded-full px-8 py-6 text-base">
              Explore Services
            </Button>
          </div>
        </div>

        {/* Right Content - Image and Glass Card */}
        <div className="relative w-full md:w-1/2 flex justify-end items-center mt-10 md:mt-0 z-10">
          <div className="relative w-full max-w-md aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80" 
              alt="Person using phone to book a service" 
              className="object-cover w-full h-full"
            />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
          </div>

          {/* Floating Glassmorphism Card */}
          <div className="absolute -bottom-6 -left-6 md:left-auto md:-right-8 md:top-1/2 md:-translate-y-1/2 glass rounded-2xl p-6 w-[280px]">
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <div className="bg-blue-600/20 p-2 rounded-full text-blue-400">
                <UserCircle size={24} />
              </div>
              <div>
                <p className="text-white/60 text-xs font-medium uppercase tracking-wider">Booked Pro</p>
                <p className="text-white font-semibold text-sm">Michael Barnes</p>
              </div>
              <div className="ml-auto w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-xs font-bold">
                MB
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/70">Service</span>
                <span className="text-white font-medium">Plumbing Fix</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/70">Arrival Time</span>
                <span className="text-white font-medium">10:30 AM</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/70">Status</span>
                <span className="text-blue-400 font-medium flex items-center gap-1">
                  <CheckCircle2 size={14} /> Confirmed
                </span>
              </div>
            </div>

            <Button className="w-full mt-6 bg-white/10 hover:bg-white/20 text-white border-white/10 h-10 rounded-xl text-sm font-medium transition-all">
              View Details &rarr;
            </Button>
          </div>
        </div>

        {/* Decorative background blur element */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      </div>
    </section>
  );
}
