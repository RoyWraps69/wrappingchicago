import React from 'react';
import PageSEO from '@/components/seo/PageSEO';
import GenericServiceHero from '@/components/services/heroes/GenericServiceHero';
import CallToAction from '@/components/CallToAction';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MessageSquare, Thermometer, TrendingUp, Users } from 'lucide-react';

const HVACWrapsPage = () => {
  const benefits = [
    "Year-round advertising for heating and cooling services",
    "Professional credibility in competitive HVAC market", 
    "Seasonal service reminders with branded vehicles",
    "Weather-resistant materials for Chicago winters",
    "Emergency service visibility 24/7",
    "Complete fleet branding solutions"
  ];

  const services = [
    {
      title: "Heating & Cooling Truck Wraps",
      description: "Complete wraps showcasing both heating and cooling services for year-round marketing",
      features: ["Seasonal service messaging", "Temperature graphics", "Energy efficiency focus"]
    },
    {
      title: "Emergency HVAC Van Wraps", 
      description: "High-visibility emergency service graphics for after-hours heating and cooling calls",
      features: ["24/7 emergency contact", "Quick response messaging", "Service area coverage"]
    },
    {
      title: "Commercial HVAC Graphics",
      description: "Professional fleet graphics for commercial heating and cooling contractors",
      features: ["Commercial focus imagery", "Large equipment showcase", "Professional certifications"]
    }
  ];

  return (
    <>
      <PageSEO 
        title="Professional HVAC Vehicle Wraps Chicago | Heating & Cooling Truck Graphics"
        description="Professional HVAC truck and van wraps in Chicago. Year-round marketing for heating & cooling services. Expert installation, weather-resistant materials. Trusted by 50+ HVAC contractors."
        keywords={[
          'HVAC truck wraps Chicago',
          'heating cooling van wraps', 
          'HVAC vehicle graphics',
          'emergency HVAC wraps',
          'commercial HVAC graphics',
          'Chicago HVAC advertising',
          'heating cooling fleet wraps'
        ]}
        canonicalUrl="https://www.wrappingchicago.com/hvac-wraps"
      />

      <GenericServiceHero serviceType="truck" />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Why Chicago HVAC Companies Choose Vehicle Wraps
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stand out in the competitive HVAC market with professional vehicle wraps. 
              Market your heating and cooling services year-round with mobile advertising.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Year-Round Marketing</h3>
              <p className="text-gray-600">Advertise heating services in winter, cooling in summer</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Professional Trust</h3>
              <p className="text-gray-600">Branded vehicles build confidence for expensive HVAC investments</p>
            </Card>
            <Card className="p-6 text-center">
              <Thermometer className="h-12 w-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Emergency Visibility</h3>
              <p className="text-gray-600">24/7 emergency service advertising when customers need you most</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Complete HVAC Wrap Solutions</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/ea32c99e-7c6e-43f1-b122-f3c64fb9fdf2.png" 
                alt="Professional HVAC service truck wrap with heating and cooling branding" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-brand-navy text-center mb-8">Our HVAC Wrap Services</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6">
                  <h4 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Ready to Grow Your HVAC Business?</h3>
            <p className="text-lg text-gray-600 mb-8">Get a free quote and design mockup for your HVAC vehicles</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-red hover:bg-red-700">
                <a href="tel:3125971286" className="inline-flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (312) 597-1286
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact" className="inline-flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
};

export default HVACWrapsPage;