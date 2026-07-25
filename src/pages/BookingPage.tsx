import { useState } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SearchIcon, ArrowLeft } from "lucide-react";
import { ALL_SERVICES } from "@/constants/services";

export function BookingPage() {
  const [search, setSearch] = useState("");
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [step, setStep] = useState<1 | 2>(1);

  const filteredServices = ALL_SERVICES.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase())
  ).slice(0, 6);

  const selectedServiceObj = ALL_SERVICES.find(s => s.id === selectedServiceId);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100 flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          
          <div className="bg-primary relative h-20 w-full flex items-center px-6 overflow-hidden shadow-[inset_0_4px_20px_rgba(0,0,0,0.1)]">
            <div className="absolute inset-0 bg-black/5" />
            
            <div className="z-10 flex items-center">
              {step === 2 && (
                <Button variant="ghost" className="bg-white/20 hover:bg-white/30 text-white rounded-full w-10 h-10 flex items-center justify-center p-0 mr-4" onClick={() => setStep(1)}>
                  <ArrowLeft className="w-5 h-5" />
                  <span className="sr-only">Back</span>
                </Button>
              )}
              <h1 className="text-xl font-bold text-white">
                {step === 1 ? "Book a Service" : "Service Details"}
              </h1>
            </div>
          </div>
          
          <div className="p-6 md:p-10 flex flex-col gap-6">
            {step === 1 ? (
              <>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Find an artisan</h2>
                  <p className="text-muted-foreground">Search and select a service to book.</p>
                </div>
                
                <div className="relative">
                  <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    placeholder="Search services" 
                    className="pl-12 py-6 bg-slate-50 border-slate-200 rounded-xl text-base h-14"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-primary mb-4">Popular Services</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {filteredServices.map(service => {
                      const Icon = service.icon;
                      const isSelected = selectedServiceId === service.id;
                      return (
                        <button 
                          key={service.id}
                          onClick={() => setSelectedServiceId(service.id)}
                          className={`flex flex-col items-center justify-center text-center p-5 rounded-2xl border transition-all ${isSelected ? 'border-primary bg-primary/5 shadow-sm' : 'border-slate-100 hover:border-primary/30 hover:bg-slate-50'}`}
                        >
                          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 text-primary mb-4">
                            <Icon className="w-7 h-7" />
                          </div>
                          <span className="text-sm font-medium leading-tight text-slate-700">{service.name}</span>
                        </button>
                      )
                    })}
                    {filteredServices.length === 0 && (
                      <div className="col-span-full py-12 text-center text-muted-foreground">
                        No services found matching "{search}"
                      </div>
                    )}
                  </div>
                </div>

                <Button 
                  className="w-full py-6 text-lg font-bold rounded-xl mt-4 bg-primary hover:bg-primary/90 text-primary-foreground" 
                  disabled={!selectedServiceId}
                  onClick={() => setStep(2)}
                >
                  Continue
                </Button>
              </>
            ) : (
              <>
                <div>
                  <h2 className="text-3xl font-bold text-primary leading-tight mb-2">
                    You searched for a service!
                  </h2>
                  <p className="text-base text-slate-600">
                    Give us more details to help us find a <span className="font-semibold text-primary">{selectedServiceObj?.name}</span> for you
                  </p>
                </div>
                
                <div className="flex flex-col gap-6 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold text-slate-700">Name</Label>
                    <Input id="name" placeholder="Enter your name" className="bg-white border-slate-200 rounded-lg h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-sm font-semibold text-slate-700">Service Location</Label>
                    <Input id="location" placeholder="Landmark / Area / City / State" className="bg-white border-slate-200 rounded-lg h-12" />
                    <p className="text-xs text-slate-500 mt-1">Example: "Ikeja GRA, near Lagos Country Club, Lagos"</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter phone number" className="bg-white border-slate-200 rounded-lg h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-slate-700">Email</Label>
                      <Input id="email" type="email" placeholder="Enter email" className="bg-white border-slate-200 rounded-lg h-12" />
                    </div>
                  </div>

                  {selectedServiceObj?.subServices && selectedServiceObj.subServices.length > 0 && (
                    <div className="space-y-3 mt-4">
                      <Label className="text-sm font-semibold text-slate-700">Choose the specific services you want. Select as many as desired</Label>
                      <div className="flex flex-col gap-3">
                        {selectedServiceObj.subServices.map((sub, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <Checkbox id={`sub-${idx}`} className="rounded border-slate-300 w-5 h-5 text-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                            <Label htmlFor={`sub-${idx}`} className="text-base font-normal text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              {sub}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2 mt-4">
                    <Label htmlFor="details" className="text-sm font-semibold text-slate-700">Share additional details about your task <span className="font-normal text-slate-400">(Optional)</span></Label>
                    <Textarea id="details" placeholder="Type note" className="resize-none bg-white border-slate-200 rounded-lg min-h-[120px]" />
                  </div>
                </div>

                <Button className="w-full py-6 text-lg font-bold rounded-xl mt-6 bg-[#38bdf8] hover:bg-[#0284c7] text-white">
                  Submit
                </Button>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
