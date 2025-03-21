
import React from 'react';
import { Car, Truck, Shield, Award, CheckCircle2, StarIcon } from 'lucide-react';
import { City } from '@/data/cities';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';

interface CityHeaderProps {
  city: City;
}

const CityHeader: React.FC<CityHeaderProps> = ({ city }) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-2 text-brand-navy flex items-center">
        <Car className="h-7 w-7 mr-2 text-brand-red" />
        Premium Vehicle Wraps in {city.name}, Illinois
      </h2>
      
      <div className="flex flex-wrap gap-1 mb-3">
        <div className="inline-flex items-center text-yellow-500">
          <StarIcon className="h-4 w-4" />
          <StarIcon className="h-4 w-4" />
          <StarIcon className="h-4 w-4" />
          <StarIcon className="h-4 w-4" />
          <StarIcon className="h-4 w-4" />
          <span className="ml-1 text-sm text-gray-700">Top-rated vehicle wrap company serving {city.name}</span>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4">
        Expert installation of car wraps, truck wraps, van wraps, and fleet graphics with durable 3M vinyl materials. 
        Over 16,000 wraps completed in our 20 years of business serving {city.name}, {city.county} County, and surrounding areas.
        Transform your personal or business vehicle with our professional vehicle wrapping services.
      </p>
      
      <div className="bg-brand-light p-4 rounded-lg border border-brand-navy/10 mb-5">
        <h3 className="font-semibold text-brand-navy mb-2">Why {city.name} Residents & Businesses Choose Us:</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-700">
          <li className="flex items-start">
            <CheckCircle2 className="h-4 w-4 mr-1 mt-0.5 text-brand-red" />
            <span>20+ years of professional experience</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-4 w-4 mr-1 mt-0.5 text-brand-red" />
            <span>Over 16,000 vehicle wraps completed</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-4 w-4 mr-1 mt-0.5 text-brand-red" />
            <span>Premium 3M vinyl wrap materials</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-4 w-4 mr-1 mt-0.5 text-brand-red" />
            <span>Expert designers for custom graphics</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-4 w-4 mr-1 mt-0.5 text-brand-red" />
            <span>Fast turnaround times for installation</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-4 w-4 mr-1 mt-0.5 text-brand-red" />
            <span>Full warranty on all installations</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-4 w-4 mr-1 mt-0.5 text-brand-red" />
            <span>Competitive pricing for all budgets</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-4 w-4 mr-1 mt-0.5 text-brand-red" />
            <span>Hundreds of satisfied {city.name} customers</span>
          </li>
        </ul>
      </div>
      
      {/* Achievements */}
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-sm">
          <Award className="h-4 w-4 mr-1" />
          20+ Years Experience
        </div>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-sm">
          <CheckCircle2 className="h-4 w-4 mr-1" />
          16,000+ Wraps Completed
        </div>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-sm">
          <Shield className="h-4 w-4 mr-1" />
          Premium 3M Materials
        </div>
      </div>
      
      {/* Contact buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <Button
          asChild
          className="bg-brand-red hover:bg-red-700 text-white"
        >
          <Link to="/contact" className="inline-flex items-center">
            <MessageSquare className="mr-2 h-5 w-5" />
            Request a Free Quote
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
        >
          <a href="tel:3125971286" className="inline-flex items-center">
            <Phone className="mr-2 h-5 w-5" />
            Call (312) 597-1286
          </a>
        </Button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-sm">
          <Car className="h-4 w-4 mr-1" />
          Car Wraps {city.name}
        </div>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-sm">
          <Truck className="h-4 w-4 mr-1" />
          Truck Wraps {city.name}
        </div>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <path d="M10 17h4V8h-4z"/>
            <path d="M2 9v8h10V9c0-4-1.5-5-5-5S2 5 2 9z"/>
            <path d="M12 9v8h10V9c0-4-1.5-5-5-5s-5 1-5 5z"/>
          </svg>
          Van Wraps {city.name}
        </div>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-sm">
          <Shield className="h-4 w-4 mr-1" />
          Fleet Wraps {city.name}
        </div>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <path d="M12 2v8"/>
            <path d="M4.93 10.93 9.17 15.17"/>
            <path d="M2 18h12"/>
            <path d="M19 18h3"/>
            <circle cx="12" cy="18" r="2"/>
            <path d="M18 9v9"/>
          </svg>
          Color Change Wraps {city.name}
        </div>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <rect width="18" height="10" x="3" y="3" rx="2"/>
            <rect width="18" height="8" x="3" y="13" rx="2"/>
          </svg>
          Commercial Graphics {city.name}
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-brand-navy mb-2">Vehicle Wrap Services in {city.name}:</h3>
        <p className="text-gray-700 text-sm mb-3">
          We offer complete vehicle wrap services for individuals and businesses in {city.name}, including:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          <Link to="/full-vehicle-wrap-cost-chicago" className="p-2 bg-white rounded border border-gray-200 hover:bg-brand-light text-center">Full Vehicle Wraps</Link>
          <Link to="/partial-vehicle-wraps-chicago" className="p-2 bg-white rounded border border-gray-200 hover:bg-brand-light text-center">Partial Vehicle Wraps</Link>
          <Link to="/color-change-wraps-chicago" className="p-2 bg-white rounded border border-gray-200 hover:bg-brand-light text-center">Color Change Wraps</Link>
          <Link to="/commercial-vehicle-wraps-chicago" className="p-2 bg-white rounded border border-gray-200 hover:bg-brand-light text-center">Commercial Vehicle Wraps</Link>
          <Link to="/fleet-wraps-chicago" className="p-2 bg-white rounded border border-gray-200 hover:bg-brand-light text-center">Fleet Vehicle Wraps</Link>
          <Link to="/business-vehicle-wraps-chicago" className="p-2 bg-white rounded border border-gray-200 hover:bg-brand-light text-center">Business Vehicle Branding</Link>
          <Link to="/truck-lettering-chicago" className="p-2 bg-white rounded border border-gray-200 hover:bg-brand-light text-center">Vehicle Lettering & Decals</Link>
          <Link to="/van-graphics-installation-chicago" className="p-2 bg-white rounded border border-gray-200 hover:bg-brand-light text-center">Window Graphics</Link>
        </div>
      </div>
    </div>
  );
};

export default CityHeader;
