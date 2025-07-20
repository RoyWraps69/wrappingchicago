import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle2, Truck, DollarSign, Users, Zap, Clock, Shield } from "lucide-react";
import { Link } from 'react-router-dom';

const TruckWrapsContentSection = () => {
  const truckWrapTypes = [
    {
      title: "Pickup Truck Wraps",
      description: "Professional graphics for contractors and small businesses",
      features: ["Full cab and bed coverage", "Door graphics packages", "Tailgate advertising", "Magnetic sign options"],
      price: "Starting at $2,800",
      vehicles: ["Ford F-150", "Chevy Silverado", "Ram 1500", "Toyota Tacoma"]
    },
    {
      title: "Box Truck Graphics",
      description: "Maximum advertising space for delivery and cargo vehicles",
      features: ["Full wrap coverage", "Rear door graphics", "Side panel advertising", "Fleet consistency"],
      price: "Starting at $4,500",
      vehicles: ["Isuzu NPR", "Ford E-Series", "Chevy Express", "Mercedes Sprinter"],
      popular: true
    },
    {
      title: "Semi Truck Wraps",
      description: "Highway advertising for long-haul and local trucking",
      features: ["Cab wraps", "Trailer graphics", "DOT compliance", "High-impact visibility"],
      price: "Starting at $6,500",
      vehicles: ["Peterbilt", "Kenworth", "Freightliner", "Volvo"]
    }
  ];

  const industries = [
    {
      name: "Contractors & Trades",
      services: ["Plumbing", "Electrical", "HVAC", "Roofing", "Construction", "Landscaping"],
      icon: Truck
    },
    {
      name: "Delivery & Logistics", 
      services: ["Package Delivery", "Food Delivery", "Courier Services", "Transportation"],
      icon: Zap
    },
    {
      name: "Service Professionals",
      services: ["Pest Control", "Cleaning Services", "Security", "Healthcare"],
      icon: Users
    }
  ];

  const roiStats = [
    { metric: "600x", description: "More impressions than static billboards" },
    { metric: "70,000", description: "People reached daily per vehicle" },
    { metric: "15-30%", description: "Increase in new customer inquiries" },
    { metric: "5-7 years", description: "Wrap lifespan for continuous marketing" }
  ];

  return (
    <div className="space-y-16">
      {/* Truck Wrap Types */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Commercial Truck Wrap Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional truck wraps for all vehicle types. Heavy-duty materials designed for commercial use with warranties up to 7 years.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {truckWrapTypes.map((type, index) => (
              <div key={index} className="relative bg-background border rounded-lg p-6 hover:shadow-lg transition-all">
                {type.popular && (
                  <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <div className="text-2xl font-bold text-primary mb-4">{type.price}</div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Features:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Common Vehicles:</h4>
                  <div className="flex flex-wrap gap-1">
                    {type.vehicles.map((vehicle, idx) => (
                      <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                        {vehicle}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full" variant={type.popular ? "default" : "outline"}>
                  Get Quote
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve in Chicago</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our truck wrap expertise spans dozens of industries throughout the Chicago area. We understand the unique marketing needs and regulations for different trades and professions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} className="bg-background border rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{industry.name}</h3>
                  <div className="space-y-2">
                    {industry.services.map((service, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full inline-block mr-2 mb-2">
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI & Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Return on Investment from Truck Wraps</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional truck wraps deliver exceptional marketing value compared to traditional advertising methods. Studies show that vehicle graphics generate impressive results for Chicago businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {roiStats.map((stat, index) => (
              <div key={index} className="text-center bg-background border rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Business Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Cost-Effective Marketing</h4>
                    <p className="text-muted-foreground text-sm">One-time investment provides 5-7 years of 24/7 advertising</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Professional Credibility</h4>
                    <p className="text-muted-foreground text-sm">Professional appearance builds customer trust and confidence</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Increased Service Calls</h4>
                    <p className="text-muted-foreground text-sm">Clients typically see 15-30% growth in new customer inquiries</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Technical Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Heavy-Duty Materials</h4>
                    <p className="text-muted-foreground text-sm">Commercial-grade vinyl withstands job sites and daily wear</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Minimal Downtime</h4>
                    <p className="text-muted-foreground text-sm">Most truck wraps completed in 2-3 days with scheduling flexibility</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Paint Protection</h4>
                    <p className="text-muted-foreground text-sm">Wraps protect vehicle paint from UV damage and wear</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Trucks Into Mobile Billboards</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to turn your commercial vehicles into powerful marketing tools? Contact Wrapping Chicago today for your free consultation and discover how professional truck wraps can drive your business growth.
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
      </section>
    </div>
  );
};

export default TruckWrapsContentSection;