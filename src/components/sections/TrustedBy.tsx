import { Users, Building2, Smile, Award, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import trustedImg from "@/assets/professional-cleaner-1.jpg";

export function TrustedBy() {
  const stats = [
    {
      icon: <Users className="w-5 h-5 text-primary" />,
      value: "100+",
      label: "Happy Customers",
    },
    {
      icon: <Building2 className="w-5 h-5 text-primary" />,
      value: "50+",
      label: "Service Areas",
    },
    {
      icon: <Smile className="w-5 h-5 text-primary" />,
      value: "98%",
      label: "Satisfaction Rate",
    },
    {
      icon: <Award className="w-5 h-5 text-primary" />,
      value: "A+",
      label: "Rated by Experts",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 w-full max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <span className="text-primary font-bold text-sm tracking-wider uppercase mb-4">
           Home of Verified Artisans
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Quality Verified <br />
            <span className="text-primary">Artisans</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-lg leading-relaxed">
            Find verified, and nearby Plumbers, AC technicians, Painters, Tilers, Masons, Welders, Electricians, Mechanics and more
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    {stat.icon}
                  </div>
                  <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                </div>
                <span className="text-muted-foreground text-sm ml-12">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image & Card */}
        <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3 w-full max-w-xl ml-auto">
            <img 
              src={trustedImg} 
              alt="Professional artisans at work" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-foreground/10"></div>
          </div>

          {/* Floating Security Card */}
          <Card className="absolute -bottom-8 -left-4 md:-left-8 bg-card/90 backdrop-blur-xl rounded-3xl shadow-xl w-70 md:w-[320px] border-border/50">
            <CardContent className="p-8">
              <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Verified & Background<br />Checked Artisans
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Every artisan on skilled4U undergoes rigorous background checks, skill verification, and identity validation.
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}
