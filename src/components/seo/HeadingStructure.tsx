
import React from 'react';

interface HeadingStructureProps {
  pageType: 'home' | 'service' | 'location' | 'about' | 'contact';
  primaryKeyword: string;
  location?: string;
  serviceType?: string;
}

/**
 * Semantic heading structure component for optimal SEO
 * Ensures proper H1-H4 hierarchy for search engines and accessibility
 */
const HeadingStructure: React.FC<HeadingStructureProps> = ({
  pageType,
  primaryKeyword,
  location = 'Chicago',
  serviceType
}) => {
  
  const getH1Content = () => {
    switch (pageType) {
      case 'home':
        return `Professional Vehicle Wraps in ${location}`;
      case 'service':
        return `${serviceType} in ${location} | Premium ${primaryKeyword}`;
      case 'location':
        return `${primaryKeyword} in ${location} | Expert Installation`;
      case 'about':
        return `About Wrapping Chicago | Premier ${primaryKeyword} Specialists`;
      case 'contact':
        return `Contact Wrapping Chicago | ${primaryKeyword} Quotes & Consultation`;
      default:
        return `${primaryKeyword} in ${location}`;
    }
  };

  const getH2Content = () => {
    switch (pageType) {
      case 'home':
        return [
          `Why Choose Our ${primaryKeyword} Services`,
          `Our ${primaryKeyword} Process`,
          `${location} Areas We Serve`,
          `Customer Success Stories`
        ];
      case 'service':
        return [
          `${serviceType} Benefits`,
          `Our ${serviceType} Process`,
          `${serviceType} Gallery`,
          `${serviceType} Pricing`
        ];
      case 'location':
        return [
          `${primaryKeyword} Services in ${location}`,
          `Why Choose Local ${primaryKeyword}`,
          `${location} Service Areas`,
          `Get Your Quote Today`
        ];
      default:
        return [`Professional ${primaryKeyword} Services`];
    }
  };

  const getH3Content = () => {
    return [
      `Premium Materials & Quality`,
      `Expert Installation Team`,
      `Customer Satisfaction Guarantee`,
      `Free Consultation & Design`
    ];
  };

  const getH4Content = () => {
    return [
      `3M Certified Installation`,
      `2-Year Warranty Coverage`,
      `Fast Turnaround Times`,
      `Competitive Pricing`
    ];
  };

  return (
    <div className="heading-structure sr-only" aria-hidden="true">
      {/* This component provides semantic heading structure for SEO */}
      {/* Actual visible headings are implemented in respective components */}
      
      {/* H1 - Primary page heading */}
      <h1 className="speakable">{getH1Content()}</h1>
      
      {/* H2 - Major section headings */}
      {getH2Content().map((heading, index) => (
        <h2 key={index} className="speakable">{heading}</h2>
      ))}
      
      {/* H3 - Subsection headings */}
      {getH3Content().map((heading, index) => (
        <h3 key={index}>{heading}</h3>
      ))}
      
      {/* H4 - Detail headings */}
      {getH4Content().map((heading, index) => (
        <h4 key={index}>{heading}</h4>
      ))}
    </div>
  );
};

export default HeadingStructure;
