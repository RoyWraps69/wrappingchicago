import React from 'react';
import { Award, Shield, CheckCircle, Star, Calendar } from 'lucide-react';

const CertificationsDisplay = () => {
  const certifications = [
    {
      name: "3M Preferred Installer",
      issuer: "3M Graphics",
      level: "Preferred",
      year: "2014-2024",
      logo: "/api/placeholder/150/80",
      description: "Certified for premium 3M vinyl installation and techniques",
      benefits: ["Extended material warranties", "Technical support", "Training updates"]
    },
    {
      name: "Avery Dennison Certified",
      issuer: "Avery Dennison",
      level: "Master",
      year: "2015-2024", 
      logo: "/api/placeholder/150/80",
      description: "Master-level certification in Avery Dennison materials and methods",
      benefits: ["Warranty backing", "Product training", "Marketing support"]
    },
    {
      name: "UASG Professional Member",
      issuer: "United Association of Sign & Graphics",
      level: "Professional",
      year: "2014-2024",
      logo: "/api/placeholder/150/80", 
      description: "Professional membership in vehicle graphics association",
      benefits: ["Industry standards", "Best practices", "Networking"]
    },
    {
      name: "PDAA Certified",
      issuer: "Paint Protection Film Association",
      level: "Certified",
      year: "2016-2024",
      logo: "/api/placeholder/150/80",
      description: "Certified in paint protection film installation",
      benefits: ["PPF expertise", "Installation standards", "Continuing education"]
    },
    {
      name: "Chicago Business License", 
      issuer: "City of Chicago",
      level: "Licensed",
      year: "2014-2024",
      logo: "/api/placeholder/150/80",
      description: "Licensed vehicle wrap business in Chicago",
      benefits: ["Legal compliance", "Consumer protection", "Bonded & insured"]
    },
    {
      name: "BBB Accredited",
      issuer: "Better Business Bureau",
      level: "A+ Rating",
      year: "2014-2024", 
      logo: "/api/placeholder/150/80",
      description: "A+ rated business with BBB accreditation",
      benefits: ["Consumer trust", "Dispute resolution", "Quality standards"]
    }
  ];

  const teamCertifications = [
    {
      category: "Installation Certifications",
      count: 8,
      certifications: ["3M Certified Installers", "Avery Dennison Certified", "PDAA Certified", "Vehicle Graphics Institute"]
    },
    {
      category: "Design Certifications", 
      count: 4,
      certifications: ["Adobe Certified Expert", "Vehicle Graphics Design", "Brand Development", "Color Theory"]
    },
    {
      category: "Business Certifications",
      count: 3,
      certifications: ["Licensed & Bonded", "Insurance Certified", "Safety Trained"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industry Certifications & Credentials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certifications from leading manufacturers and industry organizations ensure the highest quality standards
          </p>
        </div>

        {/* Main Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                <img 
                  src={cert.logo} 
                  alt={`${cert.name} certification`}
                  className="w-full h-16 object-contain"
                />
              </div>
              
              <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
              <p className="text-primary font-semibold mb-2">{cert.issuer}</p>
              
              <div className="flex justify-center items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">{cert.level}</span>
                <Calendar className="w-4 h-4 text-gray-500 ml-2" />
                <span className="text-sm text-gray-600">{cert.year}</span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
              
              <div className="text-left">
                <h4 className="font-semibold text-sm mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {cert.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Team Certification Summary */}
        <div className="bg-primary text-white rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Team Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamCertifications.map((category, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{category.count}</span>
                </div>
                <h4 className="font-bold mb-3">{category.category}</h4>
                <ul className="space-y-1 text-sm text-white/90">
                  {category.certifications.map((cert, i) => (
                    <li key={i}>{cert}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Benefits */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Why Certifications Matter</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Quality Assurance</h4>
              <p className="text-sm text-gray-600">Certified processes ensure consistent, high-quality results</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Extended Warranties</h4>
              <p className="text-sm text-gray-600">Manufacturer backing provides longer warranty coverage</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Latest Techniques</h4>
              <p className="text-sm text-gray-600">Ongoing training ensures cutting-edge installation methods</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Industry Standards</h4>
              <p className="text-sm text-gray-600">Compliance with professional industry benchmarks</p>
            </div>
          </div>
        </div>

        {/* Verification Links */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold mb-4">Verify Our Certifications</h3>
          <p className="text-gray-600 mb-6">
            All certifications are current and verifiable through issuing organizations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.3m.com/3M/en_US/p/d/cbgnag1025/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors text-sm"
            >
              Verify 3M Certification
            </a>
            <a 
              href="https://graphics.averydennison.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors text-sm"
            >
              Verify Avery Dennison
            </a>
            <a 
              href="https://www.bbb.org/us/il/chicago/profile/auto-customizing/wrapping-chicago-0654-90102345" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors text-sm"
            >
              View BBB Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsDisplay;