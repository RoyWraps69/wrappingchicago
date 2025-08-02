import React from 'react';
import { useSchemaDeduplicator } from '@/components/seo/SchemaDeduplicator';

interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

interface HowToSchemaProps {
  name?: string;
  description?: string;
  steps?: HowToStep[];
  totalTime?: string;
  estimatedCost?: string;
}

const HowToSchema: React.FC<HowToSchemaProps> = ({
  name = "How to Get a Professional Vehicle Wrap in Chicago",
  description = "Complete step-by-step guide to getting your vehicle professionally wrapped in Chicago, from initial consultation to final installation.",
  steps = [
    {
      name: "Free Consultation & Quote",
      text: "Contact Wrapping Chicago for a free consultation. We'll discuss your vision, vehicle specifications, and provide a detailed quote based on your needs.",
      url: "https://www.wrappingchicago.com/contact"
    },
    {
      name: "Design Creation & Approval",
      text: "Our design team creates custom mockups of your vehicle wrap. We work with you to refine the design until it perfectly matches your vision.",
      url: "https://www.wrappingchicago.com/ai-wrap-ideas"
    },
    {
      name: "Vehicle Preparation",
      text: "We thoroughly clean and prepare your vehicle for wrap installation. This includes removing any existing graphics and ensuring the surface is perfect for application."
    },
    {
      name: "Professional Installation",
      text: "Our certified technicians apply the wrap using precision techniques and professional-grade tools. Installation typically takes 2-3 days for optimal results."
    },
    {
      name: "Quality Inspection & Delivery",
      text: "We perform a detailed quality inspection to ensure perfect installation. Your vehicle is then ready for pickup or delivery with care instructions."
    }
  ],
  totalTime = "P5D",
  estimatedCost = "$2500-$5000"
}) => {
  const { canRenderSchema, registerSchema } = useSchemaDeduplicator();
  
  if (!canRenderSchema('HowTo', 'DedupHowToSchema')) {
    return null;
  }
  
  registerSchema('HowTo', 'DedupHowToSchema');

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://www.wrappingchicago.com/#howto-vehicle-wrap",
    "name": name,
    "description": description,
    "totalTime": totalTime,
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": estimatedCost
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Premium vinyl wrap material"
      },
      {
        "@type": "HowToSupply", 
        "name": "Professional installation tools"
      },
      {
        "@type": "HowToSupply",
        "name": "Certified installation technician"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Heat gun for precision application"
      },
      {
        "@type": "HowToTool",
        "name": "Squeegee tools for smooth installation"
      },
      {
        "@type": "HowToTool",
        "name": "Cutting tools for precise trimming"
      }
    ],
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "url": step.url,
      "image": step.image
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default HowToSchema;