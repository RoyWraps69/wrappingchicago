import React from 'react';
import PageSEO from '@/components/seo/PageSEO';
import GenericServiceHero from '@/components/services/heroes/GenericServiceHero';
import CallToAction from '@/components/CallToAction';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MessageSquare, Wrench, TrendingUp, Users } from 'lucide-react';

const PlumbingWrapsPage = () => {
  const benefits = [
    "24/7 mobile advertising for your plumbing business",
    "Professional credibility with branded service vehicles", 
    "Increased service calls and customer trust",
    "Weather-resistant materials for Chicago conditions",
    "Complete fleet branding solutions",
    "Emergency service visibility"
  ];

  const services = [
    {
      title: "Emergency Plumbing Truck Wraps",
      description: "Bold, high-visibility graphics for emergency plumbing services with 24/7 contact information",
      features: ["Emergency contact display", "Service area coverage", "Professional imagery"]
    },
    {
      title: "Service Van Wraps", 
      description: "Complete van wraps for residential and commercial plumbing services",
      features: ["Full coverage design", "Before/after photos", "Service specialties"]
    },
    {
      title: "Drain Cleaning Vehicle Graphics",
      description: "Specialized graphics for drain cleaning and rooter services",
      features: ["Drain cleaning imagery", "Equipment showcase", "Problem-solution messaging"]
    }
  ];

  return (
    <>
      <PageSEO 
        title="Professional Plumbing Vehicle Wraps Chicago | Build Trust & Get More Calls"
        description="Professional plumbing truck and van wraps in Chicago. Increase service calls by 40% with branded vehicles. Expert installation, premium materials. Trusted by 100+ plumbers."
        keywords={[
          'plumbing truck wraps Chicago',
          'plumber van wraps', 
          'plumbing vehicle graphics',
          'emergency plumbing wraps',
          'drain cleaning truck wraps',
          'Chicago plumber advertising',
          'plumbing fleet graphics'
        ]}
        canonicalUrl="https://www.wrappingchicago.com/plumbing-wraps"
      />

      <GenericServiceHero serviceType="truck" />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Why Chicago Plumbers Choose Vehicle Wraps
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stand out from competitors and build instant credibility with professional plumbing vehicle wraps. 
              Our clients see average 40% increase in service calls within 6 months.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">40% More Calls</h3>
              <p className="text-gray-600">Average increase in service calls within 6 months of wrap installation</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Instant Credibility</h3>
              <p className="text-gray-600">Professional branded vehicles build trust before you even arrive</p>
            </Card>
            <Card className="p-6 text-center">
              <Wrench className="h-12 w-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">24/7 Advertising</h3>
              <p className="text-gray-600">Your vehicles work as mobile billboards even when parked</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Complete Plumbing Wrap Solutions</h3>
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
                src="/lovable-uploads/905af9f6-be4c-4556-b437-8aab136a5307.png" 
                alt="Professional plumbing service vehicle wrap with company branding" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-brand-navy text-center mb-8">Our Plumbing Wrap Services</h3>
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
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Ready to Grow Your Plumbing Business?</h3>
            <p className="text-lg text-gray-600 mb-8">Get a free quote and design mockup for your plumbing vehicles</p>
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

export default PlumbingWrapsPage;