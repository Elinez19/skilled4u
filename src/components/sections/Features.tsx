import { ShieldCheck, Wallet, Headphones, CalendarCheck } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Vetted & Verified",
      description: "Every artisan is vetted and background-checked, just like a trusted driver.",
    },
    {
      icon: <Wallet className="w-6 h-6 text-primary" />,
      title: "Cashless & Secure",
      description: "Pay seamlessly through the app. No cash needed, just tip and rate.",
    },
    {
      icon: <Headphones className="w-6 h-6 text-primary" />,
      title: "On-Demand Support",
      description: "Live support ready to assist you from booking to job completion.",
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-primary" />,
      title: "Real-Time Tracking",
      description: "Track your artisan's arrival in real-time on the map.",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
