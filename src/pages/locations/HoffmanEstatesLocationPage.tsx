import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Phone, MapPin, Star, TrendingUp, Briefcase, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HoffmanEstatesLocationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping Chicago - Hoffman Estates",
    "image": "https://www.wrappingchicago.com/lovable-uploads/hoffman-estates-corporate.jpg",
    "@id": "https://www.wrappingchicago.com/hoffman-estates",
    "url": "https://www.wrappingchicago.com/hoffman-estates",
    "telephone": "+1-312-597-1286",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hoffman Estates Service Area",
      "addressLocality": "Hoffman Estates",
      "addressRegion": "IL",
      "postalCode": "60169",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.0631,
      "longitude": -88.1223
    },
    "areaServed": ["Hoffman Estates", "Streamwood", "Hanover Park", "Carpentersville"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hoffman Estates Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Campus Vehicle Graphics",
            "description": "Professional vehicle wraps for Hoffman Estates' major corporate headquarters and business parks"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Entertainment Venue Wraps",
            "description": "Vehicle graphics for NOW Arena and entertainment district businesses"
          }
        }
      ]
    }
  };

  const hoffmanEstatesAdvantages = [
    {
      icon: Building2,
      title: "Corporate Headquarters Hub",
      description: "Major companies like Sears Holdings and CDK Global create B2B opportunities",
      stats: "50,000+ daily corporate employees",
      businesses: "Executive services, corporate catering, business consulting, facility services"
    },
    {
      icon: Zap,
      title: "NOW Arena District",
      description: "Major entertainment venue brings regional visitors and event traffic",
      stats: "500,000+ annual event attendees",
      businesses: "Event services, catering, entertainment equipment, hospitality"
    },
    {
      icon: Users,
      title: "Affluent Suburban Community",
      description: "51,000 residents with high household incomes and quality expectations",
      stats: "Median income $85,000+",
      businesses: "Premium home services, family services, luxury retail, healthcare"
    },
    {
      icon: Briefcase,
      title: "Prairie Stone Business Park",
      description: "Massive mixed-use development with retail, office, and residential",
      stats: "1,000+ businesses on site",
      businesses: "Professional services, retail support, office supplies, maintenance"
    }
  ];

  const hoffmanEstatesSuccessStories = [
    {
      business: "Prairie Stone Executive Services",
      type: "Corporate Services",
      result: "400% increase in corporate contracts",
      quote: "Our professional vehicle wrap in corporate parking lots at Prairie Stone opened doors to Fortune 500 companies we never could have reached."
    },
    {
      business: "NOW Arena Event Solutions",
      type: "Entertainment Services",
      result: "300% growth during concert season",
      quote: "Concert-goers see our wrapped vehicles before and after every show. We became the go-to company for event equipment and party planning."
    },
    {
      business: "Hoffman Family Dentistry",
      type: "Healthcare",
      result: "200% increase in executive family patients",
      quote: "Corporate families in Hoffman Estates expect premium healthcare. Our executive-level vehicle wrap communicates the quality they demand."
    }
  ];

  const hoffmanEstatesAreas = [
    { 
      name: "Prairie Stone Business Park", 
      character: "Master-planned business and retail complex",
      businesses: "Corporate offices, retail, dining, professional services",
      opportunity: "Daily corporate traffic, business networking"
    },
    { 
      name: "NOW Arena District", 
      character: "Entertainment and event venue area",
      businesses: "Event services, hospitality, entertainment equipment",
      opportunity: "500K+ annual event attendees"
    },
    { 
      name: "Barrington Road Corridor", 
      character: "Major commercial thoroughfare",
      businesses: "Auto services, medical offices, retail, restaurants",
      opportunity: "Heavy commuter and shopping traffic"
    },
    { 
      name: "Golf Road Commercial", 
      character: "Business and retail district",
      businesses: "Professional services, specialty retail, business supplies",
      opportunity: "Business-to-business networking"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hoffman Estates IL Vehicle Wraps | Prairie Stone & NOW Arena | Wrapping Chicago</title>
        <meta name="description" content="Professional vehicle wraps in Hoffman Estates IL. Serving Prairie Stone Business Park, NOW Arena district, corporate headquarters. Executive-level vehicle graphics." />
        <meta name="keywords" content="Hoffman Estates vehicle wraps, Prairie Stone business graphics, NOW Arena event wraps, corporate vehicle graphics, executive car wraps, business park fleet graphics" />
        <link rel="canonical" href="https://www.wrappingchicago.com/hoffman-estates" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-brand-navy text-white py-20">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hoffman Estates Vehicle Wraps for Corporate Success
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100">
                Home to major corporate headquarters and the NOW Arena, Hoffman Estates 
                demands executive-level vehicle graphics that command respect in boardrooms and business parks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white">
                  <Link to="/contact" className="flex items-center">
                    Get Corporate Quote <Phone className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  <Link to="/gallery">View Executive Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Hoffman Estates Business Advantages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hoffmanEstatesAdvantages.map((advantage, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-purple-100">
                  <CardHeader>
                    <advantage.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <CardTitle className="text-brand-navy text-lg">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3 text-sm">{advantage.description}</p>
                    <div className="bg-purple-50 p-3 rounded-lg mb-3">
                      <p className="text-xs font-bold text-purple-800">{advantage.stats}</p>
                    </div>
                    <p className="text-xs text-gray-600">{advantage.businesses}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Hoffman Estates Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hoffmanEstatesSuccessStories.map((story, index) => (
                <Card key={index} className="border-l-4 border-purple-600 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-8 w-8 text-purple-600" />
                      <div>
                        <CardTitle className="text-lg">{story.business}</CardTitle>
                        <p className="text-sm text-gray-600">{story.type}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-purple-600 mb-3">{story.result}</p>
                    <blockquote className="text-gray-700 italic text-sm">
                      "{story.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Key Hoffman Estates Business Districts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hoffmanEstatesAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-purple-600" />
                      <CardTitle className="text-brand-navy">{area.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">{area.character}</p>
                    <div className="mb-3">
                      <p className="text-sm font-medium text-purple-800">Key Businesses:</p>
                      <p className="text-sm text-gray-600">{area.businesses}</p>
                    </div>
                    <div className="bg-purple-100 p-2 rounded">
                      <p className="text-sm font-medium text-purple-800">Opportunity:</p>
                      <p className="text-xs text-gray-700">{area.opportunity}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-purple-900 to-brand-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Corporate-Level Success?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join Hoffman Estates businesses serving Fortune 500 companies with vehicle wraps 
              that open doors to executive suites and million-dollar contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-red hover:bg-red-700">
                <Link to="/contact">Command Corporate Respect</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                <Link to="/pricing">View Executive Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HoffmanEstatesLocationPage;