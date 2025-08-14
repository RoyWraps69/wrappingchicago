import React from 'react';
import PageSEO from '@/components/seo/PageSEO';
import GenericServiceHero from '@/components/services/heroes/GenericServiceHero';
import CallToAction from '@/components/CallToAction';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MessageSquare, MapPin, TrendingUp, Users } from 'lucide-react';

const DeliveryWrapsPage = () => {
  const benefits = [
    "Eye-catching graphics for food delivery services",
    "Brand recognition for delivery apps and services", 
    "Professional credibility for delivery drivers",
    "Service area and contact information display",
    "Complete fleet branding for delivery companies",
    "Weather-resistant materials for daily use"
  ];

  const services = [
    {
      title: "Food Delivery Wraps",
      description: "Appetizing graphics for food delivery services, restaurants, and meal kit companies",
      features: ["Food imagery", "App branding", "Delivery area maps"]
    },
    {
      title: "Package Delivery Graphics", 
      description: "Professional graphics for package delivery services and courier companies",
      features: ["Professional appearance", "Service guarantees", "Contact information"]
    },
    {
      title: "Express Delivery Wraps",
      description: "High-visibility wraps for express and same-day delivery services",
      features: ["Speed messaging", "Time guarantees", "Service area coverage"]
    }
  ];

  return (
    <>
      <PageSEO 
        title="Professional Food & Package Delivery Vehicle Wraps Chicago | Delivery Service Graphics"
        description="Professional food and package delivery vehicle wraps in Chicago. Build brand recognition with eye-catching delivery service graphics. Expert installation, durable materials for daily use."
        keywords={[
          'food delivery wraps Chicago',
          'delivery service vehicle wraps', 
          'package delivery graphics',
          'courier vehicle wraps',
          'meal delivery van wraps',
          'Chicago delivery advertising',
          'delivery fleet graphics'
        ]}
        canonicalUrl="https://www.wrappingchicago.com/delivery-wraps"
      />

      <GenericServiceHero serviceType="van" />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Why Chicago Delivery Services Choose Vehicle Wraps
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Build brand recognition and customer trust with professional delivery vehicle wraps. 
              Stand out in the competitive delivery market with eye-catching, professional graphics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Brand Recognition</h3>
              <p className="text-gray-600">Build instant recognition for your delivery service brand</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Customer Trust</h3>
              <p className="text-gray-600">Professional vehicles build confidence in delivery services</p>
            </Card>
            <Card className="p-6 text-center">
              <MapPin className="h-12 w-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Service Area Marketing</h3>
              <p className="text-gray-600">Advertise your delivery zones throughout Chicago</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Complete Delivery Service Wrap Solutions</h3>
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
                src="/lovable-uploads/b9a1aa4c-3d1a-482a-9b9d-de00b53de732.png" 
                alt="Professional delivery service van wrap with branded graphics and contact information" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-brand-navy text-center mb-8">Our Delivery Service Wrap Options</h3>
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
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Ready to Grow Your Delivery Business?</h3>
            <p className="text-lg text-gray-600 mb-8">Get a free quote and design mockup for your delivery vehicles</p>
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

export default DeliveryWrapsPage;