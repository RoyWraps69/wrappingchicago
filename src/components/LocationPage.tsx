
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { City } from '@/data/cities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Schema from '@/components/Schema';

interface LocationPageProps {
  city: City;
}

const LocationPage = ({ city }: LocationPageProps) => {
  if (!city) {
    return <div>City not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>Vehicle Wraps in {city.name}, IL | Fleet & Color Change Wraps</title>
        <meta 
          name="description" 
          content={`Professional vehicle wraps, fleet wraps & color change wraps in ${city.name}, IL. Chicago Fleet Wraps provides high-quality vehicle wrapping services with free quotes.`} 
        />
        <link rel="canonical" href={`https://chicagofleetwraps.com/vehicle-wraps-${city.slug}-il`} />
      </Helmet>
      
      <Schema city={city} />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                  Premium Vehicle Wraps in {city.name}, IL
                </h1>
                <p className="text-xl mb-8">
                  Transform your vehicles with professional wraps from Chicago's most trusted vehicle wrap provider.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-brand-red hover:bg-red-700 text-white text-lg px-8 py-6 h-auto"
                  >
                    <Link to="/contact">Request a Quote</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-brand-navy text-lg px-8 py-6 h-auto"
                  >
                    <Link to="/gallery">View Our Work</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
          
          {/* Main Content */}
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
          
          {/* Image Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-10 text-center text-brand-navy">
                Our Vehicle Wrap Projects in {city.name}, IL
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="rounded-lg overflow-hidden shadow-md bg-white">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                      <img 
                        src={`https://placehold.co/600x400/0B3954/FFFFFF?text=Fleet+Wrap+${item}`}
                        alt={`Fleet vehicle wrap in ${city.name}, IL - Chicago Fleet Wraps`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-brand-navy">
                        {item === 1 ? 'Fleet Wrap' : item === 2 ? 'Color Change Wrap' : 'Commercial Graphics'}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {item === 1 
                          ? `Local delivery fleet wrapped for maximum visibility in ${city.name}.` 
                          : item === 2 
                            ? `Complete color transformation for a personal vehicle in ${city.name}.` 
                            : `Eye-catching graphics for a local ${city.name} business service vehicle.`}
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                      >
                        <Link to="/gallery">View Project</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-10">
                <Button
                  asChild
                  className="bg-brand-navy hover:bg-blue-900 text-white"
                >
                  <Link to="/gallery">View All Projects</Link>
                </Button>
              </div>
            </div>
          </section>
          
          {/* Testimonials */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-10 text-center text-brand-navy">
                What Our {city.name} Customers Say
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "John Smith",
                    business: "Smith Plumbing",
                    text: `Chicago Fleet Wraps transformed our entire fleet of service vans, and the results have been incredible. We've seen a notable increase in calls from ${city.name} residents who saw our vans around town. The quality of work is outstanding, and the customer service was excellent.`
                  },
                  {
                    name: "Sarah Johnson",
                    business: "Local Cafe",
                    text: `As a small business owner in ${city.name}, visibility is everything. The team at Chicago Fleet Wraps designed and installed a beautiful wrap for our delivery car that perfectly captures our brand. It's like having a mobile billboard throughout ${city.county}!`
                  },
                  {
                    name: "Mike Williams",
                    business: "Personal Vehicle Owner",
                    text: `I wanted to change the color of my car without affecting the resale value. The color change wrap from Chicago Fleet Wraps looks better than I imagined. The matte black finish turns heads everywhere I drive in ${city.name}. Worth every penny!`
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="p-6 bg-brand-light rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-brand-navy flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-brand-navy">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.business}</p>
                      </div>
                    </div>
                    <p className="italic text-gray-700">{testimonial.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <CallToAction city={city.name} />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default LocationPage;
