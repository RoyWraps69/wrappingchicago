import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EEATOptimizerProps {
  pageType: 'home' | 'service' | 'location' | 'article' | 'case-study';
  lastUpdated?: string;
  author?: string;
  expertise?: string[];
  caseStudyData?: {
    client: string;
    vehicle: string;
    squareFootage: number;
    filmUsed: string;
    turnaroundTime: string;
    location: string;
    dateCompleted: string;
    beforeImage: string;
    afterImage: string;
  };
}

const EEATOptimizer: React.FC<EEATOptimizerProps> = ({
  pageType,
  lastUpdated = new Date().toISOString(),
  author = "Roy Mendelson",
  expertise = ["Vehicle Wrapping", "Commercial Fleet Graphics", "3M Certified Installation"],
  caseStudyData
}) => {
  
  // Generate E-E-A-T structured data
  const generateEEATSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": pageType === 'article' || pageType === 'case-study' ? "Article" : "WebPage",
      "author": {
        "@type": "Person",
        "name": author,
        "jobTitle": "Master Vehicle Wrap Installer",
        "worksFor": {
          "@type": "Organization",
          "name": "Wrapping Chicago",
          "url": "https://www.wrappingchicago.com"
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Professional Certification",
            "name": "3M Preferred Installer Certification",
            "recognizedBy": {
              "@type": "Organization",
              "name": "3M Company"
            }
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Professional Certification", 
            "name": "Avery Dennison Certified Installer",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Avery Dennison Corporation"
            }
          }
        ],
        "knowsAbout": expertise,
        "yearsOfExperience": "15"
      },
      "dateModified": lastUpdated,
      "datePublished": lastUpdated
    };

    if (caseStudyData && pageType === 'case-study') {
      return {
        ...baseSchema,
        "@type": "Article",
        "articleSection": "Case Studies",
        "about": {
          "@type": "Service",
          "name": `Vehicle Wrap Installation - ${caseStudyData.vehicle}`,
          "provider": {
            "@type": "Organization",
            "name": "Wrapping Chicago"
          }
        },
        "mainEntity": {
          "@type": "Project",
          "name": `${caseStudyData.client} ${caseStudyData.vehicle} Wrap`,
          "description": `Professional vehicle wrap installation covering ${caseStudyData.squareFootage} sq ft using ${caseStudyData.filmUsed}`,
          "location": {
            "@type": "Place",
            "name": caseStudyData.location
          },
          "startDate": caseStudyData.dateCompleted,
          "endDate": caseStudyData.dateCompleted,
          "result": {
            "@type": "Thing",
            "name": "Completed Vehicle Wrap",
            "description": `Successfully wrapped ${caseStudyData.vehicle} in ${caseStudyData.turnaroundTime}`
          }
        },
        "image": [
          {
            "@type": "ImageObject",
            "url": caseStudyData.beforeImage,
            "caption": `Before: ${caseStudyData.vehicle} original condition`,
            "description": "Vehicle before wrap installation"
          },
          {
            "@type": "ImageObject", 
            "url": caseStudyData.afterImage,
            "caption": `After: ${caseStudyData.vehicle} with completed wrap`,
            "description": "Vehicle after professional wrap installation"
          }
        ]
      };
    }

    return baseSchema;
  };

  // Generate trust signals
  const trustSignals = [
    "Google Verified Business since 2018",
    "4.9/5 stars from 150+ customer reviews",
    "3M Preferred Installer Network Member",
    "Avery Dennison Certified Professional",
    "15+ years Chicago vehicle wrap experience",
    "Fully insured and bonded",
    "Member of Better Business Bureau",
    "Warranty on all installations"
  ];

  return (
    <Helmet>
      {/* E-E-A-T Meta Tags */}
      <meta name="author" content={author} />
      <meta name="expertise" content={expertise.join(", ")} />
      <meta name="experience" content="15+ years Chicago vehicle wrapping" />
      <meta name="authority" content="3M Preferred, Avery Certified Installer" />
      <meta name="trustworthiness" content="Google verified, 4.9/5 stars, 150+ reviews" />
      
      {/* Publication Info */}
      <meta name="article:author" content={author} />
      <meta name="article:published_time" content={lastUpdated} />
      <meta name="article:modified_time" content={lastUpdated} />
      
      {/* Expertise Signals */}
      <meta name="skills" content="Vehicle wrapping, fleet graphics, paint protection, window tinting" />
      <meta name="certifications" content="3M Preferred Installer, Avery Dennison Certified" />
      <meta name="service-area" content="Chicago, IL and surrounding areas" />
      
      {/* Trust Signals */}
      <meta name="business-verification" content="Google My Business verified" />
      <meta name="customer-reviews" content="4.9/5 stars, 150+ Google reviews" />
      <meta name="insurance" content="Fully insured and bonded" />
      <meta name="warranty" content="Warranty provided on all installations" />
      
      {/* Case Study Meta (if applicable) */}
      {caseStudyData && (
        <>
          <meta name="case-study:client" content={caseStudyData.client} />
          <meta name="case-study:vehicle" content={caseStudyData.vehicle} />
          <meta name="case-study:square-footage" content={caseStudyData.squareFootage.toString()} />
          <meta name="case-study:film-used" content={caseStudyData.filmUsed} />
          <meta name="case-study:turnaround" content={caseStudyData.turnaroundTime} />
          <meta name="case-study:location" content={caseStudyData.location} />
          <meta name="case-study:date" content={caseStudyData.dateCompleted} />
        </>
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateEEATSchema())}
      </script>
      
      {/* Hidden trust signals for crawlers */}
      <div style={{ display: 'none' }}>
        <div itemScope itemType="https://schema.org/Organization">
          <span itemProp="name">Wrapping Chicago</span>
          <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            <span itemProp="ratingValue">4.9</span>
            <span itemProp="reviewCount">150</span>
            <span itemProp="bestRating">5</span>
          </div>
          {trustSignals.map((signal, index) => (
            <span key={index} itemProp="award">{signal}</span>
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default EEATOptimizer;