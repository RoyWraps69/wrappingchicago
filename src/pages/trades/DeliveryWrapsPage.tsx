import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TradeHero from '@/components/heroes/TradeHero';
import { MapPin, Clock, Smartphone, Star } from 'lucide-react';

const DeliveryWrapsPage = () => {
  return (
    <>
      <Helmet>
        <title>Delivery Vehicle Wraps Chicago | Food & Package Delivery Graphics</title>
        <meta name="description" content="Professional delivery vehicle wraps in Chicago. Custom graphics for food delivery, package delivery, and courier services that drive customer recognition." />
        <meta name="keywords" content="delivery vehicle wraps chicago, food delivery van wraps, package delivery graphics, courier vehicle branding, chicago delivery advertising" />
        <link rel="canonical" href="https://www.wrappingchicago.com/delivery-wraps" />
      </Helmet>

      <Header />
      
      <TradeHero 
        tradeName="Delivery"
        tradeIcon={MapPin}
        description="Deliver your brand everywhere with professional vehicle graphics that build recognition and trust across Chicago."
        benefits={["Fast Delivery", "GPS Tracking", "Professional Service", "Brand Recognition"]}
        startingPrice="$1,400"
      />

      {/* Why Delivery Companies Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Delivery Companies Choose Chicago Fleet Wraps</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the delivery industry's fast-paced environment and create eye-catching designs that build customer recognition
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Speed & Efficiency</h3>
              <p className="text-gray-600">Fast installation processes that get your delivery vehicles back on the road quickly.</p>
            </div>
            
            <div className="text-center p-6">
              <Smartphone className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Modern Designs</h3>
              <p className="text-gray-600">Contemporary graphics that appeal to today's app-based delivery customers and digital audiences.</p>
            </div>
            
            <div className="text-center p-6">
              <Star className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Brand Recognition</h3>
              <p className="text-gray-600">Memorable designs that help customers easily identify your delivery vehicles in busy urban areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Delivery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Delivery Vehicle Wrap Services</h2>
            <p className="text-xl text-gray-600">Complete branding solutions for your delivery fleet</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-red-600">Food Delivery Wraps</h3>
              <p className="text-gray-600 mb-4">Eye-catching wraps for food delivery vehicles that highlight your cuisine and build appetite appeal.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Food photography integration</li>
                <li>• App store QR codes</li>
                <li>• Delivery area mapping</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-red-600">Package Delivery Graphics</h3>
              <p className="text-gray-600 mb-4">Professional van and truck wraps for package delivery services with trust-building messaging.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Security messaging</li>
                <li>• Tracking information</li>
                <li>• Professional imagery</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-red-600">Courier Fleet Branding</h3>
              <p className="text-gray-600 mb-4">Consistent branding across courier fleets for maximum recognition and professional appearance.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Same-day delivery focus</li>
                <li>• Rush service emphasis</li>
                <li>• Multi-vehicle packages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Types */}
      <section className="py-16 bg-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Delivery Services We Brand</h2>
            <p className="text-xl mb-8 text-red-100">
              From food delivery to e-commerce, we create graphics that match your delivery specialty
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">🍕 Food Delivery</h4>
                <p className="text-sm text-red-200">Restaurants, pizza, meal kits</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">📦 E-commerce</h4>
                <p className="text-sm text-red-200">Online retail delivery</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">🚀 Express Courier</h4>
                <p className="text-sm text-red-200">Same-day & rush delivery</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">🏥 Medical</h4>
                <p className="text-sm text-red-200">Pharmacy & medical supplies</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-300 mb-2">80,000+</div>
                <div className="text-lg">Daily Route Impressions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-300 mb-2">5x</div>
                <div className="text-lg">Brand Recognition Boost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-300 mb-2">24/7</div>
                <div className="text-lg">Mobile Marketing</div>
              </div>
            </div>
            
            <Link to="/contact" className="bg-white text-red-900 hover:bg-red-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Start Delivering Your Brand
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Deliver Maximum Brand Impact?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join Chicago's top delivery companies who trust us with their vehicle branding. Get your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Free Quote Today
            </Link>
            <Link to="/gallery" className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default DeliveryWrapsPage;