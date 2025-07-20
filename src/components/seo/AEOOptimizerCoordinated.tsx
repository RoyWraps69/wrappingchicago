import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSEOCoordinator } from './SEOCoordinator';

/**
 * AEO (Answer Engine Optimization) Component - COORDINATED VERSION
 * Optimizes content for AI-powered search results and featured snippets
 * Works with other SEO components through the SEO Coordinator
 */

interface AEOOptimizerProps {
  businessType: 'plumber' | 'electrician' | 'hvac' | 'contractor' | 'general';
  location: string;
  serviceKeywords: string[];
}

const AEOOptimizerCoordinated: React.FC<AEOOptimizerProps> = ({
  businessType,
  location,
  serviceKeywords
}) => {
  const coordinator = useSEOCoordinator();
  
  // Register this component's SEO elements
  const canSetVoiceSearch = coordinator.registerMetaTag('voice-search');
  const canSetAEOSchema = coordinator.registerSchema('AEO-LocalBusiness');
  const canSetQuestionSchema = coordinator.registerSchema('Question-Set');
  
  // Generate AEO-optimized Q&A content for featured snippets
  const generateAEOContent = () => {
    const businessQuestions = {
      plumber: [
        {
          question: "How much does a plumber truck wrap cost in Chicago?",
          answer: "Plumber truck wraps in Chicago typically cost $2,500-$4,500 depending on truck size. Full wraps for plumbing vans start at $2,800, while larger service trucks range $3,500-$4,500. Most plumbers see ROI within 6 months through increased service calls."
        },
        {
          question: "Will a vehicle wrap damage my plumbing truck's paint?",
          answer: "No, professional vehicle wraps actually protect your plumbing truck's original paint. High-quality 3M vinyl wraps can be removed without damage, often leaving paint in better condition than before installation."
        }
      ],
      electrician: [
        {
          question: "How long do electrician van wraps last?",
          answer: "Electrician van wraps typically last 5-7 years with proper care. High-quality materials like 3M vinyl withstand daily use, weather, and UV exposure common in electrical contracting work."
        },
        {
          question: "Can I wrap my electrician truck myself?",
          answer: "Professional installation is recommended for electrician trucks. Proper application requires specialized tools, climate-controlled environment, and experience to ensure wraps don't peel or bubble, especially around complex curves and electrical equipment storage areas."
        }
      ],
      hvac: [
        {
          question: "Do HVAC truck wraps work for lead generation?",
          answer: "Yes, HVAC truck wraps are highly effective for lead generation. Studies show wrapped HVAC trucks generate 30,000+ impressions daily, resulting in 15-20% increase in service calls for most HVAC contractors."
        },
        {
          question: "What information should be on my HVAC truck wrap?",
          answer: "Essential HVAC truck wrap information includes: company name, phone number, services (heating, cooling, installation, repair), service areas, emergency availability, and professional certifications. Keep text large and easy to read while driving."
        }
      ],
      contractor: [
        {
          question: "How much does a contractor truck wrap cost?",
          answer: "Contractor truck wraps cost $2,800-$5,200 in Chicago depending on vehicle size and design complexity. Box trucks and larger commercial vehicles cost more than pickup trucks. Most contractors recover costs within 8-12 months through increased visibility."
        }
      ],
      general: [
        {
          question: "How long does vehicle wrap installation take?",
          answer: "Vehicle wrap installation typically takes 1-3 days depending on vehicle size and design complexity. Simple truck lettering can be completed same day, while full wraps require 2-3 days for proper installation and curing."
        }
      ]
    };

    return businessQuestions[businessType] || businessQuestions.general;
  };

  const aeoQuestions = generateAEOContent();

  // Schema for AEO optimization - only set if we have priority
  const aeoSchema = canSetQuestionSchema ? {
    "@context": "https://schema.org",
    "@type": "FAQPage", 
    "@id": `https://www.wrappingchicago.com/#aeo-questions-${businessType}`,
    "name": `${businessType} Vehicle Wrap Questions`,
    "mainEntity": aeoQuestions.map(qa => ({
      "@type": "Question",
      "name": qa.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": qa.answer,
        "author": {
          "@type": "Organization",
          "name": "Wrapping Chicago"
        }
      }
    }))
  } : null;

  // Local business entity optimization - only if we have priority
  const entityOptimization = canSetAEOSchema ? {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.wrappingchicago.com/#aeo-entity-${businessType}`,
    "name": `Wrapping Chicago - ${businessType} Specialists`,
    "description": `Professional vehicle wraps for ${businessType}s in ${location}. Turn your work truck into a customer magnet with high-quality vinyl graphics.`,
    "knowsAbout": [
      "Vehicle Wrapping",
      "Commercial Graphics", 
      "Fleet Branding",
      `${businessType} Vehicle Graphics`,
      "Vinyl Installation",
      "3M Materials",
      "Trade Vehicle Advertising"
    ],
    "expertise": serviceKeywords,
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 41.8781,
        "longitude": -87.6298
      },
      "geoRadius": "50 miles"
    }
  } : null;

  return (
    <>
      <Helmet>
        {/* Voice search optimization - only if we have priority */}
        {canSetVoiceSearch && (
          <>
            <meta property="speakable" content="true" />
            <meta name="speakable" content="css-selector" data-css-selector=".speakable" />
          </>
        )}
        
        {/* AEO-optimized structured data - only if we have priority */}
        {aeoSchema && (
          <script type="application/ld+json">
            {JSON.stringify(aeoSchema)}
          </script>
        )}
        
        {entityOptimization && (
          <script type="application/ld+json">
            {JSON.stringify(entityOptimization)}
          </script>
        )}
      </Helmet>

      {/* AEO-optimized content sections (hidden but crawlable) */}
      <div style={{ position: 'absolute', left: '-9999px', opacity: 0 }} aria-hidden="true">
        {aeoQuestions.map((qa, index) => (
          <div key={index} className="speakable">
            <h3>{qa.question}</h3>
            <p>{qa.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AEOOptimizerCoordinated;