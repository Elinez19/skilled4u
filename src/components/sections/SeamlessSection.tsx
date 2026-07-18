import { CheckCircle2 } from "lucide-react";

export function SeamlessSection() {
  const points = [
    "Instant pro matching algorithm",
    "Real-time location tracking",
    "Upfront transparent pricing",
    "Cashless app payments",
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
            The fastest way to hire skilled professionals, right when you need them.
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
          <div className="bg-muted/50 rounded-3xl p-8 w-full max-w-md relative flex items-center justify-center h-[500px] border border-border/50">
             {/* Phone mockup placeholder */}
             <div className="w-64 h-[450px] bg-card rounded-[2.5rem] shadow-xl border-8 border-foreground overflow-hidden relative">
               <div className="absolute top-0 w-full h-6 flex justify-center z-10">
                 <div className="w-24 h-4 bg-foreground rounded-b-xl"></div>
               </div>
               <div className="p-6 pt-16 flex flex-col items-center h-full bg-muted/50">
                 <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                   <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">✓</div>
                 </div>
                 <p className="text-muted-foreground text-sm mb-1 font-medium">Payment Successful</p>
                 <h3 className="text-3xl font-bold text-foreground mb-8">$850.00</h3>
                 
                 <div className="w-full space-y-3 bg-card p-4 rounded-2xl shadow-sm border border-border/50">
                   <div className="h-12 w-full bg-muted/50 rounded-lg"></div>
                   <div className="h-12 w-full bg-muted/50 rounded-lg"></div>
                 </div>
               </div>
             </div>
             
             {/* Floating card */}
             <div className="absolute bottom-10 -left-6 w-48 h-32 bg-primary/90 rounded-xl shadow-2xl p-4 flex flex-col justify-between border border-primary/80 transform -rotate-3 z-20">
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold italic tracking-wider">Skilled4U</span>
                  <div className="w-8 h-6 bg-primary/50 rounded flex gap-1 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                  </div>
                </div>
                <div className="text-white/80 text-sm tracking-widest font-mono">
                  **** **** **** 3456
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
