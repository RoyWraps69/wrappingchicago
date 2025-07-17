import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Wrench, Droplets, Shield, Clock } from 'lucide-react';

const PlumbingWrapsPage = () => {
  return (
    <>
      <Helmet>
        <title>Plumbing Vehicle Wraps Chicago | Professional Plumber Fleet Graphics</title>
        <meta name="description" content="Professional plumbing vehicle wraps in Chicago. Custom plumber truck graphics, van wraps, and fleet branding that builds trust and drives business growth." />
        <meta name="keywords" content="plumbing vehicle wraps chicago, plumber truck graphics, plumbing van wraps, plumber fleet branding, chicago plumbing advertising" />
        <link rel="canonical" href="https://www.wrappingchicago.com/plumbing-wraps" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Wrench className="w-16 h-16 text-blue-300" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional <span className="text-blue-300">Plumbing</span><br />
              Vehicle Wraps
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Build trust and grow your plumbing business with eye-catching vehicle graphics that showcase your professionalism across Chicago
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Get Free Quote
              </Link>
              <Link to="/gallery" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Plumbers Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Plumbers Trust Chicago Fleet Wraps</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the plumbing industry's unique needs and create designs that build credibility and generate leads
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Droplets className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Industry Expertise</h3>
              <p className="text-gray-600">15+ years designing for plumbing contractors. We know what works in Chicago's competitive market.</p>
            </div>
            
            <div className="text-center p-6">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Professional Image</h3>
              <p className="text-gray-600">Clean, trustworthy designs that position your business as the reliable choice for homeowners.</p>
            </div>
            
            <div className="text-center p-6">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fast Turnaround</h3>
              <p className="text-gray-600">Get your plumbing vehicles wrapped quickly so you can start generating leads immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Plumbers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Plumbing Vehicle Wrap Services</h2>
            <p className="text-xl text-gray-600">Complete branding solutions for your plumbing fleet</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Service Van Wraps</h3>
              <p className="text-gray-600 mb-4">Full and partial wraps for plumbing service vans that showcase your services and contact information prominently.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Emergency service messaging</li>
                <li>• Service area coverage maps</li>
                <li>• Professional photography integration</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Plumbing Truck Graphics</h3>
              <p className="text-gray-600 mb-4">Eye-catching truck wraps that turn your work vehicles into mobile billboards for your plumbing business.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Heavy-duty materials</li>
                <li>• Weather-resistant graphics</li>
                <li>• High-visibility contact info</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Fleet Branding</h3>
              <p className="text-gray-600 mb-4">Consistent branding across your entire plumbing fleet for maximum brand recognition and professionalism.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multi-vehicle packages</li>
                <li>• Brand consistency guidelines</li>
                <li>• Volume pricing discounts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Turn Your Plumbing Vehicles Into Profit Centers</h2>
            <p className="text-xl mb-8 text-blue-100">
              Professional vehicle wraps generate thousands of daily impressions, building trust and driving new customer calls
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">70,000+</div>
                <div className="text-lg">Daily Impressions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">3-5x</div>
                <div className="text-lg">ROI Typical Return</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">24/7</div>
                <div className="text-lg">Marketing Coverage</div>
              </div>
            </div>
            
            <Link to="/contact" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Start Growing Your Plumbing Business
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Wrap Your Plumbing Fleet?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of Chicago plumbers who trust us with their vehicle branding. Get your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Free Quote Today
            </Link>
            <Link to="/gallery" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlumbingWrapsPage;