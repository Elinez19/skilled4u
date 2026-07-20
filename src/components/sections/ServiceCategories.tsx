import { Heart, Star } from "lucide-react";
import { categories, topRated, featured } from "@/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Service {
  image: string;
  title: string;
  price: string;
  duration: string;
  avatar: string;
  name: string;
  reviews: number;
  rating: number;
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="rounded-2xl border-border/50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer relative min-h-[320px] flex flex-col justify-end">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
      </div>
      
      <Button variant="ghost" size="icon" className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 p-2 rounded-full shadow-sm text-white transition-all hover:scale-110 h-8 w-8 z-10 backdrop-blur-sm">
        <Heart className="w-4 h-4" />
      </Button>
      
      <CardContent className="p-5 relative z-10 flex flex-col justify-end h-full mt-auto">
        <h3 className="font-bold text-white text-lg mb-2">{service.title}</h3>
        <div className="flex items-center text-sm mb-4">
          <span className="text-primary font-bold">{service.price}</span>
          <span className="text-white/70 mx-1.5">•</span>
          <span className="text-white/90">({service.duration})</span>
        </div>

        <div className="flex items-center mt-auto mb-4">
          <img
            src={service.avatar}
            alt={service.name}
            className="w-6 h-6 rounded-full mr-2 border border-white/30"
          />
          <span className="text-white text-sm font-semibold">{service.name}</span>
        </div>

        <div className="flex items-center gap-1">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="text-xs text-white font-bold ml-1">
            {service.rating} <span className="text-white/70 font-normal">({service.reviews} Review)</span>
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export function ServiceCategories() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Categories Section */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 w-full max-w-7xl mx-auto bg-background">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Top Categories</h2>
          <a href="#" className="text-primary text-sm font-semibold hover:underline">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-xl bg-slate-50/80 border border-slate-100 hover:bg-slate-100/80 transition-colors cursor-pointer group shadow-sm hover:shadow-md"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{category.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {category.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Listings Section */}
      <section className="w-full bg-slate-50/50 py-16">
        <div className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto space-y-16">
          {/* Top Rated Services */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Top Rated Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topRated.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>

          {/* Featured Services */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Featured Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featured.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
