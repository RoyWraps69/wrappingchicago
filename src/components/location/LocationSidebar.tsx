
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
      <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-black">
        <h3 className="text-xl font-bold mb-6 text-black flex items-center">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-red text-white mr-2">
            <Phone className="h-4 w-4" />
          </span>
          Contact Us
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-start p-4 bg-red-50 border-2 border-brand-red rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 rounded-full mr-4 flex-shrink-0 bg-brand-red text-white">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <p className="font-bold text-xl text-brand-red">Call Us</p>
              <div className="text-black mt-2 text-lg font-medium">
                <p className="text-lg font-medium">(312) 597-1286</p>
                <p className="text-sm text-gray-600">Mon-Fri, 8am-6pm</p>
              </div>
            </div>
          </div>

          <div className="flex items-start p-4 bg-white border-2 border-black rounded-lg hover:border-brand-red transition-colors">
            <div className="flex items-center justify-center w-12 h-12 rounded-full mr-4 flex-shrink-0 bg-black text-white">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="font-bold text-xl text-black">Email Us</p>
              <div className="text-black mt-2 text-lg font-medium">
                <p>roy@chicagofleetwraps.com</p>
                <p className="text-sm text-gray-600">We reply within 24 hours</p>
              </div>
            </div>
          </div>

          <div className="flex items-start p-4 bg-white border-2 border-black rounded-lg hover:border-brand-red transition-colors">
            <div className="flex items-center justify-center w-12 h-12 rounded-full mr-4 flex-shrink-0 bg-black text-white">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <p className="font-bold text-xl text-black">Visit Us</p>
              <div className="text-black mt-2 text-lg font-medium">
                <p>4711 N. Lamon Ave<br />Chicago, IL 60630</p>
                <p className="text-sm text-gray-600 mt-1">
                  Just {city.distance} from {city.name}
                </p>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-brand-red mt-1"
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
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Schedule Appointment */}
      <div className="bg-brand-navy p-6 rounded-2xl shadow-lg text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center text-white">
          <Calendar className="h-5 w-5 text-brand-red mr-2" />
          Schedule Consultation
        </h3>
        <p className="mb-4 text-white">
          Ready for a vehicle transformation in {city.name}? Schedule a free consultation today.
        </p>
        <Button
          asChild
          variant="default"
          className="w-full bg-brand-red hover:bg-red-700 text-white"
        >
          <Link to="/contact" className="inline-flex items-center text-white">
            Schedule Perfection Now!
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      
      {/* Services */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-black">
        <h3 className="text-xl font-bold mb-4 text-black flex items-center">
          <Car className="h-5 w-5 text-brand-red mr-2" />
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
                className="flex items-center py-3 text-black hover:text-brand-red transition-colors"
              >
                <ArrowRight className="h-4 w-4 mr-2 opacity-50" />
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Testimonial */}
      <div className="bg-gradient-to-br from-brand-light to-white p-6 rounded-2xl shadow-lg border-2 border-black">
        <div className="flex items-center mb-4">
          <Star className="h-5 w-5 text-yellow-400" fill="#FBBF24" />
          <Star className="h-5 w-5 text-yellow-400" fill="#FBBF24" />
          <Star className="h-5 w-5 text-yellow-400" fill="#FBBF24" />
          <Star className="h-5 w-5 text-yellow-400" fill="#FBBF24" />
          <Star className="h-5 w-5 text-yellow-400" fill="#FBBF24" />
        </div>
        <p className="italic text-black mb-4">
          "Chicago Fleet Wraps transformed our delivery vehicles with stunning graphics. The team was professional and the quality is outstanding!"
        </p>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center mr-3">
            AB
          </div>
          <div>
            <p className="font-medium text-black">Alex Brown</p>
            <p className="text-sm text-gray-600">{city.name} Business Owner</p>
          </div>
        </div>
      </div>
      
      {/* Nearby Cities */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-black">
        <h3 className="text-xl font-bold mb-4 text-black">Nearby Cities</h3>
        <div className="grid grid-cols-2 gap-2">
          {nearbyCities.map(nearbyCity => (
            <Link 
              key={nearbyCity.slug}
              to={`/vehicle-wraps-${nearbyCity.slug}-il`} 
              className="text-sm bg-gray-50 hover:bg-brand-red/10 p-3 rounded-lg text-black hover:text-brand-red transition-all duration-200"
            >
              {nearbyCity.name}, IL
            </Link>
          ))}
        </div>
        <div className="mt-3 text-center">
          <Button
            asChild
            variant="link"
            className="text-brand-red"
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
