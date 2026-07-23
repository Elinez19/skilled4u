import { MapPin, UserCheck, Wrench, HeadphonesIcon } from "lucide-react";

export function StepsSection() {
  const steps = [
    {
      number: "01",
      title: "Select Service & Location",
      description:
        "Tell us what needs to be installed, repaired, or maintained and where you are located. We proudly cover all states across Nigeria.",
      icon: <MapPin className="w-6 h-6 text-primary" />,
    },
    {
      number: "02",
      title: "Match with a Certified Pro",
      description:
        "We quickly assign the nearest verified and background-checked specialist whose expertise perfectly matches your service type.",
      icon: <UserCheck className="w-6 h-6 text-primary" />,
    },
    {
      number: "03",
      title: "Professional Service & Testing",
      description:
        "Your technician arrives on schedule, renders the service, and rigorously tests everything to ensure quality before your sign-off.",
      icon: <Wrench className="w-6 h-6 text-primary" />,
    },
    {
      number: "04",
      title: "Post-Service Support",
      description:
        "Have questions after the service? Our dedicated customer success team remains available for follow-up support and peace of mind.",
      icon: <HeadphonesIcon className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section className="py-24 px-6 sm:px-10 lg:px-16 w-full max-w-7xl mx-auto bg-slate-50/50 rounded-[2.5rem] my-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          How It <span className="text-primary">Works</span>
        </h2>
        <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
          Getting the right professional for your needs is simple. Follow these four easy steps to experience seamless service delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
        {/* Connecting line for desktop */}
        <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200 -z-10"></div>
        
        {steps.map((step, idx) => (
          <div key={idx} className="relative group">
            <div className="bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow rounded-2xl p-6 h-full flex flex-col pt-12 relative mt-8">
              {/* Number/Icon Bubble */}
              <div className="absolute -top-8 left-6 bg-white p-2 rounded-2xl shadow-sm border border-slate-100 group-hover:-translate-y-1 transition-transform">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center font-bold text-xl text-primary font-mono relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform rounded-xl"></div>
                  {step.number}
                </div>
              </div>

              <div className="mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
