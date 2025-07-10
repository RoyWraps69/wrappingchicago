import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin, Star } from "lucide-react";
import { Link } from 'react-router-dom';

const InternalLinkingSection = () => {
  const servicePages = [
    { name: "Car Wraps", href: "/services/car-wraps", description: "Complete & partial car wraps" },
    { name: "Truck Wraps", href: "/services/truck-wraps", description: "Commercial truck graphics" },
    { name: "Van Wraps", href: "/services/van-wraps", description: "Business van advertising" },
    { name: "Fleet Wraps", href: "/services/fleet-wraps", description: "Multi-vehicle branding" },
    { name: "Luxury Wraps", href: "/services/luxury-exotic-wraps", description: "Premium exotic vehicles" },
    { name: "Specialty Wraps", href: "/services/specialty-wraps", description: "Chrome, matte, carbon fiber" }
  ];

  const locationPages = [
    { name: "Lincoln Park", href: "/locations/lincoln-park-chicago", area: "North Side" },
    { name: "River North", href: "/locations/river-north-chicago", area: "Downtown" },
    { name: "Naperville", href: "/locations/naperville-illinois", area: "West Suburbs" },
    { name: "Schaumburg", href: "/locations/schaumburg-illinois", area: "Northwest" },
    { name: "Oak Brook", href: "/locations/oak-brook-illinois", area: "West Suburbs" },
    { name: "Wicker Park", href: "/locations/wicker-park-chicago", area: "West Side" }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Vehicle Wrap Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional services across Chicago and surrounding areas. Premium materials, certified installation, guaranteed results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Service Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-primary" />
              Our Services
            </h3>
            <div className="grid gap-4">
              {servicePages.map((service, index) => (
                <Link 
                  key={index}
                  to={service.href}
                  className="group flex items-center justify-between p-4 rounded-lg border bg-background hover:bg-muted/50 transition-colors"
                >
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      {service.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Location Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              Service Areas
            </h3>
            <div className="grid gap-4">
              {locationPages.map((location, index) => (
                <Link 
                  key={index}
                  to={location.href}
                  className="group flex items-center justify-between p-4 rounded-lg border bg-background hover:bg-muted/50 transition-colors"
                >
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      {location.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{location.area}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Phone className="w-5 h-5 mr-2" />
              Get Free Quote: (312) 597-1286
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/service-areas">
                <MapPin className="w-5 h-5 mr-2" />
                View All Locations
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalLinkingSection;