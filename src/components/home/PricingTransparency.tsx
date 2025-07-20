import React from 'react';
import { Check, Phone, ArrowRight } from 'lucide-react';

const PricingTransparency = () => {
  const pricingTiers = [
    {
      type: "Partial Wrap",
      price: "$1,200 - $2,000",
      description: "Doors, logos, contact info",
      features: [
        "Professional design included",
        "Same day installation", 
        "3M premium vinyl",
        "3 year warranty"
      ],
      popular: false
    },
    {
      type: "Full Vehicle Wrap",
      price: "$2,500 - $4,500",
      description: "Complete vehicle transformation",
      features: [
        "Custom design & mockup",
        "Complete coverage",
        "Premium materials only",
        "5-7 year lifespan",
        "Mobile installation available"
      ],
      popular: true
    },
    {
      type: "Fleet Package",
      price: "Volume Discounts",
      description: "3+ vehicles save 15-20%",
      features: [
        "Consistent branding",
        "Bulk pricing savings",
        "Priority scheduling",
        "Fleet management support"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing - No Hidden Fees
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get more service calls with professional vehicle wraps. Here's exactly what you'll pay.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 ${tier.popular ? 'border-brand-red' : 'border-gray-200'}`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-red text-white px-6 py-2 rounded-full font-bold">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.type}</h3>
                <div className="text-3xl font-bold text-brand-red mb-2">{tier.price}</div>
                <p className="text-gray-600">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <a
                  href="tel:3125971286"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-colors ${
                    tier.popular 
                      ? 'bg-brand-red text-white hover:bg-red-700' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Call for Quote: (312) 597-1286
                </a>
                <a
                  href="/contact"
                  className="w-full py-3 px-6 rounded-lg font-semibold text-center block border-2 border-gray-300 text-gray-700 hover:border-brand-red hover:text-brand-red transition-colors"
                >
                  Get Written Estimate
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Vehicle Wraps?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-brand-red">30%</div>
              <div className="text-gray-700">Average increase in service calls</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-red">6 Months</div>
              <div className="text-gray-700">Typical ROI payback period</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-red">16,000+</div>
              <div className="text-gray-700">Vehicles wrapped since 2000</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTransparency;