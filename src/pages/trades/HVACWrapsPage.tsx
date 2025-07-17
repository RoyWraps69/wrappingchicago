import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Thermometer, Wind, Snowflake, Clock } from 'lucide-react';

const HVACWrapsPage = () => {
  return (
    <>
      <Helmet>
        <title>HVAC Vehicle Wraps Chicago | Heating & Cooling Fleet Graphics</title>
        <meta name="description" content="Professional HVAC vehicle wraps in Chicago. Custom heating & cooling truck graphics, van wraps, and fleet branding for year-round business growth." />
        <meta name="keywords" content="hvac vehicle wraps chicago, heating cooling truck graphics, hvac van wraps, hvac fleet branding, chicago hvac advertising" />
        <link rel="canonical" href="https://www.wrappingchicago.com/hvac-wraps" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/5ea65bd1-a99f-40d1-b676-b4855a0b463f.png')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Thermometer className="w-16 h-16 text-orange-300" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional <span className="text-orange-300">HVAC</span><br />
              Vehicle Wraps
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Heat up your HVAC business with professional vehicle graphics that work in all seasons across Chicago
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Get Free Quote
              </Link>
              <Link to="/gallery" className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why HVAC Contractors Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why HVAC Contractors Choose Chicago Fleet Wraps</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand Chicago's HVAC market and create designs that generate calls year-round
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Wind className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Season-Ready Designs</h3>
              <p className="text-gray-600">Graphics that promote both heating and cooling services, maximizing your marketing impact year-round.</p>
            </div>
            
            <div className="text-center p-6">
              <Snowflake className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Weather-Resistant Materials</h3>
              <p className="text-gray-600">Premium materials that withstand Chicago's harsh winters and hot summers without fading or peeling.</p>
            </div>
            
            <div className="text-center p-6">
              <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Emergency Service Focus</h3>
              <p className="text-gray-600">Designs that emphasize 24/7 emergency services, capturing urgent HVAC repair calls.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for HVAC */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">HVAC Vehicle Wrap Services</h2>
            <p className="text-xl text-gray-600">Complete branding solutions for your heating & cooling fleet</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">Service Van Wraps</h3>
              <p className="text-gray-600 mb-4">Professional van wraps showcasing your heating and cooling expertise with clear service messaging.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Dual-season messaging</li>
                <li>• Emergency service emphasis</li>
                <li>• License/certification displays</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">HVAC Truck Graphics</h3>
              <p className="text-gray-600 mb-4">Heavy-duty truck wraps that showcase your equipment and professional HVAC services.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Equipment showcasing</li>
                <li>• Service area coverage</li>
                <li>• Professional photography</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">Installation Fleet Branding</h3>
              <p className="text-gray-600 mb-4">Consistent branding across installation trucks and service vehicles for maximum brand recognition.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multi-vehicle consistency</li>
                <li>• Installation messaging</li>
                <li>• Fleet pricing available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Benefits */}
      <section className="py-16 bg-orange-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Year-Round Marketing That Works</h2>
            <p className="text-xl mb-8 text-orange-100">
              Your HVAC vehicles work in all seasons - your marketing should too
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl mb-2">🌿</div>
                <h4 className="font-semibold mb-2">Spring</h4>
                <p className="text-sm text-orange-200">AC tune-ups and maintenance calls</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">☀️</div>
                <h4 className="font-semibold mb-2">Summer</h4>
                <p className="text-sm text-orange-200">Emergency cooling repairs peak season</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🍂</div>
                <h4 className="font-semibold mb-2">Fall</h4>
                <p className="text-sm text-orange-200">Heating system preparation and installs</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">❄️</div>
                <h4 className="font-semibold mb-2">Winter</h4>
                <p className="text-sm text-orange-200">Emergency heating repairs and service</p>
              </div>
            </div>
            
            <Link to="/contact" className="bg-white text-orange-900 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Start Your Year-Round Marketing
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Heat Up Your HVAC Marketing?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join Chicago's top HVAC contractors who trust us with their vehicle branding. Get your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Free Quote Today
            </Link>
            <Link to="/gallery" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HVACWrapsPage;