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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Secure & Safe Hiring<br />
            <span className="text-emerald-600">You Can Trust</span>
          </h2>
          <p className="text-slate-500 leading-relaxed text-lg mb-8">
            Advanced screening technology to protect your projects and data.
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

          <Button variant="link" className="text-emerald-600 font-bold p-0 h-auto hover:text-emerald-700 text-base">
            Learn More About Security &rarr;
          </Button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="bg-emerald-50 rounded-3xl p-12 w-full max-w-md aspect-square flex items-center justify-center relative shadow-sm border border-emerald-100/50">
            <div className="w-40 h-56 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-2xl shadow-2xl relative flex items-center justify-center">
                <div className="w-16 h-20 border-8 border-slate-300 absolute -top-10 rounded-t-full shadow-inner"></div>
                <div className="w-6 h-10 bg-emerald-900 rounded-full shadow-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
