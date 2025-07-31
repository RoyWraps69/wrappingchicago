import React from 'react';
import PageSEO from '@/components/seo/PageSEO';
import Google2025SEOOptimizer from '@/components/seo/Google2025SEOOptimizer';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TradeHero from '@/components/heroes/TradeHero';
import { Wrench, Droplets, Shield, Clock } from 'lucide-react';

const PlumbingWrapsPage = () => {
  return (
    <>
      <PageSEO 
        title="Plumbing Vehicle Wraps Chicago | Professional Plumber Van & Truck Graphics"
        description="Professional plumbing vehicle wraps in Chicago. Custom van & truck graphics for plumbers. Increase brand visibility, showcase services, and build trust with quality wraps."
        keywords={["plumbing vehicle wraps chicago", "plumber van wraps", "plumbing truck graphics", "service vehicle wraps", "professional plumbing advertising", "chicago plumber branding"]}
        canonicalUrl="https://www.wrappingchicago.com/trades/plumbing-wraps"
        h1="Professional Plumbing Vehicle Wraps in Chicago"
        h2={["Custom Plumber Van & Truck Graphics", "Professional Service Vehicle Branding", "Increase Your Plumbing Business Visibility"]}
        h3={["Emergency Plumbing Services Advertising", "Residential & Commercial Plumbing Graphics", "Licensed Plumber Vehicle Identification"]}
        pageType="service"
        serviceSchema={true}
      />
      
      <Google2025SEOOptimizer 
        pageTitle="Plumbing Vehicle Wraps Chicago | Professional Plumber Van & Truck Graphics"
        pageDescription="Professional plumbing vehicle wraps in Chicago. Custom van & truck graphics for plumbers. Increase brand visibility, showcase services, and build trust with quality wraps."
        businessType="plumber"
        primaryKeywords={[
          "emergency plumbing services",
          "residential plumbing contractor", 
          "commercial plumbing company",
          "licensed plumber chicago",
          "drain cleaning services",
          "water heater installation",
          "pipe repair specialists",
          "bathroom renovation plumbing",
          "kitchen plumbing services",
          "sewer line specialists"
        ]}
      />
      
      <Header />
        
      {/* Hero Section */}
      <TradeHero 
        tradeName="Plumbing"
        tradeIcon={Wrench}
        description="Transform your plumbing vehicles into powerful mobile billboards. Custom van and truck graphics that showcase your expertise and build customer trust."
        benefits={["Emergency Service", "Licensed & Insured", "Professional Image", "24/7 Availability"]}
        startingPrice="$1,500"
      />

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
      
      <Footer />
    </>
  );
};

export default PlumbingWrapsPage;