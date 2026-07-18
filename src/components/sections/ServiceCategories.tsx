import { Fan, ChefHat, Paintbrush, Wrench, Heart, Star } from "lucide-react";

const categories = [
  {
    icon: <Fan className="w-8 h-8 text-primary" />,
    title: "AC CoolCare",
    desc: "Experience Enhanced Comfort With Our AC...",
  },
  {
    icon: <ChefHat className="w-8 h-8 text-primary" />,
    title: "Cooking",
    desc: "The Cooking Category Offers A Delightful...",
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-primary" />,
    title: "Painter",
    desc: "The Painter Category Celebrates The World Of...",
  },
  {
    icon: <Wrench className="w-8 h-8 text-primary" />,
    title: "Plumber",
    desc: "The Plumber Category Guides You Through The...",
  },
];

const topRated = [
  {
    image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=500&auto=format&fit=crop&q=60",
    title: "Home Theater Setup",
    price: "$12.00",
    duration: "26 Min",
    avatar: "https://i.pravatar.cc/150?u=1",
    name: "Jennifer Davis",
    reviews: 0,
    rating: 0,
  },
  {
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&auto=format&fit=crop&q=60",
    title: "Garment Restoration",
    price: "$42.00",
    duration: "25 Min",
    avatar: "https://i.pravatar.cc/150?u=2",
    name: "Jennifer Davis",
    reviews: 0,
    rating: 0,
  },
  {
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&auto=format&fit=crop&q=60",
    title: "Family Style Dinner Chef",
    price: "$32.00",
    duration: "20 Min",
    avatar: "https://i.pravatar.cc/150?u=3",
    name: "Jennifer Davis",
    reviews: 0,
    rating: 0,
  },
];

const featured = [
  {
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&auto=format&fit=crop&q=60",
    title: "Carpet Cleaning",
    price: "$40.00",
    duration: "19 Min",
    avatar: "https://i.pravatar.cc/150?u=4",
    name: "Felix Harris",
    reviews: 0,
    rating: 0,
  },
  {
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&auto=format&fit=crop&q=60",
    title: "Ceiling and Wall Cleaning",
    price: "$26.00",
    duration: "50 Min",
    avatar: "https://i.pravatar.cc/150?u=5",
    name: "Jennifer Davis",
    reviews: 0,
    rating: 0,
  },
  {
    image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=500&auto=format&fit=crop&q=60",
    title: "Cabinet Fix & Refinish",
    price: "$20.00",
    duration: "20 Min",
    avatar: "https://i.pravatar.cc/150?u=6",
    name: "Jennifer Davis",
    reviews: 0,
    rating: 0,
  },
];

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
    <div className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm text-slate-400 hover:text-primary transition-colors hover:scale-110">
          <Heart className="w-4 h-4" />
        </button>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-foreground text-lg mb-2">{service.title}</h3>
        <div className="flex items-center text-sm mb-4">
          <span className="text-primary font-bold">{service.price}</span>
          <span className="text-muted-foreground mx-1.5">•</span>
          <span className="text-muted-foreground">({service.duration})</span>
        </div>

        <div className="flex items-center mt-auto mb-4">
          <img
            src={service.avatar}
            alt={service.name}
            className="w-6 h-6 rounded-full mr-2 border border-border"
          />
          <span className="text-primary text-sm font-semibold">{service.name}</span>
        </div>

        <div className="flex items-center gap-1">
          <div className="flex text-slate-200">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="text-xs text-foreground font-bold ml-1">
            {service.rating} <span className="text-muted-foreground font-normal">({service.reviews} Review)</span>
          </span>
        </div>
      </div>
    </div>
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
