import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="w-full bg-background pt-16 pb-8 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 mb-16">
        
        {/* Brand & Socials */}
        <div className="w-full lg:w-[30%]">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
              S
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">
              Skilled<span className="text-primary">4U</span>
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
            Hiring solutions that empower you to achieve more every day.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground/80">
            <a href="#" className="hover:text-primary transition-colors bg-muted/50 p-2 rounded-full hover:bg-primary/10"><FaFacebookF className="w-4 h-4" /></a>
            <a href="#" className="hover:text-primary transition-colors bg-muted/50 p-2 rounded-full hover:bg-primary/10"><BsTwitterX className="w-4 h-4" /></a>
            <a href="#" className="hover:text-primary transition-colors bg-muted/50 p-2 rounded-full hover:bg-primary/10"><FaInstagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-primary transition-colors bg-muted/50 p-2 rounded-full hover:bg-primary/10"><FaLinkedin className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="w-full lg:w-[70%] grid grid-cols-2 md:grid-cols-3 gap-8 lg:ml-12">
          <div>
            <h4 className="font-bold text-foreground mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Personal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Business</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Wealth</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Loans</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-6 text-sm">Resources</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-6 text-sm">Support</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Live Chat</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Locate Us</a></li>
              <li><span className="text-muted-foreground">+1 (800) 123-4567</span></li>
              <li><a href="mailto:support@skilled4u.com" className="hover:text-primary transition-colors">support@skilled4u.com</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 text-xs text-muted-foreground gap-4">
        <p>&copy; {new Date().getFullYear()} Skilled4U. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
