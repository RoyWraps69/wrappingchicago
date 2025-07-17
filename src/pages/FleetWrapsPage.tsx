
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Google2025SEOOptimizer from '@/components/seo/Google2025SEOOptimizer';
import AEOOptimizer from '@/components/seo/AEOOptimizer';
import LocalSEOBooster from '@/components/seo/LocalSEOBooster';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';
import Schema from '@/components/Schema';
import { cities } from '@/data/cities';

const FleetWrapsPage = () => {
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  const domain = "https://www.wrappingchicago.com";

  const fleetKeywords = [
    'Chicago fleet wraps', 'contractor fleet graphics', 'multi vehicle wraps',
    'business fleet branding', 'company truck wraps', 'commercial fleet advertising'
  ];

  const fleetFAQs = [
    {
      question: "How much do fleet wraps cost for multiple trucks?",
      answer: "Fleet wraps in Chicago start at $2,800 per vehicle with volume discounts for 3+ vehicles. Most contractors save 15-20% on fleet projects versus individual wraps."
    },
    {
      question: "How long does it take to wrap a whole fleet?",
      answer: "We can typically wrap 2-3 vehicles per day. For a 5-truck fleet, expect 3-4 business days total with minimal downtime for each vehicle."
    }
  ];

  return (
    <>
      <Google2025SEOOptimizer
        pageTitle="Chicago Fleet Wraps for Contractors | Wrap Your Whole Team"
        pageDescription="Got multiple trucks? We wrap contractor fleets fast with volume pricing. Same look across all your vehicles shows customers you're professional and organized."
        businessType="contractor"
        serviceArea={['Chicago', 'Evanston', 'Naperville', 'Schaumburg']}
        primaryKeywords={fleetKeywords}
        faqData={fleetFAQs}
      />
      
      <AEOOptimizer
        businessType="contractor"
        location="Chicago"
        serviceKeywords={fleetKeywords}
      />
      
      <LocalSEOBooster
        cityName="Chicago"
        businessType="contractor"
        serviceRadius={40}
      />

      <Helmet>
        <title>Chicago Fleet Wraps for Contractors | Wrap Your Whole Team</title>
        <meta 
          name="description" 
          content="Got multiple trucks? We wrap contractor fleets fast with volume pricing. Same look across all your vehicles shows customers you're professional and organized." 
        />
        <meta name="keywords" content="Chicago fleet wraps, contractor fleet graphics, multi vehicle wraps, business fleet branding, company truck wraps" />
        <link rel="canonical" href={`${domain}/fleet-wraps`} />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            
            <div className="mb-8 p-5 bg-gray-50 rounded-lg border border-gray-200 flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-brand-navy mb-2">Ready to wrap your whole fleet?</h2>
                <p className="text-gray-700 mb-4 sm:mb-0">Call us for volume pricing - the more trucks, the better the deal</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
                  <Link to="/contact" className="inline-flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Request a Quote
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                  <a href="tel:3125971286" className="inline-flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    (312) 597-1286
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Wrap Your Whole Fleet, Look Like the Pros</h1>
              <p className="text-lg text-gray-700 mb-2">When all your trucks match, customers know you're organized and professional</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Consistent Branding</h3>
                <p className="text-gray-600 mb-4">Uniform graphics across your entire fleet</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Volume Pricing</h3>
                <p className="text-gray-600 mb-4">Competitive rates for multiple vehicle projects</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Quick Installation</h3>
                <p className="text-gray-600 mb-4">Minimize downtime with efficient scheduling</p>
              </div>
            </div>
          </div>
          
          <CallToAction city="Chicago" />
        </main>
      </div>
    </>
  );
};

export default FleetWrapsPage;
