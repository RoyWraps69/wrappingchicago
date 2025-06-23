
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, Users, Database, Globe } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const domain = "https://www.wrappingchicago.com";
  
  const privacyPolicySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${domain}/privacy-policy#webpage`,
    "url": `${domain}/privacy-policy`,
    "name": "Privacy Policy - Wrapping Chicago",
    "description": "Privacy policy for Wrapping Chicago vehicle wrap services. Learn how we collect, use, and protect your personal information.",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${domain}/#website`,
      "name": "Wrapping Chicago"
    },
    "about": {
      "@type": "Thing",
      "name": "Privacy Policy",
      "description": "Data protection and privacy practices for vehicle wrap services"
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
        <title>Privacy Policy | Wrapping Chicago - Data Protection & Privacy</title>
        <meta name="description" content="Privacy policy for Wrapping Chicago vehicle wrap services. Learn how we collect, use, and protect your personal information in compliance with privacy laws." />
        <meta name="keywords" content="privacy policy, data protection, personal information, Wrapping Chicago, vehicle wraps, privacy practices" />
        <link rel="canonical" href={`${domain}/privacy-policy`} />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy | Wrapping Chicago" />
        <meta property="og:description" content="Learn how we collect, use, and protect your personal information." />
        <meta property="og:url" content={`${domain}/privacy-policy`} />
        <meta property="og:type" content="website" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(privacyPolicySchema)}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="w-16 h-16 mx-auto mb-6 text-brand-red" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Your privacy is important to us. Learn how we protect your personal information.
              </p>
              <p className="text-sm text-gray-400 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Wrapping Chicago ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                  or use our vehicle wrap services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By accessing our website or using our services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
                <div className="flex items-start mb-4">
                  <Database className="w-8 h-8 text-brand-red mr-4 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                    <p className="text-gray-700 mb-4">We may collect the following personal information:</p>
                    <ul className="space-y-2 text-gray-700 mb-6">
                      <li>• Name and contact information (email, phone, address)</li>
                      <li>• Business information (company name, industry)</li>
                      <li>• Vehicle information (make, model, year)</li>
                      <li>• Project details and preferences</li>
                      <li>• Payment information (processed securely through third parties)</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• IP address and browser information</li>
                      <li>• Website usage data and analytics</li>
                      <li>• Cookies and tracking technologies</li>
                      <li>• Device and operating system information</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
                <div className="flex items-start mb-4">
                  <Eye className="w-8 h-8 text-brand-red mr-4 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                    <p className="text-gray-700 mb-4">We use collected information for the following purposes:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Providing vehicle wrap services and customer support</li>
                      <li>• Processing orders and managing projects</li>
                      <li>• Communicating about services, updates, and promotions</li>
                      <li>• Improving our website and services</li>
                      <li>• Complying with legal obligations</li>
                      <li>• Protecting against fraud and security threats</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
                <div className="flex items-start mb-4">
                  <Users className="w-8 h-8 text-brand-red mr-4 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                    <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information. We may share information in these situations:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• With trusted service providers who assist our operations</li>
                      <li>• When required by law or legal process</li>
                      <li>• To protect our rights, property, or safety</li>
                      <li>• In connection with a business transfer or merger</li>
                      <li>• With your explicit consent</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
                <div className="flex items-start mb-4">
                  <Lock className="w-8 h-8 text-brand-red mr-4 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                    <p className="text-gray-700 mb-4">
                      We implement appropriate security measures to protect your personal information against unauthorized access, 
                      alteration, disclosure, or destruction. These measures include:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• SSL encryption for data transmission</li>
                      <li>• Secure servers and data storage</li>
                      <li>• Regular security assessments</li>
                      <li>• Limited access to personal information</li>
                      <li>• Employee training on data protection</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cookies and Tracking */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar technologies to enhance your experience, analyze website traffic, and personalize content.
                </p>
                <p className="text-gray-700">
                  You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.
                </p>
              </div>

              {/* Your Rights */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Access your personal information</li>
                  <li>• Correct inaccurate information</li>
                  <li>• Request deletion of your information</li>
                  <li>• Opt-out of marketing communications</li>
                  <li>• Restrict processing of your information</li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About This Policy?</h2>
                <p className="text-gray-700 mb-6">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicyPage;
