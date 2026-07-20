import { Fan, ChefHat, Paintbrush, Wrench, Zap, Droplets, Sparkles, Hammer, Baby, Home, HeartHandshake, Clock, ClipboardList, MessageSquareText, UserCheck } from "lucide-react";

export const categories = [
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

export const topRated = [
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

export const featured = [
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

export const servicesList = [
  {
    icon: <Wrench className="w-6 h-6 text-primary" />,
    title: "Home Maintenance",
    description: "General repairs, mounting, and everyday fixes for your home.",
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Electrical Works",
    description: "Safe and reliable electrical installations and troubleshooting.",
  },
  {
    icon: <Droplets className="w-6 h-6 text-primary" />,
    title: "Plumbing",
    description: "Expert plumbers for leaks, installations, and pipe repairs.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    title: "Cleaning Services",
    description: "Deep cleaning, regular housekeeping, and move-out cleans.",
  },
  {
    icon: <Hammer className="w-6 h-6 text-primary" />,
    title: "Renovations",
    description: "Major home improvements and structural remodeling projects.",
  },
];

export const navLinks = [
  { title: "Find a Pro", href: "#" },
  { title: "Become a Pro", href: "#" },
  { title: "Services", href: "#" },
  { title: "Nanny Services", href: "/nanny-and-maid-services" },
  { title: "How it Works", href: "#" },
];

export const footerLinks = {
  quickLinks: [
    { title: "Book a Service", href: "#" },
    { title: "Join as a Pro", href: "#" },
    { title: "Browse Categories", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "About Us", href: "#" },
  ],
  resources: [
    { title: "Help Center", href: "#" },
    { title: "Safety & Trust", href: "#" },
    { title: "Pro Guidelines", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Contact Us", href: "#" },
  ],
  support: [
    { title: "Live Chat", href: "#" },
    { title: "City Coverage", href: "#" },
    { title: "+1 (800) 123-4567", href: "#", isText: true },
    { title: "support@skilled4u.com", href: "mailto:support@skilled4u.com" },
  ],
};

export const costEstimates = [
  {
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&auto=format&fit=crop&q=60",
    title: "House Cleaning",
    priceRange: "₦27,000 - ₦37,000",
    condition: "(for a 2 bedroom flat)",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&auto=format&fit=crop&q=60",
    title: "Truck Hire and Rental",
    priceRange: "₦100,000 - ₦150,000",
    condition: "(for medium trucks moving between states)",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60",
    title: "Website Development",
    priceRange: "₦100,000 - ₦200,000",
    condition: "(for basic websites)",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=500&auto=format&fit=crop&q=60",
    title: "Swimming Pool Construction",
    priceRange: "₦1,500,000 - ₦3,000,000",
    condition: "for basic types",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=500&auto=format&fit=crop&q=60",
    title: "Printing Press Service",
    priceRange: "₦10,000 - ₦50,000",
    condition: "(for flyers, brochures and similar documents)",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60",
    title: "Ushering Services",
    priceRange: "₦10,000 - ₦20,000",
    condition: "(for weddings in cities like Lagos)",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?w=500&auto=format&fit=crop&q=60",
    title: "Phone Repair",
    priceRange: "₦10,000 - ₦20,000",
    condition: "(for most basic repairs)",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=500&auto=format&fit=crop&q=60",
    title: "Swedish Massage",
    priceRange: "₦15,000 - ₦40,000",
    condition: "(for a 60-minute massage)",
    link: "#",
  },
];

export const nannyServiceTypes = [
  {
    icon: <Baby className="w-8 h-8 text-primary" />,
    title: "Full Time Nanny Services",
  },
  {
    icon: <Home className="w-8 h-8 text-primary" />,
    title: "Live In Domestic Staff or House Help",
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-primary" />,
    title: "Specialised Childcare",
  },
  {
    icon: <UserCheck className="w-8 h-8 text-primary" />,
    title: "Elderly Care",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Part Time Maid or Nanny Services",
  }
];

export const nannyPopularServices = [
  {
    title: "Full-Time Nanny Services",
    description: "Hire a dedicated caregiver to provide consistent support for your children, from daily routines to educational activities and emotional care."
  },
  {
    title: "House Cleaning Services",
    description: "Get professional maids to handle routine cleaning tasks, including dusting, mopping, and laundry, ensuring your home remains spotless."
  },
  {
    title: "Live-In Domestic Staff",
    description: "Employ live-in nannies or maids for round-the-clock support, offering convenience and reliability for busy households."
  },
  {
    title: "Part-Time or Hourly Services",
    description: "Book flexible maid services on an hourly or part-time basis, ideal for one-time cleanups or occasional childcare."
  },
  {
    title: "Specialized Childcare",
    description: "Find nannies trained to provide care for infants, children with special needs, or after-school supervision, tailored to your requirements."
  },
  {
    title: "And More",
    description: "Other services include elderly care, meal preparation, grocery assistance, and deep cleaning projects."
  }
];

export const nannySteps = [
  {
    icon: <ClipboardList className="w-10 h-10 text-primary mb-4" />,
    title: "Submit Your Request",
    description: "Start by providing details about your household needs, including the type of service, preferred schedule, and specific requirements."
  },
  {
    icon: <MessageSquareText className="w-10 h-10 text-primary mb-4" />,
    title: "Receive Quotes",
    description: "Agencies on Skilled4u will send quotes based on your request, outlining their services, experience, and pricing."
  },
  {
    icon: <UserCheck className="w-10 h-10 text-primary mb-4" />,
    title: "Hire with Confidence",
    description: "Choose from a network of trusted agencies who meet your expectations and deliver reliable household support."
  }
];
