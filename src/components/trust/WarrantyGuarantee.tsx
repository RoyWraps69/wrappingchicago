import React from 'react';
import { Shield, Award, Clock, CheckCircle, Phone, FileText } from 'lucide-react';

const WarrantyGuarantee = () => {
  const warrantyFeatures = [
    {
      icon: Shield,
      title: "Material Warranty",
      duration: "5-7 Years",
      description: "Full manufacturer warranty on 3M and Avery Dennison premium vinyl materials",
      coverage: [
        "Color fading protection",
        "Adhesive failure coverage", 
        "Material defect replacement",
        "UV damage protection"
      ]
    },
    {
      icon: Award,
      title: "Installation Warranty", 
      duration: "2 Years",
      description: "Comprehensive workmanship guarantee on all installation services",
      coverage: [
        "Lifting or peeling edges",
        "Bubble formation",
        "Improper alignment",
        "Installation defects"
      ]
    },
    {
      icon: Clock,
      title: "Satisfaction Guarantee",
      duration: "100%",
      description: "We stand behind every wrap with our complete satisfaction promise",
      coverage: [
        "Design approval process",
        "Quality inspection",
        "Final walk-through",
        "Customer sign-off"
      ]
    }
  ];

  const additionalCoverage = [
    "Free minor touch-ups for first 6 months",
    "Emergency repair service for fleet vehicles",
    "Warranty transfer for vehicle sales",
    "Detailed care and maintenance instructions",
    "24/7 support hotline for covered issues",
    "Professional removal service included"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industry-Leading Warranty & Guarantee
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your investment with our comprehensive warranty coverage and 100% satisfaction guarantee
          </p>
        </div>

        {/* Main Warranty Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {warrantyFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <div className="text-2xl font-bold text-primary mb-3">{feature.duration}</div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  {feature.coverage.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Coverage */}
        <div className="bg-primary text-white rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Additional Coverage Includes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalCoverage.map((item, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Warranty Terms */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6">Warranty Terms & Conditions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">What's Covered:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Manufacturing defects in materials</li>
                <li>• Improper installation techniques</li>
                <li>• Premature fading or color change</li>
                <li>• Adhesive failure under normal conditions</li>
                <li>• Edge lifting or peeling</li>
                <li>• Bubble formation post-installation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-red-600">What's Not Covered:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Physical damage from accidents</li>
                <li>• Improper maintenance or cleaning</li>
                <li>• Modifications by non-certified installers</li>
                <li>• Normal wear from extreme conditions</li>
                <li>• Damage from pressure washing</li>
                <li>• Intentional damage or vandalism</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Maintenance Requirements */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-blue-900">Maintain Your Warranty</h3>
          <p className="text-blue-800 mb-4">
            Follow these simple maintenance guidelines to keep your warranty valid:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-blue-900">Cleaning Guidelines:</h4>
              <ul className="space-y-2 text-blue-800">
                <li>• Wash every 2-3 weeks with mild soap</li>
                <li>• Rinse thoroughly with clean water</li>
                <li>• Dry with soft microfiber cloth</li>
                <li>• Avoid harsh chemicals or solvents</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-900">Protection Tips:</h4>
              <ul className="space-y-2 text-blue-800">
                <li>• Park in shade when possible</li>
                <li>• Avoid automatic car washes</li>
                <li>• Report damage within 30 days</li>
                <li>• Schedule annual inspections</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact for Warranty Claims */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Need Warranty Service?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our warranty team is ready to help. Contact us immediately if you notice any issues covered under your warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:(312)597-1286" 
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Warranty Line
            </a>
            <a 
              href="/contact" 
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
            >
              <FileText className="w-5 h-5 mr-2" />
              Submit Warranty Claim
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarrantyGuarantee;