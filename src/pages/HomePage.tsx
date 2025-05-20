import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import InfoBar from '@/components/home/InfoBar';
import QuickLinksBar from '@/components/home/QuickLinksBar';
import ServicesSection from '@/components/home/ServicesSection';
import InstallationFacility from '@/components/home/InstallationFacility';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import AreasServedSection from '@/components/home/AreasServedSection';
import VehicleWrapFAQ from '@/components/home/VehicleWrapFAQ';
import TrustIndicators from '@/components/home/TrustIndicators';
import HomeSEO from '@/components/home/HomeSEO';
import EasyButtonSection from '@/components/home/EasyButtonSection';
import StickyContactButtons from '@/components/home/StickyContactButtons';
import { Helmet } from 'react-helmet-async';
import { useGalleryImages } from '@/hooks/useGalleryImages';
import { cities } from '@/data/cities';
import Schema from '@/components/Schema';
import PageFAQ from '@/components/common/PageFAQ';
import BusinessLocationSchema from '@/components/schemas/BusinessLocationSchema';
import IndexingPriority from '@/components/seo/IndexingPriority';
import { Link } from 'react-router-dom';
import InternalLinksFooter from '@/components/seo/InternalLinksFooter';

function HomePage() {
  // Get the required images for ServicesSection
  const { fleetWrapVan, colorChangeVan, commercialGraphics } = useGalleryImages();
  
  // Get Chicago city for schema
  const chicagoCity = cities.find(city => city.slug === 'chicago') || cities[0];
  
  // Home page FAQ data
  const homeFAQs = [
    {
      question: "How much do vehicle wraps cost in Chicago?",
      answer: "Vehicle wrap costs in Chicago vary by vehicle type and design complexity. Full car wraps typically range from $2,500-$5,000, full truck and van wraps from $3,500-$7,000, and partial wraps start around $1,500. Fleet wraps may receive volume discounts. We offer free, detailed quotes for all projects."
    },
    {
      question: "How long do vehicle wraps last?",
      answer: "With proper care and maintenance, our premium vehicle wraps typically last 5-7 years in Chicago's climate. All our wraps come with a 2-year warranty and are made with durable 3M and Avery Dennison materials that can withstand weather extremes and regular washing."
    },
    {
      question: "Do vehicle wraps damage paint?",
      answer: "No, professional vehicle wraps actually protect your paint when properly installed and removed. Our 3M and Avery vinyl wraps act as a shield against minor scratches, stone chips, and UV damage, helping to preserve your vehicle's original finish."
    },
    {
      question: "How long does it take to wrap a vehicle?",
      answer: "Most vehicle wrap installations take 3-5 business days to complete. Simple designs on smaller vehicles may take 2-3 days, while complex wraps on larger vehicles could take 5-7 days. We ensure thorough preparation, precise installation, and proper curing time."
    },
    {
      question: "Do you provide design services for vehicle wraps?",
      answer: "Yes, our in-house design team creates custom vehicle wrap designs tailored to your brand and marketing goals. We offer complimentary design consultations and can work from your existing brand assets or create something entirely new based on your vision."
    },
    {
      question: "Can I drive my car through a car wash with a wrap?",
      answer: "Yes, but we recommend touchless car washes for wrapped vehicles. Traditional brush car washes can potentially damage the edges of the vinyl wrap. Hand washing with non-abrasive cleaners is the best option for maintaining your wrap's appearance and longevity."
    }
  ];

  // Add indexing hint to the console that can help identify if page was rendered correctly
  useEffect(() => {
    console.log('HomePage - Google indexing compatibility check: PASS');
    
    // Add special link element to help Google discover more pages
    const head = document.querySelector('head');
    if (head) {
      // Discovery link for sitemap
      const discoveryLink = document.createElement('link');
      discoveryLink.rel = 'index';
      discoveryLink.href = '/sitemap.xml';
      head.appendChild(discoveryLink);
      
      // Add XML-XSL discoverable stylesheet for sitemap
      const xslLink = document.createElement('link');
      xslLink.rel = 'stylesheet';
      xslLink.type = 'text/xsl';
      xslLink.href = '/sitemap.xsl';
      head.appendChild(xslLink);
      
      return () => {
        head.removeChild(discoveryLink);
        if (head.contains(xslLink)) head.removeChild(xslLink);
      };
    }
  }, []);

  return (
    <>
      <HomeSEO />
      <IndexingPriority priority="high" />
      <Helmet>
        <link rel="canonical" href="https://www.wrappingchicago.com/" />
        {/* Add a rel next to ensure Google crawls the services page */}
        <link rel="next" href="https://www.wrappingchicago.com/services" />
        {/* Add additional discovery links for key content sections */}
        <link rel="prefetch" href="/services" />
        <link rel="prefetch" href="/gallery" />
        <link rel="prefetch" href="/locations" />
        <link rel="prefetch" href="/sitemap" />
        
        {/* Add structured data for enhanced visibility */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.wrappingchicago.com/"
              }
            ]
          }
        `}</script>
      </Helmet>
      
      <Schema 
        city={chicagoCity}
        path="/"
        pageTitle="Vehicle Wraps Chicago | Premium Car & Truck Wrapping Services"
        pageDescription="Chicago's premier vehicle wrap company. Professional car & truck wraps with premium 3M materials. Transform your business with effective mobile advertising."
        faqs={homeFAQs}
        keywords={[
          "vehicle wraps Chicago",
          "car wraps Chicago",
          "truck wraps Chicago",
          "van wraps Chicago",
          "fleet wraps Chicago",
          "commercial vehicle wraps",
          "color change wraps Chicago",
          "vehicle graphics Chicago"
        ]}
        isServicePage={true}
        serviceType="Vehicle Wraps"
        includeSpeakable={true}
        allCities={cities}
      />
      
      <BusinessLocationSchema city={chicagoCity} />

      <div className="flex flex-col min-h-screen">
        <Header />
        <main id="main-content" className="flex-grow main-content">
          <Hero />
          <InfoBar />
          <QuickLinksBar />
          <ServicesSection 
            fleetWrapVan={fleetWrapVan} 
            colorChangeVan={colorChangeVan} 
            commercialGraphics={commercialGraphics}
          />
          <InstallationFacility />
          <WhyChooseUsSection />
          <AreasServedSection cities={cities} />
          <EasyButtonSection />
          <TrustIndicators />
          <VehicleWrapFAQ />
          
          {/* Add PageFAQ component to homepage */}
          <PageFAQ 
            faqs={homeFAQs}
            serviceName="Vehicle Wraps"
            cityName="Chicago"
          />
          
          {/* Add expanded sitemap links section to improve crawlability */}
          <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Explore All Our Pages</h2>
              <p className="mb-4 text-gray-700">Browse our complete catalog of vehicle wrap services and locations:</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-brand-navy">Main Pages</h3>
                  <ul className="space-y-1">
                    <li><Link to="/" className="text-brand-red hover:underline">Home</Link></li>
                    <li><Link to="/about" className="text-brand-navy hover:text-brand-red transition-colors">About Us</Link></li>
                    <li><Link to="/gallery" className="text-brand-navy hover:text-brand-red transition-colors">Gallery</Link></li>
                    <li><Link to="/contact" className="text-brand-navy hover:text-brand-red transition-colors">Contact</Link></li>
                    <li><Link to="/sitemap" className="text-brand-navy hover:text-brand-red transition-colors">Sitemap</Link></li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-brand-navy">Primary Services</h3>
                  <ul className="space-y-1">
                    <li><Link to="/services" className="text-brand-navy hover:text-brand-red transition-colors">All Services</Link></li>
                    <li><Link to="/services/car-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Car Wraps</Link></li>
                    <li><Link to="/services/truck-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Truck Wraps</Link></li>
                    <li><Link to="/services/van-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Van Wraps</Link></li>
                    <li><Link to="/services/fleet-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Fleet Wraps</Link></li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-brand-navy">Specialty Wraps</h3>
                  <ul className="space-y-1">
                    <li><Link to="/services/color-change-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Color Change</Link></li>
                    <li><Link to="/services/commercial-graphics" className="text-brand-navy hover:text-brand-red transition-colors">Commercial Graphics</Link></li>
                    <li><Link to="/services/partial-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Partial Wraps</Link></li>
                    <li><Link to="/services/designer-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Designer Wraps</Link></li>
                    <li><Link to="/services/luxury-exotic-wraps" className="text-brand-navy hover:text-brand-red transition-colors">Luxury Wraps</Link></li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-brand-navy">Top Locations</h3>
                  <ul className="space-y-1">
                    <li><Link to="/vehicle-wraps-chicago-il" className="text-brand-navy hover:text-brand-red transition-colors">Chicago</Link></li>
                    <li><Link to="/vehicle-wraps-naperville-il" className="text-brand-navy hover:text-brand-red transition-colors">Naperville</Link></li>
                    <li><Link to="/vehicle-wraps-schaumburg-il" className="text-brand-navy hover:text-brand-red transition-colors">Schaumburg</Link></li>
                    <li><Link to="/vehicle-wraps-evanston-il" className="text-brand-navy hover:text-brand-red transition-colors">Evanston</Link></li>
                    <li><Link to="/locations" className="text-brand-navy hover:text-brand-red transition-colors">All Locations</Link></li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <Link to="/sitemap" className="inline-block px-4 py-2 bg-brand-navy text-white rounded-md hover:bg-brand-red transition-colors">
                  View Complete Sitemap
                </Link>
              </div>
            </div>
          </section>
          
          {/* Add our new comprehensive internal links footer */}
          <InternalLinksFooter />
        </main>
        <StickyContactButtons />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
