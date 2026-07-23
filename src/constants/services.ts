import { Snowflake, Tv, Sparkles, Square, Car, Hammer, ChefHat, Brush, Truck, SatelliteDish, Briefcase, Zap, BatteryCharging, Scissors, PaintRoller, Laptop, Camera, Droplets, Flame } from "lucide-react";

export type ServiceItem = {
  id: string;
  name: string;
  icon: any; // Lucide icon component
  subServices?: string[];
};

export const ALL_SERVICES: ServiceItem[] = [
  { 
    id: 'ac', 
    name: 'A.C / Refrigeration Services', 
    icon: Snowflake,
    subServices: ['Installation', 'Servicing / Maintenance', 'Gas Refill', 'Repairs']
  },
  { 
    id: 'appliances', 
    name: 'Appliances Electronics', 
    icon: Tv,
    subServices: ['TV/Audio Setup', 'Washing Machine Repair', 'Fridge/Freezer Repair', 'Microwave/Oven Repair']
  },
  { 
    id: 'beauty', 
    name: 'Beauty Services', 
    icon: Sparkles,
    subServices: ['Manicure / Pedicure', 'Spa / Massage', 'Facials', 'Waxing']
  },
  { 
    id: 'aluminum', 
    name: 'Aluminum/Glass', 
    icon: Square,
    subServices: [
      'Aluminum Sheet / Roofing',
      'Aluminum Sliding Doors',
      'Frame install and repair',
      'Windows Install and Repairs'
    ]
  },
  { 
    id: 'auto', 
    name: 'AUTO Services', 
    icon: Car,
    subServices: ['Engine Diagnostics', 'Brake Replacement', 'General Servicing', 'Body Work / Painting']
  },
  { 
    id: 'carpentry', 
    name: 'Carpentry / Interior Services', 
    icon: Hammer,
    subServices: ['Furniture Making', 'Wardrobe / Cabinet Fitting', 'Door / Window Frames', 'General Repairs']
  },
  { 
    id: 'catering', 
    name: 'Catering Services', 
    icon: ChefHat,
    subServices: ['Event Catering', 'Baking / Pastries', 'Meal Prep', 'Private Chef']
  },
  { 
    id: 'cleaning', 
    name: 'Cleaning / Laundry / Fumigation', 
    icon: Brush,
    subServices: ['Deep Cleaning', 'Standard Cleaning', 'Laundry Services', 'Fumigation / Pest Control']
  },
  { 
    id: 'dispatch', 
    name: 'Dispatch / Shipping Services', 
    icon: Truck,
    subServices: ['Inter-state Delivery', 'Intra-state Delivery', 'Errand Services', 'Relocation / Moving']
  },
  { 
    id: 'dstv', 
    name: 'DSTV / CCTV / ODU / STARLINK / FIBER', 
    icon: SatelliteDish,
    subServices: ['New Installation', 'Signal Tracking / Fixing', 'Relocation', 'Decoder Upgrade']
  },
  { 
    id: 'brick', 
    name: 'Brick Layer / Tiller / POP', 
    icon: Briefcase,
    subServices: ['Block Setting', 'Plastering', 'Tiling', 'POP Ceiling Installation']
  },
  { 
    id: 'electrical', 
    name: 'Electrical / Inverter / ODU', 
    icon: Zap,
    subServices: ['House Wiring', 'Fault Finding / Fixing', 'Inverter Installation', 'Lighting Setup']
  },
  { 
    id: 'generator', 
    name: 'Generator Services', 
    icon: BatteryCharging,
    subServices: ['General Servicing', 'Fault Diagnostics', 'Engine Overhaul', 'Installation']
  },
  { 
    id: 'hair', 
    name: 'Hair Services', 
    icon: Scissors,
    subServices: ['Braiding', 'Weavon / Wig Making', 'Natural Hair Care', 'Dreadlocks']
  },
  { 
    id: 'makeup', 
    name: 'Make-Up Artist', 
    icon: Brush,
    subServices: ['Bridal Makeup', 'Casual / Party Makeup', 'Gele Tying', 'Photoshoot Makeup']
  },
  { 
    id: 'painter', 
    name: 'Painter/Screeder/Wallpaper', 
    icon: PaintRoller,
    subServices: ['Interior Painting', 'Exterior Painting', 'Screeding', 'Wallpaper Installation']
  },
  { 
    id: 'phone', 
    name: 'Phone/Laptop/Printers', 
    icon: Laptop,
    subServices: ['Screen Replacement', 'Battery Replacement', 'Software Issues', 'Printer Servicing']
  },
  { 
    id: 'photographer', 
    name: 'Photographer/Video', 
    icon: Camera,
    subServices: ['Event Coverage', 'Studio Sessions', 'Video Editing', 'Product Photography']
  },
  { 
    id: 'plumbing', 
    name: 'Plumbing Services', 
    icon: Droplets,
    subServices: ['Leak Fixing', 'Pipe Laying', 'Water Heater Installation', 'Toilet/Sink Repairs']
  },
  { 
    id: 'towing', 
    name: 'Vehicle Towing', 
    icon: Truck,
    subServices: ['Flatbed Towing', 'Accident Recovery', 'Jump-starting', 'Breakdown Assist']
  },
  { 
    id: 'welder', 
    name: 'Welder Service', 
    icon: Flame,
    subServices: ['Gate Construction', 'Window Protectors', 'Metal Scaffolding', 'General Welding Works']
  },
  { 
    id: 'barber', 
    name: 'Barber / Barbing Service', 
    icon: Scissors,
    subServices: ['Standard Haircut', 'Shaving / Trimming', 'Hair Dyeing', 'Home Service']
  },
];
