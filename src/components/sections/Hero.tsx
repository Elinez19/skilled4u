import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle2, UserCircle, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
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

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950/90 pointer-events-none"></div>
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

          {/* Right Side: Floating Glassmorphism Card and Carousel Controls */}
          <div className="w-full md:w-[45%] flex flex-col items-start md:items-end justify-center mt-16 md:mt-0 relative h-full min-h-[300px]">
            <Card className="glass rounded-2xl shadow-2xl relative mt-10 md:mt-0 w-full max-w-[320px] bg-transparent border-0 text-white pointer-events-auto">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                  <div className="bg-primary/20 p-2 rounded-full text-primary">
                    <UserCircle size={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-medium uppercase tracking-wider">Welcome Back</p>
                    <p className="text-white font-semibold text-sm">Michael Barnes</p>
                  </div>
                  <Avatar className="ml-auto w-8 h-8">
                    <AvatarFallback className="bg-white/10 text-white text-xs font-bold">MB</AvatarFallback>
                  </Avatar>
                </div>

              <div className="space-y-4 mb-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/70">Next Booking</span>
                  <span className="text-white font-medium">Plumbing Fix</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/70">Arrival Time</span>
                  <span className="text-white font-medium">10:30 AM</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/70">Status</span>
                  <span className="text-primary font-medium flex items-center gap-1">
                    <CheckCircle2 size={14} /> Confirmed
                  </span>
                </div>
              </div>

                <Button className="w-full mt-6 bg-transparent hover:bg-white/10 text-white border border-white/20 h-10 rounded-xl text-sm font-medium transition-all">
                  View Dashboard &rarr;
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Slider Controls - Centered at the bottom */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20 pointer-events-auto">
          <button 
            onClick={scrollPrev}
            className="bg-white/5 hover:bg-white/10 text-white p-2.5 rounded-full backdrop-blur-md transition-all border border-white/10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all ${index === selectedIndex ? "w-8 bg-primary" : "w-2 bg-white/40 hover:bg-white/60"}`}
              />
            ))}
          </div>
          <button 
            onClick={scrollNext}
            className="bg-white/5 hover:bg-white/10 text-white p-2.5 rounded-full backdrop-blur-md transition-all border border-white/10"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
