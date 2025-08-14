import React from 'react';
import PageSEO from '@/components/seo/PageSEO';
import GenericServiceHero from '@/components/services/heroes/GenericServiceHero';
import CallToAction from '@/components/CallToAction';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MessageSquare, Truck, TrendingUp, Users } from 'lucide-react';

const MoversWrapsPage = () => {
  const benefits = [
    "Build credibility for your moving company",
    "Professional appearance reduces customer anxiety", 
    "Interstate and local moving service advertising",
    "Storage service promotion on vehicles",
    "Complete fleet branding for consistency",
    "Damage-resistant materials for heavy-duty use"
  ];

  const services = [
    {
      title: "Moving Truck Wraps",
      description: "Large-format truck wraps for moving trucks and box trucks with maximum advertising space",
      features: ["Full truck coverage", "Service area maps", "Moving tips graphics"]
    },
    {
      title: "Local Moving Van Graphics", 
      description: "Professional van wraps for local and residential moving services",
      features: ["Local service focus", "Residential imagery", "Contact information display"]
    },
    {
      title: "Interstate Moving Graphics",
      description: "Professional graphics for long-distance and interstate moving companies",
      features: ["Interstate licensing display", "Service area coverage", "Professional credibility"]
    }
  ];

  return (
    <>
      <PageSEO 
        title="Professional Moving Company Vehicle Wraps Chicago | Moving Truck Graphics"
        description="Professional moving company truck and van wraps in Chicago. Build customer trust with branded moving vehicles. Expert installation, durable materials. Trusted by 30+ moving companies."
        keywords={[
          'moving truck wraps Chicago',
          'moving company van wraps', 
          'moving vehicle graphics',
          'local movers wraps',
          'interstate moving graphics',
          'Chicago moving advertising',
          'moving fleet graphics'
        ]}
        canonicalUrl="https://www.wrappingchicago.com/movers-wraps"
      />

      <GenericServiceHero serviceType="truck" />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Why Chicago Moving Companies Choose Vehicle Wraps
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Build customer trust and credibility with professional moving company vehicle wraps. 
              Reduce customer anxiety about hiring movers with branded, professional vehicles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Build Trust</h3>
              <p className="text-gray-600">Professional branding reduces customer anxiety about hiring movers</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Professional Image</h3>
              <p className="text-gray-600">Branded vehicles create confidence for expensive moving services</p>
            </Card>
            <Card className="p-6 text-center">
              <Truck className="h-12 w-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Mobile Advertising</h3>
              <p className="text-gray-600">Your trucks advertise your services throughout Chicago</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Complete Moving Company Wrap Solutions</h3>
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
                src="/lovable-uploads/51269403-3cfa-4a99-ae4b-cfab9a74115b.png" 
                alt="Professional moving company truck wrap with branded graphics and contact information" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-brand-navy text-center mb-8">Our Moving Company Wrap Services</h3>
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
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Ready to Grow Your Moving Business?</h3>
            <p className="text-lg text-gray-600 mb-8">Get a free quote and design mockup for your moving vehicles</p>
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

export default MoversWrapsPage;