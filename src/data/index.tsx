import { Fan, ChefHat, Paintbrush, Wrench, Zap, Droplets, Sparkles, Hammer } from "lucide-react";

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
  { title: "Find Pros", href: "#" },
  { title: "Become a Pro", href: "#" },
  { title: "How it Works", href: "#" },
  { title: "About Us", href: "#" },
];

export const footerLinks = {
  quickLinks: [
    { title: "Personal", href: "#" },
    { title: "Business", href: "#" },
    { title: "Wealth", href: "#" },
    { title: "Loans", href: "#" },
    { title: "About Us", href: "#" },
  ],
  resources: [
    { title: "Help Center", href: "#" },
    { title: "FAQs", href: "#" },
    { title: "Security", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Contact Us", href: "#" },
  ],
  support: [
    { title: "Live Chat", href: "#" },
    { title: "Locate Us", href: "#" },
    { title: "+1 (800) 123-4567", href: "#", isText: true },
    { title: "support@skilled4u.com", href: "mailto:support@skilled4u.com" },
  ],
};
