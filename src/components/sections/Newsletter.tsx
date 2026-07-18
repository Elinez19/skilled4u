import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-10 px-6 sm:px-10 lg:px-16 w-full max-w-7xl mx-auto mb-10">
      <div className="bg-[#F4F6F5] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        {/* Email Icon Watermark */}
        <div className="absolute top-8 right-12 opacity-10">
          <Mail className="w-24 h-24 text-emerald-800" />
        </div>
        
        <div className="w-full md:w-1/2 mb-8 md:mb-0 z-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Stay Updated with Skilled4U
          </h2>
          <p className="text-slate-500 text-sm">
            Tips, offers, and updates delivered to your inbox.
          </p>
        </div>
        
        <div className="w-full md:w-[45%] flex items-center z-10">
          <div className="bg-white p-1.5 rounded-full flex w-full shadow-sm border border-slate-200 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-transparent border-none outline-none px-6 text-slate-700 text-sm placeholder:text-slate-400"
            />
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 py-5 font-semibold transition-colors">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
