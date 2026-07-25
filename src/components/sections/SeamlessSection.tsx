import { CheckCircle2 } from "lucide-react";
import seamlessImg from "@/assets/professional-electrician-2.jpg";

export function SeamlessSection() {
  const points = [
    "Instant artisan matching",
    "Real-time booking tracking",
    "Upfront transparent pricing",
    "Secure cashless payments",
  ];

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 w-full max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Tap, Match, and <br />
            <span className="text-primary">Get it Done</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            The fastest way to hire skilled artisans and technicians, right when you need them.
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
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] w-full max-w-md border border-border/50">
            <img 
              src={seamlessImg} 
              alt="Skilled professional at work" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-foreground/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
