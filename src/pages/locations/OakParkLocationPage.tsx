import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Phone, MapPin, Star, TrendingUp, Briefcase, Users, PaintBucket } from 'lucide-react';
import { Link } from 'react-router-dom';

const OakParkLocationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping Chicago - Oak Park",
    "image": "https://www.wrappingchicago.com/lovable-uploads/oak-park-frank-lloyd-wright.jpg",
    "@id": "https://www.wrappingchicago.com/oak-park",
    "url": "https://www.wrappingchicago.com/oak-park",
    "telephone": "+1-312-597-1286",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Oak Park Service Area",
      "addressLocality": "Oak Park",
      "addressRegion": "IL",
      "postalCode": "60301",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.8850,
      "longitude": -87.7845
    },
    "areaServed": ["Oak Park", "River Forest", "Forest Park", "Elmwood Park"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Oak Park Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Historic District Vehicle Graphics",
            "description": "Tasteful vehicle wraps respecting Oak Park's historic character and architectural heritage"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Arts Community Business Wraps",
            "description": "Creative vehicle graphics for Oak Park's vibrant arts and cultural business community"
          }
        }
      ]
    }
  };

  const oakParkCharacteristics = [
    {
      icon: Home,
      title: "Architectural Heritage",
      description: "World-famous Frank Lloyd Wright designs and historic preservation community",
      significance: "25 Frank Lloyd Wright buildings",
      businesses: "Architecture services, historic preservation, home restoration, design consulting"
    },
    {
      icon: PaintBucket,
      title: "Arts & Culture Hub",
      description: "Vibrant arts district with galleries, theaters, and creative businesses",
      significance: "Oak Park Arts District",
      businesses: "Art supplies, framing, event planning, creative services, galleries"
    },
    {
      icon: Users,
      title: "Progressive Community",
      description: "Educated, environmentally conscious residents with strong community values",
      significance: "High education levels, liberal values",
      businesses: "Sustainable services, organic products, educational services, wellness"
    },
    {
      icon: Briefcase,
      title: "Professional Commuters",
      description: "Close proximity to Chicago with convenient CTA and Metra access",
      significance: "Easy Chicago commute",
      businesses: "Professional services, commuter services, work-from-home support"
    }
  ];

  const oakParkSuccessStories = [
    {
      business: "Wright Restoration Services",
      type: "Historic Preservation",
      result: "300% increase in historic home projects",
      quote: "Oak Park homeowners care deeply about architectural integrity. Our tasteful vehicle wrap shows we understand and respect the community's values."
    },
    {
      business: "Arts District Gallery",
      type: "Creative Services",
      result: "200% growth in art event bookings",
      quote: "The arts community in Oak Park appreciates creativity and quality. Our artistic vehicle wrap became a mobile gallery that draws people to our events."
    },
    {
      business: "Sustainable Home Solutions",
      type: "Environmental Services",
      result: "400% increase in eco-friendly renovations",
      quote: "Oak Park residents prioritize sustainability. Our green-themed wrap immediately communicates our environmental commitment and expertise."
    }
  ];

  const oakParkValues = [
    { value: "Historic Preservation", description: "Respect for architectural heritage and community character" },
    { value: "Environmental Stewardship", description: "Strong commitment to sustainability and green practices" },
    { value: "Arts & Culture", description: "Support for creative expression and cultural activities" },
    { value: "Progressive Values", description: "Open-minded, educated community that values diversity" },
    { value: "Quality Over Quantity", description: "Preference for craftsmanship and attention to detail" },
    { value: "Community Engagement", description: "Active participation in local issues and organizations" }
  ];

  return (
    <>
      <Helmet>
        <title>Oak Park IL Vehicle Wraps | Frank Lloyd Wright District | Wrapping Chicago</title>
        <meta name="description" content="Professional vehicle wraps in Oak Park IL. Serving historic district, arts community, environmentally conscious residents. Tasteful graphics respecting architectural heritage." />
        <meta name="keywords" content="Oak Park vehicle wraps, Frank Lloyd Wright district graphics, historic preservation car wraps, arts district vehicle graphics, sustainable business wraps, architectural heritage graphics" />
        <link rel="canonical" href="https://www.wrappingchicago.com/oak-park" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative bg-gradient-to-br from-amber-900 via-orange-800 to-brand-navy text-white py-20">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Oak Park Vehicle Wraps That Honor Heritage
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-amber-100">
                In the village that Frank Lloyd Wright called home, where arts and architecture define character, 
                your vehicle wrap must reflect the same attention to detail and respect for quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white">
                  <Link to="/contact" className="flex items-center">
                    Get Oak Park Quote <Phone className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  <Link to="/gallery">View Heritage Designs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-4">
              Understanding Oak Park's Unique Character
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Oak Park isn't just another suburb. This is a community defined by architectural significance, 
              artistic expression, and progressive values. Your vehicle wrap must reflect these principles.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {oakParkCharacteristics.map((characteristic, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-amber-100">
                  <CardHeader>
                    <characteristic.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                    <CardTitle className="text-brand-navy text-lg">{characteristic.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3 text-sm">{characteristic.description}</p>
                    <div className="bg-amber-50 p-3 rounded-lg mb-3">
                      <p className="text-xs font-bold text-amber-800">{characteristic.significance}</p>
                    </div>
                    <p className="text-xs text-gray-600">{characteristic.businesses}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Oak Park Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {oakParkSuccessStories.map((story, index) => (
                <Card key={index} className="border-l-4 border-amber-600 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-8 w-8 text-amber-600" />
                      <div>
                        <CardTitle className="text-lg">{story.business}</CardTitle>
                        <p className="text-sm text-gray-600">{story.type}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-amber-600 mb-3">{story.result}</p>
                    <blockquote className="text-gray-700 italic text-sm">
                      "{story.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Oak Park Community Values
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Understanding these values is crucial for vehicle wrap design that resonates with Oak Park residents.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {oakParkValues.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-amber-800 text-lg">{item.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Design Principles for Oak Park
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Star className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Tasteful Design</h3>
                  <p className="text-sm text-gray-600">Elegant, sophisticated graphics that respect community aesthetic</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <PaintBucket className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Artistic Quality</h3>
                  <p className="text-sm text-gray-600">Creative execution that appeals to arts-conscious community</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Home className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Heritage Respect</h3>
                  <p className="text-sm text-gray-600">Design sensitivity to architectural and cultural heritage</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Community Values</h3>
                  <p className="text-sm text-gray-600">Messaging that aligns with progressive, inclusive values</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-amber-900 to-brand-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Honor Oak Park's Legacy?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join businesses that understand Oak Park's unique character with vehicle wraps that reflect 
              the same attention to detail, artistic vision, and community respect that defines this historic village.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-red hover:bg-red-700">
                <Link to="/contact">Create Heritage-Worthy Design</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                <Link to="/pricing">View Artisan Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OakParkLocationPage;