import { Briefcase, Clock, ShieldCheck, Star } from "lucide-react";

export function FeatureGrid() {
  const features = [
    {
      icon: <Briefcase className="w-6 h-6 text-emerald-600" />,
      title: "Verified Pros",
      description: "Manage all your hiring in one secure place.",
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
      title: "Instant Booking",
      description: "Book skilled professionals instantly and securely, anywhere.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Secure Payments",
      description: "Pay for services safely and avoid hidden fees effortlessly.",
    },
    {
      icon: <Star className="w-6 h-6 text-emerald-600" />,
      title: "Job Tracking",
      description: "Track, review, and manage your jobs in real-time.",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
      {/* Left side: Heading */}
      <div className="w-full md:w-1/3 flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
          Everything You Need,<br />
          <span className="text-emerald-600">All in One</span> Place
        </h2>
        <p className="text-slate-500 leading-relaxed text-lg">
          Powerful platform features designed for your convenience.
        </p>
      </div>

      {/* Right side: Grid */}
      <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
