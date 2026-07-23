import { Briefcase, Clock, ShieldCheck, Star } from "lucide-react";

export function FeatureGrid() {
  const features = [
    {
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      title: "Instant Matching",
      description: "Match with nearby verified artisans instantly.",
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "One-Tap Booking",
      description: "Request an artisan with a single tap. Just like a ride.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Cashless Payments",
      description: "Pay directly through the app when the job is done.",
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Live Tracking",
      description: "Watch your artisan arrive in real-time on the map.",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
      {/* Left side: Heading */}
      <div className="w-full md:w-1/3 flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
          On-Demand Service,<br />
          <span className="text-primary">Seamless</span> Experience
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          The gig economy for verified artisans, built for your convenience.
        </p>
      </div>

      {/* Right side: Grid */}
      <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
