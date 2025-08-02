import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star, Clock, CheckCircle, Users, DollarSign, Zap, Award } from "lucide-react";
import { ChicagoAreaLocation } from "@/data/chicagoAreaLocations";
import { Helmet } from 'react-helmet-async';
import LocationFAQSchema from '@/components/schemas/LocationFAQSchema';

interface ChicagoAreaLocationPageProps {
  location: ChicagoAreaLocation;
}

const ChicagoAreaLocationPage: React.FC<ChicagoAreaLocationPageProps> = ({ location }) => {
  const domain = "https://www.wrappingchicago.com";
  const currentYear = new Date().getFullYear();
  
  const pageTitle = `#1 Vehicle Wraps ${location.name} ${currentYear} | Car Wraps, Truck Wraps & Fleet Graphics`;
  const metaDescription = `Comprehensive vehicle customization services in ${location.name}, ${location.county}. Advanced automotive branding, commercial fleet graphics, luxury enhancement serving ${location.zipCodes.join(', ')} areas. Consultation available (312) 597-1286.`;
  
  const keywords = [
    `vehicle wraps ${location.name}`,
    `car wraps ${location.name}`,
    `truck wraps ${location.name}`,
    `vehicle graphics ${location.name}`,
    `auto wraps ${location.name}`,
    `fleet wraps ${location.name}`, 
    `commercial vehicle wraps ${location.name}`,
    `carwraps ${location.name}`,
    `vinyl wraps ${location.name}`,
    `vehicle wrap installation ${location.name}`,
    `business vehicle wraps ${location.name}`,
    `custom car wraps ${location.name}`,
    `truck graphics ${location.name}`,
    `van wraps ${location.name}`,
    `vehicle wraps ${location.county}`,
    `car wraps near me ${location.name}`,
    `professional vehicle wraps ${location.name}`,
    `3M vehicle wraps ${location.name}`,
    `Avery Dennison wraps ${location.name}`,
    ...location.zipCodes.map(zip => `vehicle wraps ${zip}`),
    ...location.landmarks.map(landmark => `vehicle wraps near ${landmark}`)
  ];

  // Location-specific services
  const getLocationServices = () => {
    const basePrice = location.medianIncome.includes('$') 
      ? parseInt(location.medianIncome.replace(/[$,]/g, '')) 
      : 65000;
    
    const priceMultiplier = basePrice > 100000 ? 1.2 : basePrice > 80000 ? 1.1 : 1.0;
    
    return [
      {
        name: "Premium Car Wraps",
        description: `Transform your vehicle with stunning custom carwraps perfect for ${location.name}'s ${location.keyFeatures[0]} community`,
        price: `From $${Math.round(2500 * priceMultiplier).toLocaleString()}`,
        details: `Whether you're driving through ${location.landmarks[0]} or visiting ${location.landmarks[1]}, make your car stand out with our premium wrap solutions designed for ${location.name} drivers.`
      },
      {
        name: "Commercial Truck Wraps", 
        description: `Professional truck wraps that turn every mile into marketing opportunities throughout ${location.county}`,
        price: `From $${Math.round(3500 * priceMultiplier).toLocaleString()}`,
        details: `Perfect for ${location.name} businesses, our commercial wraps help you dominate the local market while building brand recognition throughout ${location.county}.`
      },
      {
        name: "Fleet Branding Solutions",
        description: `Consistent, professional fleet graphics that establish your dominance in ${location.name}'s competitive market`, 
        price: "Custom Quote",
        details: `From small business fleets to large corporate vehicles, we ensure your brand commands respect and recognition throughout ${location.name} and beyond.`
      },
      {
        name: "Business Vehicle Graphics",
        description: `Strategic vehicle graphics designed specifically for ${location.name}'s ${location.businessType} business environment`,
        price: `From $${Math.round(1800 * priceMultiplier).toLocaleString()}`,
        details: `Whether you're targeting ${location.keyFeatures[1]} customers or serving the broader ${location.county} area, our graphics get you noticed by the right people.`
      }
    ];
  };

  const services = getLocationServices();

  // Location-specific benefits
  const benefits = [
    `Local ${location.name} expertise serving ${location.county} for over 10 years`,
    "Premium 3M and Avery Dennison materials only",
    "Certified 3M Preferred Installation specialists",
    "Comprehensive 5-year material and installation warranty", 
    `Mobile service available throughout ${location.county}`,
    "Free design consultation and same-day quotes",
    `Weather-tested installations perfect for ${location.name} climate`,
    "Insurance work and fleet discounts available"
  ];

  // Location story with business focus
  const getLocationStory = () => {
    const businessStories = {
      'urban': `Picture this: A contractor's beat-up truck pulls up to a million-dollar ${location.name} project. The client takes one look and questions whether this is really the "premium contractor" they hired. Meanwhile, across town, another contractor arrives in a professionally wrapped vehicle—clean, branded, impressive. Guess who gets the referral for three more projects? In ${location.name}, where ${location.keyFeatures[0]} and ${location.keyFeatures[1]} drive purchasing decisions, your vehicle wrap isn't just decoration—it's your business card, your reputation, and your competitive edge rolling through ${location.county}.`,
      
      'suburban': `A ${location.name} homeowner was choosing between two contractors for their kitchen renovation. Both had similar prices and credentials. But one showed up in a rusted van with duct-taped bumpers, while the other arrived in a spotless, professionally wrapped vehicle with customer testimonials displayed right on the side. Which one felt safer inviting into their home? ${location.name} families invest heavily in their properties and their peace of mind. Your vehicle wrap signals that you're the professional choice they can trust with their most valuable asset.`,
      
      'mixed': `The small business owner in ${location.name} thought she couldn't compete with the big chains. Then she wrapped her delivery van with stunning graphics that perfectly captured her brand story. Suddenly, every delivery became mobile advertising. Customers started flagging her down on the street, asking about her services. Her vehicle wrap didn't just transport products—it transported her brand throughout ${location.county}, turning routine errands into customer acquisition opportunities.`,
      
      'industrial': `A fleet manager for a ${location.name} manufacturing company was tired of their vehicles looking shabby next to competitors at job sites. Six months after wrapping their fleet with cohesive branding, they landed their biggest contract yet. The prospect later admitted that seeing their professional-looking vehicles demonstrated the attention to detail they needed in a supplier. In ${location.name}'s competitive industrial market, your fleet speaks before you even enter the room.`
    };
    
    return businessStories[location.businessType] || businessStories['mixed'];
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords.join(', ')} />
        <link rel="canonical" href={`${domain}/${location.slug}`} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={`${domain}/${location.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Wrapping Chicago",
            "description": `Professional vehicle wraps serving ${location.name} and surrounding ${location.county} areas`,
            "url": `${domain}/${location.slug}`,
            "telephone": "+13125971286",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4711 N. Lamon Ave",
              "addressLocality": "Chicago", 
              "addressRegion": "IL",
              "postalCode": "60630",
              "addressCountry": "US"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": location.name,
                "containedInPlace": {
                  "@type": "AdministrativeArea",
                  "name": location.county
                }
              },
              ...location.zipCodes.map(zip => ({
                "@type": "PostalCode", 
                "postalCode": zip
              }))
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Vehicle Wrap Services",
              "itemListElement": services.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.name,
                  "description": service.description
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "description": service.price
                }
              }))
            }
          })}
        </script>

        {/* FAQ Schema removed - handled by dedicated FAQ schema components */}
      </Helmet>

      {/* Dedicated FAQ Schema component for location-specific FAQs */}
      <LocationFAQSchema 
        city={{ 
          name: location.name, 
          slug: location.slug,
          county: location.county,
          state: "Illinois",
          description: location.description,
          population: location.population,
          businessAreas: location.keyFeatures.join(', '),
          distance: "25 miles from Chicago",
          website: `https://www.wrappingchicago.com/vehicle-wraps-${location.slug}-il`
        }} 
        faqs={[
          {
            question: `How much do vehicle wraps cost in ${location.name}?`,
            answer: `Vehicle wrap costs in ${location.name} vary by size and complexity. Partial wraps start at $1,200, full car wraps from $2,500, commercial truck wraps from $3,500. We provide free quotes with same-day estimates for all ${location.name} customers.`
          },
          {
            question: `Do you serve all areas of ${location.name}?`,
            answer: `Yes! We provide vehicle wrap services throughout ${location.name} including all zip codes: ${location.zipCodes.join(', ')}. We also offer mobile service for on-site installations.`
          },
          {
            question: `What's included in ${location.name} vehicle wrap installation?`,
            answer: `Our ${location.name} vehicle wrap service includes free consultation, custom design, professional installation using premium materials, and comprehensive warranty. We handle everything from concept to completion.`
          }
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background/80 to-primary/5">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <Badge variant="secondary" className="text-sm">
                  Serving {location.name} • {location.county}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                #1 Vehicle Wraps {location.name} | Premium Car Wraps & Truck Graphics
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                {location.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Quote: (312) 597-1286
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Award className="w-5 h-5 mr-2" />
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Location Stats */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card>
                <CardHeader className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Population</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-primary">{location.population}</p>
                  <p className="text-sm text-muted-foreground">residents</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="text-center">
                  <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Median Income</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-primary">{location.medianIncome}</p>
                  <p className="text-sm text-muted-foreground">household</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Zip Codes</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm font-medium">
                    {location.zipCodes.join(", ")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Service Rating</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-primary">4.9/5</p>
                  <p className="text-sm text-muted-foreground">Google Reviews</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Location Story */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why {location.name} Businesses Choose Our Vehicle Wraps
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real results from real businesses in {location.county}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="p-8 border-l-4 border-l-primary">
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-muted-foreground italic">
                    {getLocationStory()}
                  </p>
                  <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                    <h3 className="text-xl font-bold text-primary mb-4">Built for {location.name}'s Success</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Our vehicle wraps aren't just pretty pictures—they're strategic business tools designed specifically for {location.name}'s market. 
                      We understand what drives purchasing decisions in {location.county}, and we craft every design to maximize your ROI. 
                      From materials that withstand local weather to designs that resonate with {location.keyFeatures[0]} customers, 
                      we deliver wraps that work as hard as you do.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Professional Vehicle Wrap Services {location.name}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete vehicle graphics solutions designed for {location.name}'s {location.businessType} market
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.details}
                    </p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <Button>Get Quote</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Local Focus */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Dominating {location.name} Since 2014
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Local expertise and market knowledge that drives results
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Why {location.name} Chooses Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Landmarks We Serve</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {location.landmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{landmark}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{location.name} Community Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.keyFeatures.map((feature, index) => (
                        <Badge key={index} variant="secondary">{feature}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Dominate {location.name}?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join successful businesses throughout {location.name} and {location.county} who chose professional vehicle wraps to accelerate their growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Call (312) 597-1286
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Zap className="w-5 h-5 mr-2" />
                Get Instant Quote
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Free quotes • Same-day response • Mobile service throughout {location.name}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChicagoAreaLocationPage;