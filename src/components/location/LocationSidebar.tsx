
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { City, cities } from '@/data/cities';
import { MapPin, Phone, Mail, Car, Calendar, ArrowRight, Star } from 'lucide-react';
import ContactItem from './ContactItem';

interface LocationSidebarProps {
  city: City;
}

const LocationSidebar: React.FC<LocationSidebarProps> = ({ city }) => {
  // Filter cities to show only different cities
  const nearbyCities = cities
    .filter(c => c.slug !== city.slug)
    .slice(0, 4);

  return (
    <div className="space-y-8">
      {/* Contact Section */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold mb-6 text-brand-black flex items-center">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-gold text-brand-black mr-2">
            <Phone className="h-4 w-4" />
          </span>
          Contact Us
        </h3>
        
        <div className="space-y-3">
          <ContactItem icon={Phone} title="Call Us" highlight>
            <p className="text-lg font-medium">(312) 597-1286</p>
            <p className="text-sm text-gray-500">Mon-Fri, 8am-6pm</p>
          </ContactItem>

          <ContactItem icon={Mail} title="Email Us">
            <p>roy@chicagofleetwraps.com</p>
            <p className="text-sm text-gray-500">We reply within 24 hours</p>
          </ContactItem>

          <ContactItem icon={MapPin} title="Visit Us">
            <p>4711 N. Lamon Ave<br />Chicago, IL 60630</p>
            <p className="text-sm text-gray-600 mt-1">
              Just {city.distance} from {city.name}
            </p>
            <Button 
              variant="link" 
              className="p-0 h-auto text-brand-gold mt-1"
              asChild
            >
              <a 
                href={`https://maps.google.com/?q=4711+N.+Lamon+Ave+Chicago+IL+60630`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                Get directions
                <ArrowRight className="ml-1 h-3 w-3" />
              </a>
            </Button>
          </ContactItem>
        </div>
      </div>
      
      {/* Schedule Appointment */}
      <div className="bg-brand-black p-6 rounded-2xl shadow-lg text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Calendar className="h-5 w-5 text-brand-gold mr-2" />
          Schedule Consultation
        </h3>
        <p className="mb-4 text-white/80">
          Ready for a vehicle transformation in {city.name}? Schedule a free consultation today.
        </p>
        <Button
          asChild
          variant="gold"
          className="w-full"
        >
          <Link to="/contact" className="inline-flex items-center">
            Book Appointment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      
      {/* Services */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold mb-4 text-brand-black flex items-center">
          <Car className="h-5 w-5 text-brand-gold mr-2" />
          Our Services
        </h3>
        <ul className="space-y-2 divide-y divide-gray-100">
          {[
            { name: "Fleet Wraps", link: "/services/fleet-wraps" },
            { name: "Color Change Wraps", link: "/services/color-change-wraps" },
            { name: "Commercial Graphics", link: "/services/commercial-graphics" },
            { name: "Partial Wraps", link: "/services/partial-wraps" }
          ].map((service, index) => (
            <li key={index}>
              <Link 
                to={service.link} 
                className="flex items-center py-3 text-brand-black hover:text-brand-gold transition-colors"
              >
                <ArrowRight className="h-4 w-4 mr-2 opacity-50" />
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Testimonial */}
      <div className="bg-gradient-to-br from-brand-light to-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <div className="flex items-center mb-4">
          <Star className="h-5 w-5 text-brand-gold" fill="#D4AF37" />
          <Star className="h-5 w-5 text-brand-gold" fill="#D4AF37" />
          <Star className="h-5 w-5 text-brand-gold" fill="#D4AF37" />
          <Star className="h-5 w-5 text-brand-gold" fill="#D4AF37" />
          <Star className="h-5 w-5 text-brand-gold" fill="#D4AF37" />
        </div>
        <p className="italic text-gray-700 mb-4">
          "Chicago Fleet Wraps transformed our delivery vehicles with stunning graphics. The team was professional and the quality is outstanding!"
        </p>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-brand-black text-white flex items-center justify-center mr-3">
            AB
          </div>
          <div>
            <p className="font-medium text-brand-black">Alex Brown</p>
            <p className="text-sm text-gray-500">{city.name} Business Owner</p>
          </div>
        </div>
      </div>
      
      {/* Nearby Cities */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold mb-4 text-brand-black">Nearby Cities</h3>
        <div className="grid grid-cols-2 gap-2">
          {nearbyCities.map(nearbyCity => (
            <Link 
              key={nearbyCity.slug}
              to={`/vehicle-wraps-${nearbyCity.slug}-il`} 
              className="text-sm bg-gray-50 hover:bg-brand-gold/10 p-3 rounded-lg text-brand-black hover:text-brand-gold transition-all duration-200"
            >
              {nearbyCity.name}, IL
            </Link>
          ))}
        </div>
        <div className="mt-3 text-center">
          <Button
            asChild
            variant="link"
            className="text-brand-gold"
          >
            <Link to="/locations" className="inline-flex items-center">
              View All Locations
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LocationSidebar;
