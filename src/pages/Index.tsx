
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { cities } from '@/data/cities';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Chicago Fleet Wraps | Professional Vehicle & Fleet Wrapping Services</title>
        <meta 
          name="description" 
          content="Chicago Fleet Wraps provides professional vehicle wrapping services including fleet wraps, color change wraps, and commercial graphics throughout Chicago and surrounding areas." 
        />
        <link rel="canonical" href="https://chicagofleetwraps.com" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                  Premium Vehicle Wraps in Chicago
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
          
          {/* Services Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-brand-navy">Our Vehicle Wrap Services</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Chicago Fleet Wraps offers a comprehensive range of vehicle wrapping services to meet the needs of businesses and individuals throughout Chicago and surrounding areas.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Fleet Wraps",
                    description: "Transform your company vehicles into eye-catching mobile billboards. Our fleet wrapping services help businesses maximize their advertising reach across Chicago.",
                    image: "https://placehold.co/600x400/0B3954/FFFFFF?text=Fleet+Wraps",
                    link: "/services/fleet-wraps"
                  },
                  {
                    title: "Color Change Wraps",
                    description: "Want a new look without the permanence of paint? Our color change wraps allow you to transform your vehicle with premium vinyl wraps in any color or finish.",
                    image: "https://placehold.co/600x400/0B3954/FFFFFF?text=Color+Change+Wraps",
                    link: "/services/color-change-wraps"
                  },
                  {
                    title: "Commercial Graphics",
                    description: "From simple lettering to complex designs, our commercial graphics solutions help businesses create professional vehicle identities that stand out on the road.",
                    image: "https://placehold.co/600x400/0B3954/FFFFFF?text=Commercial+Graphics",
                    link: "/services/commercial-graphics"
                  }
                ].map((service, index) => (
                  <div key={index} className="bg-brand-light rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-w-16 aspect-h-9">
                      <img 
                        src={service.image}
                        alt={`${service.title} - Chicago Fleet Wraps`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-brand-navy">{service.title}</h3>
                      <p className="text-gray-700 mb-4">{service.description}</p>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                      >
                        <Link to={service.link}>Learn More</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Areas We Serve */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-brand-navy">Areas We Serve</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Chicago Fleet Wraps provides professional vehicle wrapping services throughout Chicago and surrounding communities. Click on your city below for location-specific information.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {cities.map((city) => (
                  <Link 
                    key={city.slug}
                    to={`/vehicle-wraps-${city.slug}-il`}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="text-center">
                      <h3 className="font-bold text-brand-navy hover:text-brand-red transition-colors">
                        {city.name}, IL
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button
                  asChild
                  className="bg-brand-navy hover:bg-blue-900 text-white"
                >
                  <Link to="/locations">View All Locations</Link>
                </Button>
              </div>
            </div>
          </section>
          
          {/* Why Choose Us */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-brand-navy">Why Choose Chicago Fleet Wraps</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  When it comes to vehicle wraps in Chicago and surrounding areas, Chicago Fleet Wraps stands apart from the competition.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Premium Materials",
                    description: "We use only top-quality 3M and Avery vinyl materials for maximum durability and appearance."
                  },
                  {
                    title: "Expert Installation",
                    description: "Our certified professionals ensure flawless application and attention to detail."
                  },
                  {
                    title: "Comprehensive Design",
                    description: "From concept to completion, our design team will create eye-catching graphics."
                  },
                  {
                    title: "5-Year Warranty",
                    description: "We stand behind our work with a comprehensive 5-year warranty on all installations."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="text-center p-6">
                    <div className="w-16 h-16 mx-auto bg-brand-navy rounded-full flex items-center justify-center text-white mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-brand-navy">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <CallToAction />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
