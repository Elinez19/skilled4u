import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import cleanerImg from "@/assets/professional-cleaner-1.jpg";
import electricianImg from "@/assets/professional-electrician-1.jpg";
import plumberImg from "@/assets/professional-plumber-1.jpg";
import carpenterImg from "@/assets/professional-carpenter-1.jpg";

const heroImages = [
  { id: 1, src: cleanerImg, alt: "Professional Cleaner" },
  { id: 2, src: electricianImg, alt: "Professional Electrician" },
  { id: 3, src: plumberImg, alt: "Professional Plumber" },
  { id: 4, src: carpenterImg, alt: "Professional Carpenter" },
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full h-screen flex justify-center relative">
      {/* Main container full screen */}
      <div className="bg-primary w-full relative overflow-hidden h-full flex items-center">
        
        {/* Background Image Carousel positioned to cover full screen */}
        <div className="absolute inset-0 w-full h-full">
          <div className="overflow-hidden w-full h-full" ref={emblaRef}>
            <div className="flex h-full w-full">
              {heroImages.map((image) => (
                <div className="flex-[0_0_100%] min-w-0 h-full relative" key={image.id}>
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="object-cover w-full h-full object-center"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Very dark overlay */}
          <div className="absolute inset-0 bg-slate-950/80 pointer-events-none"></div>
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-950/50 to-slate-950/90 pointer-events-none"></div>
          <div className="absolute inset-0 bg-primary/10 mix-blend-color pointer-events-none"></div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-8 md:p-16 lg:p-20 pointer-events-none h-full">
          
          {/* Left Side: Text and Buttons */}
          <div className="w-full md:w-[55%] flex flex-col items-start pointer-events-auto">
            <Badge 
              variant="outline" 
              className="mb-6 border-white/20 text-white bg-white/5 hover:bg-white/10 px-4 py-1.5 text-sm font-medium rounded-full backdrop-blur-sm"
            >
              On-Demand Verified Artisans
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight drop-shadow-md">
              Find local artisans <br className="hidden md:block"/>
              for <span className="text-primary">everything you need</span>
            </h1>
            
            <p className="text-muted text-lg md:text-xl mb-8 max-w-md leading-relaxed drop-shadow-md">
              From cleaners, plumbers, electricians, mechanics to carpenters and more — Skilled4u connects you with the right verified artisans, fast.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="btn btn-primary rounded-full px-8 py-6 text-base">
                Book an Artisan Now &rarr;
              </Button>
              <Button size="lg" variant="outline" className="btn btn-outline border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent rounded-full px-8 py-6 text-base backdrop-blur-sm">
                Explore Services
              </Button>
            </div>
          </div>


        </div>
        
        {/* Slider Controls - Centered at the right */}
        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20 pointer-events-auto">
          <div className="flex flex-col gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2 rounded-full transition-all ${index === selectedIndex ? "h-8 bg-primary" : "h-2 bg-white/40 hover:bg-white/60"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
