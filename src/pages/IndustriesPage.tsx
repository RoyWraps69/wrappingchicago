import React from 'react';
import { Link } from 'react-router-dom';
import RichSnippetsManager from '../components/seo/RichSnippetsManager';
import SERPEnhancer from '../components/seo/SERPEnhancer';
import LazyImage from '../components/LazyImage';
import { Helmet } from 'react-helmet-async';

const IndustriesPage = () => {
  const industries = [
    {
      id: 1,
      name: "Medical & Healthcare",
      slug: "medical-healthcare",
      description: "Professional vehicle wraps for medical practices, hospitals, home healthcare, and medical transport services.",
      services: ["Ambulance Wraps", "Medical Transport Vans", "Healthcare Branding", "HIPAA Compliant Designs"],
      benefits: ["Professional appearance", "Patient trust building", "Regulatory compliance", "Emergency visibility"],
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600",
      caseStudy: "Increased patient referrals by 35% for Northwest Community Hospital's transport fleet after implementing clean, professional wrap designs that build trust with families throughout the north and northwest suburbs."
    },
    {
      id: 2,
      name: "Restaurants & Food Service",
      slug: "restaurants-food-service",
      description: "Eye-catching vehicle wraps for restaurants, food trucks, catering companies, and delivery services.",
      services: ["Food Truck Wraps", "Delivery Vehicle Graphics", "Catering Van Wraps", "Restaurant Branding"],
      benefits: ["Increased foot traffic", "Mobile advertising", "Brand recognition", "Appetite appeal"],
      image: "/lovable-uploads/food-truck-wrap.jpg",
      caseStudy: "Lou Malnati's delivery fleet saw 50% increase in online orders after vehicle wrap campaign"
    },
    {
      id: 3,
      name: "Home Services & Contractors",
      slug: "home-services-contractors",
      description: "Professional wraps for plumbers, electricians, HVAC, landscaping, and general contractors.",
      services: ["Plumbing Vehicle Wraps", "Electrical Truck Graphics", "HVAC Van Wraps", "Contractor Branding"],
      benefits: ["Service area visibility", "Professional credibility", "Lead generation", "Brand consistency"],
      image: "/lovable-uploads/contractor-vehicle-wrap.jpg",
      caseStudy: "ABC Plumbing increased service calls by 40% in first 6 months after fleet wrapping"
    },
    {
      id: 4,
      name: "Legal & Professional Services",
      slug: "legal-professional-services",
      description: "Sophisticated vehicle wraps for law firms, accounting practices, and professional service providers.",
      services: ["Law Firm Vehicle Wraps", "Professional Car Graphics", "Executive Vehicle Branding", "Subtle Professional Designs"],
      benefits: ["Professional image", "Client confidence", "Discrete advertising", "Premium appearance"],
      image: "/lovable-uploads/legal-vehicle-wrap.jpg",
      caseStudy: "Chicago law firm reported 25% increase in consultation requests after vehicle wrap installation"
    },
    {
      id: 5,
      name: "Real Estate",
      slug: "real-estate",
      description: "Professional vehicle graphics for real estate agents, brokers, and property management companies.",
      services: ["Realtor Car Wraps", "Property Management Vehicle Graphics", "Real Estate Branding", "Contact Information Display"],
      benefits: ["Neighborhood visibility", "Professional presence", "Contact accessibility", "Brand recognition"],
      image: "/lovable-uploads/realestate-vehicle-wrap.jpg",
      caseStudy: "Coldwell Banker agent increased listing inquiries by 30% with professionally wrapped vehicle"
    },
    {
      id: 6,
      name: "Technology & IT Services",
      slug: "technology-it-services",
      description: "Modern vehicle wraps for IT companies, tech startups, and computer service providers.",
      services: ["IT Service Vehicle Wraps", "Tech Company Branding", "Computer Repair Van Graphics", "Modern Design Solutions"],
      benefits: ["Tech-savvy image", "Service area coverage", "Professional credibility", "Modern appeal"],
      image: "/lovable-uploads/tech-vehicle-wrap.jpg",
      caseStudy: "GeekSquad alternative increased service calls by 45% with fleet of wrapped service vehicles"
    }
  ];

  const faqData = [
    {
      question: "Which industries benefit most from vehicle wraps?",
      answer: "Home services, medical/healthcare, food service, and real estate see the highest ROI from vehicle wraps due to frequent travel and customer interaction needs."
    },
    {
      question: "Are there industry-specific regulations for vehicle wraps?",
      answer: "Yes, certain industries like medical transport and food service have specific requirements. We ensure all designs comply with relevant regulations and industry standards."
    },
    {
      question: "How do you customize designs for different industries?",
      answer: "We study each industry's unique needs, customer expectations, and branding requirements to create targeted designs that resonate with the specific audience."
    },
    {
      question: "What's the typical ROI timeline for different industries?",
      answer: "Most industries see ROI within 6-12 months, with home services and food trucks often seeing results in 3-6 months due to high visibility needs."
    }
  ];

  return (
    <>
      <RichSnippetsManager
        pageType="service"
        title="Industry-Specific Vehicle Wraps Chicago IL - Professional Solutions"
        description="Specialized vehicle wrap solutions for Chicago businesses across all industries. Medical, food service, contractors, legal, real estate, and technology vehicle wraps."
        url="https://www.wrappingchicago.com/industries"
        keywords={["industry vehicle wraps", "professional vehicle graphics", "medical vehicle wraps", "food truck wraps", "contractor vehicle wraps", "Chicago business wraps"]}
        faqData={faqData}
        reviews={{
          averageRating: 4.9,
          reviewCount: 847,
          bestRating: 5,
          worstRating: 4
        }}
        services={industries.map(industry => ({
          name: industry.name + " Vehicle Wraps",
          description: industry.description,
          price: "$2500-8500"
        }))}
      />
      <SERPEnhancer
        title="Industry-Specific Vehicle Wraps Chicago IL - Professional Solutions"
        description="Specialized vehicle wrap solutions for Chicago businesses across all industries. Medical, food service, contractors, legal, real estate, and technology vehicle wraps."
        url="https://www.wrappingchicago.com/industries"
        imageUrl="https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png"
        estimatedReadingTime={10}
        lastUpdated={new Date().toISOString()}
        authorName="Wrapping Chicago Industry Specialists"
        businessHours={{
          opens: "09:00",
          closes: "17:00",
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        }}
        phoneNumber="(312) 597-1286"
        address="4711 N. Lamon Ave, Chicago, IL 60630"
      />

      <Helmet>
        <title>Industry-Specific Vehicle Wraps Chicago IL - Professional Solutions | Wrapping Chicago</title>
        <meta name="description" content="Specialized vehicle wrap solutions for Chicago businesses across all industries. Medical, food service, contractors, legal, real estate, and technology vehicle wraps." />
        <link rel="canonical" href="https://www.wrappingchicago.com/industries" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Industry-Specific Vehicle Wrap Solutions
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
                Every industry has unique needs, challenges, and customer expectations. Our specialized vehicle wrap solutions are tailored to help Chicago businesses in every sector maximize their mobile marketing potential while maintaining professional standards and regulatory compliance.
              </p>
            </div>

            {/* Industries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {industries.map((industry) => (
                <div key={industry.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative">
                    <LazyImage
                      src={industry.image} 
                      alt={`${industry.name} Vehicle Wrap Services in Chicago`}
                      className="w-full h-48 object-cover"
                      fallbackSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <h2 className="text-2xl font-bold text-white text-center">{industry.name}</h2>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{industry.description}</p>
                    
                    <div className="mb-4">
                      <h3 className="font-semibold text-primary mb-2">Our Services:</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {industry.services.map((service, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="font-semibold text-primary mb-2">Key Benefits:</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {industry.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-primary mb-2">Success Story:</h4>
                      <p className="text-sm text-gray-700 italic">"{industry.caseStudy}"</p>
                    </div>
                    
                    <Link 
                      to={`/contact?industry=${industry.slug}`}
                      className="inline-block w-full text-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Get Industry-Specific Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Industry Statistics */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-primary text-center mb-8">Industry Performance Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">50%</div>
                  <div className="text-gray-600">Food Service Lead Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">40%</div>
                  <div className="text-gray-600">Home Services Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">35%</div>
                  <div className="text-gray-600">Medical Referral Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">25%</div>
                  <div className="text-gray-600">Professional Service ROI</div>
                </div>
              </div>
            </div>

            {/* Compliance Section */}
            <div className="bg-primary text-white rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-center mb-6">Industry Compliance & Standards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      DOT compliance for commercial vehicles
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      HIPAA compliance for medical vehicles
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      FDA guidelines for food service vehicles
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Professional standards for legal/financial
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Quality Standards</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Premium 3M materials only
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Industry-specific design guidelines
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      Professional installation standards
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      5-year comprehensive warranty
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Industry-Specific FAQs</h2>
              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="text-xl font-semibold text-primary mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-secondary to-primary text-white rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Industry Presence?</h2>
              <p className="text-xl mb-6">
                Get a customized vehicle wrap solution designed specifically for your industry's unique needs.
              </p>
              <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                <Link 
                  to="/contact" 
                  className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Industry Quote
                </Link>
                <Link 
                  to="/gallery" 
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  View Industry Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustriesPage;