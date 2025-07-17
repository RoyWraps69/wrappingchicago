import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Anchor, Phone, MapPin, Star, TrendingUp, Factory, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const WaukeganLocationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping Chicago - Waukegan",
    "image": "https://www.wrappingchicago.com/lovable-uploads/waukegan-harbor.jpg",
    "@id": "https://www.wrappingchicago.com/waukegan",
    "url": "https://www.wrappingchicago.com/waukegan",
    "telephone": "+1-312-597-1286",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Waukegan Service Area",
      "addressLocality": "Waukegan",
      "addressRegion": "IL",
      "postalCode": "60085",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.3636,
      "longitude": -87.8448
    },
    "areaServed": ["Waukegan", "North Chicago", "Zion", "Beach Park", "Lake County"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Waukegan Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Vehicle Graphics",
            "description": "Heavy-duty vehicle wraps for Waukegan's industrial and manufacturing businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multicultural Community Wraps",
            "description": "Culturally diverse vehicle graphics serving Waukegan's international community"
          }
        }
      ]
    }
  };

  const waukeganMarketSegments = [
    {
      icon: Factory,
      title: "Industrial Hub",
      description: "County seat with manufacturing heritage and modern industry",
      opportunity: "Heavy equipment, logistics, industrial services",
      demographics: "Blue-collar workforce, practical service focus"
    },
    {
      icon: Anchor,
      title: "Harbor Community",
      description: "Lake Michigan harbor brings marine businesses and tourism",
      opportunity: "Marine services, recreational businesses, tourism",
      demographics: "Boating enthusiasts, seasonal visitors"
    },
    {
      icon: Users,
      title: "Diverse Population",
      description: "88,000 residents with rich multicultural heritage",
      opportunity: "International services, cultural businesses, community services",
      demographics: "Hispanic, African American, diverse immigrant communities"
    },
    {
      icon: Heart,
      title: "Community Revitalization",
      description: "Ongoing downtown and lakefront development projects",
      opportunity: "Construction services, real estate, renovation specialists",
      demographics: "Growth-oriented businesses, young families"
    }
  ];

  const waukeganSuccessStories = [
    {
      business: "Harbor Marine Services",
      type: "Marine Industry",
      result: "300% increase in boat maintenance contracts",
      quote: "Our wrapped service truck at the Waukegan Harbor became a landmark. Boat owners know exactly who to call for reliable service."
    },
    {
      business: "Multicultural Market Express",
      type: "Food & Retail",
      result: "200% growth in specialty food delivery",
      quote: "Waukegan's diverse community loves authentic foods. Our multilingual vehicle wrap helped us connect with every neighborhood."
    },
    {
      business: "Lake County Industrial Supply",
      type: "Industrial Services",
      result: "250% increase in manufacturing clients",
      quote: "Industrial businesses in Waukegan trust companies that look established. Our professional wrap opened doors to major contracts."
    }
  ];

  const waukeganAreas = [
    { 
      name: "Downtown Waukegan", 
      character: "Historic district undergoing revitalization",
      businesses: "Government services, professional offices, community services",
      opportunity: "County seat traffic, civic business"
    },
    { 
      name: "Waukegan Harbor", 
      character: "Active marina and lakefront recreation area",
      businesses: "Marine services, restaurants, recreational equipment",
      opportunity: "Seasonal boating traffic, tourism"
    },
    { 
      name: "Industrial Districts", 
      character: "Manufacturing and logistics facilities",
      businesses: "Industrial supply, equipment services, logistics",
      opportunity: "B2B services, heavy equipment visibility"
    },
    { 
      name: "Residential Neighborhoods", 
      character: "Diverse ethnic communities",
      businesses: "Cultural services, specialty retail, community services",
      opportunity: "Cultural market penetration"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Waukegan IL Vehicle Wraps | Harbor & Industrial District | Wrapping Chicago</title>
        <meta name="description" content="Professional vehicle wraps in Waukegan IL. Serving harbor district, industrial businesses, multicultural community. Heavy-duty graphics for Lake County's industrial hub." />
        <meta name="keywords" content="Waukegan vehicle wraps, harbor marine graphics, industrial vehicle wraps, Lake County fleet graphics, multicultural business wraps, heavy duty vehicle graphics" />
        <link rel="canonical" href="https://www.wrappingchicago.com/waukegan" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-brand-navy text-white py-20">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Waukegan Vehicle Wraps Built for Hard Work
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Lake County's industrial heart demands vehicle graphics that work as hard as you do. 
                From the harbor to the factory floor, we build wraps that last.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white">
                  <Link to="/contact" className="flex items-center">
                    Get Waukegan Quote <Phone className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  <Link to="/gallery">View Industrial Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Market Segments */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-4">
              Waukegan's Diverse Business Landscape
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              As Lake County's seat and largest city, Waukegan offers unique opportunities: 
              industrial strength, lakefront recreation, and multicultural markets all in one location.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {waukeganMarketSegments.map((segment, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-slate-100">
                  <CardHeader>
                    <segment.icon className="h-12 w-12 text-slate-600 mx-auto mb-4" />
                    <CardTitle className="text-brand-navy text-lg">{segment.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3 text-sm">{segment.description}</p>
                    <div className="bg-slate-50 p-3 rounded-lg mb-3">
                      <p className="text-xs font-semibold text-slate-800">Opportunity:</p>
                      <p className="text-xs text-slate-700">{segment.opportunity}</p>
                    </div>
                    <p className="text-xs text-gray-600">{segment.demographics}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Waukegan Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {waukeganSuccessStories.map((story, index) => (
                <Card key={index} className="border-l-4 border-slate-600 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-8 w-8 text-slate-600" />
                      <div>
                        <CardTitle className="text-lg">{story.business}</CardTitle>
                        <p className="text-sm text-gray-600">{story.type}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-slate-600 mb-3">{story.result}</p>
                    <blockquote className="text-gray-700 italic">
                      "{story.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Business Areas */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Key Waukegan Business Districts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {waukeganAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-slate-600" />
                      <CardTitle className="text-brand-navy">{area.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">{area.character}</p>
                    <div className="mb-3">
                      <p className="text-sm font-medium text-slate-800">Key Businesses:</p>
                      <p className="text-sm text-gray-600">{area.businesses}</p>
                    </div>
                    <div className="bg-slate-100 p-2 rounded">
                      <p className="text-sm font-medium text-slate-800">Opportunity:</p>
                      <p className="text-xs text-gray-700">{area.opportunity}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industrial Strength */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Built for Waukegan's Industrial Demands
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Factory className="h-8 w-8 text-slate-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Heavy-Duty Materials</h3>
                  <p className="text-sm text-gray-600">Industrial-grade vinyl that handles harsh conditions</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Star className="h-8 w-8 text-slate-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Weather Resistant</h3>
                  <p className="text-sm text-gray-600">Lake Michigan weather tested and approved</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 text-slate-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Cultural Sensitivity</h3>
                  <p className="text-sm text-gray-600">Designs that respect community diversity</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Anchor className="h-8 w-8 text-slate-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Harbor Visibility</h3>
                  <p className="text-sm text-gray-600">Maximize exposure at lakefront events</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-slate-900 to-brand-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work Hard for Waukegan?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join Waukegan businesses who've built their reputation on reliability, quality, and hard work. 
              Your vehicle wrap should reflect those same values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-red hover:bg-red-700">
                <Link to="/contact">Get Waukegan Strong</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                <Link to="/pricing">View Industrial Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WaukeganLocationPage;