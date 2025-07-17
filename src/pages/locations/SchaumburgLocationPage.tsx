import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, Phone, MapPin, Star, Users, TrendingUp, Briefcase, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const SchaumburgLocationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping Chicago - Schaumburg",
    "image": "https://www.wrappingchicago.com/lovable-uploads/schaumburg-woodfield.jpg",
    "@id": "https://www.wrappingchicago.com/schaumburg",
    "url": "https://www.wrappingchicago.com/schaumburg",
    "telephone": "+1-312-597-1286",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Schaumburg Service Area",
      "addressLocality": "Schaumburg",
      "addressRegion": "IL", 
      "postalCode": "60173",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.0334,
      "longitude": -88.0834
    },
    "areaServed": ["Schaumburg", "Hoffman Estates", "Streamwood", "Hanover Park", "Woodfield"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Schaumburg Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Retail Business Vehicle Wraps",
            "description": "Vehicle graphics for Schaumburg's massive retail and shopping center businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Corporate Campus Vehicle Graphics",
            "description": "Professional fleet wraps for Schaumburg's major corporate headquarters"
          }
        }
      ]
    }
  };

  const schaumburgBusinessHubs = [
    {
      icon: ShoppingBag,
      title: "Woodfield Mall District",
      description: "Largest shopping center in Illinois. Massive foot traffic from across Chicagoland.",
      businesses: ["Retail services", "Food delivery", "Personal services", "Electronics repair"],
      opportunity: "1.2 million shoppers annually see your vehicle"
    },
    {
      icon: Briefcase,
      title: "Corporate Corridor", 
      description: "Major business district with Fortune 500 companies and corporate headquarters.",
      businesses: ["B2B services", "Corporate catering", "Professional services", "IT support"],
      opportunity: "100,000+ office workers as potential customers"
    },
    {
      icon: Car,
      title: "Auto Mile",
      description: "Major automotive corridor with dealerships and auto services.",
      businesses: ["Auto detailing", "Auto repair", "Insurance", "Transportation services"],
      opportunity: "Heavy traffic from car shoppers and service customers"
    }
  ];

  const schaumburgSuccessStories = [
    {
      business: "Woodfield Auto Detailing",
      type: "Automotive Services",
      result: "250% increase in appointments near mall",
      quote: "Shoppers at Woodfield see our wrapped van and book detailing while they shop. It's genius marketing."
    },
    {
      business: "Schaumburg IT Solutions", 
      type: "Corporate Services",
      result: "400% growth in corporate contracts",
      quote: "Our professional vehicle wrap in corporate parking lots opened doors we couldn't reach with cold calling."
    },
    {
      business: "Northwest Food Delivery",
      type: "Food Services",
      result: "180% increase in delivery volume",
      quote: "The Woodfield area sees our wrapped vehicles everywhere. Brand recognition exploded overnight."
    }
  ];

  const schaumburgTrafficPatterns = [
    { location: "Woodfield Mall", traffic: "50,000+ daily visitors", peak: "Weekends & holidays", audience: "Shoppers, families, tourists" },
    { location: "Golf Road Corridor", traffic: "75,000+ vehicles daily", peak: "Rush hours", audience: "Commuters, business travelers" }, 
    { location: "Meacham Road", traffic: "40,000+ vehicles daily", peak: "All day", audience: "Corporate employees, residents" },
    { location: "Higgins Road", traffic: "60,000+ vehicles daily", peak: "Rush hours", audience: "Northwest suburban commuters" }
  ];

  return (
    <>
      <Helmet>
        <title>Schaumburg IL Vehicle Wraps | Woodfield Mall Area Business Graphics | Wrapping Chicago</title>
        <meta name="description" content="Vehicle wraps in Schaumburg IL near Woodfield Mall. Serving retail businesses, corporate campuses, auto services. Maximize exposure in Illinois's busiest shopping district." />
        <meta name="keywords" content="Schaumburg vehicle wraps, Woodfield Mall business wraps, corporate vehicle graphics Schaumburg, auto detailing wraps, retail business vehicle graphics, Schaumburg IL fleet wraps" />
        <link rel="canonical" href="https://www.wrappingchicago.com/schaumburg" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section - Schaumburg Specific */}
        <section className="relative bg-gradient-to-br from-red-900 via-orange-800 to-brand-navy text-white py-20">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Schaumburg Vehicle Wraps That Capture Woodfield Traffic
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-orange-100">
                Home to Illinois's largest shopping center and major corporate campuses. 
                Your vehicle wrap reaches more potential customers here than anywhere else in the northwest suburbs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white">
                  <Link to="/contact" className="flex items-center">
                    Get Schaumburg Quote <Phone className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  <Link to="/gallery">View Local Success Stories</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Schaumburg Business Opportunities */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-4">
              Why Schaumburg is a Vehicle Wrap Goldmine
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              More people see your vehicle in Schaumburg than almost anywhere else in Chicagoland. 
              Woodfield Mall alone draws shoppers from across the region.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {schaumburgBusinessHubs.map((hub, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-orange-100">
                  <CardHeader>
                    <hub.icon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <CardTitle className="text-brand-navy">{hub.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{hub.description}</p>
                    <div className="bg-orange-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-orange-800 mb-2">Perfect For:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {hub.businesses.map((business, idx) => (
                          <li key={idx}>• {business}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm font-semibold text-orange-600">{hub.opportunity}</p>
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
              Schaumburg Traffic Goldmines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {schaumburgTrafficPatterns.map((pattern, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-orange-600" />
                      <CardTitle className="text-brand-navy">{pattern.location}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-800">Daily Traffic:</span>
                        <span className="text-orange-600 font-bold">{pattern.traffic}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-800">Peak Times:</span>
                        <span className="text-gray-600">{pattern.peak}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">Target Audience: </span>
                        <span className="text-gray-600">{pattern.audience}</span>
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
              Schaumburg Business Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {schaumburgSuccessStories.map((story, index) => (
                <Card key={index} className="border-l-4 border-orange-600 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-8 w-8 text-orange-600" />
                      <div>
                        <CardTitle className="text-lg">{story.business}</CardTitle>
                        <p className="text-sm text-gray-600">{story.type}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-orange-600 mb-3">{story.result}</p>
                    <blockquote className="text-gray-700 italic">
                      "{story.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location Advantages */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Schaumburg Location Advantages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Star className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Regional Draw</h3>
                  <p className="text-sm text-gray-600">Woodfield attracts shoppers from 50+ miles away</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Dense Population</h3>
                  <p className="text-sm text-gray-600">500,000+ people within 10 miles</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Briefcase className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Corporate Hub</h3>
                  <p className="text-sm text-gray-600">Major employers like Motorola, Zurich</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Car className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Highway Access</h3>
                  <p className="text-sm text-gray-600">I-90, I-290, Route 53 convergence</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-900 to-brand-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Dominate Schaumburg Traffic?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              With over 200,000 daily vehicle impressions possible in the Woodfield area alone, 
              your vehicle wrap investment pays for itself faster in Schaumburg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-red hover:bg-red-700">
                <Link to="/contact">Capture Schaumburg Traffic</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                <Link to="/pricing">See Traffic-Based Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SchaumburgLocationPage;