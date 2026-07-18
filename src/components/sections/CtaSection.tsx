import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-10 px-6 sm:px-10 lg:px-16 w-full max-w-7xl mx-auto">
      <div className="bg-[#0A2A18] rounded-[2rem] w-full p-10 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 relative z-10 mb-12 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Find Your Pro in<br />Just 5 Minutes
          </h2>
          <p className="text-emerald-100/80 mb-8 max-w-sm text-lg">
            Experience hassle-free hiring with a fully digital platform.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full px-8 py-6 text-base shadow-lg border-none transition-all">
            Find a Pro Now
          </Button>
        </div>

        {/* Right Content / Image mockups */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative z-10 h-[250px] md:h-auto">
            <div className="relative w-[300px] h-[300px] md:-my-16">
              {/* Phone */}
              <div className="absolute right-0 top-0 w-48 h-[350px] bg-white rounded-[2rem] shadow-2xl border-[6px] border-slate-800 overflow-hidden transform rotate-6 z-10">
                <div className="p-4 flex flex-col gap-3 h-full bg-slate-50">
                  <div className="h-6 w-24 bg-slate-200 rounded-full mb-2"></div>
                  <div className="h-12 w-full bg-white rounded-xl shadow-sm border border-slate-100"></div>
                  <div className="h-12 w-full bg-white rounded-xl shadow-sm border border-slate-100"></div>
                  <div className="h-12 w-full bg-white rounded-xl shadow-sm border border-slate-100"></div>
                </div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute left-0 bottom-10 w-52 h-32 bg-emerald-700/90 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 flex flex-col justify-between border border-emerald-500/30 transform -rotate-6 z-20">
                <div className="flex justify-between items-start">
                  <span className="text-white font-bold text-sm italic tracking-widest">Skilled4U</span>
                  <div className="w-8 h-6 bg-emerald-500 rounded flex gap-1 items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-300"></div>
                  </div>
                </div>
                <div>
                  <div className="text-emerald-50 text-xs mb-1 opacity-80">PRO MEMBER</div>
                  <div className="text-emerald-100 text-sm tracking-widest font-mono">
                    **** **** **** 8888
                  </div>
                </div>
             </div>
            </div>
        </div>
        
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/40 rounded-full blur-3xl mix-blend-screen"></div>
        </div>
      </div>
    </section>
  );
}
