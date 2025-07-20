
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShippingHero from '@/components/heroes/ShippingHero';
import { Truck, Package, Clock, DollarSign, MapPin } from 'lucide-react';

const ShippingPage = () => {
  const domain = "https://www.wrappingchicago.com";
  
  const shippingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${domain}/shipping#webpage`,
    "url": `${domain}/shipping`,
    "name": "Shipping Information - Vehicle Wraps USA",
    "description": "Vehicle wrap material shipping across the United States. Flat rate $250 per box with ground and overnight options available.",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${domain}/#website`,
      "name": "Wrapping Chicago"
    },
    "about": {
      "@type": "Thing",
      "name": "Shipping Policy",
      "description": "Vehicle wrap material shipping policy for United States delivery"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Wrapping Chicago",
      "@id": `${domain}/#organization`
    }
  };

  const deliveryServiceSchema = {
    "@context": "https://schema.org",
    "@type": "DeliveryService",
    "serviceType": "Vehicle Wrap Material Shipping",
    "provider": {
      "@type": "Organization",
      "name": "Wrapping Chicago",
      "@id": `${domain}/#organization`
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States",
      "sameAs": "https://en.wikipedia.org/wiki/United_States"
    },
    "availableDeliveryMethod": [
      {
        "@type": "DeliveryMethod",
        "name": "Ground Shipping",
        "description": "Standard ground shipping for vehicle wrap materials"
      },
      {
        "@type": "DeliveryMethod", 
        "name": "Overnight Shipping",
        "description": "Express overnight shipping for urgent orders"
      }
    ],
    "shippingRate": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "250.00"
    },
    "deliveryLeadTime": {
      "@type": "QuantitativeValue",
      "minValue": 1,
      "maxValue": 7,
      "unitCode": "DAY"
    }
  };

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "Vehicle Wrap Material Shipping",
    "description": "Flat rate shipping for vehicle wrap materials across the United States",
    "price": "250.00",
    "priceCurrency": "USD",
    "eligibleRegion": {
      "@type": "Country",
      "name": "United States"
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "250.00"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "US"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Shipping Information | Vehicle Wrap Materials USA - Flat Rate $250</title>
        <meta name="description" content="Vehicle wrap material shipping across the United States. Flat rate $250 per box with ground and overnight shipping options. Fast, reliable delivery nationwide." />
        <meta name="keywords" content="vehicle wrap shipping, material shipping USA, flat rate shipping, ground shipping, overnight shipping, vehicle wrap delivery" />
        <link rel="canonical" href={`${domain}/shipping`} />
        <meta name="robots" content="index, follow" />
        
        {/* Geo targeting */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Shipping Information | Vehicle Wrap Materials USA" />
        <meta property="og:description" content="Flat rate $250 shipping for vehicle wrap materials across the United States with ground and overnight options." />
        <meta property="og:url" content={`${domain}/shipping`} />
        <meta property="og:type" content="website" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(shippingSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(deliveryServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(offerSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-white">
        <ShippingHero />

        {/* Service Area */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <MapPin className="w-12 h-12 mx-auto mb-6 text-brand-red" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">We Ship Nationwide</h2>
              <p className="text-xl text-gray-700 mb-8">
                Wrapping Chicago proudly ships vehicle wrap materials to all 50 states within the 
                <strong> United States of America</strong>. We do not currently ship internationally.
              </p>
              <div className="bg-white rounded-lg p-8 shadow-lg inline-block">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">🇺🇸 USA ONLY</h3>
                <p className="text-gray-700">
                  All orders ship within the continental United States, Alaska, and Hawaii
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Rates */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <DollarSign className="w-12 h-12 mx-auto mb-6 text-brand-red" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Flat-Rate Pricing</h2>
                <p className="text-xl text-gray-700">
                  No surprises, no complicated calculations - just one fair price
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-8 text-center mb-8">
                <Package className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-4">$250 Flat Rate</h3>
                <p className="text-xl mb-2">Per Box • Anywhere in the USA</p>
                <p className="text-green-100">
                  Vehicle wrap materials are heavy and require special handling - 
                  our flat rate covers all packaging and base shipping costs
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Ground Shipping */}
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                  <div className="flex items-center mb-4">
                    <Truck className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Ground Shipping</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Standard delivery method included in the $250 flat rate.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      5-7 business days delivery
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Tracking included
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Signature required
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      No additional cost
                    </li>
                  </ul>
                </div>

                {/* Overnight Shipping */}
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                  <div className="flex items-center mb-4">
                    <Clock className="w-8 h-8 text-red-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Overnight Shipping</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Express delivery for urgent projects.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Next business day delivery
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Real-time tracking
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Signature required
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Additional cost applies*
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-red-50 rounded-lg">
                    <p className="text-red-800 font-semibold">
                      *Customer pays the difference between ground and overnight shipping rates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Important Shipping Information</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Material Weight & Handling</h3>
                  <p className="text-gray-700 mb-4">
                    Vehicle wrap materials are heavy and require special packaging to prevent damage during transit.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Professional packaging included</li>
                    <li>• Climate-controlled shipping when possible</li>
                    <li>• Damage protection during transit</li>
                    <li>• Specialized handling for vinyl rolls</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery Requirements</h3>
                  <p className="text-gray-700 mb-4">
                    To ensure safe delivery of your materials:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Adult signature required (21+)</li>
                    <li>• Business address preferred</li>
                    <li>• Someone must be available to receive</li>
                    <li>• Inspect package upon delivery</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Order Processing</h3>
                  <p className="text-gray-700 mb-4">
                    Orders are processed quickly for fast delivery:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Same-day processing for orders before 2 PM CST</li>
                    <li>• Order confirmation sent within 1 hour</li>
                    <li>• Tracking information provided</li>
                    <li>• Custom orders may require additional time</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Geographic Coverage</h3>
                  <p className="text-gray-700 mb-4">
                    We ship to all locations within the United States:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• All 50 states</li>
                    <li>• Washington D.C.</li>
                    <li>• Alaska and Hawaii (same flat rate)</li>
                    <li>• No international shipping available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Shipping Questions?</h2>
              <p className="text-xl text-gray-700 mb-8">
                Need help with shipping options or have questions about delivery? 
                Our team is ready to assist you.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-8">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                    <a 
                      href="tel:3125971286" 
                      className="text-xl text-brand-red hover:underline"
                    >
                      (312) 597-1286
                    </a>
                  </div>
                  
                  <div className="hidden md:block w-px h-12 bg-gray-300"></div>
                  
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                    <a 
                      href="mailto:roy@chicagofleetwraps.com" 
                      className="text-xl text-brand-red hover:underline"
                    >
                      roy@chicagofleetwraps.com
                    </a>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-600">
                    <strong>Business Hours:</strong> Monday - Friday: 9:00 AM - 5:00 PM CST<br />
                    <strong>Address:</strong> 4711 N. Lamon Ave, Chicago, IL 60630
                  </p>
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

export default ShippingPage;
