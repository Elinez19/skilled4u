import { CheckCircle2 } from "lucide-react";

export function SeamlessSection() {
  const points = [
    "Instant pro matching",
    "In-app messaging",
    "Transparent pricing",
    "Recurring bookings",
  ];

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 w-full max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Seamless Service,<br />
            <span className="text-emerald-600">Every Time</span>
          </h2>
          <p className="text-slate-500 leading-relaxed text-lg mb-8">
            Fast, easy, and secure hiring options for your convenience.
          </p>

          <ul className="space-y-4 mb-8">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-700 font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="bg-slate-50 rounded-3xl p-8 w-full max-w-md relative flex items-center justify-center h-[500px] border border-slate-100">
             {/* Phone mockup placeholder */}
             <div className="w-64 h-[450px] bg-white rounded-[2.5rem] shadow-xl border-8 border-slate-900 overflow-hidden relative">
               <div className="absolute top-0 w-full h-6 flex justify-center z-10">
                 <div className="w-24 h-4 bg-slate-900 rounded-b-xl"></div>
               </div>
               <div className="p-6 pt-16 flex flex-col items-center h-full bg-slate-50">
                 <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                   <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white">✓</div>
                 </div>
                 <p className="text-slate-500 text-sm mb-1 font-medium">Payment Successful</p>
                 <h3 className="text-3xl font-bold text-slate-900 mb-8">$850.00</h3>
                 
                 <div className="w-full space-y-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                   <div className="h-12 w-full bg-slate-50 rounded-lg"></div>
                   <div className="h-12 w-full bg-slate-50 rounded-lg"></div>
                 </div>
               </div>
             </div>
             
             {/* Floating card */}
             <div className="absolute bottom-10 -left-6 w-48 h-32 bg-emerald-800 rounded-xl shadow-2xl p-4 flex flex-col justify-between border border-emerald-700 transform -rotate-3 z-20">
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold italic tracking-wider">Skilled4U</span>
                  <div className="w-8 h-6 bg-emerald-600/50 rounded flex gap-1 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                  </div>
                </div>
                <div className="text-emerald-100/90 text-sm tracking-widest font-mono">
                  **** **** **** 3456
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
