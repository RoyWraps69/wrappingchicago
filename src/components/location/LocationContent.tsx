
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { City, cities } from '@/data/cities';
import { ExternalLink, MapPin, Phone, Mail, Car, Truck, Building, Check } from 'lucide-react';

interface LocationContentProps {
  city: City;
}

const LocationContent = ({ city }: LocationContentProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-brand-navy flex items-center">
              <Car className="h-7 w-7 mr-2 text-brand-red" />
              Premium Vehicle Wraps in {city.name}, Illinois
            </h2>
            
            <div className="prose max-w-none">
              <p className="text-lg">
                Chicago Fleet Wraps is proud to be the leading provider of premium vehicle wraps in {city.name}, {city.state}. 
                Located just {city.distance} from Chicago, {city.name} businesses and residents trust us for exceptional vehicle 
                transformation services that deliver outstanding results every time.
              </p>
              
              <div className="my-6 p-4 border border-brand-light rounded-lg flex items-center bg-gray-50">
                <div className="mr-3">
                  <MapPin className="h-5 w-5 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">About {city.name}, Illinois</h3>
                  <p className="mb-2">{city.description}</p>
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
              </div>
              
              <p>
                Our team of certified vehicle wrap professionals serves all of {city.county}, including the bustling 
                {city.businessAreas}. With a population of approximately {city.population}, {city.name} is 
                an ideal market for businesses looking to increase their visibility through effective mobile advertising.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-brand-navy flex items-center">
                <Truck className="h-6 w-6 mr-2 text-brand-red" />
                Professional Vehicle Wrapping Services in {city.name}
              </h3>
              
              <p>
                At Chicago Fleet Wraps, we understand that businesses in {city.name} need to stand out in a competitive market. 
                Our vehicle wraps provide an outstanding return on investment by transforming your vehicles into mobile billboards 
                that generate thousands of impressions daily throughout {city.county} and beyond.
              </p>
              
              <p>
                We use only premium 3M and Avery vinyl materials, ensuring your vehicle wrap will maintain its vibrant appearance and 
                professional look for years to come. Our climate-controlled installation facility and certified technicians guarantee 
                flawless application and attention to detail on every project.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-brand-light p-5 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-brand-navy">Fleet Wraps</h4>
                  <p className="mb-4">
                    Transform your company vehicles into eye-catching mobile billboards. Our fleet wrapping services help {city.name} 
                    businesses maximize their advertising reach throughout the Chicago area.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Consistent branding across multiple vehicles</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Cost-effective compared to traditional advertising</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Protects original paint from everyday wear</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-brand-light p-5 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-brand-navy">Color Change Wraps</h4>
                  <p className="mb-4">
                    Want to give your vehicle a new look without the permanence of paint? Our color change wraps offer {city.name} 
                    drivers the ability to transform their vehicles with premium vinyl wraps.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Matte, gloss, satin, and specialty finishes available</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Reversible alternative to permanent paint</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>Protects resale value while customizing your look</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mt-8 mb-4 text-brand-navy flex items-center">
                <Building className="h-6 w-6 mr-2 text-brand-red" />
                Why {city.name} Businesses Choose Chicago Fleet Wraps
              </h3>
              
              <p>
                When it comes to vehicle wraps in {city.name}, IL, businesses and individuals choose Chicago Fleet Wraps for several key reasons:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>
                  <strong>Local Expertise:</strong> We understand the {city.name} market and can help design vehicle wraps that will 
                  resonate with your local customers and stand out in {city.businessAreas}.
                </li>
                <li>
                  <strong>Premium Materials:</strong> We use only the highest quality 3M and Avery vinyl materials that withstand the 
                  harsh Illinois weather conditions from snowy winters to hot summers.
                </li>
                <li>
                  <strong>Expert Design Services:</strong> Our in-house design team works with you to create eye-catching graphics 
                  that effectively communicate your brand message.
                </li>
                <li>
                  <strong>Professional Installation:</strong> Our certified technicians ensure flawless application in our 
                  climate-controlled facility.
                </li>
                <li>
                  <strong>Comprehensive Warranty:</strong> We stand behind our work with a 5-year warranty on all installations.
                </li>
                <li>
                  <strong>Competitive Pricing:</strong> We offer transparent pricing and flexible payment options to fit your budget.
                </li>
              </ul>
              
              <p className="mt-6">
                For {city.name} businesses, vehicle wraps provide an exceptional marketing opportunity. With the high traffic volume 
                throughout {city.county} and the greater Chicago area, your wrapped vehicles can generate thousands of impressions daily. 
                Unlike traditional advertising methods, vehicle wraps work for you 24/7, creating brand awareness whether your vehicles 
                are on the road or parked.
              </p>
              
              <p>
                Additionally, our wraps help protect your vehicles from minor scratches and stone chips, preserving their resale value 
                while simultaneously advertising your business throughout {city.name} and beyond.
              </p>
              
              <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-brand-light">
                <h4 className="text-xl font-bold mb-3 text-brand-navy">Ready to Transform Your Vehicles in {city.name}?</h4>
                <p className="mb-4">
                  Contact Chicago Fleet Wraps today to schedule a consultation or request a free, no-obligation quote for your 
                  {city.name} vehicle wrap project. Our team is ready to help you make a statement on the roads of 
                  {city.county} and beyond!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button
                    asChild
                    className="bg-brand-red hover:bg-red-700 text-white"
                  >
                    <Link to="/contact">Get a Free Quote Today</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                  >
                    <Link to="/gallery">View Our Portfolio</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-brand-light p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-brand-navy">Contact Us</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-brand-red mr-2 mt-0.5" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p>(773) 555-1234</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-brand-red mr-2 mt-0.5" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p>info@chicagofleetwraps.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-brand-red mr-2 mt-0.5" />
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p>123 Wrap Avenue<br />Chicago, IL 60601</p>
                    <p className="text-sm text-gray-600 mt-1">Just {city.distance} from {city.name}</p>
                  </div>
                </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContent;
