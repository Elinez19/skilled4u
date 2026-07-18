import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-10 px-6 sm:px-10 lg:px-16 w-full max-w-7xl mx-auto mb-10">
      <div className="bg-muted rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        {/* Email Icon Watermark */}
        <div className="absolute top-8 right-12 opacity-10">
          <Mail className="w-24 h-24 text-primary/90" />
        </div>
        
        <div className="w-full md:w-1/2 mb-8 md:mb-0 z-10">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Get More Done with Skilled4U
          </h2>
          <p className="text-muted-foreground text-sm">
            Join our community for the latest updates on on-demand services and pro tips.
          </p>
        </div>
        
        <div className="w-full md:w-[45%] flex items-center z-10">
          <div className="bg-card p-1.5 rounded-full flex w-full shadow-sm border border-border focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-transparent border-none outline-none px-6 text-foreground/90 text-sm placeholder:text-muted-foreground"
            />
            <Button className="btn btn-primary rounded-full px-8 py-5 text-base">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
