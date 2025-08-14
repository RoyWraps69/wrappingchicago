import React from 'react';
import PageSEO from '@/components/seo/PageSEO';
import GenericServiceHero from '@/components/services/heroes/GenericServiceHero';
import CallToAction from '@/components/CallToAction';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MessageSquare, Package, TrendingUp, Users } from 'lucide-react';

const LogisticsWrapsPage = () => {
  const benefits = [
    "Professional fleet branding for logistics companies",
    "Supply chain and distribution service advertising", 
    "Warehousing and fulfillment promotion",
    "B2B credibility with branded commercial vehicles",
    "Complete fleet consistency across all vehicles",
    "Industry-specific messaging and imagery"
  ];

  const services = [
    {
      title: "Distribution Fleet Wraps",
      description: "Large-scale fleet wraps for distribution and supply chain vehicles",
      features: ["Fleet consistency", "Distribution center branding", "Supply chain imagery"]
    },
    {
      title: "Logistics Truck Graphics", 
      description: "Professional truck graphics for logistics and freight companies",
      features: ["B2B professional design", "Service capability display", "Route optimization messaging"]
    },
    {
      title: "Warehouse Vehicle Wraps",
      description: "Specialized wraps for warehouse and fulfillment center vehicles",
      features: ["Warehouse operations focus", "Efficiency messaging", "Technology integration"]
    }
  ];

  return (
    <>
      <PageSEO 
        title="Professional Logistics Vehicle Wraps Chicago | Supply Chain Fleet Graphics"
        description="Professional logistics and supply chain vehicle wraps in Chicago. Build B2B credibility with branded fleet graphics. Expert installation, commercial-grade materials. Trusted by logistics companies."
        keywords={[
          'logistics truck wraps Chicago',
          'supply chain vehicle wraps', 
          'distribution fleet graphics',
          'warehouse vehicle wraps',
          'freight truck graphics',
          'Chicago logistics advertising',
          'supply chain fleet branding'
        ]}
        canonicalUrl="https://www.wrappingchicago.com/logistics-wraps"
      />

      <GenericServiceHero serviceType="truck" />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Why Chicago Logistics Companies Choose Vehicle Wraps
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Build B2B credibility and showcase your supply chain expertise with professional logistics vehicle wraps. 
              Create consistent fleet branding for your distribution and warehousing operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">B2B Credibility</h3>
              <p className="text-gray-600">Professional branding builds trust with business clients</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Fleet Consistency</h3>
              <p className="text-gray-600">Uniform branding across your entire logistics fleet</p>
            </Card>
            <Card className="p-6 text-center">
              <Package className="h-12 w-12 text-brand-red mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Supply Chain Focus</h3>
              <p className="text-gray-600">Industry-specific messaging for logistics and distribution</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Complete Logistics Wrap Solutions</h3>
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
                alt="Professional logistics company truck wrap with supply chain and distribution branding" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-brand-navy text-center mb-8">Our Logistics Wrap Services</h3>
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
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Ready to Grow Your Logistics Business?</h3>
            <p className="text-lg text-gray-600 mb-8">Get a free quote and design mockup for your logistics fleet</p>
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

export default LogisticsWrapsPage;