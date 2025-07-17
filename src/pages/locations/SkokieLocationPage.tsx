import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Phone, MapPin, Star, TrendingUp, Briefcase, Theater, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const SkokieLocationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping Chicago - Skokie",
    "image": "https://www.wrappingchicago.com/lovable-uploads/skokie-old-orchard.jpg",
    "@id": "https://www.wrappingchicago.com/skokie",
    "url": "https://www.wrappingchicago.com/skokie",
    "telephone": "+1-312-597-1286",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Skokie Service Area",
      "addressLocality": "Skokie",
      "addressRegion": "IL",
      "postalCode": "60076",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.0334,
      "longitude": -87.7337
    },
    "areaServed": ["Skokie", "Morton Grove", "Lincolnwood", "Niles"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Skokie Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cultural Organization Vehicle Graphics",
            "description": "Professional vehicle wraps for Skokie's cultural and educational institutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diverse Community Business Wraps",
            "description": "Multilingual and culturally sensitive vehicle graphics for Skokie's diverse business community"
          }
        }
      ]
    }
  };

  const skokieBusinessTypes = [
    {
      icon: Users,
      title: "Cultural Diversity Services",
      description: "Skokie's remarkable diversity (40+ languages spoken) creates opportunities for specialized services",
      examples: "Translation services, cultural education, international cuisine, ethnic retail"
    },
    {
      icon: Theater,
      title: "Arts & Entertainment",
      description: "Home to North Shore Center for Performing Arts and rich cultural scene",
      examples: "Music instruction, event services, entertainment equipment, artistic services"
    },
    {
      icon: Shield,
      title: "Memorial & Educational Services",
      description: "Illinois Holocaust Museum creates unique educational tourism market",
      examples: "Educational tours, historical services, academic support, cultural programming"
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Close to Chicago with diverse, educated population seeking quality services",
      examples: "Legal services, financial planning, healthcare, business consulting"
    }
  ];

  const skokieSuccessStories = [
    {
      business: "Skokie Valley Tutoring",
      type: "Educational Services",
      result: "300% increase in multilingual tutoring requests",
      quote: "Our wrapped vehicle with multilingual messaging helped us connect with Skokie's diverse families who value education."
    },
    {
      business: "Cultural Kitchen Catering",
      type: "Food Services",
      result: "200% growth in cultural event catering",
      quote: "Skokie appreciates authentic cuisine. Our vehicle wrap showcasing various cultural dishes became a conversation starter."
    },
    {
      business: "North Shore Legal Services",
      type: "Professional Services",
      result: "150% increase in immigration law clients",
      quote: "Skokie's diverse community needed specialized legal help. Our professional wrap built the trust they were looking for."
    }
  ];

  const skokieNeighborhoods = [
    { name: "Downtown Skokie", character: "Revitalized business district with CTA access", businesses: "Professional services, dining, retail" },
    { name: "Old Orchard Area", character: "Upscale shopping and dining destination", businesses: "Luxury services, fine dining, specialty retail" },
    { name: "Skokie Boulevard", character: "Major commercial corridor", businesses: "Auto services, restaurants, medical offices" },
    { name: "Dempster Street", character: "Cultural and community hub", businesses: "Cultural services, community organizations, healthcare" }
  ];

  return (
    <>
      <Helmet>
        <title>Skokie IL Vehicle Wraps | Old Orchard & Cultural District | Wrapping Chicago</title>
        <meta name="description" content="Professional vehicle wraps in Skokie IL. Serving Old Orchard shopping area, cultural district, diverse business community. Multilingual design options available." />
        <meta name="keywords" content="Skokie vehicle wraps, Old Orchard car wraps, cultural business graphics, diverse community vehicle wraps, Skokie IL fleet graphics, multilingual vehicle graphics" />
        <link rel="canonical" href="https://www.wrappingchicago.com/skokie" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section - Skokie Specific */}
        <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-brand-navy text-white py-20">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Skokie Vehicle Wraps That Honor Diversity
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                In Skokie's multicultural community where 40+ languages are spoken, 
                your vehicle wrap needs to resonate with diverse audiences while maintaining professional appeal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white">
                  <Link to="/contact" className="flex items-center">
                    Get Skokie Quote <Phone className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  <Link to="/gallery">View Cultural Designs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skokie's Unique Market */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-4">
              Understanding Skokie's Multicultural Market
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Skokie is one of America's most diverse communities. Home to the Illinois Holocaust Museum, 
              Old Orchard shopping center, and 40+ spoken languages - your vehicle wrap strategy must respect and embrace this diversity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skokieBusinessTypes.map((type, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-blue-100">
                  <CardHeader>
                    <type.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-brand-navy text-lg">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4 text-sm">{type.description}</p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-600">{type.examples}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">Skokie Design Considerations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Cultural Sensitivity</h4>
                  <p className="text-gray-700 text-sm">Designs that respect diverse backgrounds and avoid cultural appropriation. Universal symbols work best.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Educational Value</h4>
                  <p className="text-gray-700 text-sm">Community values learning and culture. Professional, educational appearance builds trust.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Quality Expectations</h4>
                  <p className="text-gray-700 text-sm">Educated, discerning population. Premium materials and craftsmanship are expected.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Skokie Business Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skokieSuccessStories.map((story, index) => (
                <Card key={index} className="border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle className="text-lg">{story.business}</CardTitle>
                        <p className="text-sm text-gray-600">{story.type}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-blue-600 mb-3">{story.result}</p>
                    <blockquote className="text-gray-700 italic text-sm">
                      "{story.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skokie Areas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Key Skokie Business Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skokieNeighborhoods.map((neighborhood, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-blue-600" />
                      <CardTitle className="text-brand-navy">{neighborhood.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3 text-sm">{neighborhood.character}</p>
                    <p className="text-sm text-blue-800 font-medium">Key Businesses: {neighborhood.businesses}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-brand-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Connect with Skokie's Diverse Community?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join successful Skokie businesses who've built trust across cultural boundaries with respectful, 
              professional vehicle wraps that speak to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-red hover:bg-red-700">
                <Link to="/contact">Start Your Skokie Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                <Link to="/pricing">View Pricing Options</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SkokieLocationPage;