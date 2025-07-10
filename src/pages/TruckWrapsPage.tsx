import React from 'react';
import PageSEO from '@/components/seo/PageSEO';
import InternalLinkingSection from '@/components/seo/InternalLinkingSection';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Truck, MessageSquare } from 'lucide-react';

const TruckWrapsPage = () => {
  const domain = "https://www.wrappingchicago.com";
  
  return (
    <>
      <PageSEO 
        title="Truck Wraps Chicago | Commercial Vehicle Graphics & Advertising"
        description="Professional truck wraps in Chicago for commercial advertising and business branding. Custom graphics, fleet solutions, and durable vinyl installations. Transform pickup trucks, box trucks, and commercial vehicles with premium materials and expert craftsmanship."
        keywords={[
          "truck wraps chicago",
          "commercial truck wraps",
          "pickup truck wraps chicago",
          "box truck graphics",
          "commercial vehicle wraps",
          "truck advertising chicago",
          "fleet truck wraps",
          "business truck graphics",
          "truck lettering chicago",
          "semi truck wraps"
        ]}
        canonicalUrl={`${domain}/truck-wraps`}
        h1="Professional Truck Wraps Chicago"
        h2={["Commercial Vehicle Graphics", "Fleet Branding Solutions", "Durable Installation"]}
        h3={["Heavy-Duty Materials", "Business Advertising", "Professional Results"]}
        pageType="service"
        businessSchema={true}
        serviceSchema={true}
      />
      
      {/* Enhanced Schema for Truck Wraps */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Truck Wraps Chicago",
            "description": "Commercial truck wrap installation in Chicago for business advertising and fleet branding using heavy-duty vinyl materials",
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
              "price": "3500",
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
            <div className="flex items-center justify-center mb-6">
              <Truck className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                Professional Truck Wraps Chicago
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your commercial trucks into powerful mobile billboards. Expert installation of durable vinyl graphics for maximum advertising impact across Chicagoland.
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
              Commercial Vehicle Graphics Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg border bg-background">
                <h3 className="text-xl font-semibold mb-4">Pickup Truck Wraps</h3>
                <p className="text-muted-foreground">Complete wraps and graphics for pickup trucks, perfect for contractors and small businesses.</p>
              </div>
              <div className="text-center p-6 rounded-lg border bg-background">
                <h3 className="text-xl font-semibold mb-4">Box Truck Graphics</h3>
                <p className="text-muted-foreground">Large format advertising on delivery and cargo vehicles for maximum visibility.</p>
              </div>
              <div className="text-center p-6 rounded-lg border bg-background">
                <h3 className="text-xl font-semibold mb-4">Fleet Branding</h3>
                <p className="text-muted-foreground">Consistent branding across multiple commercial vehicles for professional appearance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2 Benefits Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Professional Truck Wraps
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Business Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>24/7 mobile advertising reaches thousands daily</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Professional appearance builds customer trust</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Lower cost per impression than traditional advertising</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Technical Advantages</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Heavy-duty materials withstand commercial use</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Protects vehicle paint from wear and UV damage</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Removable without damage to original finish</span>
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

export default TruckWrapsPage;