import { Button } from "@/components/ui/button";
import { Briefcase, DollarSign, CalendarCheck, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export function JoinAsPro() {
  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      title: "Earn More",
      description: "Set your own rates and keep a larger share of what you earn.",
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-primary" />,
      title: "Flexible Hours",
      description: "Work when you want, where you want. You are your own boss.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      title: "Consistent Jobs",
      description: "Get connected with hundreds of customers looking for your specific skills.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Guaranteed Payments",
      description: "Secure and timely payments for every completed job, hassle-free.",
    },
  ];

  return (
    <section id="join-pro" className="py-20 px-6 sm:px-10 lg:px-16 w-full max-w-7xl mx-auto bg-slate-50">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            For Professionals
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Grow your business with Skilled4U
          </h2>
          <p className="text-slate-600 mb-8 text-lg md:text-xl leading-relaxed">
            Join thousands of skilled professionals who are finding reliable work, managing their schedules, and increasing their earnings on our platform.
          </p>
          <Link to="/book">
            <Button className="btn btn-primary rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Right Content / Benefits Grid */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
