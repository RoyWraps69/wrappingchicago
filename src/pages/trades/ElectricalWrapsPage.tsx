import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TradeHero from '@/components/heroes/TradeHero';
import { Zap, Shield, Clock, Settings } from 'lucide-react';

const ElectricalWrapsPage = () => {
  return (
    <>
      <Helmet>
        <title>Electrical Vehicle Wraps Chicago | Electrician Fleet Graphics</title>
        <meta name="description" content="Professional electrical vehicle wraps in Chicago. Custom electrician truck graphics, van wraps, and fleet branding that showcases your electrical expertise." />
        <meta name="keywords" content="electrical vehicle wraps chicago, electrician truck graphics, electrical van wraps, electrician fleet branding, chicago electrical advertising" />
        <link rel="canonical" href="https://www.wrappingchicago.com/electrical-wraps" />
      </Helmet>

      <Header />
      
      <TradeHero 
        tradeName="Electrical"
        tradeIcon={Zap}
        description="Power up your electrical business with professional vehicle graphics that showcase your expertise across Chicago."
        benefits={["Licensed Electrician", "Emergency Service", "Safety Certified", "Commercial & Residential"]}
        startingPrice="$1,600"
      />

      {/* Why Electricians Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Electricians Trust Chicago Fleet Wraps</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the electrical industry's safety focus and create designs that build trust and credibility
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Shield className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Safety-First Messaging</h3>
              <p className="text-gray-600">Designs that emphasize safety, licensing, and professional expertise to build customer confidence.</p>
            </div>
            
            <div className="text-center p-6">
              <Settings className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Service Specialization</h3>
              <p className="text-gray-600">Highlight your electrical specialties - residential, commercial, industrial, or emergency services.</p>
            </div>
            
            <div className="text-center p-6">
              <Clock className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">24/7 Emergency Focus</h3>
              <p className="text-gray-600">Designs that emphasize emergency electrical services and rapid response capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Electricians */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Electrical Vehicle Wrap Services</h2>
            <p className="text-xl text-gray-600">Complete branding solutions for your electrical fleet</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-600">Service Van Wraps</h3>
              <p className="text-gray-600 mb-4">Professional van wraps that showcase your electrical services and safety credentials prominently.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• License number display</li>
                <li>• Safety certification badges</li>
                <li>• Emergency service messaging</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-600">Electrical Truck Graphics</h3>
              <p className="text-gray-600 mb-4">Heavy-duty truck wraps for electrical contractors with equipment storage and professional imaging.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Equipment showcasing</li>
                <li>• Professional photography</li>
                <li>• Service area coverage</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-600">Commercial Fleet Branding</h3>
              <p className="text-gray-600 mb-4">Consistent branding across your entire electrical fleet for maximum brand recognition and trust.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multi-vehicle packages</li>
                <li>• Brand consistency</li>
                <li>• Volume pricing discounts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Electrical Specialties */}
      <section className="py-16 bg-yellow-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Showcase Your Electrical Expertise</h2>
            <p className="text-xl mb-8 text-yellow-100">
              Highlight your specialized electrical services to attract the right customers
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">Residential</h4>
                <p className="text-sm text-yellow-200">Home wiring, panels, outlets, lighting</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">Commercial</h4>
                <p className="text-sm text-yellow-200">Office buildings, retail, restaurants</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">Industrial</h4>
                <p className="text-sm text-yellow-200">Factories, warehouses, heavy machinery</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">Emergency</h4>
                <p className="text-sm text-yellow-200">24/7 repairs, power outages, safety</p>
              </div>
            </div>
            
            <Link to="/contact" className="bg-white text-yellow-900 hover:bg-yellow-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Start Showcasing Your Expertise
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Electrify Your Marketing?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join Chicago's top electrical contractors who trust us with their vehicle branding. Get your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Free Quote Today
            </Link>
            <Link to="/gallery" className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default ElectricalWrapsPage;