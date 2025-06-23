
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, Scale, AlertTriangle, CreditCard, Truck, Users } from 'lucide-react';

const TermsOfServicePage = () => {
  const domain = "https://www.wrappingchicago.com";
  
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${domain}/terms#webpage`,
    "url": `${domain}/terms`,
    "name": "Terms of Service - Wrapping Chicago",
    "description": "Terms of service for Wrapping Chicago vehicle wrap services. Legal terms and conditions for using our services.",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${domain}/#website`,
      "name": "Wrapping Chicago"
    },
    "about": {
      "@type": "Thing",
      "name": "Terms of Service",
      "description": "Legal terms and conditions for vehicle wrap services"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Wrapping Chicago",
      "@id": `${domain}/#organization`
    }
  };

  return (
    <>
      <Helmet>
        <title>Terms of Service | Wrapping Chicago - Legal Terms & Conditions</title>
        <meta name="description" content="Terms of service for Wrapping Chicago vehicle wrap services. Legal terms and conditions, warranties, and agreements for professional vehicle wrapping." />
        <meta name="keywords" content="terms of service, legal terms, vehicle wrap agreement, terms and conditions, Wrapping Chicago, warranty" />
        <link rel="canonical" href={`${domain}/terms`} />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Terms of Service | Wrapping Chicago" />
        <meta property="og:description" content="Legal terms and conditions for vehicle wrap services." />
        <meta property="og:url" content={`${domain}/terms`} />
        <meta property="og:type" content="website" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(termsSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Scale className="w-16 h-16 mx-auto mb-6 text-brand-red" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Legal terms and conditions for using our vehicle wrap services
              </p>
              <p className="text-sm text-gray-400 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Acceptance of Terms */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Acceptance of Terms</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  By accessing our website, using our services, or entering into an agreement with Wrapping Chicago, 
                  you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these terms, 
                  please do not use our services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These Terms constitute a legally binding agreement between you and Wrapping Chicago regarding your use of our services.
                </p>
              </div>

              {/* Services Description */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
                <div className="flex items-start mb-4">
                  <Truck className="w-8 h-8 text-brand-red mr-4 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <p className="text-gray-700 mb-4">Wrapping Chicago provides professional vehicle wrapping services including:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Complete vehicle wraps</li>
                      <li>• Partial vehicle wraps</li>
                      <li>• Fleet graphics and branding</li>
                      <li>• Color change wraps</li>
                      <li>• Custom design and graphics</li>
                      <li>• Vehicle wrap material sales</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Payment Terms */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
                <div className="flex items-start mb-4">
                  <CreditCard className="w-8 h-8 text-brand-red mr-4 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Payments</h3>
                    <ul className="space-y-2 text-gray-700 mb-6">
                      <li>• 50% deposit required to schedule service</li>
                      <li>• Final payment due upon completion</li>
                      <li>• Accepted payment methods: cash, check, credit card</li>
                      <li>• Additional costs for design changes after approval</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Material Sales</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Full payment required before shipping</li>
                      <li>• 3-day return policy (see Return Policy)</li>
                      <li>• Shipping charges apply ($250 flat rate per box)</li>
                      <li>• No refunds after 3 days - all sales final</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Warranties and Guarantees */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranties and Guarantees</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Installation Warranty</h3>
                <p className="text-gray-700 mb-4">
                  We warrant our installation workmanship for a period of one (1) year from completion, 
                  covering defects in application and adhesion under normal use conditions.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Material Warranty</h3>
                <p className="text-gray-700 mb-4">
                  Material warranties are provided by the manufacturer and vary by product. 
                  We will assist with warranty claims but are not responsible for manufacturer defects.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Warranty Exclusions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Damage from accidents or misuse</li>
                  <li>• Normal wear and tear</li>
                  <li>• Damage from improper vehicle maintenance</li>
                  <li>• Removal damage due to poor paint condition</li>
                </ul>
              </div>

              {/* Liability Limitations */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
                <div className="flex items-start mb-4">
                  <AlertTriangle className="w-8 h-8 text-brand-red mr-4 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Liability Limitations</h2>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Limitations</h3>
                    <ul className="space-y-2 text-gray-700 mb-6">
                      <li>• Our liability is limited to the cost of services provided</li>
                      <li>• We are not responsible for vehicle damage due to poor paint condition</li>
                      <li>• Customer must disclose any previous paint work or damage</li>
                      <li>• We reserve the right to refuse service on unsuitable vehicles</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Force Majeure</h3>
                    <p className="text-gray-700">
                      We are not liable for delays or failures due to circumstances beyond our reasonable control, 
                      including but not limited to natural disasters, supplier delays, or government restrictions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Customer Responsibilities */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
                <div className="flex items-start mb-4">
                  <Users className="w-8 h-8 text-brand-red mr-4 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Responsibilities</h2>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Provide accurate vehicle information and condition disclosure</li>
                      <li>• Ensure vehicle is clean and ready for service</li>
                      <li>• Approve designs and materials before installation begins</li>
                      <li>• Make timely payments as agreed</li>
                      <li>• Follow care instructions for wrap maintenance</li>
                      <li>• Notify us immediately of any warranty issues</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Customer Content:</strong> You retain ownership of your logos, trademarks, and content. 
                    You grant us permission to use these materials for your project and portfolio purposes.
                  </p>
                  <p>
                    <strong>Our Content:</strong> Our designs, processes, and proprietary information remain our property. 
                    Custom designs created for you become your property upon full payment.
                  </p>
                  <p>
                    <strong>Third-Party Content:</strong> You are responsible for ensuring you have rights to use any 
                    third-party content, logos, or copyrighted materials in your design.
                  </p>
                </div>
              </div>

              {/* Cancellation Policy */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cancellations more than 48 hours before scheduled service: 50% deposit refund</li>
                  <li>• Cancellations within 48 hours: No refund of deposit</li>
                  <li>• Material orders cannot be cancelled once processing begins</li>
                  <li>• Custom designs and materials are non-refundable</li>
                </ul>
              </div>

              {/* Governing Law */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-700">
                  These Terms are governed by the laws of the State of Illinois, United States. 
                  Any disputes will be resolved in the courts of Cook County, Illinois.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to These Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to update these Terms at any time. Changes will be posted on this page 
                  with an updated "Last Modified" date. Continued use of our services constitutes acceptance of revised terms.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
                <p className="text-gray-700 mb-6">
                  If you have questions about these Terms of Service, please contact us:
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
                <p className="text-gray-600 mt-4 text-sm">
                  4711 N. Lamon Ave, Chicago, IL 60630
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TermsOfServicePage;
