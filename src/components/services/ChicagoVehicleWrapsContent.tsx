
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, CheckCircle2, Star, MapPin, Clock, Award, Users } from 'lucide-react';
import ServicesSEO from './ServicesSEO';

const ChicagoVehicleWrapsContent = () => {
  const chicagolandAreas = [
    'Chicago', 'Evanston', 'Naperville', 'Schaumburg', 'Oak Park', 'River Grove',
    'Elmwood Park', 'Franklin Park', 'Des Plaines', 'Park Ridge', 'Skokie',
    'Morton Grove', 'Niles', 'Lincolnwood', 'Rosemont', 'Elk Grove Village'
  ];

  const serviceCategories = [
    {
      title: 'Fleet Vehicle Wraps Chicago',
      description: 'Transform your business fleet into mobile billboards with our commercial vehicle wrapping services.',
      features: ['Brand consistency', 'Mobile advertising', 'Professional appearance', 'Lead generation'],
      link: '/services/fleet-wraps'
    },
    {
      title: 'Car Wraps Chicago',
      description: 'Custom car wraps for personal vehicles, luxury cars, and specialty applications.',
      features: ['Color change wraps', 'Partial wraps', 'Racing stripes', 'Custom graphics'],
      link: '/car-wraps'
    },
    {
      title: 'Truck Wraps Chicago',
      description: 'Professional truck wrapping for box trucks, pickup trucks, and commercial vehicles.',
      features: ['Box truck wraps', 'Pickup truck graphics', 'Semi-trailer wraps', 'Delivery van wraps'],
      link: '/truck-wraps'
    },
    {
      title: 'Van Wraps Chicago',
      description: 'Turn your van into a mobile advertisement with our professional van wrapping services.',
      features: ['Cargo van wraps', 'Sprinter van graphics', 'Transit van wraps', 'Custom lettering'],
      link: '/van-wraps'
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: '20+ Years Experience',
      description: 'Master vehicle wrap installers with over two decades of experience in Chicago.'
    },
    {
      icon: Users,
      title: '16,000+ Vehicles Wrapped',
      description: 'Proven track record with thousands of satisfied customers across Chicagoland.'
    },
    {
      icon: Star,
      title: 'Premium 3M Materials',
      description: 'We exclusively use 3M and Avery Dennison materials with full warranties.'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Most vehicle wraps completed within 3-5 business days with precision installation.'
    }
  ];

  return (
    <>
      <ServicesSEO />
      
      <div className="bg-gradient-to-b from-brand-navy to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 speakable">
              #1 Vehicle Wraps in Chicago & Chicagoland
            </h1>
            <h2 className="text-2xl mb-6 text-blue-100 speakable">
              Premium Car Wraps, Truck Wraps, Van Wraps & Fleet Graphics
            </h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto text-blue-100">
              Transform your vehicle into a mobile billboard with Chicago's premier vehicle wrap company. 
              Over 20 years experience, 16,000+ vehicles wrapped, and the highest quality materials in the industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-red hover:bg-red-700 text-white text-lg px-8 py-4">
                <Link to="/contact" className="inline-flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy text-lg px-8 py-4">
                <a href="tel:3125971286" className="inline-flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  (312) 597-1286
                </a>
              </Button>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Icon className="h-8 w-8 text-brand-red mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-blue-100">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-navy mb-6 speakable">
              Complete Vehicle Wrap Services in Chicago
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From single vehicles to entire fleets, we provide comprehensive vehicle wrapping 
              solutions for businesses and individuals throughout Chicagoland.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button asChild className="w-full bg-brand-red hover:bg-red-700">
                  <Link to={service.link}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chicagoland Coverage */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-navy mb-6 speakable">
              Serving All of Chicagoland
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Professional vehicle wrap installation throughout Chicago and surrounding suburbs
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-6 w-6 text-brand-red mr-2" />
              <h3 className="text-2xl font-bold text-brand-navy">Areas We Serve</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
              {chicagolandAreas.map((area, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3 hover:bg-brand-red hover:text-white transition-colors cursor-pointer">
                  <span className="text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button asChild variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                <Link to="/service-areas">View All Service Areas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Quality */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brand-navy mb-6 speakable">
                Why Chicago Businesses Choose Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brand-red text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Free Design Consultation</h3>
                    <p className="text-gray-700">Our experts work with you to create designs that maximize impact and ROI.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-red text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Premium Materials Only</h3>
                    <p className="text-gray-700">3M and Avery Dennison materials with 5-year warranties for lasting results.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-red text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Installation</h3>
                    <p className="text-gray-700">Certified installers with 20+ years experience ensure perfect results.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-red text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                    <p className="text-gray-700">Maintenance tips, warranty support, and future service recommendations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-navy text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="mb-6">Get your free quote today and see how we can transform your vehicle into a powerful marketing tool.</p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-brand-red" />
                  <span>Call: (312) 597-1286</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-brand-red" />
                  <span>4711 N. Lamon Ave, Chicago, IL 60630</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-brand-red" />
                  <span>Mon-Fri: 9AM-5PM | Sat: 10AM-2PM</span>
                </div>
              </div>
              
              <Button asChild className="w-full mt-6 bg-brand-red hover:bg-red-700">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChicagoVehicleWrapsContent;
