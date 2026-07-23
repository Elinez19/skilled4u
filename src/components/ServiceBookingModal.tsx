import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SearchIcon, ArrowLeft } from "lucide-react";
import { ALL_SERVICES } from "@/constants/services";

export function ServiceBookingModal({ children }: { children: React.ReactElement }) {
  const [search, setSearch] = useState("");
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [step, setStep] = useState<1 | 2>(1);

  const filteredServices = ALL_SERVICES.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase())
  ).slice(0, 6);

  const selectedServiceObj = ALL_SERVICES.find(s => s.id === selectedServiceId);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      // Reset state when closed
      setTimeout(() => {
        setStep(1);
        setSelectedServiceId(null);
        setSearch("");
      }, 300); // Wait for transition
    }
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger render={children} />
      <DialogContent className="sm:max-w-120 max-h-[calc(100dvh-2rem)] flex flex-col p-0 overflow-hidden rounded-2xl gap-0 border-0" showCloseButton={false}>
        <div className="bg-primary shrink-0 relative h-16 w-full flex items-center justify-between px-4 overflow-hidden shadow-[inset_0_4px_20px_rgba(0,0,0,0.1)]">
          {/* Subtle pattern layer */}
          <div className="absolute inset-0 bg-black/5" />
          
          <div className="z-10 flex items-center">
            {step === 2 && (
              <Button variant="ghost" className="bg-white/20 hover:bg-white/30 text-white rounded-full w-8 h-8 flex items-center justify-center p-0 mr-2" onClick={() => setStep(1)}>
                <ArrowLeft className="w-4 h-4" />
                <span className="sr-only">Back</span>
              </Button>
            )}
          </div>

          <DialogClose render={
            <Button variant="ghost" className="bg-white hover:bg-slate-100 text-primary rounded-full z-10 w-8 h-8 flex items-center justify-center p-0">
              <span className="sr-only">Close</span>
              &times;
            </Button>
          } />
        </div>
        
        <div className="p-5 md:p-6 flex flex-col gap-5 bg-white overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {step === 1 ? (
            <>
              <DialogTitle className="text-xl font-bold text-foreground">Find an artisan</DialogTitle>
              <DialogDescription className="sr-only">Search and select a service to book.</DialogDescription>
              
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Search services" 
                  className="pl-10 py-6 bg-slate-50 border-slate-200 rounded-xl text-base h-12"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-primary mb-4">Popular Services</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {filteredServices.map(service => {
                    const Icon = service.icon;
                    const isSelected = selectedServiceId === service.id;
                    return (
                      <button 
                        key={service.id}
                        onClick={() => setSelectedServiceId(service.id)}
                        className={`flex flex-col items-center justify-center text-center p-4 rounded-xl border transition-all ${isSelected ? 'border-primary bg-primary/5 shadow-sm' : 'border-slate-100 hover:border-primary/30 hover:bg-slate-50'}`}
                      >
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-primary mb-3">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-medium leading-tight text-slate-700">{service.name}</span>
                      </button>
                    )
                  })}
                  {filteredServices.length === 0 && (
                    <div className="col-span-full py-8 text-center text-muted-foreground">
                      No services found matching "{search}"
                    </div>
                  )}
                </div>
              </div>

              <Button 
                className="w-full py-5 text-base font-bold rounded-xl mt-2 bg-primary hover:bg-primary/90 text-primary-foreground" 
                disabled={!selectedServiceId}
                onClick={() => setStep(2)}
              >
                Continue
              </Button>
            </>
          ) : (
            <>
              <DialogTitle className="text-2xl font-bold text-foreground text-primary leading-tight">
                You searched for a<br />service!
              </DialogTitle>
              <DialogDescription className="text-sm text-slate-600 mt-1">
                Give us more details to help us find a <span className="font-semibold text-primary">{selectedServiceObj?.name}</span> for you
              </DialogDescription>
              
              <div className="flex flex-col gap-4 mt-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs font-semibold text-slate-700">Name</Label>
                  <Input id="name" placeholder="Enter your name" className="bg-white border-slate-200 rounded-lg h-11" />
                </div>
                
                <div className="space-y-1.5">
                  <Label htmlFor="location" className="text-xs font-semibold text-slate-700">Service Location</Label>
                  <Input id="location" placeholder="Landmark / Area / City / State" className="bg-white border-slate-200 rounded-lg h-11" />
                  <p className="text-[10px] text-slate-500 mt-1">Example: "Ikeja GRA, near Lagos Country Club, Lagos"</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-xs font-semibold text-slate-700">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter phone number" className="bg-white border-slate-200 rounded-lg h-11" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs font-semibold text-slate-700">Email</Label>
                    <Input id="email" type="email" placeholder="Enter email" className="bg-white border-slate-200 rounded-lg h-11" />
                  </div>
                </div>

                {selectedServiceObj?.subServices && selectedServiceObj.subServices.length > 0 && (
                  <div className="space-y-3 mt-2">
                    <Label className="text-xs font-semibold text-slate-700">Choose the specific services you want. Select as many as desired</Label>
                    <div className="flex flex-col gap-2.5">
                      {selectedServiceObj.subServices.map((sub, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Checkbox id={`sub-${idx}`} className="rounded border-slate-300 text-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                          <Label htmlFor={`sub-${idx}`} className="text-sm font-normal text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            {sub}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-1.5 mt-2">
                  <Label htmlFor="details" className="text-xs font-semibold text-slate-700">Share additional details about your task <span className="font-normal text-slate-400">(Optional)</span></Label>
                  <Textarea id="details" placeholder="Type note" className="resize-none bg-white border-slate-200 rounded-lg min-h-[80px]" />
                </div>
              </div>

              <Button className="w-full py-5 text-base font-bold rounded-xl mt-4 bg-[#38bdf8] hover:bg-[#0284c7] text-white">
                Submit
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
