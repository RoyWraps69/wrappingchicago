import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock, Star, Truck, Briefcase, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChicagoLocationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping Chicago - Downtown Chicago",
    "image": "https://www.wrappingchicago.com/lovable-uploads/chicago-skyline.jpg",
    "@id": "https://www.wrappingchicago.com/chicago",
    "url": "https://www.wrappingchicago.com/chicago",
    "telephone": "+1-312-597-1286",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Downtown Chicago Area",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60601",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.8781,
      "longitude": -87.6298
    },
    "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-15:00",
    "areaServed": ["Chicago", "Loop", "River North", "Streeterville", "Gold Coast", "Lincoln Park", "Lakeview"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Chicago Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chicago Taxi Cab Wraps",
            "description": "Professional vehicle wraps for Chicago taxi fleets and rideshare drivers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Downtown Food Truck Wraps",
            "description": "Eye-catching wraps for Chicago's booming food truck scene"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Fleet Wraps",
            "description": "Professional vehicle graphics for Chicago's major corporations"
          }
        }
      ]
    }
  };

  const chicagoNeighborhoods = [
    { name: "The Loop", businesses: "Financial institutions, law firms, corporate headquarters", traffic: "Heavy weekday business traffic" },
    { name: "River North", businesses: "Restaurants, entertainment venues, tech companies", traffic: "High foot traffic and tourist visibility" },
    { name: "Streeterville", businesses: "Medical centers, luxury retail, hotels", traffic: "Mix of residents and visitors" },
    { name: "Gold Coast", businesses: "Luxury services, boutiques, real estate", traffic: "Affluent residential area" },
    { name: "Lincoln Park", businesses: "Family services, local restaurants, small businesses", traffic: "Family-oriented neighborhood traffic" },
    { name: "Lakeview", businesses: "Sports bars, retail shops, service providers", traffic: "Young professional demographic" }
  ];

  const chicagoSuccessStories = [
    {
      business: "Lou Malnati's Pizza",
      type: "Food Delivery",
      result: "45% increase in delivery orders after fleet wrap campaign",
      quote: "Our wrapped delivery vehicles became mobile billboards that brought in tons of new customers across Chicago."
    },
    {
      business: "Chicago HVAC Solutions",
      type: "Trade Services",
      result: "60% more service calls in first 6 months",
      quote: "The wrap paid for itself in 3 months. Now we're the most recognized HVAC company in the Loop."
    },
    {
      business: "Windy City Plumbing",
      type: "Emergency Services",
      result: "300% increase in emergency call volume",
      quote: "People see our trucks all over Chicago and remember us when they need plumbing help."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Chicago Vehicle Wraps | Downtown, Loop, River North | Wrapping Chicago</title>
        <meta name="description" content="Premier vehicle wraps in Chicago IL. Serving downtown Loop, River North, Gold Coast. Transform your Chicago business with professional vehicle graphics that get noticed in traffic." />
        <meta name="keywords" content="Chicago vehicle wraps, Loop car wraps, River North truck wraps, downtown Chicago fleet graphics, Chicago taxi wraps, food truck wraps Chicago, corporate vehicle wraps Chicago" />
        <link rel="canonical" href="https://www.wrappingchicago.com/chicago" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section - Chicago Specific */}
        <section className="relative bg-gradient-to-br from-brand-navy via-blue-900 to-black text-white py-20">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Chicago Vehicle Wraps That Stop Traffic
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                From the Loop to Lincoln Park, we've wrapped over 2,000 vehicles in Chicago. 
                Your business deserves to stand out in the Windy City's competitive market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white">
                  <Link to="/contact" className="flex items-center">
                    Get Chicago Quote <Phone className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  <Link to="/gallery">View Chicago Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Chicago Businesses Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Why 500+ Chicago Businesses Trust Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-brand-red mx-auto mb-4" />
                  <CardTitle>Local Chicago Experts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Born and raised in Chicago. We know what works in Loop traffic vs. Lincoln Park streets.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Clock className="h-12 w-12 text-brand-red mx-auto mb-4" />
                  <CardTitle>Fast Chicago Installation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Downtown facility means quick turnaround. Most Chicago wraps completed in 24-48 hours.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Truck className="h-12 w-12 text-brand-red mx-auto mb-4" />
                  <CardTitle>Weather-Tested Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Chicago winters are brutal. Our 3M wraps survive polar vortex to summer heat waves.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Star className="h-12 w-12 text-brand-red mx-auto mb-4" />
                  <CardTitle>Proven Chicago Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Average 40% increase in calls for Chicago businesses within 3 months of wrap installation.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Chicago Neighborhoods We Dominate */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-4">
              Chicago Neighborhoods We Serve
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Every Chicago neighborhood has its own character and customer base. We design wraps that resonate with your specific area.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chicagoNeighborhoods.map((neighborhood, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-brand-navy">{neighborhood.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-800">Target Businesses:</h4>
                        <p className="text-gray-600 text-sm">{neighborhood.businesses}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Traffic Pattern:</h4>
                        <p className="text-gray-600 text-sm">{neighborhood.traffic}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Chicago Success Stories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Real Chicago Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {chicagoSuccessStories.map((story, index) => (
                <Card key={index} className="border-l-4 border-brand-red">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-8 w-8 text-brand-red" />
                      <div>
                        <CardTitle className="text-lg">{story.business}</CardTitle>
                        <p className="text-sm text-gray-600">{story.type}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-brand-red mb-3">{story.result}</p>
                    <blockquote className="text-gray-700 italic">
                      "{story.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Chicago-Specific Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Specialized Chicago Vehicle Wrap Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Briefcase className="h-8 w-8 text-brand-red mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-2">Chicago Taxi & Rideshare Wraps</h3>
                    <p className="text-gray-700">Custom wraps for Chicago's 7,000+ taxi and rideshare drivers. Stand out in the sea of yellow cabs and increase your earnings per ride.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-8 w-8 text-brand-red mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-2">Food Truck Graphics</h3>
                    <p className="text-gray-700">Chicago's food truck scene is exploding. Eye-catching wraps that help you compete at Navy Pier, Millennium Park, and downtown events.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Truck className="h-8 w-8 text-brand-red mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-2">Trade Vehicle Wraps</h3>
                    <p className="text-gray-700">Plumbers, electricians, HVAC techs - we know Chicago trade businesses. Wraps designed to build trust in every neighborhood.</p>
                  </div>
                </div>
              </div>
              <div className="bg-brand-navy text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Ready to Dominate Chicago Streets?</h3>
                <p className="mb-6">Join 500+ Chicago businesses already turning heads and increasing sales with professional vehicle wraps.</p>
                <ul className="space-y-2 mb-6">
                  <li>✓ Free design consultation</li>
                  <li>✓ Chicago weather-tested materials</li>
                  <li>✓ 48-hour installation available</li>
                  <li>✓ 5-year warranty</li>
                </ul>
                <Button className="w-full bg-brand-red hover:bg-red-700">
                  <Link to="/contact">Get Your Chicago Quote Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChicagoLocationPage;