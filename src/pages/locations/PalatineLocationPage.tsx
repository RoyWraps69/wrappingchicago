import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Phone, MapPin, Star, TrendingUp, Briefcase, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const PalatineLocationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wrapping Chicago - Palatine",
    "image": "https://www.wrappingchicago.com/lovable-uploads/palatine-downtown.jpg",
    "@id": "https://www.wrappingchicago.com/palatine",
    "url": "https://www.wrappingchicago.com/palatine",
    "telephone": "+1-312-597-1286",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Palatine Service Area",
      "addressLocality": "Palatine",
      "addressRegion": "IL",
      "postalCode": "60067",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.1103,
      "longitude": -88.0342
    },
    "areaServed": ["Palatine", "Rolling Meadows", "Inverness", "Barrington"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Palatine Vehicle Wrap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Educational Institution Vehicle Graphics",
            "description": "Professional vehicle wraps for Harper College area businesses and educational services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Community Event Business Wraps",
            "description": "Vehicle graphics for businesses serving Palatine's active community event scene"
          }
        }
      ]
    }
  };

  const palatineBusinessFocus = [
    {
      icon: GraduationCap,
      title: "Educational Hub",
      description: "Home to Harper College - creates demand for educational and student services",
      opportunity: "25,000+ students and faculty annually",
      businesses: "Tutoring, textbooks, student housing, food services, career services"
    },
    {
      icon: Calendar,
      title: "Event Community",
      description: "Famous for festivals like Palatine Street Fest and year-round community events",
      opportunity: "100,000+ festival attendees annually",
      businesses: "Event services, catering, entertainment, equipment rental, photography"
    },
    {
      icon: Users,
      title: "Family Services",
      description: "Strong family community with excellent schools and recreational facilities",
      opportunity: "High family spending power",
      businesses: "Childcare, youth sports, family medicine, home services, pet care"
    },
    {
      icon: Briefcase,
      title: "Professional Community",
      description: "Well-educated workforce with convenient Metra access to Chicago",
      opportunity: "Commuter and professional market",
      businesses: "Financial services, consulting, healthcare, real estate, insurance"
    }
  ];

  const palatineSuccessStories = [
    {
      business: "Harper Area Tutoring Center",
      type: "Educational Services",
      result: "400% increase in college prep enrollment",
      quote: "Being visible near Harper College with our professional wrap brought in students who needed academic support. Word spread quickly through campus."
    },
    {
      business: "Palatine Event Solutions",
      type: "Event Services",
      result: "300% growth during festival season",
      quote: "Our vehicle wrap at community events like Street Fest became our best marketing tool. Everyone could see our professionalism and quality."
    },
    {
      business: "Northwest Family Dentistry",
      type: "Healthcare",
      result: "200% increase in family patients",
      quote: "Palatine families value quality healthcare. Our family-friendly vehicle wrap helped establish trust and credibility in the community."
    }
  ];

  const palatineEvents = [
    { event: "Palatine Street Fest", attendance: "75,000+", focus: "Food, crafts, entertainment", opportunity: "Massive community exposure" },
    { event: "Oktoberfest", attendance: "25,000+", focus: "Cultural celebration", opportunity: "Family-friendly marketing" },
    { event: "Farmers Market", attendance: "5,000+ weekly", focus: "Local products", opportunity: "Regular community touchpoint" },
    { event: "Summer Concerts", attendance: "3,000+ weekly", focus: "Family entertainment", opportunity: "Consistent visibility" }
  ];

  const palatineAreas = [
    { 
      name: "Downtown Palatine", 
      character: "Historic charm with modern amenities",
      businesses: "Dining, professional services, retail, community services",
      trafficPattern: "High pedestrian traffic, community events"
    },
    { 
      name: "Harper College Area", 
      character: "Educational and student-focused zone",
      businesses: "Educational services, food, student housing, career services",
      trafficPattern: "25,000+ students/faculty daily during school year"
    },
    { 
      name: "Rand Road Corridor", 
      character: "Major commercial thoroughfare",
      businesses: "Auto services, restaurants, medical offices, retail",
      trafficPattern: "Heavy commuter and shopping traffic"
    },
    { 
      name: "Recreational Areas", 
      character: "Parks, sports facilities, family recreation",
      businesses: "Youth sports, fitness, outdoor equipment, family services",
      trafficPattern: "Family-focused weekend traffic"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Palatine IL Vehicle Wraps | Harper College & Community Events | Wrapping Chicago</title>
        <meta name="description" content="Professional vehicle wraps in Palatine IL. Serving Harper College area, community event businesses, family services. Maximize exposure at festivals and events." />
        <meta name="keywords" content="Palatine vehicle wraps, Harper College car wraps, community event graphics, festival business wraps, educational vehicle graphics, family service wraps" />
        <link rel="canonical" href="https://www.wrappingchicago.com/palatine" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-900 via-yellow-700 to-brand-navy text-white py-20">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Palatine Vehicle Wraps That Celebrate Community
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-yellow-100">
                From Harper College to Palatine Street Fest, your vehicle reaches thousands at every community gathering. 
                Join businesses that have made Palatine their stage for success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white">
                  <Link to="/contact" className="flex items-center">
                    Get Palatine Quote <Phone className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  <Link to="/gallery">View Community Designs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Business Opportunities */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-4">
              Palatine Business Opportunities
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Palatine offers unique business advantages: a college community, festival destination, 
              and family-focused suburb all in one. Your vehicle wrap strategy can tap into all three markets.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {palatineBusinessFocus.map((focus, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-amber-100">
                  <CardHeader>
                    <focus.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                    <CardTitle className="text-brand-navy text-lg">{focus.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3 text-sm">{focus.description}</p>
                    <div className="bg-amber-50 p-3 rounded-lg mb-3">
                      <p className="text-xs font-semibold text-amber-800">{focus.opportunity}</p>
                    </div>
                    <p className="text-xs text-gray-600">{focus.businesses}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Events */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Palatine's Event Marketing Goldmine
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {palatineEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-amber-600">
                  <CardHeader>
                    <CardTitle className="text-brand-navy text-lg">{event.event}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Attendance:</span>
                        <span className="text-sm text-amber-600 font-bold">{event.attendance}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium">Focus: </span>
                        <span className="text-sm text-gray-600">{event.focus}</span>
                      </div>
                      <div className="bg-amber-50 p-2 rounded">
                        <p className="text-xs text-amber-800 font-medium">{event.opportunity}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-amber-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-brand-navy mb-4 text-center">Event Marketing Strategy</h3>
              <p className="text-center text-gray-700 mb-6">
                Palatine hosts over 200,000 event attendees annually. Your vehicle wrap becomes a mobile billboard at every gathering.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <h4 className="font-semibold text-amber-800 mb-2">Before Events</h4>
                  <p className="text-sm text-gray-700">Setup and prep work visibility</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-amber-800 mb-2">During Events</h4>
                  <p className="text-sm text-gray-700">Maximum crowd exposure</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-amber-800 mb-2">After Events</h4>
                  <p className="text-sm text-gray-700">Cleanup and ongoing visibility</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12">
              Palatine Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {palatineSuccessStories.map((story, index) => (
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
                    <blockquote className="text-gray-700 italic">
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
              Key Palatine Business Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {palatineAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-amber-600" />
                      <CardTitle className="text-brand-navy">{area.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">{area.character}</p>
                    <div className="mb-3">
                      <p className="text-sm font-medium text-amber-800">Key Businesses:</p>
                      <p className="text-sm text-gray-600">{area.businesses}</p>
                    </div>
                    <div className="bg-amber-50 p-2 rounded">
                      <p className="text-sm font-medium text-amber-800">Traffic Pattern:</p>
                      <p className="text-xs text-gray-700">{area.trafficPattern}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-amber-900 to-brand-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Become Part of Palatine's Community?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              From Harper College students to Street Fest families, your vehicle wrap connects with 
              every part of Palatine's vibrant community throughout the year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-red hover:bg-red-700">
                <Link to="/contact">Join Palatine's Success</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                <Link to="/pricing">View Community Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PalatineLocationPage;