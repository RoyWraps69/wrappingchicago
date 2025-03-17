
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { City, cities } from '@/data/cities';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactItem from './ContactItem';

interface LocationSidebarProps {
  city: City;
}

const LocationSidebar: React.FC<LocationSidebarProps> = ({ city }) => {
  return (
    <div className="bg-brand-light p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-brand-navy">Contact Us</h3>
      <div className="space-y-4 mb-6">
        <ContactItem icon={Phone} title="Call Us">
          <p>(773) 555-1234</p>
        </ContactItem>

        <ContactItem icon={Mail} title="Email Us">
          <p>info@chicagofleetwraps.com</p>
        </ContactItem>

        <ContactItem icon={MapPin} title="Visit Us">
          <p>123 Wrap Avenue<br />Chicago, IL 60601</p>
          <p className="text-sm text-gray-600 mt-1">Just {city.distance} from {city.name}</p>
        </ContactItem>
      </div>
      
      <h3 className="text-xl font-bold mt-8 mb-4 text-brand-navy">Our Services</h3>
      <ul className="space-y-2">
        <li>
          <Link 
            to="/services/fleet-wraps" 
            className="text-brand-navy hover:text-brand-red transition-colors"
          >
            Fleet Wraps
          </Link>
        </li>
        <li>
          <Link 
            to="/services/color-change-wraps" 
            className="text-brand-navy hover:text-brand-red transition-colors"
          >
            Color Change Wraps
          </Link>
        </li>
        <li>
          <Link 
            to="/services/commercial-graphics" 
            className="text-brand-navy hover:text-brand-red transition-colors"
          >
            Commercial Graphics
          </Link>
        </li>
        <li>
          <Link 
            to="/services/partial-wraps" 
            className="text-brand-navy hover:text-brand-red transition-colors"
          >
            Partial Wraps
          </Link>
        </li>
      </ul>
      
      <h3 className="text-xl font-bold mt-8 mb-4 text-brand-navy">Nearby Cities</h3>
      <ul className="space-y-2">
        {cities
          .filter(c => c.slug !== city.slug)
          .slice(0, 4)
          .map(nearbyCity => (
            <li key={nearbyCity.slug}>
              <Link 
                to={`/vehicle-wraps-${nearbyCity.slug}-il`} 
                className="text-brand-navy hover:text-brand-red transition-colors"
              >
                Vehicle Wraps in {nearbyCity.name}, IL
              </Link>
            </li>
          ))
        }
        <li>
          <Link 
            to="/locations" 
            className="text-brand-red font-medium hover:underline"
          >
            View All Locations
          </Link>
        </li>
      </ul>
      
      <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-brand-navy">Get a Free Quote</h3>
        <p className="mb-4">Ready to transform your vehicles in {city.name}? Contact us today for a free, no-obligation quote.</p>
        <Button
          asChild
          className="w-full bg-brand-red hover:bg-red-700 text-white"
        >
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default LocationSidebar;
