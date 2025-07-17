import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Phone, MapPin, Star, Users, TrendingUp, Briefcase, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const NapervilleLocationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness", 
    "name": "Wrapping Chicago - Naperville",
    "image": "https://www.wrappingchicago.com/lovable-uploads/naperville-downtown.jpg",
    "@id": "https://www.wrappingchicago.com/naperville",
    "url": "https://www.wrappingchicago.com/naperville",
    "telephone": "+1-312-597-1286",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Naperville Service Area",
      "addressLocality": "Naperville", 
      "addressRegion": "IL",
      "postalCode": "60540",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.7508,
      "longitude": -88.1535
    },
    "areaServed": ["Naperville", "Aurora", "Warrenville", "Lisle", "Wheaton"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Naperville Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Corporate Executive Vehicle Wraps",
            "description": "Professional vehicle graphics for Naperville's corporate headquarters and executive teams"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Family Business Vehicle Graphics", 
            "description": "High-quality vehicle wraps for Naperville's family-owned businesses and services"
          }
        }
      ]
    }
  };

  const napervilleMarketSegments = [
    {
      icon: Building2,
      title: "Corporate Headquarters",
      description: "Home to major companies like OfficeMax, Edward Hospital. Professional, executive-level presentation required.",
      medianIncome: "$120,000+",
      keyBusinesses: "Legal, consulting, financial services, healthcare administration"
    },
    {
      icon: Users,
      title: "Affluent Families", 
      description: "High-income families who value quality and safety. Premium service providers thrive here.",
      medianIncome: "$95,000+", 
      keyBusinesses: "Pediatric care, private tutoring, home services, luxury auto"
    },
    {
      icon: DollarSign,
      title: "High-End Services",
      description: "Market that pays for quality. Professional appearance directly impacts business success.",
      medianIncome: "$85,000+",
      keyBusinesses: "Real estate, wealth management, specialty retail, premium contractors"
    }
  ];

  const napervilleSuccessStories = [
    {
      business: "Naperville Pediatric Partners",
      type: "Healthcare",
      result: "80% increase in new patient referrals",
      quote: "Parents in Naperville research everything. Our professional vehicle wrap immediately communicates quality and trustworthiness."
    },
    {
      business: "Elite Home Solutions",
      type: "Premium Home Services", 
      result: "300% growth in high-end remodeling projects",
      quote: "Our wrapped vehicles in Naperville driveways became our best sales tool. Neighbors want the same quality work."
    },
    {
      business: "Naperville Wealth Advisors",
      type: "Financial Services",
      result: "150% increase in consultation requests",
      quote: "The sophisticated design of our vehicle wrap reflects our expertise. It's mobile credibility in Naperville."
    }
  ];

  const napervilleNeighborhoods = [
    { name: "Downtown Naperville", character: "Historic charm meets modern business", businesses: "Professional services, upscale retail, restaurants" },
    { name: "Springbrook", character: "Executive homes and corporate campuses", businesses: "Corporate services, luxury home services, private healthcare" },
    { name: "Tall Grass", character: "Family-oriented community", businesses: "Family services, youth programs, educational support" },
    { name: "White Eagle", character: "Upscale residential", businesses: "Premium services, luxury retail, specialty consulting" }
  ];

  return (
    <>
      <Helmet>
        <title>Naperville IL Vehicle Wraps | Corporate & Family Business Graphics | Wrapping Chicago</title>
        <meta name="description" content="Premium vehicle wraps in Naperville IL. Serving corporate headquarters, family businesses, affluent professionals. High-quality graphics that match Naperville's standards." />
        <meta name="keywords" content="Naperville vehicle wraps, corporate car wraps Naperville, executive vehicle graphics, family business wraps, Naperville IL fleet graphics, professional vehicle wraps Naperville" />
        <link rel="canonical" href="https://www.wrappingchicago.com/naperville" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section - Naperville Specific */}
        <section className="relative bg-gradient-to-br from-emerald-900 via-green-800 to-brand-navy text-white py-20">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Naperville Vehicle Wraps That Command Respect
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100">
                In Naperville's competitive market, your vehicle is your business card. 
                We create executive-level graphics that match your community's high standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white">
                  <Link to="/contact" className="flex items-center">
                    Get Naperville Quote <Phone className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  <Link to="/gallery">View Executive Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Naperville Market Analysis */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-4">
              Understanding Naperville's Premium Market
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Naperville consistently ranks as one of America's best places to live. High income, high expectations. 
              Your vehicle wrap needs to reflect the quality this community demands.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {napervilleMarketSegments.map((segment, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-emerald-100">
                  <CardHeader>
                    <segment.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <CardTitle className="text-brand-navy">{segment.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{segment.description}</p>
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-emerald-800">Median Income: {segment.medianIncome}</p>
                      <p className="text-sm text-gray-600 mt-2">{segment.keyBusinesses}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-emerald-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">Why Naperville Businesses Choose Premium Wraps</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Star className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-emerald-800">Quality Expectations</h4>
                      <p className="text-gray-700">Naperville residents expect the best. Cheap-looking wraps actually hurt your business here.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-emerald-800">Higher ROI Potential</h4>
                      <p className="text-gray-700">Premium market means premium pricing. Quality wraps pay for themselves faster.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-emerald-800">Professional Network</h4>
                      <p className="text-gray-700">Business referrals are huge here. Your vehicle wrap is your networking tool.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-emerald-800">Community Reputation</h4>
                      <p className="text-gray-700">Word travels fast in Naperville. Professional appearance builds lasting reputation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Naperville Success Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Naperville Business Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {napervilleSuccessStories.map((story, index) => (
                <Card key={index} className="border-l-4 border-emerald-600 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-8 w-8 text-emerald-600" />
                      <div>
                        <CardTitle className="text-lg">{story.business}</CardTitle>
                        <p className="text-sm text-gray-600">{story.type}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-emerald-600 mb-3">{story.result}</p>
                    <blockquote className="text-gray-700 italic">
                      "{story.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Naperville Neighborhoods */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Naperville Areas We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {napervilleNeighborhoods.map((neighborhood, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-emerald-600" />
                      <CardTitle className="text-brand-navy">{neighborhood.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">{neighborhood.character}</p>
                    <p className="text-sm text-emerald-800 font-medium">Key Businesses: {neighborhood.businesses}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Premium CTA Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-900 to-brand-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Match Naperville's Standards?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join Naperville's most successful businesses with vehicle wraps that command respect and drive results. 
              Premium market. Premium wraps. Premium results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-red hover:bg-red-700">
                <Link to="/contact">Start Your Premium Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                <Link to="/pricing">View Premium Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NapervilleLocationPage;