
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalHero from '@/components/heroes/LegalHero';
import { Package, Clock, AlertTriangle, CreditCard, Truck } from 'lucide-react';

const ReturnPolicyPage = () => {
  const domain = "https://www.wrappingchicago.com";
  
  const returnPolicySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${domain}/return-policy#webpage`,
    "url": `${domain}/return-policy`,
    "name": "Return Policy - Vehicle Wraps Chicago",
    "description": "Clear return policy for vehicle wrap materials and services. 3-day return window with specific conditions for unused materials.",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${domain}/#website`,
      "name": "Wrapping Chicago"
    },
    "about": {
      "@type": "Thing",
      "name": "Return Policy",
      "description": "Vehicle wrap material return policy with 3-day return window"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Wrapping Chicago",
      "@id": `${domain}/#organization`
    }
  };

  const merchantReturnPolicySchema = {
    "@context": "https://schema.org",
    "@type": "MerchantReturnPolicy",
    "applicableCountry": "US",
    "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
    "merchantReturnDays": 3,
    "returnMethod": ["https://schema.org/ReturnByMail", "https://schema.org/ReturnInStore"],
    "returnFees": "https://schema.org/FreeReturn",
    "refundType": "https://schema.org/FullRefund",
    "itemCondition": "https://schema.org/NewCondition",
    "returnPolicySeasonalOverride": false,
    "customerRemorseReturnLabelSource": "https://schema.org/ReturnLabelCustomerResponsibility",
    "customerRemorseReturnShippingFeesAmount": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    }
  };

  return (
    <>
      <Helmet>
        <title>Return Policy | Vehicle Wraps Chicago - Clear Terms & Conditions</title>
        <meta name="description" content="Clear return policy for vehicle wrap materials from Wrapping Chicago. 3-day return window with specific conditions. Fair terms for both customers and business." />
        <meta name="keywords" content="return policy, vehicle wrap returns, material returns, Chicago, refund policy, terms and conditions" />
        <link rel="canonical" href={`${domain}/return-policy`} />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Return Policy | Vehicle Wraps Chicago" />
        <meta property="og:description" content="Clear return policy for vehicle wrap materials. 3-day return window with fair terms." />
        <meta property="og:url" content={`${domain}/return-policy`} />
        <meta property="og:type" content="website" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(returnPolicySchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(merchantReturnPolicySchema)}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-white">
        <LegalHero 
          title="Return Policy"
          subtitle="Clear and fair return terms for vehicle wrap materials. 3-day return window with transparent conditions."
          icon={Package}
        />

        {/* Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Important Notice */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-lg font-semibold text-red-800 mb-2">Important Notice</h2>
                    <p className="text-red-700">
                      Vehicle wrap materials are custom-ordered and non-returnable after 3 days. 
                      Once you purchase materials, you own them. Please review your order carefully before purchase.
                    </p>
                  </div>
                </div>
              </div>

              {/* Return Timeframe */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
                <div className="flex items-start mb-4">
                  <Clock className="w-8 h-8 text-brand-red mr-4 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Return Timeframe</h2>
                    <p className="text-gray-700 text-lg mb-4">
                      You have <strong>3 days</strong> from the date of purchase to return vehicle wrap materials.
                    </p>
                    <p className="text-gray-600">
                      After 3 days, all sales are final. This policy exists because vehicle wrap materials 
                      are often custom-ordered and cannot be resold once opened or cut.
                    </p>
                  </div>
                </div>
              </div>

              {/* Return Conditions */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Return Conditions</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Materials Must Be:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Completely unused and unopened
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        In original packaging
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Undamaged and unmarked
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        With original purchase receipt
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Non-Returnable Items:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        Custom-cut materials
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        Opened vinyl rolls
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        Installation services
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        Materials over 3 days old
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Refund Process */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
                <div className="flex items-start mb-4">
                  <CreditCard className="w-8 h-8 text-brand-red mr-4 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Process</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Processing Time:</h3>
                        <p className="text-gray-700">Refunds are processed within 5-7 business days after we receive the returned materials.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Refund Method:</h3>
                        <p className="text-gray-700">Refunds will be issued to the original payment method used for purchase.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Fees:</h3>
                        <p className="text-gray-700">No restocking fees apply for returns that meet our conditions and are returned within 3 days.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to Return */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
                <div className="flex items-start mb-4">
                  <Truck className="w-8 h-8 text-brand-red mr-4 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Initiate a Return</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Step 1: Contact Us</h3>
                        <p className="text-gray-700 mb-2">Contact us within 3 days of purchase:</p>
                        <ul className="text-gray-600 ml-4">
                          <li>• Phone: <a href="tel:3125971286" className="text-brand-red hover:underline">(312) 597-1286</a></li>
                          <li>• Email: <a href="mailto:roy@chicagofleetwraps.com" className="text-brand-red hover:underline">roy@chicagofleetwraps.com</a></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Step 2: Return Authorization</h3>
                        <p className="text-gray-700">We'll provide you with a return authorization number and return instructions.</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Step 3: Ship Materials</h3>
                        <p className="text-gray-700">Package materials securely and ship to our facility. Customer is responsible for return shipping costs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Returns?</h2>
                <p className="text-gray-700 mb-6">
                  Our team is here to help clarify our return policy and assist with any questions.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <a 
                    href="tel:3125971286" 
                    className="bg-brand-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Call (312) 597-1286
                  </a>
                  <a 
                    href="mailto:roy@chicagofleetwraps.com" 
                    className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ReturnPolicyPage;
