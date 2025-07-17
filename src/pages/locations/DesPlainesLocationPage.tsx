import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Phone, MapPin, Star, TrendingUp, Building, Users, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

const DesPlainesLocationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping Chicago - Des Plaines",
    "image": "https://www.wrappingchicago.com/lovable-uploads/des-plaines-ohare.jpg",
    "@id": "https://www.wrappingchicago.com/desplaines",
    "url": "https://www.wrappingchicago.com/desplaines",
    "telephone": "+1-312-597-1286",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Des Plaines Service Area",
      "addressLocality": "Des Plaines",
      "addressRegion": "IL",
      "postalCode": "60016",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.0334,
      "longitude": -87.8834
    },
    "areaServed": ["Des Plaines", "Park Ridge", "Rosemont", "O'Hare Area"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Des Plaines Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Airport Area Business Wraps",
            "description": "High-visibility vehicle graphics for O'Hare International Airport area businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Entertainment Industry Graphics",
            "description": "Professional vehicle wraps for Rivers Casino and entertainment district businesses"
          }
        }
      ]
    }
  };

  const desPlainesAdvantages = [
    {
      icon: Plane,
      title: "O'Hare Proximity",
      description: "Next to the world's 6th busiest airport - massive daily traffic exposure",
      stats: "220,000+ daily airport passengers",
      businesses: "Transportation, logistics, hospitality, business services"
    },
    {
      icon: Coins,
      title: "Rivers Casino District",
      description: "Illinois's first casino brings entertainment and dining traffic",
      stats: "3+ million annual visitors",
      businesses: "Entertainment, dining, hospitality, event services"
    },
    {
      icon: Building,
      title: "Business Hub",
      description: "Corporate offices and business parks near transportation corridor",
      stats: "Major corporate presence",
      businesses: "Professional services, corporate catering, business supplies"
    },
    {
      icon: Users,
      title: "Diverse Community",
      description: "58,000 residents with multicultural heritage and international connections",
      stats: "30+ languages spoken",
      businesses: "Cultural services, international cuisine, translation services"
    }
  ];

  const desPlainesSuccessStories = [
    {
      business: "O'Hare Airport Shuttle Plus",
      type: "Transportation",
      result: "400% increase in airport pickups",
      quote: "Our wrapped shuttles at O'Hare terminals became instant advertisements. Travelers remember our professional look when they need reliable transportation."
    },
    {
      business: "Rivers Entertainment Services",
      type: "Event Services",
      result: "250% growth in casino event contracts",
      quote: "The casino district sees our wrapped vehicles daily. We became the go-to company for entertainment equipment and party supplies."
    },
    {
      business: "International Catering Co",
      type: "Food Services",
      result: "300% increase in corporate catering",
      quote: "Des Plaines' business district needed authentic international cuisine. Our multicultural vehicle wrap opened doors to major corporate contracts."
    }
  ];

  const desPlainesTrafficPatterns = [
    { location: "O'Hare Airport Area", dailyTraffic: "500,000+", peakTimes: "24/7 airport traffic", audience: "Business travelers, tourists, logistics" },
    { location: "Rivers Casino", dailyTraffic: "15,000+", peakTimes: "Evenings & weekends", audience: "Entertainment seekers, diners, event attendees" },
    { location: "I-294/I-190 Junction", dailyTraffic: "200,000+", peakTimes: "Rush hours", audience: "Commuters, airport traffic, freight" },
    { location: "Downtown Des Plaines", dailyTraffic: "25,000+", peakTimes: "Business hours", audience: "Local residents, business services, dining" }
  ];

  const desPlainesAreas = [
    { 
      name: "O'Hare Area", 
      character: "Major transportation and logistics hub",
      businesses: "Airport services, logistics, hotels, car rental",
      opportunity: "International exposure, business travelers"
    },
    { 
      name: "Rivers Casino District", 
      character: "Entertainment and dining destination",
      businesses: "Entertainment, fine dining, event services, hospitality",
      opportunity: "Entertainment traffic, corporate events"
    },
    { 
      name: "Downtown Des Plaines", 
      character: "Historic downtown with modern amenities",
      businesses: "Professional services, retail, community services",
      opportunity: "Local community engagement"
    },
    { 
      name: "Business Parks", 
      character: "Corporate offices and industrial facilities",
      businesses: "B2B services, corporate dining, professional services",
      opportunity: "Corporate contracts, B2B networking"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Des Plaines IL Vehicle Wraps | O'Hare Airport & Rivers Casino | Wrapping Chicago</title>
        <meta name="description" content="Professional vehicle wraps in Des Plaines IL near O'Hare Airport. Serving transportation, entertainment, casino district businesses. Maximum exposure to international traffic." />
        <meta name="keywords" content="Des Plaines vehicle wraps, O'Hare airport business graphics, Rivers Casino area wraps, transportation vehicle graphics, airport shuttle wraps, entertainment business graphics" />
        <link rel="canonical" href="https://www.wrappingchicago.com/desplaines" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-sky-900 via-blue-800 to-brand-navy text-white py-20">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Des Plaines Vehicle Wraps With Global Reach
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Minutes from O'Hare Airport and home to Rivers Casino, Des Plaines puts your business 
                in front of millions of international visitors and entertainment seekers every year.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white">
                  <Link to="/contact" className="flex items-center">
                    Get Des Plaines Quote <Phone className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  <Link to="/gallery">View Airport Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Advantages */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-4">
              Des Plaines Strategic Advantages
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              No Chicago suburb offers more traffic exposure potential than Des Plaines. 
              O'Hare proximity alone brings over 220,000 daily travelers through your market area.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {desPlainesAdvantages.map((advantage, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-sky-100">
                  <CardHeader>
                    <advantage.icon className="h-12 w-12 text-sky-600 mx-auto mb-4" />
                    <CardTitle className="text-brand-navy text-lg">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3 text-sm">{advantage.description}</p>
                    <div className="bg-sky-50 p-3 rounded-lg mb-3">
                      <p className="text-xs font-bold text-sky-800">{advantage.stats}</p>
                    </div>
                    <p className="text-xs text-gray-600">{advantage.businesses}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Traffic Analysis */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Des Plaines Traffic Goldmines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {desPlainesTrafficPatterns.map((pattern, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-sky-600">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-sky-600" />
                      <CardTitle className="text-brand-navy">{pattern.location}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-800">Daily Traffic:</span>
                        <span className="text-sky-600 font-bold">{pattern.dailyTraffic}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-800">Peak Times:</span>
                        <span className="text-gray-600 text-sm">{pattern.peakTimes}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Audience: </span>
                        <span className="text-gray-600 text-sm">{pattern.audience}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Des Plaines Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {desPlainesSuccessStories.map((story, index) => (
                <Card key={index} className="border-l-4 border-sky-600 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-8 w-8 text-sky-600" />
                      <div>
                        <CardTitle className="text-lg">{story.business}</CardTitle>
                        <p className="text-sm text-gray-600">{story.type}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-sky-600 mb-3">{story.result}</p>
                    <blockquote className="text-gray-700 italic text-sm">
                      "{story.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Business Areas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Key Des Plaines Business Districts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {desPlainesAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-sky-600" />
                      <CardTitle className="text-brand-navy">{area.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">{area.character}</p>
                    <div className="mb-3">
                      <p className="text-sm font-medium text-sky-800">Key Businesses:</p>
                      <p className="text-sm text-gray-600">{area.businesses}</p>
                    </div>
                    <div className="bg-sky-50 p-2 rounded">
                      <p className="text-sm font-medium text-sky-800">Opportunity:</p>
                      <p className="text-xs text-gray-700">{area.opportunity}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Global Exposure */}
        <section className="py-16 bg-sky-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Global Exposure Opportunity
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Plane className="h-8 w-8 text-sky-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">International Traffic</h3>
                  <p className="text-sm text-gray-600">220,000+ daily O'Hare passengers see your wrap</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Star className="h-8 w-8 text-sky-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">24/7 Visibility</h3>
                  <p className="text-sm text-gray-600">Airport never sleeps - round the clock exposure</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Building className="h-8 w-8 text-sky-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Business Hub</h3>
                  <p className="text-sm text-gray-600">Corporate corridor with premium service demand</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Coins className="h-8 w-8 text-sky-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Entertainment District</h3>
                  <p className="text-sm text-gray-600">Casino brings 3M+ annual entertainment seekers</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-sky-900 to-brand-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Reach the World from Des Plaines?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              With O'Hare proximity and entertainment district traffic, Des Plaines offers 
              unmatched exposure potential. Make every mile count with professional vehicle wraps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-red hover:bg-red-700">
                <Link to="/contact">Reach Global Markets</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                <Link to="/pricing">View Airport Area Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DesPlainesLocationPage;