import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="w-full bg-white pt-16 pb-8 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 mb-16">
        
        {/* Brand & Socials */}
        <div className="w-full lg:w-[30%]">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              Skilled<span className="text-emerald-600">4U</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
            Hiring solutions that empower you to achieve more every day.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="hover:text-emerald-600 transition-colors bg-slate-50 p-2 rounded-full hover:bg-emerald-50"><FaFacebookF className="w-4 h-4" /></a>
            <a href="#" className="hover:text-emerald-600 transition-colors bg-slate-50 p-2 rounded-full hover:bg-emerald-50"><BsTwitterX className="w-4 h-4" /></a>
            <a href="#" className="hover:text-emerald-600 transition-colors bg-slate-50 p-2 rounded-full hover:bg-emerald-50"><FaInstagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-emerald-600 transition-colors bg-slate-50 p-2 rounded-full hover:bg-emerald-50"><FaLinkedin className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="w-full lg:w-[70%] grid grid-cols-2 md:grid-cols-3 gap-8 lg:ml-12">
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Personal</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Business</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Wealth</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Loans</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Live Chat</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Locate Us</a></li>
              <li><span className="text-slate-500">+1 (800) 123-4567</span></li>
              <li><a href="mailto:support@skilled4u.com" className="hover:text-emerald-600 transition-colors">support@skilled4u.com</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-100 text-xs text-slate-500 gap-4">
        <p>&copy; {new Date().getFullYear()} Skilled4U. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-emerald-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
