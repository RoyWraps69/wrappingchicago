import React from 'react';
import { Helmet } from 'react-helmet-async';
import Google2025SEOOptimizer from '@/components/seo/Google2025SEOOptimizer';
import AEOOptimizer from '@/components/seo/AEOOptimizer';
import LocalSEOBooster from '@/components/seo/LocalSEOBooster';
import { cities } from '@/data/cities';

interface TradeLocationPageProps {
  citySlug: string;
  businessType?: 'plumber' | 'electrician' | 'hvac' | 'contractor' | 'general';
}

/**
 * Enhanced Trade-Focused Location Page
 * Optimized for Google 2025 algorithms with local SEO and trade targeting
 */
const TradeLocationPage: React.FC<TradeLocationPageProps> = ({
  citySlug,
  businessType = 'general'
}) => {
  const city = cities.find(c => c.slug === citySlug) || cities[0];
  const domain = "https://www.wrappingchicago.com";
  
  // Trade-specific content generation
  const generateTradeContent = () => {
    const tradeServices = {
      plumber: 'plumbing trucks and vans',
      electrician: 'electrical service vehicles and vans', 
      hvac: 'heating and cooling trucks',
      contractor: 'construction and contractor vehicles',
      general: 'work trucks and commercial vehicles'
    };

    const tradeKeywords = [
      `${businessType} vehicle wraps ${city.name}`,
      `${businessType} truck graphics ${city.name} Illinois`,
      `commercial vehicle wraps ${city.name}`,
      `${businessType} van wraps near ${city.name}`,
      `work truck advertising ${city.name}`
    ];

    const tradeFAQs = [
      {
        question: `How much do ${businessType} vehicle wraps cost in ${city.name}?`,
        answer: `${businessType.charAt(0).toUpperCase() + businessType.slice(1)} vehicle wraps in ${city.name} typically cost $2,500-$4,500 depending on vehicle size. Most ${businessType}s see increased calls within the first month of installation.`
      },
      {
        question: `Do you service ${businessType}s in ${city.name} and surrounding areas?`,
        answer: `Yes! We regularly work with ${businessType}s throughout ${city.name} and all surrounding communities. Same week installation available with free quotes.`
      }
    ];

    return {
      title: `${businessType.charAt(0).toUpperCase() + businessType.slice(1)} Vehicle Wraps ${city.name} IL | Get More Customers`,
      description: `${city.name} ${businessType}s trust us for vehicle wraps that actually work. Turn your work truck into a customer magnet. Professional installation, won't hurt your paint, real results.`,
      services: tradeServices[businessType],
      keywords: tradeKeywords,
      faqs: tradeFAQs
    };
  };

  const content = generateTradeContent();

  return (
    <>
      <Google2025SEOOptimizer
        pageTitle={content.title}
        pageDescription={content.description}
        businessType={businessType}
        serviceArea={[city.name, 'Chicago', 'Evanston', 'Naperville']}
        primaryKeywords={content.keywords}
        faqData={content.faqs}
      />
      
      <AEOOptimizer
        businessType={businessType}
        location={city.name}
        serviceKeywords={content.keywords}
      />
      
      <LocalSEOBooster
        cityName={city.name}
        businessType={businessType}
        serviceRadius={25}
      />

      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="canonical" href={`${domain}/vehicle-wraps-${city.slug}-il`} />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-red-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6">
              {city.name} {businessType.charAt(0).toUpperCase() + businessType.slice(1)}s: Your Truck is Your Best Billboard
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Turn your work truck into a customer magnet! {city.name} {businessType}s choose us for vehicle wraps that actually bring in more business. Same week service, won't hurt your paint.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="tel:3125971286"
                className="bg-brand-red hover:bg-red-700 text-white py-4 px-8 rounded-lg font-semibold text-lg inline-flex items-center justify-center transition-colors"
              >
                📞 Call Now: (312) 597-1286
              </a>
              <a 
                href="/contact"
                className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white py-4 px-8 rounded-lg font-semibold text-lg inline-flex items-center justify-center transition-colors"
              >
                Get Free Quote
              </a>
            </div>

            {/* Local Trust Signals */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-gray-600">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-brand-red rounded-full mr-2"></span>
                Serving {city.name} for 10+ Years
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-brand-red rounded-full mr-2"></span>
                200+ Local {businessType.charAt(0).toUpperCase() + businessType.slice(1)}s Served
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-brand-red rounded-full mr-2"></span>
                Same Week Installation
              </span>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-navy">
              Vehicle Wrap Services for {city.name} {businessType.charAt(0).toUpperCase() + businessType.slice(1)}s
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-navy">Work Truck Wraps</h3>
                <p className="text-gray-600">Complete wraps for {content.services} that handle daily job site use and weather.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-navy">Professional Lettering</h3>
                <p className="text-gray-600">Clean, professional truck lettering that shows customers you mean business.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-navy">Fleet Graphics</h3>
                <p className="text-gray-600">Consistent branding across multiple vehicles for larger {businessType} companies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Benefits */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-navy">
              Why {city.name} {businessType.charAt(0).toUpperCase() + businessType.slice(1)}s Choose Us
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-brand-navy">We Get Trade Businesses</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">✓</span>
                    <span>Your truck needs to look professional but handle real work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">✓</span>
                    <span>We use materials that won't peel or fade in {city.name} weather</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">✓</span>
                    <span>Fast turnaround because we know downtime costs you money</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-brand-navy">Real Results</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">✓</span>
                    <span>Most {businessType}s see 15-30% more calls within 2 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">✓</span>
                    <span>Your truck advertises 24/7 - even parked at home</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">✓</span>
                    <span>Professional look builds trust with {city.name} customers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section for AEO */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-navy">
              Common Questions from {city.name} {businessType.charAt(0).toUpperCase() + businessType.slice(1)}s
            </h2>
            
            <div className="space-y-8">
              {content.faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-3 text-brand-navy speakable">{faq.question}</h3>
                  <p className="text-gray-700 speakable">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-brand-navy text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Turn Your {city.name} Truck Into a Customer Magnet?
            </h2>
            <p className="text-xl mb-8">
              Call us today for a free quote. We'll show you exactly what your wrapped truck will look like.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:3125971286"
                className="bg-brand-red hover:bg-red-700 text-white py-4 px-8 rounded-lg font-semibold text-lg inline-flex items-center justify-center transition-colors"
              >
                📞 Call Now: (312) 597-1286
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-navy py-4 px-8 rounded-lg font-semibold text-lg inline-flex items-center justify-center transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TradeLocationPage;