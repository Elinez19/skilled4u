import { Fan, ChefHat, Paintbrush, Wrench, Zap, Droplets, Sparkles, Hammer, Baby, Home, HeartHandshake, Clock, ClipboardList, MessageSquareText, UserCheck } from "lucide-react";

import imgElec1 from "@/assets/professional-electrician-1.jpg";
import imgClean2 from "@/assets/professional-cleaner-2.jpg";
import imgClean3 from "@/assets/professional-cleaner-3.jpg";
import imgClean4 from "@/assets/professional-cleaner-4.jpg";
import imgClean5 from "@/assets/professional-cleaner-5.jpg";
import imgCarp1 from "@/assets/professional-carpenter-1.jpg";
import imgClean6 from "@/assets/professional-cleaner-6.jpg";
import imgCarp2 from "@/assets/professional-carpenter-2.jpg";
import imgHome from "@/assets/home-interior.jpg";
import imgPainter1 from "@/assets/a-painter-1.jpg";
import imgHair from "@/assets/professional-hair-stylist.jpg";
import imgClean7 from "@/assets/professional-cleaner-7.jpg";
import imgElec2 from "@/assets/professional-electrician-2.jpg";
import imgHair1 from "@/assets/professional-hair-stylist-1.jpg";

import avatar1 from "@/assets/a-painter-2.jpg";
import avatar2 from "@/assets/a-painter-3.jpg";
import avatar3 from "@/assets/a-painter-4.jpg";
import avatar4 from "@/assets/a-painter-5.jpg";
import avatar5 from "@/assets/a-painter-6.jpg";
import avatar6 from "@/assets/a-painter-7.jpg";

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
    image: imgElec1,
    title: "Professional Electrician",
    price: "$12.00",
    duration: "26 Min",
    avatar: avatar1,
    name: "Jennifer Davis",
    reviews: 0,
    rating: 0,
  },
  {
    image: imgClean2,
    title: "Professional Cleaner",
    price: "$42.00",
    duration: "25 Min",
    avatar: avatar2,
    name: "Jennifer Davis",
    reviews: 0,
    rating: 0,
  },
  {
    image: imgClean3,
    title: "Professional Plumber",
    price: "$32.00",
    duration: "20 Min",
    avatar: avatar3,
    name: "Jennifer Davis",
    reviews: 0,
    rating: 0,
  },
];

export const featured = [
  {
    image: imgClean4,
    title: "Cleaning Services",
    price: "$40.00",
    duration: "19 Min",
    avatar: avatar4,
    name: "Felix Harris",
    reviews: 0,
    rating: 0,
  },
  {
    image: imgClean5,
    title: "Home Deep Cleaning",
    price: "$26.00",
    duration: "50 Min",
    avatar: avatar5,
    name: "Jennifer Davis",
    reviews: 0,
    rating: 0,
  },
  {
    image: imgCarp1,
    title: "Professional Carpentry",
    price: "$20.00",
    duration: "20 Min",
    avatar: avatar6,
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
    title: "Professional Carpentry",
    description: "Safe and reliable carpentry services and installations.",
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
  { title: "Home", href: "/" },
  { title: "Services", href: "/#services" },
  { title: "How it Works", href: "/#how-it-works" },
  { title: "Nanny Services", href: "/nanny-and-maid-services" },
  { title: "Become a Pro", href: "/#join-pro" },
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
    image: imgClean6,
    title: "House Cleaning",
    priceRange: "₦27,000 - ₦37,000",
    condition: "(for a 2 bedroom flat)",
    link: "#",
  },
  {
    image: imgCarp2,
    title: "Professional Carpentry",
    priceRange: "₦100,000 - ₦150,000",
    condition: "(for basic carpentry services)",
    link: "#",
  },
  {
    image: imgHome,
    title: "Home Deep Cleaning",
    priceRange: "₦50,000 - ₦150,000",
    condition: "(for standard apartment)",
    link: "#",
  },
  {
    image: imgPainter1,
    title: "Painting and Decorating",
    priceRange: "₦1,500,000 - ₦3,000,000",
    condition: "for basic painting services",
    link: "#",
  },
  {
    image: imgHair,
    title: "HairStylist And MakeUp Artiste",
    priceRange: "₦10,000 - ₦50,000",
    condition: "for basic hair styling and makeup",
    link: "#",
  },
  {
    image: imgClean7,
    title: "Professional Cleaning",
    priceRange: "₦10,000 - ₦20,000",
    condition: "for basic cleaning services",
    link: "#",
  },
  {
    image: imgElec2,
    title: "Electronics Repair",
    priceRange: "₦10,000 - ₦20,000",
    condition: "for basic electronics repair",
    link: "#",
  },
  {
    image: imgHair1,
    title: "Hair Styling and Makeup Artiste",
    priceRange: "₦15,000 - ₦40,000",
    condition: "for basic hair styling and makeup",
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
