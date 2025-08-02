import React from 'react';
import { useSchemaDeduplicator } from '@/components/seo/SchemaDeduplicator';

interface FeaturedSnippetSchemaProps {
  pageType?: 'home' | 'pricing' | 'faq' | 'services' | 'location';
  city?: string;
}

const FeaturedSnippetSchema: React.FC<FeaturedSnippetSchemaProps> = ({
  pageType = 'home',
  city = 'Chicago'
}) => {
  const { canRenderSchema, registerSchema } = useSchemaDeduplicator();
  
  if (!canRenderSchema('FeaturedSnippet', 'DedupFeaturedSnippetSchema')) {
    return null;
  }
  
  registerSchema('FeaturedSnippet', 'DedupFeaturedSnippetSchema');

  // Create different schemas based on page type for maximum featured snippet coverage
  const schemas = [];

  // Cost-focused featured snippets (most searched)
  schemas.push({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.wrappingchicago.com/#cost-faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How much does a vehicle wrap cost in ${city}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Vehicle wrap costs in ${city}:\n• Partial wraps: $1,200-$2,500\n• Full car wraps: $2,500-$4,000\n• Truck wraps: $3,500-$6,000\n• Van wraps: $2,800-$4,500\n• Fleet discounts available\n\nFactors affecting cost:\n1. Vehicle size and complexity\n2. Design requirements\n3. Material quality (3M vs. Avery Dennison)\n4. Installation complexity\n5. Additional services (design, removal)`
        }
      },
      {
        "@type": "Question", 
        "name": "What's the cheapest vehicle wrap option?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Partial wraps starting at $1,200 are the most affordable option. These include:\n• Hood wraps\n• Roof wraps\n• Door graphics\n• Bumper wraps\n• Simple lettering\n\nPartial wraps provide excellent ROI while fitting smaller budgets."
        }
      }
    ]
  });

  // Process-focused featured snippets
  schemas.push({
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://www.wrappingchicago.com/#vehicle-wrap-process",
    "name": `How to get a vehicle wrap in ${city}`,
    "description": "Step-by-step process for getting your vehicle professionally wrapped",
    "totalTime": "P3D",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "$2500-$5000"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Get Free Quote",
        "text": "Contact us for free consultation and detailed quote. We'll assess your vehicle and discuss design options.",
        "url": "https://www.wrappingchicago.com/contact"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Design Creation",
        "text": "Our designers create custom mockups. You can also use our AI wrap idea generator for instant concepts.",
        "url": "https://www.wrappingchicago.com/ai-wrap-ideas"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Vehicle Preparation",
        "text": "We thoroughly clean your vehicle and remove any existing graphics for optimal wrap adhesion."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Professional Installation",
        "text": "Certified technicians install your wrap using precision tools. Most installations complete in 2-3 days."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Quality Inspection",
        "text": "Final inspection ensures perfect installation. We provide care instructions and warranty information."
      }
    ]
  });

  // Comparison featured snippets
  schemas.push({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.wrappingchicago.com/#comparison-faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Vehicle wrap vs paint: which is better?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Vehicle Wrap Advantages:\n• Removable without damage\n• Faster installation (2-3 days vs weeks)\n• More design options\n• Lower cost than custom paint\n• Protects original paint\n• Better resale value\n\nCustom Paint Advantages:\n• Permanent solution\n• Potentially longer lasting\n• Traditional appearance\n\nVerdict: Wraps offer more flexibility, protection, and value for most customers."
        }
      },
      {
        "@type": "Question",
        "name": "How long do vehicle wraps last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vehicle wrap lifespan:\n• Premium wraps: 5-7 years\n• Standard wraps: 3-5 years\n• Budget wraps: 2-3 years\n\nFactors affecting longevity:\n1. Material quality (3M, Avery Dennison)\n2. Installation expertise\n3. Maintenance and care\n4. Climate exposure\n5. Usage patterns\n\nOur premium wraps come with 5-year warranties."
        }
      }
    ]
  });

  // Local featured snippets
  if (city) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `https://www.wrappingchicago.com/#${city.toLowerCase()}-faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": `Best vehicle wrap company in ${city}`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Wrapping Chicago is ${city}'s premier vehicle wrap company:\n\n✅ 16,000+ vehicles wrapped\n✅ 4.9/5 star rating (247 reviews)\n✅ 24/7 mobile service\n✅ Same-week installation\n✅ 5-year warranty\n✅ 3M and Avery Dennison certified\n✅ Free consultations\n✅ AI design preview technology\n\nServing ${city} and surrounding areas with professional vehicle wrap installation since 2003.`
          }
        },
        {
          "@type": "Question",
          "name": `Vehicle wrap installation near me in ${city}`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Professional vehicle wrap installation available throughout ${city}:\n\n📍 Mobile service to your location\n📍 Climate-controlled facility\n📍 Same-day service available\n📍 Free pickup and delivery\n\nService areas include all ${city} neighborhoods and suburbs. Call (312) 597-1286 for immediate service.`
          }
        }
      ]
    });
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default FeaturedSnippetSchema;