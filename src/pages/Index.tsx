
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { cities } from '@/data/cities';
import { galleryItems } from '@/data/galleryItems';

const Index = () => {
  // Filter for van images from the gallery
  const vanImages = galleryItems.filter(item => 
    item.title.toLowerCase().includes('van') || 
    item.description.toLowerCase().includes('van')
  ).slice(0, 3); // Take the first 3 van-related images
  
  // Get specific van image for fleet wraps section
  const fleetWrapVan = galleryItems.find(item => 
    item.title.toLowerCase().includes('van') && 
    item.category === 'Fleet Wraps'
  )?.image || "/lovable-uploads/9bb3d94e-589d-4daf-b35e-e19e80610439.png";
  
  // Get specific van image for color change wraps section
  const colorChangeVan = galleryItems.find(item => 
    item.title.toLowerCase().includes('van') && 
    item.category === 'Color Change Wraps'
  )?.image || vanImages[0]?.image || "/lovable-uploads/230338ed-a8d9-4584-bb4c-ba33c793f7ab.png";
  
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
          <section className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ 
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                backgroundSize: '30px 30px'
              }}></div>
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="pt-8 pb-12 md:py-16">
                  <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
                    Premium Vehicle Wraps in Chicago
                  </h1>
                  <p className="text-xl mb-8 text-white/90 max-w-lg">
                    Transform your vehicles with professional wraps that turn heads and make your business stand out on every street.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      className="bg-brand-red hover:bg-red-700 text-white text-lg px-8 py-6 h-auto rounded-full"
                    >
                      <Link to="/contact">Request a Quote</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-brand-navy text-lg px-8 py-6 h-auto rounded-full"
                    >
                      <Link to="/gallery">View Our Work</Link>
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -inset-4 bg-brand-red/20 rounded-3xl blur-xl"></div>
                  <img 
                    src="/lovable-uploads/199c2a21-e0b0-4c29-972f-f32d72698382.png" 
                    alt="Chicago Fleet Wraps - Professional vehicle wrapping services"
                    className="rounded-xl shadow-2xl relative z-10 w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            {/* Wave divider */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
                <path fill="#ffffff" fillOpacity="1" d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,128C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
              </svg>
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
                    image: fleetWrapVan,
                    link: "/services/fleet-wraps"
                  },
                  {
                    title: "Color Change Wraps",
                    description: "Want a new look without the permanence of paint? Our color change wraps allow you to transform your vehicle with premium vinyl wraps in any color or finish.",
                    image: colorChangeVan,
                    link: "/services/color-change-wraps"
                  },
                  {
                    title: "Commercial Graphics",
                    description: "From simple lettering to complex designs, our commercial graphics solutions help businesses create professional vehicle identities that stand out on the road.",
                    image: vanImages[2] ? vanImages[2].image : "/lovable-uploads/fb7a4b97-4b57-4b2e-8f81-42a1098270df.png",
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
