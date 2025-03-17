
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { City, cities } from '@/data/cities';
import { ExternalLink } from 'lucide-react';

interface LocationContentProps {
  city: City;
}

const LocationContent = ({ city }: LocationContentProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-brand-navy">
              High-Quality Fleet & Color Change Wraps in {city.name}
            </h2>
            
            <div className="prose max-w-none">
              <p className="text-lg">
                Chicago Fleet Wraps is proud to be the leading provider of premium vehicle wraps in {city.name}, {city.state}. 
                Located just {city.distance} from Chicago, {city.name} businesses and residents trust us for exceptional vehicle 
                transformation services that deliver outstanding results every time.
              </p>
              
              <div className="mb-4 flex items-center">
                <a 
                  href={city.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-brand-red hover:underline"
                >
                  Visit the official {city.name} website
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
              
              <p>
                Our team of certified vehicle wrap professionals serves all of {city.county}, including the bustling 
                {city.businessAreas}. With a population of approximately {city.population}, {city.name} is 
                an ideal market for businesses looking to increase their visibility through effective mobile advertising.
              </p>

              <p>
                {city.description} Our local expertise ensures that your vehicle wraps will be perfectly suited to the 
                unique characteristics of the {city.name} market.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4 text-brand-navy">
                Our Vehicle Wrap Services in {city.name}
              </h3>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Fleet Wraps:</strong> Transform your company vehicles into eye-catching mobile billboards. 
                  Our fleet wrapping services are perfect for {city.name} businesses looking to maximize their 
                  advertising reach throughout {city.county} and beyond.
                </li>
                <li>
                  <strong>Color Change Wraps:</strong> Want to give your vehicle a new look without the permanence 
                  of paint? Our color change wraps offer {city.name} drivers the ability to transform their vehicles 
                  with premium vinyl wraps in any color or finish.
                </li>
                <li>
                  <strong>Commercial Graphics:</strong> From simple lettering to complex designs, our commercial 
                  graphics solutions help {city.name} businesses create professional vehicle identities that stand out.
                </li>
              </ul>
              
              <h3 className="text-2xl font-bold mt-8 mb-4 text-brand-navy">
                Why Choose Chicago Fleet Wraps in {city.name}?
              </h3>
              
              <p>
                When it comes to vehicle wraps in {city.name}, IL, Chicago Fleet Wraps stands apart from the competition:
              </p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>Premium 3M and Avery materials with long-lasting durability</li>
                <li>Expert installation by certified professionals</li>
                <li>Comprehensive design services to create eye-catching graphics</li>
                <li>Climate-controlled installation facility ensuring perfect application</li>
                <li>5-year warranty on all installations</li>
                <li>Competitive pricing with flexible payment options</li>
              </ul>
              
              <p className="mt-6">
                Whether you're a local {city.name} business looking to wrap your entire fleet or an individual 
                wanting to change the color of your personal vehicle, our team at Chicago Fleet Wraps is ready to 
                deliver exceptional results that exceed your expectations.
              </p>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-2 text-brand-navy">Ready to get started?</h4>
                <p>
                  Contact Chicago Fleet Wraps today to schedule a consultation or request a quote for your 
                  {city.name} vehicle wrap project. Our team is ready to help you make a statement on the roads of 
                  {city.county} and beyond!
                </p>
                
                <div className="mt-6">
                  <Button
                    asChild
                    className="bg-brand-red hover:bg-red-700 text-white"
                  >
                    <Link to="/contact">Get a Free Quote Today</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-brand-light p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-brand-navy">Our Services</h3>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContent;
