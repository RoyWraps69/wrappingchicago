
import React from 'react';
import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';
import CertificationsGallery from '@/components/home/CertificationsGallery';

const TrustSignals: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: "16,000+",
      label: "Vehicles Wrapped",
      description: "Since 2003"
    },
    {
      icon: Clock,
      number: "20",
      label: "Years in Business",
      description: "Established 2003"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Customer Rating",
      description: "850+ Reviews"
    },
    {
      icon: CheckCircle,
      number: "100%",
      label: "Satisfaction Rate",
      description: "Guaranteed Quality"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Chicago's Most Trusted Vehicle Wrap Company
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With 20 years of experience and industry certifications, we deliver quality that speaks for itself.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
              <stat.icon className="h-12 w-12 text-brand-red mx-auto mb-3" />
              <div className="text-3xl font-bold text-brand-navy mb-2">{stat.number}</div>
              <div className="font-semibold text-gray-800 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Gallery Section - replaces certifications */}
        <CertificationsGallery />

        {/* Warranty Information */}
        <div className="mt-12 bg-gradient-to-r from-brand-red to-red-600 rounded-lg p-8 text-white text-center">
          <Shield className="h-16 w-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">2-Year Warranty Included</h3>
          <p className="text-lg mb-4">
            Every vehicle wrap comes with our comprehensive 2-year warranty covering materials and workmanship.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>✓ Material defects covered</div>
            <div>✓ Installation workmanship guaranteed</div>
            <div>✓ Free touch-ups if needed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
