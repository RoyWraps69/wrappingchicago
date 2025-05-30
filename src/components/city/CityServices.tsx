
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CityServicesProps {
  city: {
    name: string;
    state: string;
  };
}

const CityServices = ({ city }: CityServicesProps) => {
  const services = [
    {
      title: "Car Wraps",
      description: "Transform your personal vehicle with premium vinyl wraps",
      link: "/car-wraps"
    },
    {
      title: "Truck Wraps",
      description: "Professional truck wrapping for commercial use",
      link: "/truck-wraps"
    },
    {
      title: "Van Wraps",
      description: "Turn your van into a mobile billboard",
      link: "/van-wraps"
    },
    {
      title: "Fleet Wraps",
      description: "Consistent branding across your entire fleet",
      link: "/services/fleet-wraps"
    },
    {
      title: "Color Change Wraps",
      description: "Completely change your vehicle's appearance",
      link: "/color-change-wraps"
    },
    {
      title: "Commercial Graphics",
      description: "Professional graphics for business vehicles",
      link: "/services"
    }
  ];

  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
        Our Vehicle Wrap Services in {city.name}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
            <h3 className="text-xl font-semibold text-brand-navy mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {service.description}
            </p>
            <Button asChild variant="outline" className="w-full text-brand-navy border-brand-navy hover:bg-brand-navy hover:text-white">
              <Link to={service.link} className="inline-flex items-center justify-center">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityServices;
