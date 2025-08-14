import React from 'react';
import PageSEO from '@/components/seo/PageSEO';
import GenericServiceHero from '@/components/services/heroes/GenericServiceHero';
import CallToAction from '@/components/CallToAction';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MessageSquare, Zap, TrendingUp, Users } from 'lucide-react';

const ElectricalWrapsPage = () => {
  const benefits = [
    "Professional credibility for electrical contractors",
    "Safety-focused messaging builds customer trust", 
    "Emergency electrical service visibility",
    "Licensed and insured information display",
    "Residential and commercial service advertising",
    "Complete fleet branding solutions"
  ];

  const services = [
    {
      title: "Emergency Electrician Wraps",
      description: "High-visibility emergency electrical service graphics for after-hours calls",
      features: ["24/7 emergency contact", "Safety messaging", "Quick response graphics"]
    },
    {
      title: "Residential Electrical Van Wraps", 
      description: "Professional van wraps for residential electrical contractors and handymen",
      features: ["Home electrical services", "Safety certifications", "Before/after imagery"]
    },
    {
      title: "Commercial Electrical Graphics",
      description: "Heavy-duty truck graphics for commercial and industrial electrical work",
      features: ["Industrial imagery", "Large project showcase", "Commercial certifications"]
    }
  ];

  return (
    <>
      <PageSEO 
        title="Professional Electrician Vehicle Wraps Chicago | Electrical Contractor Graphics"
        description="Professional electrician truck and van wraps in Chicago. Build trust with safety-focused electrical contractor graphics. Expert installation, premium materials. Trusted by 75+ electricians."
        keywords={[
          'electrician truck wraps Chicago',
          'electrical contractor van wraps', 
          'electrical vehicle graphics',
          'emergency electrician wraps',
          'commercial electrical graphics',
          'Chicago electrician advertising',
          'electrical fleet graphics'
        ]}
        canonicalUrl="https://www.wrappingchicago.com/electrical-wraps"
      />

      <GenericServiceHero serviceType="truck" />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Why Chicago Electricians Choose Vehicle Wraps
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Build instant trust and credibility with professional electrical contractor vehicle wraps. 
              Showcase your expertise and safety focus with branded vehicles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Build Trust</h3>
              <p className="text-gray-600">Professional branding builds confidence for electrical work</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Safety Focus</h3>
              <p className="text-gray-600">Emphasize safety and licensing with professional graphics</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Emergency Visibility</h3>
              <p className="text-gray-600">24/7 emergency electrical service advertising</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Complete Electrical Wrap Solutions</h3>
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
                src="/lovable-uploads/98c22c48-e4fc-40d9-bbb0-b1f4c6dc9fff.png" 
                alt="Professional electrician service truck wrap with safety and licensing information" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-brand-navy text-center mb-8">Our Electrical Wrap Services</h3>
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
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Ready to Grow Your Electrical Business?</h3>
            <p className="text-lg text-gray-600 mb-8">Get a free quote and design mockup for your electrical vehicles</p>
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

export default ElectricalWrapsPage;