
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Truck, CircleDollarSign, Palette, Users, Calendar } from 'lucide-react';

const QuickLinksBar = () => {
  const links = [
    {
      icon: Car,
      title: "Car Wraps",
      description: "Custom designs for any vehicle",
      url: "/services/car-wraps"
    },
    {
      icon: Truck,
      title: "Fleet Wraps",
      description: "Branding for business fleets",
      url: "/services/fleet-wraps"
    },
    {
      icon: CircleDollarSign,
      title: "Pricing",
      description: "Transparent cost breakdown",
      url: "/pricing"
    },
    {
      icon: Palette,
      title: "Color Change",
      description: "Premium vinyl finishes",
      url: "/services/color-change-wraps"
    },
    {
      icon: Users,
      title: "About Us",
      description: "Our expertise & experience",
      url: "/about"
    },
    {
      icon: Calendar,
      title: "Book Now",
      description: "Schedule your installation",
      url: "/contact"
    }
  ];

  return (
    <div className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {links.map((link, index) => (
            <Link 
              key={index} 
              to={link.url}
              className="bg-white/5 border border-white/10 hover:border-brand-red rounded-2xl p-4 text-center transition-all duration-300 hover:bg-white/10 group"
            >
              <div className="bg-brand-red/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-red transition-colors duration-300">
                <link.icon className="h-6 w-6 text-brand-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-white text-lg">{link.title}</h3>
              <p className="text-white/70 text-sm mt-1">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinksBar;
