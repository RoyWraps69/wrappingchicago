import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Phone, MapPin, Star, TrendingUp, Briefcase, Users, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuroraLocationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping Chicago - Aurora",
    "image": "https://www.wrappingchicago.com/lovable-uploads/aurora-fox-river.jpg",
    "@id": "https://www.wrappingchicago.com/aurora",
    "url": "https://www.wrappingchicago.com/aurora",
    "telephone": "+1-312-597-1286",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Aurora Service Area",
      "addressLocality": "Aurora",
      "addressRegion": "IL",
      "postalCode": "60502",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.7606,
      "longitude": -88.3201
    },
    "areaServed": ["Aurora", "Montgomery", "Oswego", "Sugar Grove"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Aurora Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "City of Lights Vehicle Graphics",
            "description": "Professional vehicle wraps for Illinois' second-largest city businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Entertainment District Wraps",
            "description": "Vehicle graphics for Paramount Theatre and downtown entertainment businesses"
          }
        }
      ]
    }
  };

  const auroraAdvantages = [
    {
      icon: Lightbulb,
      title: "City of Lights Heritage",
      description: "Historic distinction as one of first cities with all-electric street lighting",
      stats: "Illinois' 2nd largest city - 180,000 residents",
      businesses: "Electrical services, lighting, technology, energy solutions"
    },
    {
      icon: Factory,
      title: "Industrial Legacy",
      description: "Strong manufacturing and logistics base with growing economy",
      stats: "Major transportation hub",
      businesses: "Manufacturing, logistics, industrial services, B2B suppliers"
    },
    {
      icon: Users,
      title: "Diverse Community",
      description: "Multicultural population with Latino heritage and growing demographics",
      stats: "60% Hispanic population",
      businesses: "Cultural services, international cuisine, translation, community services"
    },
    {
      icon: Briefcase,
      title: "Entertainment Hub",
      description: "Paramount Theatre, Hollywood Casino, and vibrant downtown entertainment",
      stats: "Regional entertainment destination",
      businesses: "Event services, hospitality, dining, entertainment equipment"
    }
  ];

  const auroraSuccessStories = [
    {
      business: "Aurora Electric Solutions",
      type: "Electrical Services",
      result: "400% increase in commercial electrical contracts",
      quote: "The 'City of Lights' trusts us with their electrical needs. Our professional vehicle wrap reinforces our expertise and Aurora heritage."
    },
    {
      business: "Paramount Event Services",
      type: "Entertainment",
      result: "300% growth in downtown event bookings",
      quote: "The entertainment district sees our wrapped vehicles daily. We became the go-to company for event planning and equipment rental."
    },
    {
      business: "Fox Valley Logistics",
      type: "Transportation",
      result: "250% increase in freight contracts",
      quote: "Aurora's central location is perfect for logistics. Our professional fleet wraps show customers we're serious about reliable service."
    }
  ];

  const auroraDistricts = [
    { 
      name: "Downtown Aurora", 
      character: "Historic entertainment district with Paramount Theatre",
      businesses: "Entertainment, dining, event services, professional services",
      opportunity: "Cultural events, entertainment traffic, tourists"
    },
    { 
      name: "Fox Valley Mall Area", 
      character: "Major retail and commercial corridor",
      businesses: "Retail services, restaurants, auto services, medical offices",
      opportunity: "High shopping traffic, family services"
    },
    { 
      name: "Industrial Corridors", 
      character: "Manufacturing and logistics facilities",
      businesses: "Manufacturing, logistics, industrial supply, B2B services",
      opportunity: "Industrial contracts, freight services"
    },
    { 
      name: "Chicago Premium Outlets", 
      character: "Major shopping destination",
      businesses: "Retail support, food services, logistics, customer services",
      opportunity: "Regional shopping traffic"
    }
  ];

  const auroraTraffic = [
    { location: "I-88 Corridor", traffic: "150,000+ daily", description: "Major east-west transportation artery" },
    { location: "Downtown Entertainment", traffic: "25,000+ events", description: "Paramount Theatre and cultural events" },
    { location: "Fox Valley Mall", traffic: "8 million annually", description: "Regional shopping destination" },
    { location: "Hollywood Casino", traffic: "2 million annually", description: "Gaming and entertainment visitors" }
  ];

  return (
    <>
      <Helmet>
        <title>Aurora IL Vehicle Wraps | City of Lights & Entertainment District | Wrapping Chicago</title>
        <meta name="description" content="Professional vehicle wraps in Aurora IL. Serving City of Lights, Paramount Theatre district, Fox Valley Mall area. Illinois' second largest city vehicle graphics." />
        <meta name="keywords" content="Aurora vehicle wraps, City of Lights car wraps, Paramount Theatre graphics, Fox Valley Mall area wraps, entertainment district vehicle graphics, multicultural business wraps" />
        <link rel="canonical" href="https://www.wrappingchicago.com/aurora" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative bg-gradient-to-br from-yellow-900 via-orange-800 to-brand-navy text-white py-20">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Aurora Vehicle Wraps: Lighting Up Illinois
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-yellow-100">
                Illinois' second-largest city and the original "City of Lights" offers massive opportunities. 
                From the Paramount Theatre to Fox Valley Mall, your vehicle reaches 180,000 residents plus regional visitors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white">
                  <Link to="/contact" className="flex items-center">
                    Get Aurora Quote <Phone className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  <Link to="/gallery">View City Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Aurora's Business Advantages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {auroraAdvantages.map((advantage, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-yellow-100">
                  <CardHeader>
                    <advantage.icon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                    <CardTitle className="text-brand-navy text-lg">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3 text-sm">{advantage.description}</p>
                    <div className="bg-yellow-50 p-3 rounded-lg mb-3">
                      <p className="text-xs font-bold text-yellow-800">{advantage.stats}</p>
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
              Aurora Traffic & Exposure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {auroraTraffic.map((item, index) => (
                <Card key={index} className="text-center border-l-4 border-yellow-600">
                  <CardHeader>
                    <CardTitle className="text-brand-navy text-lg">{item.location}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-yellow-600 mb-2">{item.traffic}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Aurora Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {auroraSuccessStories.map((story, index) => (
                <Card key={index} className="border-l-4 border-yellow-600 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-8 w-8 text-yellow-600" />
                      <div>
                        <CardTitle className="text-lg">{story.business}</CardTitle>
                        <p className="text-sm text-gray-600">{story.type}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-yellow-600 mb-3">{story.result}</p>
                    <blockquote className="text-gray-700 italic text-sm">
                      "{story.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Key Aurora Business Districts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {auroraDistricts.map((district, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-yellow-600" />
                      <CardTitle className="text-brand-navy">{district.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">{district.character}</p>
                    <div className="mb-3">
                      <p className="text-sm font-medium text-yellow-800">Key Businesses:</p>
                      <p className="text-sm text-gray-600">{district.businesses}</p>
                    </div>
                    <div className="bg-yellow-100 p-2 rounded">
                      <p className="text-sm font-medium text-yellow-800">Opportunity:</p>
                      <p className="text-xs text-gray-700">{district.opportunity}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-yellow-900 to-brand-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Light Up Aurora?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join businesses serving Illinois' second-largest city with vehicle wraps that capture 
              Aurora's dynamic energy and diverse opportunities from entertainment to industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-red hover:bg-red-700">
                <Link to="/contact">Shine in Aurora</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                <Link to="/pricing">View City Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AuroraLocationPage;