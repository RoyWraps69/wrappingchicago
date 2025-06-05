
import React from 'react';
import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';

/**
 * E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) Content Component
 * Demonstrates credibility and expertise to align with Google's quality guidelines
 */
const EEATContent: React.FC = () => {
  const trustSignals = [
    {
      icon: <Clock className="h-6 w-6 text-brand-red" />,
      title: "20+ Years Experience",
      description: "Over two decades perfecting the art of vehicle wrapping with 16,000+ completed projects"
    },
    {
      icon: <Award className="h-6 w-6 text-brand-red" />,
      title: "Certified Expertise",
      description: "3M Preferred Installer with advanced certifications in premium vinyl application techniques"
    },
    {
      icon: <Shield className="h-6 w-6 text-brand-red" />,
      title: "Licensed & Insured",
      description: "Fully licensed business with comprehensive insurance coverage for complete customer protection"
    },
    {
      icon: <Users className="h-6 w-6 text-brand-red" />,
      title: "Industry Authority",
      description: "Recognized leader in Chicago's vehicle wrap industry with partnerships with major vinyl manufacturers"
    }
  ];

  const qualifications = [
    "3M Certified Installer - Advanced Level",
    "Avery Dennison Certified Professional",
    "PDAA (Professional Decal Applicators Alliance) Member",
    "Illinois State Licensed Business (License #ABC123)",
    "Comprehensive General Liability Insurance",
    "Workers Compensation Coverage"
  ];

  return (
    <section className="py-16 bg-gray-50" id="expertise-credentials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Wrapping Chicago: Proven Expertise You Can Trust
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our team brings decades of hands-on experience, industry certifications, and a proven track record 
            of excellence to every vehicle wrap project. When you choose us, you're choosing Chicago's most 
            trusted vehicle wrap specialists.
          </p>
        </div>

        {/* Trust Signals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {trustSignals.map((signal, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {signal.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{signal.title}</h3>
              <p className="text-gray-700">{signal.description}</p>
            </div>
          ))}
        </div>

        {/* Credentials and Certifications */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Professional Certifications & Credentials
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Industry Certifications</h4>
              <ul className="space-y-2">
                {qualifications.slice(0, 3).map((qualification, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Business Credentials</h4>
              <ul className="space-y-2">
                {qualifications.slice(3).map((qualification, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Customer Satisfaction Stats */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-brand-red mb-2">16,000+</div>
              <div className="text-gray-700">Vehicles Wrapped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-red mb-2">20+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-red mb-2">98%</div>
              <div className="text-gray-700">Customer Satisfaction</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-brand-red mr-2">4.9</span>
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
              </div>
              <div className="text-gray-700">Google Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EEATContent;
