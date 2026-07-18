import { ShieldCheck, Wallet, Headphones, CalendarCheck } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Verified Professionals",
      description: "Every artisan is vetted and background-checked for your peace of mind.",
    },
    {
      icon: <Wallet className="w-6 h-6 text-blue-600" />,
      title: "Secure Payments",
      description: "Pay confidently through our platform with top-notch security.",
    },
    {
      icon: <Headphones className="w-6 h-6 text-blue-600" />,
      title: "24/7 Support",
      description: "We're here for you, anytime, anywhere. Help is just a click away.",
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-blue-600" />,
      title: "Smart Booking",
      description: "Powerful tools to help you manage appointments easily.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-6 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
            <p className="text-slate-500 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
