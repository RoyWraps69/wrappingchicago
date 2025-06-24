
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, CheckCircle2, Truck } from 'lucide-react';
import Schema from '@/components/Schema';
import { cities } from '@/data/cities';

const TruckWrapsPage = () => {
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  const domain = "https://www.wrappingchicago.com";
  
  const faqData = [
    {
      question: "How much does a truck wrap cost in Chicago?",
      answer: "Truck wrap costs in Chicago typically range from $3,500 to $7,000 for a full wrap, depending on truck size and design complexity. Partial wraps start around $2,000."
    },
    {
      question: "How long does it take to wrap a truck?",
      answer: "Most truck wraps can be completed in 4-6 days, including design, preparation, installation, and final quality checks. Large commercial trucks may take slightly longer."
    },
    {
      question: "Will a truck wrap damage my vehicle's paint?",
      answer: "No, professional truck wraps actually protect your paint. When properly installed and removed, wraps preserve the original paint underneath."
    },
    {
      question: "Can I wrap a leased truck?",
      answer: "Yes, truck wraps are perfect for leased vehicles since they're completely removable and don't permanently alter the vehicle."
    },
    {
      question: "What materials do you use for truck wraps?",
      answer: "We use only premium 3M and Avery Dennison vinyl materials designed specifically for vehicle wrapping, ensuring durability and longevity."
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Truck Wraps in Chicago IL | Commercial Vehicle Graphics | Wrapping Chicago</title>
        <meta 
          name="description" 
          content="Professional truck wraps in Chicago IL. Transform your commercial truck into a mobile billboard with custom graphics. Expert installation, premium materials, competitive pricing." 
        />
        <meta name="keywords" content="truck wraps Chicago, commercial truck wraps, truck graphics Chicago, truck advertising, commercial vehicle wraps, fleet graphics Chicago, truck lettering" />
        <link rel="canonical" href={`${domain}/truck-wraps`} />
        <meta property="og:title" content="Truck Wraps in Chicago IL | Commercial Vehicle Graphics | Wrapping Chicago" />
        <meta property="og:description" content="Professional truck wraps in Chicago IL. Transform your commercial truck into a mobile billboard with custom graphics. Expert installation, premium materials, competitive pricing." />
        <meta property="og:url" content={`${domain}/truck-wraps`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/5539b79e-ab54-428d-82a0-e4735ee97a95.png" />
      </Helmet>
      
      <Schema 
        city={chicagoCity}
        path="/truck-wraps"
        pageTitle="Truck Wraps in Chicago IL | Commercial Vehicle Graphics | Wrapping Chicago"
        pageDescription="Professional truck wraps in Chicago IL. Transform your commercial truck into a mobile billboard with custom graphics. Expert installation, premium materials, competitive pricing."
        faqs={faqData}
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            
            {/* Contact Buttons Section */}
            <div className="mb-8 p-5 bg-gray-50 rounded-lg border border-gray-200 flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-brand-navy mb-2">Ready to wrap your truck?</h2>
                <p className="text-gray-700 mb-4 sm:mb-0">Contact us today for a free consultation and quote</p>
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
            
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-brand-navy mb-6 flex items-center">
                <Truck className="mr-3 h-10 w-10 text-brand-red" />
                Professional Truck Wraps in Chicago
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Transform your commercial truck into a powerful mobile billboard with our premium truck wrap services. 
                Whether you have a box truck, pickup truck, semi-trailer, or delivery van, we'll help you maximize 
                your advertising impact while protecting your vehicle's original paint.
              </p>
            </div>
            
            {/* Truck Wrap Benefits */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Why Choose Truck Wraps?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-brand-navy">Maximum Advertising Impact</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Reach thousands of potential customers daily</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>24/7 mobile advertising wherever you drive</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Cost-effective compared to traditional advertising</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-brand-navy">Professional Appearance</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Establish credibility and professionalism</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Create consistent brand identity across your fleet</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Stand out from competitors</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-brand-navy">Paint Protection</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Shield paint from UV damage and weathering</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Protect against minor scratches and chips</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Maintain higher resale value</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-brand-navy">Flexibility & Value</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Change designs when your business evolves</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Removable without damaging original paint</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>One-time investment with years of advertising</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Truck Types We Wrap */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Types of Trucks We Wrap</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-3 text-brand-navy">Box Trucks</h3>
                  <p className="text-gray-600">Perfect for delivery services, moving companies, and retail businesses</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-3 text-brand-navy">Pickup Trucks</h3>
                  <p className="text-gray-600">Ideal for contractors, landscapers, and service professionals</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibent mb-3 text-brand-navy">Semi-Trailers</h3>
                  <p className="text-gray-600">Maximum impact for long-haul and regional transportation</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-3 text-brand-navy">Delivery Vans</h3>
                  <p className="text-gray-600">Transform cargo vans into mobile advertising machines</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-3 text-brand-navy">Food Trucks</h3>
                  <p className="text-gray-600">Eye-catching designs that draw customers to your mobile kitchen</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-3 text-brand-navy">Service Trucks</h3>
                  <p className="text-gray-600">HVAC, plumbing, electrical, and other service vehicle wraps</p>
                </div>
              </div>
            </section>
            
            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Truck Wrap FAQ</h2>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-3 text-brand-navy">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TruckWrapsPage;
