import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SecureSection() {
  const points = [
    "256-bit SSL encryption",
    "Verified professional backgrounds",
    "Secure escrow payments",
    "Satisfaction guarantee",
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
            Advanced screening and rating systems to ensure you only get the best.
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

          <Button variant="link" className="text-primary font-bold p-0 h-auto hover:text-primary/90 text-base">
            Learn More About Security &rarr;
          </Button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="bg-primary/10 rounded-3xl p-12 w-full max-w-md aspect-square flex items-center justify-center relative shadow-sm border border-primary/20">
            <div className="w-40 h-56 bg-gradient-to-b from-primary/80 to-primary rounded-2xl shadow-2xl relative flex items-center justify-center">
                <div className="w-16 h-20 border-8 border-border absolute -top-10 rounded-t-full shadow-inner"></div>
                <div className="w-6 h-10 bg-primary/90 rounded-full shadow-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
