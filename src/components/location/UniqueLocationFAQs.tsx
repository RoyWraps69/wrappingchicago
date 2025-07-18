import React from 'react';
import { City } from '@/data/cities';

interface UniqueLocationFAQsProps {
  city: City;
}

const getLocationSpecificFAQs = (cityName: string, county: string, distance: string) => {
  const baseFAQs = [
    {
      question: `How much do vehicle wraps cost in ${cityName}?`,
      answer: `Vehicle wrap costs in ${cityName} typically range from $2,500 to $5,000 per vehicle for full wraps, depending on vehicle size and design complexity. Partial wraps start around $1,500, while commercial truck wraps range from $3,500-$6,500. We offer volume discounts for fleet projects and provide free detailed quotes for all ${cityName} businesses.`
    },
    {
      question: `Where can I get my vehicle wrapped in ${cityName}?`,
      answer: `Wrapping Chicago provides professional vehicle wrapping services to ${cityName} residents and businesses from our state-of-the-art facility at 4711 N. Lamon Ave, Chicago, IL. We're approximately ${distance} from ${cityName} and offer mobile consultation services for fleet projects throughout ${county}.`
    },
    {
      question: `How long do vehicle wraps last in ${cityName}'s climate?`,
      answer: `With proper care and maintenance, our premium 3M vinyl vehicle wraps typically last 5-7 years in ${cityName}'s climate. We use UV-resistant materials specifically designed to withstand Illinois weather conditions including harsh winters, hot summers, and varying humidity levels throughout the year.`
    }
  ];

  const citySpecificFAQs = {
    "Schaumburg": [
      ...baseFAQs,
      {
        question: "Do you wrap vehicles for Woodfield Mall businesses?",
        answer: "Yes! We've wrapped hundreds of vehicles for Woodfield Mall retailers, restaurants, and service providers. From delivery trucks serving the 2.7 million sq ft retail complex to corporate vehicles for mall management, we understand the professional standards required for businesses operating in Illinois' largest shopping center."
      },
      {
        question: "Can you wrap corporate fleets for Schaumburg's major employers?",
        answer: "Absolutely. We've completed fleet wrap projects for several Fortune 500 companies in Schaumburg including technology, healthcare, and logistics companies. Our corporate vehicle wrap solutions enhance professional image while providing consistent branding across entire fleets operating throughout the northwest suburbs."
      }
    ],
    "Hoffman Estates": [
      ...baseFAQs,
      {
        question: "Do you work with technology companies in Prairie Stone Business Park?",
        answer: "Yes, we specialize in vehicle wraps for technology and corporate services companies in Prairie Stone Business Park. We understand the professional image requirements for companies like CDK Global and other tech firms, providing sophisticated vehicle graphics that reflect corporate branding standards."
      },
      {
        question: "What's the typical turnaround for healthcare fleet wraps in Hoffman Estates?",
        answer: "For healthcare organizations like Advocate Good Shepherd Hospital and other medical facilities in Hoffman Estates, we typically complete fleet wrap projects within 5-7 business days. We understand the critical nature of healthcare transportation and work efficiently to minimize vehicle downtime."
      }
    ],
    "Naperville": [
      ...baseFAQs,
      {
        question: "Do you wrap utility vehicles for companies like Nicor Gas?",
        answer: "Yes, we have extensive experience wrapping utility and service vehicles for major companies like Nicor Gas and other utility providers serving Naperville. Our vehicle graphics are designed to withstand demanding field conditions while maintaining high visibility for emergency response and routine service calls."
      },
      {
        question: "Can you handle high-end vehicle wraps for Naperville's affluent market?",
        answer: "Absolutely. Given Naperville's median household income of $110,500, we frequently work with luxury vehicle wraps, executive fleet graphics, and premium commercial vehicle branding. Our design team specializes in sophisticated graphics that reflect the professional standards expected in Naperville's business community."
      }
    ],
    "Aurora": [
      ...baseFAQs,
      {
        question: "Do you wrap industrial vehicles for manufacturing companies?",
        answer: "Yes, we have extensive experience with industrial vehicle wraps for manufacturing companies like Caterpillar Inc. and other Aurora manufacturers. Our vehicle graphics are designed to withstand harsh industrial environments while providing clear safety information and professional branding for manufacturing facilities."
      },
      {
        question: "Can you wrap vehicles for entertainment venues like Hollywood Casino?",
        answer: "Absolutely! We've wrapped promotional vehicles, shuttle buses, and corporate fleets for entertainment venues throughout Aurora. From Hollywood Casino to the Paramount Theatre, we understand the unique branding requirements for hospitality and entertainment businesses in the Fox Valley area."
      }
    ]
  };

  return citySpecificFAQs[cityName as keyof typeof citySpecificFAQs] || baseFAQs;
};

const UniqueLocationFAQs = ({ city }: UniqueLocationFAQsProps) => {
  const faqs = getLocationSpecificFAQs(city.name, city.county, city.distance);
  
  return { faqs };
};

export default UniqueLocationFAQs;
export { getLocationSpecificFAQs };