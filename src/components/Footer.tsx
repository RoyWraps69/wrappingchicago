
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cities } from '@/data/cities';
import { Phone, Mail, MapPin, Globe, Facebook, Instagram, Twitter, Send, ArrowRight } from 'lucide-react';
import ContactItem from './location/ContactItem';
import { Button } from './ui/button';

const Footer = () => {
  // Form state for newsletter
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1000);
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png" 
                alt="Wrapping Chicago Logo" 
                className="h-12 w-12 mr-3"
              />
              <h3 className="text-2xl font-bold tracking-tight uppercase">Chicago Fleet<span className="text-brand-red">Wraps</span></h3>
            </div>
            
            <p className="text-white/70 mb-6">
              Chicago's premier vehicle wrap company specializing in commercial fleet wraps, 
              color change wraps, and custom graphics that turn your vehicles into powerful mobile advertising.
            </p>
            
            <ul className="space-y-3">
              <li>
                <ContactItem icon={MapPin} title="">
                  <span className="text-white/70">4711 N. Lamon Ave<br />Chicago, IL 60630</span>
                </ContactItem>
              </li>
              <li>
                <ContactItem icon={Phone} title="">
                  <a href="tel:3125971286" className="text-white/70 hover:text-white transition-colors">(312) 597-1286</a>
                </ContactItem>
              </li>
              <li>
                <ContactItem icon={Mail} title="">
                  <a href="mailto:roy@chicagofleetwraps.com" className="text-white/70 hover:text-white transition-colors">roy@chicagofleetwraps.com</a>
                </ContactItem>
              </li>
            </ul>
            
            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a href="https://www.facebook.com/ChicagoFleetWraps" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/chicagofleetwraps" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com/chicagofleetwraps" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
              <Link to="/" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">Home</Link>
              <Link to="/about" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">About Us</Link>
              <Link to="/services" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">Services</Link>
              <Link to="/gallery" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">Gallery</Link>
              <Link to="/contact" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">Contact</Link>
              <Link to="/ai-wrap-ideas" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">AI Wrap Designer</Link>
              <Link to="/locations" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">Service Areas</Link>
              <Link to="/services/fleet-wraps" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">Fleet Wraps</Link>
              <Link to="/services/car-wraps" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">Car Wraps</Link>
              <Link to="/services/truck-wraps" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">Truck Wraps</Link>
              <Link to="/services/van-wraps" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">Van Wraps</Link>
              <Link to="/services/color-change-wraps" className="text-white/70 hover:text-white hover:translate-x-1 transition-all">Color Change</Link>
            </div>
            
            <h3 className="text-xl font-bold mt-8 mb-4 uppercase">Service Areas</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {cities.slice(0, 5).map((city) => (
                <Link 
                  key={city.slug}
                  to={`/vehicle-wraps-${city.slug}-il`} 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {city.name}
                </Link>
              ))}
              <Link to="/locations" className="text-brand-red hover:underline">
                View All
              </Link>
            </div>
          </div>
          
          {/* Column 3: Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase">Updates & Offers</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for the latest vehicle wrap trends, exclusive offers, and industry insights.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="mb-8">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white w-full focus:outline-none focus:border-brand-red"
                  required
                />
                <Button type="submit" variant="gradient" size="icon" disabled={isSubmitting}>
                  {isSubmitting ? <span className="animate-pulse">...</span> : <Send size={18} />}
                </Button>
              </div>
              {isSuccess && (
                <p className="text-green-400 text-sm mt-2">Thanks for subscribing!</p>
              )}
            </form>
            
            <h3 className="text-xl font-bold mb-4 uppercase">Locations</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Globe className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">Chicago, IL</h4>
                  <p className="text-white/70 text-sm">Main Installation Facility</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Globe className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">Las Vegas, NV</h4>
                  <p className="text-white/70 text-sm">West Coast Installation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Globe className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">Central Illinois</h4>
                  <p className="text-white/70 text-sm">Midwest Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Chicago Fleet Wraps. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <Link to="/sitemap" className="text-white/50 hover:text-white transition-colors">Sitemap</Link>
            <Link to="/privacy-policy" className="text-white/50 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white/50 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
