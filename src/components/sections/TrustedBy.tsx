import { Users, Building2, Smile, Award, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function TrustedBy() {
  const stats = [
    {
      icon: <Users className="w-5 h-5 text-primary" />,
      value: "5M+",
      label: "Happy Customers",
    },
    {
      icon: <Building2 className="w-5 h-5 text-primary" />,
      value: "250+",
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
            Trusted By Millions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            The Trusted Network for <br />
            <span className="text-primary">Skilled Pros</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-lg leading-relaxed">
            Join millions who have transformed how they hire reliable, on-demand artisans and skilled workers.
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
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] w-full max-w-xl ml-auto">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80" 
              alt="Professional artisans at work" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-foreground/10"></div>
          </div>

          {/* Floating Security Card */}
          <Card className="absolute -bottom-8 -left-4 md:-left-8 bg-card/90 backdrop-blur-xl rounded-3xl shadow-xl w-[280px] md:w-[320px] border-border/50">
            <CardContent className="p-8">
              <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Your Security <br /> Is Our Priority
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Bank-grade security to keep your data and payments safe during every transaction.
              </p>
              <a href="#" className="text-primary font-semibold text-sm flex items-center hover:text-primary/90 transition-colors">
                Learn More <span className="ml-2">&rarr;</span>
              </a>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}
