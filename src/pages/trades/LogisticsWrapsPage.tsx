import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TradeHero from '@/components/heroes/TradeHero';
import { Package, Globe, Clock, BarChart } from 'lucide-react';

const LogisticsWrapsPage = () => {
  return (
    <>
      <Helmet>
        <title>Logistics Vehicle Wraps Chicago | Fleet & Supply Chain Graphics</title>
        <meta name="description" content="Professional logistics vehicle wraps in Chicago. Custom fleet graphics for supply chain, freight, and logistics companies that build brand recognition." />
        <meta name="keywords" content="logistics vehicle wraps chicago, supply chain fleet graphics, freight truck wraps, logistics branding, chicago logistics advertising" />
        <link rel="canonical" href="https://www.wrappingchicago.com/logistics-wraps" />
      </Helmet>

      <Header />
      
      <TradeHero 
        tradeName="Logistics"
        tradeIcon={Package}
        description="Streamline your brand visibility with professional logistics vehicle graphics across Chicago's supply chain network."
        benefits={["Supply Chain", "Fleet Management", "Tracking Systems", "Professional Service"]}
        startingPrice="$2,200"
      />

      {/* Why Logistics Companies Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Logistics Companies Choose Chicago Fleet Wraps</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the logistics industry's need for professional, consistent branding across extensive vehicle fleets
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">National Coverage</h3>
              <p className="text-gray-600">Designs that work across multiple markets and regions, maintaining brand consistency nationwide.</p>
            </div>
            
            <div className="text-center p-6">
              <BarChart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fleet Efficiency</h3>
              <p className="text-gray-600">Streamlined installation processes and fleet management to minimize downtime and maximize efficiency.</p>
            </div>
            
            <div className="text-center p-6">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Scalable Solutions</h3>
              <p className="text-gray-600">From single vehicles to massive fleets, we scale our services to meet your logistics needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Logistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Logistics Vehicle Wrap Services</h2>
            <p className="text-xl text-gray-600">Complete branding solutions for your logistics fleet</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Freight Truck Wraps</h3>
              <p className="text-gray-600 mb-4">Large-scale truck wraps for freight and long-haul logistics vehicles with maximum brand visibility.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Interstate visibility design</li>
                <li>• DOT compliance integration</li>
                <li>• Weather-resistant materials</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Delivery Van Graphics</h3>
              <p className="text-gray-600 mb-4">Professional van wraps for last-mile delivery and urban logistics operations.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Urban visibility optimization</li>
                <li>• Service area messaging</li>
                <li>• Contact information prominence</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Fleet Management Branding</h3>
              <p className="text-gray-600 mb-4">Comprehensive fleet branding with consistent messaging across all vehicle types and sizes.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multi-vehicle consistency</li>
                <li>• Brand guideline development</li>
                <li>• Volume pricing available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Specialties */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Logistics & Supply Chain Solutions</h2>
            <p className="text-xl mb-8 text-blue-100">
              Showcase your logistics capabilities and service areas to attract business partners and customers
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">Freight</h4>
                <p className="text-sm text-blue-200">Long-haul trucking & shipping</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">Distribution</h4>
                <p className="text-sm text-blue-200">Warehouse & distribution centers</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">Last Mile</h4>
                <p className="text-sm text-blue-200">Final delivery services</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">Supply Chain</h4>
                <p className="text-sm text-blue-200">End-to-end logistics solutions</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">100,000+</div>
                <div className="text-lg">Miles of Visibility</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">24/7</div>
                <div className="text-lg">Brand Exposure</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">ROI</div>
                <div className="text-lg">Proven Returns</div>
              </div>
            </div>
            
            <Link to="/contact" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Optimize Your Fleet Branding
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Streamline Your Fleet Branding?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join Chicago's leading logistics companies who trust us with their fleet branding. Get your free quote today.
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
      
      <Footer />
    </>
  );
};

export default LogisticsWrapsPage;