import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Truck, Home, Shield, Clock } from 'lucide-react';

const MoversWrapsPage = () => {
  return (
    <>
      <Helmet>
        <title>Moving Company Vehicle Wraps Chicago | Movers Fleet Graphics</title>
        <meta name="description" content="Professional moving company vehicle wraps in Chicago. Custom movers truck graphics, van wraps, and fleet branding that builds trust and drives bookings." />
        <meta name="keywords" content="moving company vehicle wraps chicago, movers truck graphics, moving van wraps, movers fleet branding, chicago moving advertising" />
        <link rel="canonical" href="https://chicagofleetwraps.com/movers-wraps" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Truck className="w-16 h-16 text-green-300" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional <span className="text-green-300">Moving</span><br />
              Vehicle Wraps
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Move your business forward with professional vehicle graphics that build trust and drive bookings across Chicago
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Get Free Quote
              </Link>
              <Link to="/gallery" className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Movers Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Moving Companies Choose Chicago Fleet Wraps</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the moving industry's trust challenges and create designs that build credibility and peace of mind
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Trust & Credibility</h3>
              <p className="text-gray-600">Professional designs that showcase licensing, insurance, and certifications to build customer confidence.</p>
            </div>
            
            <div className="text-center p-6">
              <Home className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Local & Long Distance</h3>
              <p className="text-gray-600">Designs that highlight both local Chicago moves and nationwide moving capabilities.</p>
            </div>
            
            <div className="text-center p-6">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quick Turnaround</h3>
              <p className="text-gray-600">Fast installation so your moving trucks can start generating leads and bookings immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Movers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Moving Company Vehicle Wrap Services</h2>
            <p className="text-xl text-gray-600">Complete branding solutions for your moving fleet</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-green-600">Moving Truck Wraps</h3>
              <p className="text-gray-600 mb-4">Full wraps for moving trucks that showcase your services and build trust with professional imagery.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• License & insurance display</li>
                <li>• Service area coverage</li>
                <li>• Professional team photos</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-green-600">Moving Van Graphics</h3>
              <p className="text-gray-600 mb-4">Professional van wraps for smaller moves and apartment relocations with clear service messaging.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Apartment moving focus</li>
                <li>• Local service emphasis</li>
                <li>• Quick booking info</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-green-600">Fleet Branding</h3>
              <p className="text-gray-600 mb-4">Consistent branding across your entire moving fleet for maximum brand recognition and trust.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multi-vehicle packages</li>
                <li>• Brand consistency</li>
                <li>• Volume pricing available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Services */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Showcase Your Moving Services</h2>
            <p className="text-xl mb-8 text-green-100">
              Highlight your specialized moving services to attract the right customers
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">Residential</h4>
                <p className="text-sm text-green-200">Home & apartment moves</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">Commercial</h4>
                <p className="text-sm text-green-200">Office & business relocations</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">Long Distance</h4>
                <p className="text-sm text-green-200">State-to-state moves</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">Specialty</h4>
                <p className="text-sm text-green-200">Piano, art, fragile items</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">95%</div>
                <div className="text-lg">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">50,000+</div>
                <div className="text-lg">Daily Impressions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">24/7</div>
                <div className="text-lg">Mobile Advertising</div>
              </div>
            </div>
            
            <Link to="/contact" className="bg-white text-green-900 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Start Moving Your Business Forward
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Move Your Marketing Forward?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join Chicago's top moving companies who trust us with their vehicle branding. Get your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Free Quote Today
            </Link>
            <Link to="/gallery" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoversWrapsPage;