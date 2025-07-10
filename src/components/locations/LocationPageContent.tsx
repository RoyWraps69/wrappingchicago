import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star, Clock, CheckCircle, Users, DollarSign } from "lucide-react";
import { Location } from "@/data/locations";

interface LocationPageContentProps {
  location: Location;
}

const LocationPageContent: React.FC<LocationPageContentProps> = ({ location }) => {
  const services = [
    { name: "Car Wraps", description: "Full and partial wraps for personal vehicles", price: "From $2,500" },
    { name: "Truck Wraps", description: "Commercial and personal truck graphics", price: "From $3,500" },
    { name: "Van Wraps", description: "Perfect for business advertising", price: "From $3,000" },
    { name: "Fleet Wraps", description: "Consistent branding across multiple vehicles", price: "Custom quote" },
    { name: "Luxury Wraps", description: "Premium finishes for high-end vehicles", price: "From $4,500" },
    { name: "Protective Films", description: "Clear PPF for paint protection", price: "From $1,800" }
  ];

  const benefits = [
    "Free design consultation",
    "Premium 3M and Avery vinyl",
    "Certified installation technicians", 
    "5-year material warranty",
    "Mobile service available",
    "Same-day quotes"
  ];

  return (
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
              Vehicle Wraps {location.name}
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
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
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

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Local Landmarks We Serve</CardTitle>
                <CardDescription>
                  Popular destinations near our {location.name} service area
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {location.landmarks.map((landmark, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{landmark}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why Choose Us in {location.name}</CardTitle>
                <CardDescription>
                  Local expertise and premium service
                </CardDescription>
              </CardHeader>
              <CardContent>
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
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vehicle Wrap Services in {location.name}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete vehicle transformation services tailored for {location.name} residents and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                  </div>
                  <Button className="w-full">Get Quote</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Focus */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proudly Serving {location.name}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding our local community and delivering personalized service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Local Expertise</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We understand {location.name}"s unique character and vehicle needs. Our team has been serving this community for years, building relationships and delivering quality work that withstands local weather conditions.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Key Features of {location.name}:</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.keyFeatures.map((feature, index) => (
                      <Badge key={index} variant="secondary">{feature}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Hours & Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="font-medium">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="font-medium">Sunday: By appointment</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Call: (312) 597-1286</p>
                    <p className="text-sm text-muted-foreground">Free quotes • Same day response</p>
                  </div>
                </div>
                <Button className="w-full">
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPageContent;