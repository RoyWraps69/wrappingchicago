import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle2, Car, Palette, Star, MapPin, Clock, Shield, Award } from "lucide-react";
import { Link } from 'react-router-dom';

const CarWrapsContentSection = () => {
  const carWrapServices = [
    {
      title: "Color Change Wraps",
      description: "Complete vehicle transformation with premium vinyl films",
      features: ["Matte, Gloss & Satin finishes", "Thousands of color options", "Reversible without paint damage", "UV protection included"],
      price: "Starting at $2,500",
      popular: true
    },
    {
      title: "Custom Graphics",
      description: "Unique designs and artwork for personal expression",
      features: ["Custom design consultation", "Digital mockups", "Professional installation", "High-resolution printing"],
      price: "Starting at $1,800"
    },
    {
      title: "Paint Protection Film",
      description: "Invisible protection for high-end vehicles",
      features: ["Self-healing technology", "10-year warranty", "Complete paint preservation", "Maintains resale value"],
      price: "Starting at $3,500"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Design Consultation",
      description: "Work with our designers to create the perfect look with 3D previews and material samples",
      icon: Palette
    },
    {
      step: "2", 
      title: "Vehicle Preparation",
      description: "Thorough cleaning and surface preparation ensure optimal adhesion and longevity",
      icon: Shield
    },
    {
      step: "3",
      title: "Professional Installation", 
      description: "Expert application using industry best practices, typically completed in 2-3 days",
      icon: Award
    },
    {
      step: "4",
      title: "Quality Inspection",
      description: "Comprehensive inspection and care instructions ensure your wrap looks perfect",
      icon: CheckCircle2
    }
  ];

  const benefits = [
    "Paint protection from UV rays and road debris",
    "Reversible customization preserves original paint",
    "Cost-effective alternative to custom paint jobs", 
    "Faster installation with minimal downtime",
    "Enhanced resale value protection",
    "Easy maintenance and cleaning"
  ];

  return (
    <div className="space-y-16">
      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Car Wrap Services & Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional car wrap installation using premium 3M and Avery Dennison materials. Custom car wraps, color change wraps, and protective films with certified installation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {carWrapServices.map((service, index) => (
              <div key={index} className="relative bg-background border rounded-lg p-6 hover:shadow-lg transition-all">
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full" variant={service.popular ? "default" : "outline"}>
                  Get Free Quote
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Installation Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our proven installation process ensures perfect results every time. From initial consultation to final inspection, we maintain the highest standards of quality and customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits & Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Professional Car Wraps</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Car wraps offer numerous advantages over traditional paint jobs, making them the preferred choice for Chicago drivers who want flexibility, protection, and style.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/10 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Chicago Area Coverage</h3>
                <p className="text-muted-foreground mb-4">
                  Professional car wrap installation throughout the greater Chicago area including mobile service to your location.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Serving Chicago, Evanston, Naperville, Schaumburg, and surrounding areas</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-background border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Quick Turnaround</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Most car wraps completed within 2-3 days. Same-day service available for simple graphics and partial wraps.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Partial wraps: Same day to 1 day</li>
                  <li>• Full color change: 2-3 days</li>
                  <li>• Complex graphics: 3-4 days</li>
                  <li>• Paint protection film: 2-3 days</li>
                </ul>
              </div>

              <div className="bg-background border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Premium Materials</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  We use only the highest quality vinyl films from industry leaders 3M and Avery Dennison.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 5-7 year material warranties</li>
                  <li>• UV-resistant formulations</li>
                  <li>• Conformable for complex curves</li>
                  <li>• Clean removal guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Car?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your car wrap project. Our expert team is ready to help you create the perfect look for your vehicle.
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

export default CarWrapsContentSection;