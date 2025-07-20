
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import MetaTags from '@/components/seo/MetaTags';
import IndexingPriority from '@/components/seo/IndexingPriority';
import InternalLinksFooter from '@/components/seo/InternalLinksFooter';
import PricingHero from '@/components/heroes/PricingHero';
import { Receipt, BadgePercent, Tags, BadgeDollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingPage = () => {
  // Current date for SEO purposes
  const currentDate = new Date().toISOString().split('T')[0];

  // Pricing packages
  const pricingPackages = [
    {
      name: "Basic Vehicle Lettering",
      price: "From $500",
      features: [
        "Company name & phone number",
        "Basic logo application",
        "Single color design",
        "Doors or quarter panels only",
        "5-year warranty",
        "Quick turnaround (1-2 days)"
      ],
      icon: Tags,
      popular: false,
      buttonText: "Get a Quote",
      variant: "secondary"
    },
    {
      name: "Partial Vehicle Wrap",
      price: "From $1,500",
      features: [
        "Custom design creation",
        "Multi-color graphics",
        "Logo & business info",
        "Covers 25-75% of vehicle",
        "5-year warranty",
        "Installation in 2-3 days"
      ],
      icon: BadgePercent,
      popular: true,
      buttonText: "Most Popular Choice",
      variant: "gradient"
    },
    {
      name: "Full Vehicle Wrap",
      price: "From $3,500",
      features: [
        "Complete vehicle coverage",
        "Professional design consultation",
        "Premium 3M vinyl materials",
        "High-impact graphics & imagery",
        "5-year warranty",
        "Installation in 3-5 days"
      ],
      icon: Receipt,
      popular: false,
      buttonText: "Get a Quote",
      variant: "default"
    },
    {
      name: "Commercial Fleet Package",
      price: "Custom Pricing",
      features: [
        "Consistent branding across fleet",
        "Volume discounts available",
        "Template designs for easy replication",
        "Project management services",
        "Extended warranty options",
        "Scheduled installation to minimize downtime"
      ],
      icon: BadgeDollarSign,
      popular: false,
      buttonText: "Request Fleet Quote",
      variant: "outline"
    }
  ];

  // Vehicle-specific pricing
  const vehiclePricing = [
    {
      category: "Cars & Sedans",
      items: [
        { service: "Full Wrap", price: "$2,500 - $4,000" },
        { service: "Partial Wrap", price: "$1,500 - $2,500" },
        { service: "Color Change", price: "$3,000 - $4,500" },
        { service: "Basic Lettering", price: "$500 - $800" }
      ]
    },
    {
      category: "Trucks & Vans",
      items: [
        { service: "Full Wrap", price: "$3,500 - $7,000" },
        { service: "Partial Wrap", price: "$2,000 - $3,500" },
        { service: "Color Change", price: "$4,500 - $7,500" },
        { service: "Basic Lettering", price: "$600 - $1,200" }
      ]
    },
    {
      category: "Specialty Vehicles",
      items: [
        { service: "Box Trucks", price: "$4,000 - $8,000" },
        { service: "Food Trucks", price: "$5,000 - $9,000" },
        { service: "Trailers", price: "$2,000 - $5,000" },
        { service: "Luxury Vehicles", price: "$4,500 - $8,000" }
      ]
    }
  ];

  return (
    <>
      <MetaTags
        title="Vehicle Wrap Pricing | Chicago Fleet Wraps"
        description="Transparent pricing for professional vehicle wraps in Chicago. View our competitive rates for car wraps, truck wraps, fleet wraps, and color change wraps."
        keywords="vehicle wrap pricing, car wrap cost Chicago, truck wrap pricing, fleet wrap packages, Chicago vehicle wrap prices"
        canonicalUrl="/pricing"
        lastModified={currentDate}
      />
      <IndexingPriority priority="high" />
      
      <div className="flex flex-col min-h-screen">
        
        <main className="flex-grow">
          {/* Hero Section */}
          <PricingHero />
          
          {/* Pricing Packages */}
          <section id="pricing-packages" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-navy mb-4">Vehicle Wrap Packages</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Choose from our most popular vehicle wrap options, or contact us for a custom solution tailored to your specific needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {pricingPackages.map((pkg, index) => (
                  <div 
                    key={index} 
                    className={`bg-white border rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 ${
                      pkg.popular ? 'border-brand-red ring-2 ring-brand-red/20' : 'border-gray-200'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="bg-brand-red text-white text-center py-2 font-medium">
                        Most Popular
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gray-100 mb-4 mx-auto">
                        <pkg.icon className="h-6 w-6 text-brand-red" />
                      </div>
                      <h3 className="text-xl font-bold text-center mb-2">{pkg.name}</h3>
                      <div className="text-2xl font-bold text-center text-brand-navy mb-4">{pkg.price}</div>
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-500 mr-3 text-xs font-bold">✓</span>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant={pkg.variant as any} size="lg" className="w-full mt-4" asChild>
                        <a href="/contact">{pkg.buttonText}</a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-brand-navy mb-2">Need a Custom Quote?</h3>
                <p className="text-gray-600 mb-4">
                  Our pricing depends on several factors including vehicle type, design complexity, and timeline.
                  Contact us for a free consultation and detailed quote tailored to your specific project.
                </p>
                <Button variant="default" asChild>
                  <a href="/contact">Request Custom Quote</a>
                </Button>
              </div>
            </div>
          </section>
          
          {/* Vehicle-Specific Pricing */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-navy mb-4">Vehicle-Specific Pricing Guide</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Pricing varies based on vehicle size, design complexity, and materials selected. 
                  Below are estimated ranges for common vehicle types.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {vehiclePricing.map((category, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-brand-navy text-white py-4 px-6">
                      <h3 className="text-lg font-bold">{category.category}</h3>
                    </div>
                    <div className="p-6">
                      <table className="w-full">
                        <tbody>
                          {category.items.map((item, i) => (
                            <tr key={i} className={i !== category.items.length - 1 ? "border-b border-gray-200" : ""}>
                              <td className="py-4 text-gray-700 font-medium">{item.service}</td>
                              <td className="py-4 text-right text-brand-navy font-bold">{item.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Pricing FAQs */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-navy mb-4">Common Pricing Questions</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Get answers to the most common questions about our vehicle wrap pricing.
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-8">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-brand-navy mb-2">What factors affect the cost of a vehicle wrap?</h3>
                  <p className="text-gray-600">
                    Vehicle wrap pricing is determined by several factors, including the vehicle's size and complexity,
                    design complexity, materials used (standard vs. premium vinyl), coverage area (partial vs. full wrap),
                    and any additional services like design creation. Larger vehicles with complex curves and detailed
                    designs will typically cost more than smaller vehicles with simple designs.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Do you offer fleet discounts?</h3>
                  <p className="text-gray-600">
                    Yes, we offer volume discounts for fleet wraps based on the number of vehicles and consistency
                    of design. The larger your fleet, the more cost-effective each individual vehicle wrap becomes.
                    We can create a custom fleet program that provides consistent branding across your entire fleet
                    while maximizing your budget.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-brand-navy mb-2">What's included in your pricing?</h3>
                  <p className="text-gray-600">
                    Our pricing includes thorough vehicle preparation, premium-quality vinyl materials (3M or Avery Dennison),
                    professional installation by certified technicians, and a quality assurance inspection. Design services 
                    can be included for an additional fee or bundled into package pricing for full wraps. All our wraps
                    come with a warranty against material defects and installation issues.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-brand-navy mb-2">How do I get an exact price quote?</h3>
                  <p className="text-gray-600">
                    To receive an accurate quote, contact us with details about your vehicle, your design needs, and 
                    timeline requirements. We'll schedule a consultation to discuss your project and provide a detailed
                    quote. For the most accurate pricing, we recommend bringing your vehicle to our shop for measurements
                    or sending detailed photos along with your vehicle's make, model, and year.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* ROI Section */}
          <section className="py-16 bg-brand-navy text-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Vehicle Wrap ROI</h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Vehicle wraps aren't just an expense—they're a high-impact marketing investment.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="text-4xl font-bold text-brand-red mb-4">30,000+</div>
                  <h3 className="text-xl font-medium mb-2">Daily Impressions</h3>
                  <p className="text-white/70">
                    The average wrapped vehicle in Chicago generates over 30,000 impressions per day, making it one of the
                    most cost-effective advertising methods available.
                  </p>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="text-4xl font-bold text-brand-red mb-4">$0.15</div>
                  <h3 className="text-xl font-medium mb-2">Cost Per Mile</h3>
                  <p className="text-white/70">
                    Vehicle wraps average just $0.15 per thousand impressions, compared to $20+ for magazine ads,
                    $10+ for radio, and $30+ for television advertising.
                  </p>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="text-4xl font-bold text-brand-red mb-4">97%</div>
                  <h3 className="text-xl font-medium mb-2">Brand Recall</h3>
                  <p className="text-white/70">
                    Studies show that 97% of people recall advertisements seen on vehicles, with 98% reporting a positive
                    impression of the company.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Button variant="white" size="lg" asChild>
                  <a href="/contact">Calculate Your ROI</a>
                </Button>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <CallToAction />
        </main>
        
        <InternalLinksFooter />
      </div>
    </>
  );
};

export default PricingPage;
