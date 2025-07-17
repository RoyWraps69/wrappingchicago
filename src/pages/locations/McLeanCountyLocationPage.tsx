import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wheat, Phone, MapPin, Star, TrendingUp, Briefcase, Users, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const McLeanCountyLocationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping Chicago - McLean County",
    "image": "https://www.wrappingchicago.com/lovable-uploads/mclean-county-bloomington.jpg",
    "@id": "https://www.wrappingchicago.com/mclean-county",
    "url": "https://www.wrappingchicago.com/mclean-county",
    "telephone": "+1-312-597-1286",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "McLean County Service Area",
      "addressLocality": "Bloomington",
      "addressRegion": "IL",
      "postalCode": "61701",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.4842,
      "longitude": -88.9937
    },
    "areaServed": ["Bloomington", "Normal", "McLean County", "Illinois State University"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "McLean County Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "University Community Vehicle Graphics",
            "description": "Professional vehicle wraps for Illinois State University and academic community businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Agricultural Business Wraps",
            "description": "Heavy-duty vehicle graphics for McLean County's agricultural and farming businesses"
          }
        }
      ]
    }
  };

  const mcleanCountyMarkets = [
    {
      icon: GraduationCap,
      title: "University Towns",
      description: "Illinois State University and Illinois Wesleyan create vibrant college communities",
      stats: "40,000+ students and faculty",
      businesses: "Student services, education, food delivery, textbooks, tutoring"
    },
    {
      icon: Briefcase,
      title: "State Farm Headquarters",
      description: "Major insurance company headquarters brings corporate opportunities",
      stats: "15,000+ corporate employees",
      businesses: "Professional services, corporate catering, business consulting, IT services"
    },
    {
      icon: Wheat,
      title: "Agricultural Heritage",
      description: "Rich farmland and agricultural businesses throughout the county",
      stats: "Illinois' largest county by land",
      businesses: "Farm equipment, agricultural services, grain transport, rural services"
    },
    {
      icon: Users,
      title: "Twin Cities Community",
      description: "Bloomington-Normal metro with 170,000 residents and growing economy",
      stats: "Regional economic center",
      businesses: "Healthcare, retail, professional services, government contracting"
    }
  ];

  const mcleanCountySuccessStories = [
    {
      business: "Redbird Student Services",
      type: "Educational Support",
      result: "500% increase in ISU student clients",
      quote: "Our wrapped vehicle on campus became iconic. Students know exactly who to call for tutoring, moving services, and academic support."
    },
    {
      business: "Prairie Agriculture Solutions",
      type: "Agricultural Services",
      result: "300% growth in farm equipment contracts",
      quote: "McLean County farmers trust companies that understand agriculture. Our agricultural-themed wrap shows we know the business."
    },
    {
      business: "State Farm District Catering",
      type: "Corporate Services",
      result: "400% increase in corporate lunch contracts",
      quote: "The State Farm headquarters sees our professional wrap daily. It opened doors to corporate contracts throughout the insurance district."
    }
  ];

  const mcleanCountyAreas = [
    { 
      name: "Illinois State University", 
      character: "Major university campus with 20,000+ students",
      businesses: "Student services, food delivery, academic support, housing",
      opportunity: "Year-round student population, faculty services"
    },
    { 
      name: "Downtown Bloomington-Normal", 
      character: "Twin cities business district and government center",
      businesses: "Professional services, government contracting, legal, healthcare",
      opportunity: "County seat business, professional networking"
    },
    { 
      name: "State Farm Corridor", 
      character: "Corporate headquarters and business district",
      businesses: "Corporate services, professional dining, business consulting",
      opportunity: "Fortune 500 corporate contracts"
    },
    { 
      name: "Agricultural Areas", 
      character: "Rural communities and farming operations",
      businesses: "Agricultural services, farm equipment, grain transport",
      opportunity: "Agricultural community trust and referrals"
    }
  ];

  return (
    <>
      <Helmet>
        <title>McLean County IL Vehicle Wraps | Bloomington Normal & ISU | Wrapping Chicago</title>
        <meta name="description" content="Professional vehicle wraps in McLean County IL. Serving Bloomington-Normal, Illinois State University, State Farm headquarters, agricultural businesses. University and corporate graphics." />
        <meta name="keywords" content="McLean County vehicle wraps, Bloomington Normal car wraps, Illinois State University graphics, State Farm corporate wraps, agricultural vehicle graphics, university town wraps" />
        <link rel="canonical" href="https://www.wrappingchicago.com/mclean-county" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative bg-gradient-to-br from-red-900 via-orange-700 to-brand-navy text-white py-20">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                McLean County Vehicle Wraps: Where Agriculture Meets Academia
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-orange-100">
                From Illinois State University to State Farm headquarters to the richest farmland in America, 
                McLean County offers unique opportunities for businesses that understand diverse communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white">
                  <Link to="/contact" className="flex items-center">
                    Get McLean County Quote <Phone className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  <Link to="/gallery">View University Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              McLean County's Diverse Markets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mcleanCountyMarkets.map((market, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-orange-100">
                  <CardHeader>
                    <market.icon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <CardTitle className="text-brand-navy text-lg">{market.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3 text-sm">{market.description}</p>
                    <div className="bg-orange-50 p-3 rounded-lg mb-3">
                      <p className="text-xs font-bold text-orange-800">{market.stats}</p>
                    </div>
                    <p className="text-xs text-gray-600">{market.businesses}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              McLean County Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mcleanCountySuccessStories.map((story, index) => (
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
                    <blockquote className="text-gray-700 italic text-sm">
                      "{story.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Key McLean County Markets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mcleanCountyAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-orange-600" />
                      <CardTitle className="text-brand-navy">{area.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">{area.character}</p>
                    <div className="mb-3">
                      <p className="text-sm font-medium text-orange-800">Key Businesses:</p>
                      <p className="text-sm text-gray-600">{area.businesses}</p>
                    </div>
                    <div className="bg-orange-100 p-2 rounded">
                      <p className="text-sm font-medium text-orange-800">Opportunity:</p>
                      <p className="text-xs text-gray-700">{area.opportunity}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-orange-900 to-brand-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Serve All of McLean County?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              From university students to Fortune 500 executives to hardworking farmers, 
              McLean County offers diverse opportunities for businesses that understand community values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-red hover:bg-red-700">
                <Link to="/contact">Connect with McLean County</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                <Link to="/pricing">View Regional Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default McLeanCountyLocationPage;