import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface SearchServiceModalProps {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
  selectedService: string;
}

const mockSubServices = [
  "General Maintenance",
  "Deep Cleaning",
  "Repairs",
  "Installation",
  "Consultation",
];

export function SearchServiceModal({ isOpen, onClose, selectedService }: SearchServiceModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted for", selectedService, formData);
    onClose(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <DialogHeader className="bg-primary text-primary-foreground p-6 -mx-4 -mt-4 rounded-t-xl mb-4 text-center pb-8 pt-8">
          <DialogTitle className="text-2xl font-bold text-center">You searched for a service!</DialogTitle>
          <DialogDescription className="text-primary-foreground/90 text-center text-sm mt-2 font-medium">
            Give us more details to help us find a{" "}
            <span className="font-bold underline underline-offset-4 decoration-white">
              {selectedService || "service"}
            </span>{" "}
            for you
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 px-2 pb-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Name</Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="Enter your name" 
                value={formData.name} 
                onChange={handleChange}
                className="bg-gray-50/50"
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location" className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Service Location</Label>
              <Input 
                id="location" 
                name="location" 
                placeholder="Landmark / Area / City / State" 
                value={formData.location} 
                onChange={handleChange}
                className="bg-gray-50/50"
                required 
              />
              <p className="text-xs text-muted-foreground italic">
                Example: *Ikeja GRA, near Lagos Country Club, Lagos*
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel"
                  placeholder="Enter phone number" 
                  value={formData.phone} 
                  onChange={handleChange}
                  className="bg-gray-50/50"
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email"
                  placeholder="Enter email" 
                  value={formData.email} 
                  onChange={handleChange}
                  className="bg-gray-50/50"
                  required 
                />
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <p className="text-sm text-muted-foreground font-medium">
              Choose the specific services you want. Select as many as desired
            </p>
            <div className="space-y-3">
              {mockSubServices.map((service, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <Checkbox id={`service-${idx}`} />
                  <Label 
                    htmlFor={`service-${idx}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {service}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full btn-primary py-6 rounded-xl font-bold mt-4">
            Submit Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
