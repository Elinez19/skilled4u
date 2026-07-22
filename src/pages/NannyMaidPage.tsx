import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Newsletter } from "../components/sections/Newsletter";
import { Link } from "react-router-dom";
import { nannyServiceTypes, nannyPopularServices, nannySteps } from "../data";
import nannyImg from "@/assets/professional-cleaner-8.jpg";



export function NannyMaidPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100">
      <Navbar />
      
      <main className="flex flex-col items-center overflow-hidden">
        {/* Hero Section */}
        <section className="w-full bg-slate-50 pt-20 pb-16 px-6 sm:px-10 lg:px-16 flex justify-center">
          <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <Badge variant="outline" className="mb-6 border-primary/20 text-primary bg-primary/5 px-4 py-1.5 text-sm font-medium rounded-full">
                Professional Household Help
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
                Trusted Nanny & Maid <br className="hidden md:block" /> Services Near You
              </h1>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-lg">
                Looking for reliable household help? Skilled4u connects you with trusted agencies offering professional nanny and maid services tailored to your needs. Submit a request and receive quotes today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link to="/register">
                  <Button size="lg" className="btn btn-primary rounded-full px-8 py-6 text-base">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src={nannyImg} 
                  alt="Nanny and child" 
                  className="w-full h-auto object-cover aspect-4/3"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-20 px-6 sm:px-10 lg:px-16 flex justify-center">
          <div className="max-w-7xl w-full flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">What kind of service do you need?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full">
              {nannyServiceTypes.map((service, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-primary/20 text-center cursor-pointer">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="w-full py-20 px-6 sm:px-10 lg:px-16 flex justify-center bg-primary/5">
          <div className="max-w-4xl w-full flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Trusted Nanny & Maid Services for Your Home</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Managing a household can be overwhelming, but the right support makes all the difference. Whether you need a reliable maid for daily chores or a caring nanny to look after your children, Skilled4u connects you with trusted agencies who can make this happen. Find experienced nannies and maids who can deliver efficient and compassionate care tailored to your family's needs.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              When you submit a request on Skilled4u, nanny and maid agencies are notified immediately. You'll receive multiple quotes, enabling you to compare options and select the best fit for your household.
            </p>
          </div>
        </section>

        {/* Popular Services Section */}
        <section className="w-full py-20 px-6 sm:px-10 lg:px-16 flex justify-center">
          <div className="max-w-7xl w-full">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Nanny & Maid Services</h2>
              <p className="text-slate-600 text-lg">Explore some of the most requested nanny and maid services available through Skilled4u:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nannyPopularServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="w-full py-20 px-6 sm:px-10 lg:px-16 flex justify-center bg-slate-900 text-white">
          <div className="max-w-7xl w-full">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Does This Work?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {nannySteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="bg-white/10 p-5 rounded-2xl mb-6 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pro CTA Section */}
        <section className="w-full py-20 px-6 sm:px-10 lg:px-16 flex justify-center">
          <div className="max-w-5xl w-full bg-linear-to-r from-primary/10 to-emerald-500/10 rounded-3xl p-10 md:p-16 text-center border border-primary/20">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Do you provide Nanny and Maid Services?
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Register Now to get Nanny gigs near you and connect with families who need your professional support.
            </p>
            <Link to="/pro/register">
              <Button size="lg" className="btn btn-primary rounded-full px-10 py-6 text-lg shadow-lg shadow-primary/25">
                Register as a Pro
              </Button>
            </Link>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
