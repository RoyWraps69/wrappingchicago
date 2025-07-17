import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Phone, MapPin, Star, TrendingUp, Briefcase, Users, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArlingtonHeightsLocationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping Chicago - Arlington Heights",
    "image": "https://www.wrappingchicago.com/lovable-uploads/arlington-heights-downtown.jpg",
    "@id": "https://www.wrappingchicago.com/arlington-heights",
    "url": "https://www.wrappingchicago.com/arlington-heights",
    "telephone": "+1-312-597-1286",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Arlington Heights Service Area",
      "addressLocality": "Arlington Heights",
      "addressRegion": "IL",
      "postalCode": "60004",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.0884,
      "longitude": -87.9806
    },
    "areaServed": ["Arlington Heights", "Mount Prospect", "Prospect Heights", "Des Plaines"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Arlington Heights Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Family-Focused Business Wraps",
            "description": "Vehicle graphics targeting Arlington Heights' family-oriented community"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Downtown Business Vehicle Graphics",
            "description": "Professional vehicle wraps for Arlington Heights' vibrant downtown business district"
          }
        }
      ]
    }
  };

  const arlingtonHeightsMarket = [
    {
      icon: Home,
      title: "Family-Centered Community",
      description: "76,000 residents in a quintessential American suburb with strong family values",
      stats: "Median age: 42 | 65% married families | High homeownership",
      businesses: "Family services, home improvement, children's activities, pet services"
    },
    {
      icon: TreePine,
      title: "Quality of Life Focus",
      description: "Consistently ranked among best places to live with beautiful tree-lined neighborhoods",
      stats: "Award-winning parks | Low crime | Excellent schools",
      businesses: "Landscaping, wellness services, recreational equipment, luxury services"
    },
    {
      icon: Briefcase,
      title: "Professional Services Hub",
      description: "Well-educated population with high disposable income seeking quality services",
      stats: "High education levels | Professional workforce | Commuter community",
      businesses: "Financial services, healthcare, professional consulting, premium contractors"
    }
  ];

  const arlingtonHeightsSuccessStories = [
    {
      business: "Arlington Family Dentistry",
      type: "Healthcare",
      result: "90% increase in new family patients",
      quote: "Arlington Heights families research their healthcare providers carefully. Our professional vehicle wrap immediately established credibility and trust."
    },
    {
      business: "Premier Home Solutions",
      type: "Home Services",
      result: "250% growth in high-end remodeling projects",
      quote: "Arlington Heights homeowners invest in quality. Our vehicle wrap reflects the premium craftsmanship they expect from contractors."
    },
    {
      business: "Heights Kids Academy",
      type: "Educational Services",
      result: "180% increase in enrollment inquiries",
      quote: "Parents here prioritize their children's education. Our family-friendly vehicle design perfectly captures that Arlington Heights spirit."
    }
  ];

  const arlingtonHeightsAreas = [
    { 
      name: "Downtown Arlington Heights", 
      character: "Vibrant historic downtown with charm and character",
      businesses: "Professional services, dining, retail, community services",
      opportunity: "High foot traffic, community events, festivals"
    },
    { 
      name: "Arlington Heights Road Corridor", 
      character: "Major commercial strip with diverse businesses",
      businesses: "Medical offices, auto services, restaurants, retail",
      opportunity: "Heavy daily traffic, visible to commuters"
    },
    { 
      name: "Rand Road District", 
      character: "Shopping and service corridor",
      businesses: "Big box retail, specialty services, dining",
      opportunity: "Regional shopping destination traffic"
    },
    { 
      name: "Residential Neighborhoods", 
      character: "Tree-lined streets with beautiful homes",
      businesses: "Home services, lawn care, family services",
      opportunity: "Trusted neighbor referrals, repeat business"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Arlington Heights IL Vehicle Wraps | Family Business & Downtown | Wrapping Chicago</title>
        <meta name="description" content="Professional vehicle wraps in Arlington Heights IL. Serving family businesses, downtown district, suburban professionals. Quality graphics for quality community." />
        <meta name="keywords" content="Arlington Heights vehicle wraps, family business car wraps, downtown Arlington Heights graphics, suburban vehicle wraps, quality service vehicle graphics" />
        <link rel="canonical" href="https://www.wrappingchicago.com/arlington-heights" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-brand-navy text-white py-20">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Arlington Heights Vehicle Wraps Built for Family Values
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100">
                In Arlington Heights' family-focused community, trust and quality matter most. 
                Our vehicle wraps reflect the values and standards this premier suburb demands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white">
                  <Link to="/contact" className="flex items-center">
                    Get Arlington Heights Quote <Phone className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  <Link to="/gallery">View Family-Friendly Designs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Market Analysis */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-4">
              Why Arlington Heights Businesses Choose Quality
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Arlington Heights consistently ranks as one of the best places to live in America. 
              High standards, family values, and quality expectations define this community.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {arlingtonHeightsMarket.map((segment, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-green-100">
                  <CardHeader>
                    <segment.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <CardTitle className="text-brand-navy">{segment.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{segment.description}</p>
                    <div className="bg-green-50 p-3 rounded-lg mb-4">
                      <p className="text-sm font-semibold text-green-800 mb-2">Demographics:</p>
                      <p className="text-xs text-gray-700">{segment.stats}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-600">Perfect for: {segment.businesses}</p>
                    </div>
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
              Arlington Heights Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {arlingtonHeightsSuccessStories.map((story, index) => (
                <Card key={index} className="border-l-4 border-green-600 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-8 w-8 text-green-600" />
                      <div>
                        <CardTitle className="text-lg">{story.business}</CardTitle>
                        <p className="text-sm text-gray-600">{story.type}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-green-600 mb-3">{story.result}</p>
                    <blockquote className="text-gray-700 italic">
                      "{story.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Arlington Heights Areas */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Arlington Heights Business Districts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {arlingtonHeightsAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-green-600" />
                      <CardTitle className="text-brand-navy">{area.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">{area.character}</p>
                    <div className="mb-3">
                      <p className="text-sm font-medium text-green-800">Key Businesses:</p>
                      <p className="text-sm text-gray-600">{area.businesses}</p>
                    </div>
                    <div className="bg-green-100 p-2 rounded">
                      <p className="text-sm font-medium text-green-800">Opportunity:</p>
                      <p className="text-xs text-gray-700">{area.opportunity}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Arlington Heights Community Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Star className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Quality First</h3>
                  <p className="text-sm text-gray-600">Residents expect and pay for quality in all services</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Family Focus</h3>
                  <p className="text-sm text-gray-600">Family-oriented businesses thrive in this community</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TreePine className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Community Pride</h3>
                  <p className="text-sm text-gray-600">Strong local support for businesses that care</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Briefcase className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Professional Standards</h3>
                  <p className="text-sm text-gray-600">High expectations for professional presentation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-green-900 to-brand-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Earn Arlington Heights' Trust?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join the successful businesses serving Arlington Heights families with vehicle wraps that reflect 
              the community's values of quality, trust, and family focus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-red hover:bg-red-700">
                <Link to="/contact">Build Arlington Heights Trust</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                <Link to="/pricing">View Quality Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ArlingtonHeightsLocationPage;