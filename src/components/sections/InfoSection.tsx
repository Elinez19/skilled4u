import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import infoImg from "@/assets/professional-plumber-1.jpg";

export function InfoSection() {
  const points = [
    "Find an Artisan",
    "Book a Service",
    "Track Your Request",
    "Satisfaction Guarantee",
  ];

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 w-full max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Safe, Vetted, and <br />
            <span className="text-primary">Ready to Work</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            Advanced screening and rating systems to ensure you only get the best artisans for your home or office.
          </p>

          <ul className="space-y-4 mb-8">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-foreground/90 font-medium">{point}</span>
              </li>
            ))}
          </ul>

          <Link to="/book">
            <Button variant="link" className="text-primary font-bold p-0 h-auto hover:text-primary/90 text-base">
              Book Now &rarr;
            </Button>
          </Link>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square w-full max-w-md">
            <img 
              src={infoImg} 
              alt="Safe and vetted professional" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-foreground/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
