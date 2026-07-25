import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function BecomeArtisanPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100 flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          
          <div className="bg-primary relative h-20 w-full flex items-center px-6 overflow-hidden shadow-[inset_0_4px_20px_rgba(0,0,0,0.1)]">
            <div className="absolute inset-0 bg-black/5" />
            <div className="z-10 flex items-center">
              <h1 className="text-xl font-bold text-white">
                Join as an Artisan
              </h1>
            </div>
          </div>
          
          <div className="p-6 md:p-10 flex flex-col gap-6">
            <div>
              <h2 className="text-3xl font-bold text-primary leading-tight mb-2">
                Apply to become a Pro
              </h2>
              <p className="text-base text-slate-600">
                Fill out the form below to join our platform and start getting jobs!
              </p>
            </div>
            
            <form className="flex flex-col gap-6 mt-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-semibold text-slate-700">Full Name</Label>
                <Input id="fullName" placeholder="Enter your full name" className="bg-white border-slate-200 rounded-lg h-12" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter phone number" className="bg-white border-slate-200 rounded-lg h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter email address" className="bg-white border-slate-200 rounded-lg h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="profession" className="text-sm font-semibold text-slate-700">Profession / Skill</Label>
                <Input id="profession" placeholder="e.g., Electrician, Plumber, Cleaner" className="bg-white border-slate-200 rounded-lg h-12" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="experience" className="text-sm font-semibold text-slate-700">Years of Experience</Label>
                <Input id="experience" type="number" min="0" placeholder="e.g., 5" className="bg-white border-slate-200 rounded-lg h-12" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm font-semibold text-slate-700">City / Location</Label>
                <Input id="location" placeholder="Where are you based?" className="bg-white border-slate-200 rounded-lg h-12" />
              </div>

              <div className="space-y-2 mt-4">
                <Label htmlFor="bio" className="text-sm font-semibold text-slate-700">Tell us about yourself & your experience</Label>
                <Textarea id="bio" placeholder="Provide details about your skills and past work..." className="resize-none bg-white border-slate-200 rounded-lg min-h-[120px]" />
              </div>

              <Button type="submit" className="w-full py-6 text-lg font-bold rounded-xl mt-6 bg-[#38bdf8] hover:bg-[#0284c7] text-white">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
