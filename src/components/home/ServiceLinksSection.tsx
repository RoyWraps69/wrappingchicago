import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin, Star, Truck, Car, Palette } from "lucide-react";
import { Link } from 'react-router-dom';

const ServiceLinksSection = () => {
  const primaryServices = [
    { 
      name: "Car Wraps", 
      href: "/services/car-wraps", 
      description: "Custom car wraps & color changes",
      icon: Car,
      popular: true
    },
    { 
      name: "Truck Wraps", 
      href: "/services/truck-wraps", 
      description: "Commercial truck graphics & fleet branding",
      icon: Truck,
      popular: true
    },
    { 
      name: "Van Wraps", 
      href: "/services/van-wraps", 
      description: "Business van advertising solutions"
    },
    { 
      name: "Fleet Wraps", 
      href: "/services/fleet-wraps", 
      description: "Multi-vehicle branding programs"
    },
    { 
      name: "Luxury Wraps", 
      href: "/services/luxury-exotic-wraps", 
      description: "Premium exotic vehicle wraps",
      icon: Palette
    },
    { 
      name: "Color Change", 
      href: "/services/color-change-wraps", 
      description: "Complete vehicle color transformation"
    }
  ];

  const tradeServices = [
    { name: "Plumbing Wraps", href: "/services/plumbing-wraps", trades: "Plumbers" },
    { name: "HVAC Wraps", href: "/services/hvac-wraps", trades: "HVAC Technicians" },
    { name: "Electrical Wraps", href: "/services/electrical-wraps", trades: "Electricians" },
    { name: "Movers Wraps", href: "/services/moving-wraps", trades: "Moving Companies" },
    { name: "Delivery Wraps", href: "/services/delivery-wraps", trades: "Delivery Services" },
    { name: "Contractor Wraps", href: "/services/contractor-wraps", trades: "General Contractors" }
  ];

  const locationLinks = [
    { name: "Chicago", href: "/locations/chicago-vehicle-wraps" },
    { name: "Evanston", href: "/locations/evanston-vehicle-wraps" },
    { name: "Naperville", href: "/locations/naperville-vehicle-wraps" },
    { name: "Schaumburg", href: "/locations/schaumburg-vehicle-wraps" },
    { name: "Oak Park", href: "/locations/oak-park-vehicle-wraps" },
    { name: "Skokie", href: "/locations/skokie-vehicle-wraps" },
    { name: "Arlington Heights", href: "/locations/arlington-heights-wraps" },
    { name: "Palatine", href: "/locations/palatine-vehicle-wraps" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Vehicle Wrap Solutions Across Chicago
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From personal car wraps to commercial fleet graphics, we deliver professional results with premium materials and certified installation. Serving Chicago and surrounding communities since 2000.
          </p>
        </div>

        {/* Primary Services Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Vehicle Wrap Services</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryServices.map((service, index) => {
              const IconComponent = service.icon || ArrowRight;
              return (
                <Link 
                  key={index}
                  to={service.href}
                  className="group relative bg-muted/30 hover:bg-muted/50 p-6 rounded-lg border transition-all hover:shadow-md"
                >
                  {service.popular && (
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
                      <div className="flex items-center text-primary text-sm font-medium">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Trade Services */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Truck className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Trade Vehicle Wraps</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tradeServices.map((service, index) => (
              <Link 
                key={index}
                to={service.href}
                className="group flex items-center justify-between p-4 rounded-lg border bg-background hover:bg-muted/30 transition-colors"
              >
                <div>
                  <h4 className="font-semibold group-hover:text-primary transition-colors">
                    {service.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{service.trades}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Service Areas</h3>
          </div>
          
          <div className="bg-muted/30 p-6 rounded-lg">
            <p className="text-muted-foreground mb-4">
              Professional vehicle wrap installation throughout the greater Chicago area:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {locationLinks.map((location, index) => (
                <Link 
                  key={index}
                  to={location.href}
                  className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                >
                  {location.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center bg-primary/10 p-8 rounded-lg border">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Vehicle?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get a free consultation and quote for your vehicle wrap project. Our expert team is ready to help you create stunning graphics that deliver results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (312) 597-1286
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceLinksSection;