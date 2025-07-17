import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Phone, MapPin, Star, Users, TrendingUp, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const EvanstonLocationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping Chicago - Evanston",
    "image": "https://www.wrappingchicago.com/lovable-uploads/evanston-northwestern.jpg",
    "@id": "https://www.wrappingchicago.com/evanston",
    "url": "https://www.wrappingchicago.com/evanston", 
    "telephone": "+1-312-597-1286",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Evanston Service Area",
      "addressLocality": "Evanston",
      "addressRegion": "IL",
      "postalCode": "60201",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.0451,
      "longitude": -87.6877
    },
    "areaServed": ["Evanston", "Northwestern University", "Central Street", "Downtown Evanston"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Evanston Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Northwestern University Vehicle Graphics",
            "description": "Professional vehicle wraps for Northwestern faculty, staff, and local businesses"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Evanston Family Business Wraps",
            "description": "Local business vehicle graphics designed for Evanston's community-focused market"
          }
        }
      ]
    }
  };

  const evanstonBusinessTypes = [
    {
      icon: GraduationCap,
      title: "University Services",
      description: "Tutoring, student services, academic support - targeting Northwestern's 21,000 students and faculty",
      examples: "Test prep, moving services, food delivery, tech repair"
    },
    {
      icon: Users,
      title: "Family Services", 
      description: "Evanston families value education and community. Professional, trustworthy vehicle graphics work best",
      examples: "Pediatric care, family law, home services, pet care"
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Educated, affluent residents who appreciate quality and attention to detail in business presentation",
      examples: "Financial planning, real estate, consulting, healthcare"
    }
  ];

  const evanstonSuccessStories = [
    {
      business: "Wildcat Tutoring Services",
      type: "Educational Support",
      result: "200% increase in Northwestern student clients",
      quote: "Our wrapped car parked near campus became our best marketing tool. Students recognize us everywhere now."
    },
    {
      business: "Evanston Family Dental",
      type: "Healthcare",
      result: "50% more new patient appointments",
      quote: "The professional look of our wrapped vehicle gives families confidence in our practice quality."
    },
    {
      business: "Purple Line Property Management",
      type: "Real Estate Services", 
      result: "75% increase in property management inquiries",
      quote: "Evanston residents see our vehicle and know we understand their neighborhood's unique character."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Evanston IL Vehicle Wraps | Northwestern University Area | Wrapping Chicago</title>
        <meta name="description" content="Professional vehicle wraps in Evanston IL. Serving Northwestern University, Central Street, downtown Evanston. Trusted by families and students for quality vehicle graphics." />
        <meta name="keywords" content="Evanston vehicle wraps, Northwestern University car wraps, Central Street business wraps, Evanston IL fleet graphics, university area vehicle graphics, family business wraps Evanston" />
        <link rel="canonical" href="https://www.wrappingchicago.com/evanston" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section - Evanston Specific */}
        <section className="relative bg-gradient-to-br from-purple-900 via-blue-800 to-brand-navy text-white py-20">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Evanston Vehicle Wraps That Build Trust
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                In Evanston's educated community, first impressions matter. We create professional vehicle graphics 
                that resonate with Northwestern families and university professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white">
                  <Link to="/contact" className="flex items-center">
                    Get Evanston Quote <Phone className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  <Link to="/gallery">View Local Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Evanston Market Understanding */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-4">
              We Understand Evanston's Unique Market
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Evanston isn't just another suburb. Home to Northwestern University, this community values education, 
              quality, and local businesses. Your vehicle wrap needs to reflect these values.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {evanstonBusinessTypes.map((type, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <type.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <CardTitle className="text-brand-navy">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{type.description}</p>
                    <p className="text-sm text-gray-600 font-medium">Examples: {type.examples}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-brand-navy mb-4 text-center">Why Evanston Design Matters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Northwestern University Connection</h4>
                  <p className="text-gray-700">21,000 students, faculty, and staff. Purple and white colors resonate. Professional, academic aesthetic works best.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Educated Demographics</h4>
                  <p className="text-gray-700">High income, high education levels. They research before buying. Quality and professionalism are expected, not optional.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Community-Focused Culture</h4>
                  <p className="text-gray-700">Local businesses thrive here. Show you're part of the Evanston community, not just passing through.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Lakefront Lifestyle</h4>
                  <p className="text-gray-700">Beach culture, outdoor activities, family-oriented. Designs should reflect this active, healthy lifestyle.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evanston Success Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Evanston Business Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {evanstonSuccessStories.map((story, index) => (
                <Card key={index} className="border-l-4 border-purple-600">
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
                    <blockquote className="text-gray-700 italic">
                      "{story.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Evanston Areas We Serve */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Evanston Areas We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Northwestern Campus</h3>
                  <p className="text-sm text-gray-600">University services, student housing, research facilities</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Downtown Evanston</h3>
                  <p className="text-sm text-gray-600">Central business district, shopping, dining, services</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Central Street</h3>
                  <p className="text-sm text-gray-600">Local businesses, family services, community hub</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-navy mb-2">Lakefront</h3>
                  <p className="text-sm text-gray-600">Recreation services, health and wellness, outdoor businesses</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900 to-brand-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Connect with Evanston's Community?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join successful Evanston businesses who've built trust and increased customers with professional vehicle wraps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-red hover:bg-red-700">
                <Link to="/contact">Start Your Evanston Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EvanstonLocationPage;