
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Truck, CircleDollarSign, Palette, Users, Calendar, Camera, MapPin } from 'lucide-react';

const QuickLinksBar = () => {
  const links = [
    {
      icon: Car,
      title: "Car Wraps",
      description: "Custom designs for any vehicle",
      url: "/car-wraps"
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
      url: "/color-change-wraps"
    },
    {
      icon: Camera,
      title: "Gallery",
      description: "View our portfolio",
      url: "/gallery"
    },
    {
      icon: Users,
      title: "About Us",
      description: "Our expertise & experience",
      url: "/about"
    },
    {
      icon: MapPin,
      title: "Locations",
      description: "Areas we serve",
      url: "/locations"
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {links.map((link, index) => (
            <Link 
              key={index} 
              to={link.url}
              className="bg-white/10 border-2 border-white/20 hover:border-brand-red rounded-2xl p-4 text-center transition-all duration-300 hover:bg-white/20 group"
            >
              <div className="bg-brand-red/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-red transition-colors duration-300 border-2 border-brand-red">
                <link.icon className="h-6 w-6 text-brand-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-white text-sm lg:text-base">{link.title}</h3>
              <p className="text-white text-xs mt-1">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinksBar;
