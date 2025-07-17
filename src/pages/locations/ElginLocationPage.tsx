import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Waves, Phone, MapPin, Star, TrendingUp, Briefcase, Users, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';

const ElginLocationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping Chicago - Elgin",
    "image": "https://www.wrappingchicago.com/lovable-uploads/elgin-fox-river.jpg",
    "@id": "https://www.wrappingchicago.com/elgin",
    "url": "https://www.wrappingchicago.com/elgin",
    "telephone": "+1-312-597-1286",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Elgin Service Area",
      "addressLocality": "Elgin",
      "addressRegion": "IL",
      "postalCode": "60120",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.0354,
      "longitude": -88.2826
    },
    "areaServed": ["Elgin", "South Elgin", "Bartlett", "Streamwood"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Elgin Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fox River Area Vehicle Graphics",
            "description": "Professional vehicle wraps for Elgin's historic Fox River community businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Educational Institution Wraps",
            "description": "Vehicle graphics for Elgin Community College and university area businesses"
          }
        }
      ]
    }
  };

  const elginMarketSegments = [
    {
      icon: Waves,
      title: "Fox River Heritage",
      description: "Historic river city with cultural attractions and natural beauty",
      opportunity: "Tourism, recreation, cultural businesses",
      population: "112,000 diverse residents"
    },
    {
      icon: Factory,
      title: "Manufacturing Legacy",
      description: "Strong industrial heritage with modern manufacturing facilities",
      opportunity: "Industrial services, B2B suppliers, logistics",
      population: "Blue-collar workforce, practical services"
    },
    {
      icon: Users,
      title: "Diverse Community",
      description: "One of Illinois' most diverse cities with 50+ nationalities",
      opportunity: "Cultural services, international businesses, translation",
      population: "Latino, African American, immigrant communities"
    },
    {
      icon: Briefcase,
      title: "Educational Hub",
      description: "Home to Elgin Community College and expanding educational services",
      opportunity: "Student services, educational support, career training",
      population: "Students, faculty, lifelong learners"
    }
  ];

  const elginSuccessStories = [
    {
      business: "Fox River Auto Detailing",
      type: "Automotive Services",
      result: "350% increase in riverside appointments",
      quote: "Our wrapped van along the Fox River Trail became a landmark. Cyclists and joggers remember us when they need car detailing."
    },
    {
      business: "Elgin Cultural Market",
      type: "International Retail",
      result: "200% growth in specialty food sales",
      quote: "Elgin's diversity is our strength. Our multilingual vehicle wrap helps us connect with every community in the city."
    },
    {
      business: "Randall Road Services",
      type: "Commercial Services",
      result: "300% increase in I-90 corridor contracts",
      quote: "The I-90 business district sees our professional wrap daily. It opened doors to major commercial accounts we never had access to before."
    }
  ];

  const elginAreas = [
    { 
      name: "Downtown Elgin", 
      character: "Historic riverfront with cultural attractions",
      businesses: "Tourism, dining, professional services, arts organizations",
      traffic: "Cultural events, Fox River recreation"
    },
    { 
      name: "Randall Road Corridor", 
      character: "Major commercial and retail strip",
      businesses: "Retail, restaurants, auto services, medical offices",
      traffic: "Heavy shopping and commuter traffic"
    },
    { 
      name: "I-90 Business District", 
      character: "Industrial and commercial hub",
      businesses: "Manufacturing, logistics, B2B services, industrial supply",
      traffic: "Commercial and freight traffic"
    },
    { 
      name: "Elgin Community College Area", 
      character: "Educational and student services zone",
      businesses: "Student services, career training, educational support",
      traffic: "Students, faculty, continuing education"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Elgin IL Vehicle Wraps | Fox River & Randall Road | Wrapping Chicago</title>
        <meta name="description" content="Professional vehicle wraps in Elgin IL. Serving Fox River area, Randall Road corridor, diverse community businesses. Cultural sensitivity and quality craftsmanship." />
        <meta name="keywords" content="Elgin vehicle wraps, Fox River business graphics, Randall Road car wraps, diverse community vehicle graphics, Elgin Community College area wraps" />
        <link rel="canonical" href="https://www.wrappingchicago.com/elgin" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative bg-gradient-to-br from-teal-900 via-blue-800 to-brand-navy text-white py-20">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Elgin Vehicle Wraps That Honor Diversity
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-teal-100">
                From the historic Fox River to the bustling Randall Road corridor, 
                Elgin's 112,000 residents represent 50+ nationalities. Your vehicle wrap must speak to everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white">
                  <Link to="/contact" className="flex items-center">
                    Get Elgin Quote <Phone className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  <Link to="/gallery">View Cultural Designs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Elgin's Unique Market Opportunities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {elginMarketSegments.map((segment, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-teal-100">
                  <CardHeader>
                    <segment.icon className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                    <CardTitle className="text-brand-navy text-lg">{segment.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3 text-sm">{segment.description}</p>
                    <div className="bg-teal-50 p-3 rounded-lg mb-3">
                      <p className="text-xs font-semibold text-teal-800">{segment.opportunity}</p>
                    </div>
                    <p className="text-xs text-gray-600">{segment.population}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Elgin Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {elginSuccessStories.map((story, index) => (
                <Card key={index} className="border-l-4 border-teal-600 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-8 w-8 text-teal-600" />
                      <div>
                        <CardTitle className="text-lg">{story.business}</CardTitle>
                        <p className="text-sm text-gray-600">{story.type}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-teal-600 mb-3">{story.result}</p>
                    <blockquote className="text-gray-700 italic text-sm">
                      "{story.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-teal-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Key Elgin Business Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {elginAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-teal-600" />
                      <CardTitle className="text-brand-navy">{area.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">{area.character}</p>
                    <div className="mb-3">
                      <p className="text-sm font-medium text-teal-800">Key Businesses:</p>
                      <p className="text-sm text-gray-600">{area.businesses}</p>
                    </div>
                    <div className="bg-teal-100 p-2 rounded">
                      <p className="text-sm font-medium text-teal-800">Traffic Pattern:</p>
                      <p className="text-xs text-gray-700">{area.traffic}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-teal-900 to-brand-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Connect with All of Elgin?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join businesses serving Elgin's diverse community with vehicle wraps that respect 
              cultural diversity while driving results across all demographics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-red hover:bg-red-700">
                <Link to="/contact">Embrace Elgin's Diversity</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                <Link to="/pricing">View Inclusive Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ElginLocationPage;