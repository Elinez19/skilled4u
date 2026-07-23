import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle2, UserCircle } from "lucide-react";
import heroImage from "@/assets/professional-cleaner-1.jpg";

export function Hero() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 pt-6 pb-12 w-full flex justify-center">
      {/* Main container with rounded corners and overflow hidden */}
      <div className="bg-foreground rounded-[2rem] w-full max-w-7xl relative overflow-hidden min-h-150 flex items-center">
        
        {/* Background Image positioned to the right half */}
        <div className="absolute top-0 right-0 w-full md:w-[65%] h-full">
          <img 
            src={heroImage} 
            alt="Person booking an artisan service" 
            className="object-cover w-full h-full object-center"
          />
          {/* Gradient overlay to seamlessly blend the image into the dark left background */}
          <div className="absolute inset-0 bg-linear-to-r from-foreground via-foreground/70 to-transparent md:to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-transparent to-transparent md:hidden"></div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between p-8 md:p-16 lg:p-20">
          
          {/* Left Side: Text and Buttons */}
          <div className="w-full md:w-[55%] flex flex-col items-start">
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

          {/* Right Side: Floating Glassmorphism Card */}
          <div className="w-full md:w-[45%] flex justify-start md:justify-end mt-16 md:mt-0">
            <Card className="glass rounded-2xl shadow-2xl relative mt-10 md:mt-0 w-full max-w-[320px] bg-transparent border-0 text-white">
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
      </div>
    </section>
  );
}
