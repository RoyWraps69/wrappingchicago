import React from 'react';
import PageSEO from '@/components/seo/PageSEO';
import InternalLinkingSection from '@/components/seo/InternalLinkingSection';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Truck, MessageSquare } from 'lucide-react';

const VanWrapsPage = () => {
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <>
      <PageSEO 
        title="Van Wraps Chicago | Business Van Graphics & Mobile Advertising"
        description="Professional van wraps in Chicago for business advertising and mobile marketing. Custom graphics for cargo vans, delivery vehicles, and service vans. Premium vinyl installation with expert design services across Chicagoland for maximum business visibility."
        keywords={[
          "van wraps chicago",
          "cargo van wraps",
          "delivery van graphics chicago",
          "business van wraps",
          "service van graphics",
          "commercial van advertising",
          "van lettering chicago",
          "mobile advertising vans",
          "transit van wraps",
          "sprinter van graphics"
        ]}
        canonicalUrl={`${domain}/van-wraps`}
        h1="Professional Van Wraps Chicago"
        h2={["Business Van Graphics", "Mobile Advertising Solutions", "Custom Design Services"]}
        h3={["Cargo Van Specialists", "Service Vehicle Branding", "Premium Materials"]}
        pageType="service"
        businessSchema={true}
        serviceSchema={true}
      />
      
      {/* Enhanced Schema for Van Wraps */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Van Wraps Chicago",
            "description": "Professional van wrap installation in Chicago for business advertising and mobile marketing using premium vinyl materials",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Wrapping Chicago",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4711 N. Lamon Ave",
                "addressLocality": "Chicago",
                "addressRegion": "IL",
                "postalCode": "60630"
              },
              "telephone": "+13125971286"
            },
            "areaServed": {
              "@type": "City",
              "name": "Chicago"
            },
            "offers": {
              "@type": "Offer",
              "price": "3000",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* H1 Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-background via-background/80 to-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Professional Van Wraps Chicago
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your commercial van into a mobile billboard. Expert van wrap installation for maximum business exposure across Chicago and suburbs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Get Free Quote: (312) 597-1286
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* H2 Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Business Van Graphics Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg border bg-background">
                <h3 className="text-xl font-semibold mb-4">Cargo Van Wraps</h3>
                <p className="text-muted-foreground">Complete wraps for delivery and cargo vans with maximum advertising space utilization.</p>
              </div>
              <div className="text-center p-6 rounded-lg border bg-background">
                <h3 className="text-xl font-semibold mb-4">Service Van Graphics</h3>
                <p className="text-muted-foreground">Professional branding for plumbing, electrical, HVAC, and service industry vehicles.</p>
              </div>
              <div className="text-center p-6 rounded-lg border bg-background">
                <h3 className="text-xl font-semibold mb-4">Transit Van Branding</h3>
                <p className="text-muted-foreground">Custom graphics for passenger vans, shuttle services, and transportation companies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2 Benefits Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Mobile Advertising Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Advertising Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Reach up to 70,000 people daily with mobile advertising</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Cost-effective marketing with long-term impact</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Professional appearance builds brand credibility</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Installation Quality</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Premium 3M and Avery vinyl materials</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Certified installation techniques and tools</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>5-year warranty on materials and workmanship</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Linking */}
        <InternalLinkingSection />
      </div>
    </>
  );
};

export default VanWrapsPage;