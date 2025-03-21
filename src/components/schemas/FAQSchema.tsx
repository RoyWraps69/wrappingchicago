
import React from 'react';

const FAQSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a vehicle wrap cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vehicle wrap pricing depends on several factors including vehicle size, wrap type (full or partial), and design complexity. Fleet wraps typically range from $2,500 to $5,000 per vehicle, while color change wraps range from $3,000 to $6,000 depending on the vehicle. Contact us for a free custom quote tailored to your specific needs."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a vehicle wrap last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When properly maintained, our premium 3M and Avery vinyl vehicle wraps typically last 5-7 years. We back our work with a comprehensive 2-year 'NO QUESTIONS ASKED' warranty for your peace of mind."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to wrap a vehicle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most standard vehicle wraps can be completed in 2-3 business days. Fleet projects are scheduled based on the number of vehicles and complexity of designs. We pride ourselves on efficient turnaround times without sacrificing quality."
        }
      },
      {
        "@type": "Question",
        "name": "Will a vehicle wrap damage my paint?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, when professionally installed and removed, vehicle wraps actually protect your paint from UV rays, minor scratches, and road debris. Our installation process ensures your vehicle's original paint remains intact and often in better condition than unwrapped vehicles."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve for vehicle wrapping?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Chicago and all surrounding suburbs within a 40-mile radius, including Arlington Heights, Oak Lawn, Naperville, Schaumburg, Evanston, and many more. Our central Chicago location allows us to efficiently serve the entire metropolitan area."
        }
      },
      {
        "@type": "Question",
        "name": "What is the AI Wrap Designer tool?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI Wrap Designer is an innovative tool that uses artificial intelligence to generate custom vehicle wrap design concepts based on your business information and preferences. It allows you to visualize different wrap ideas instantly before committing to a design, saving time and ensuring you get a wrap that perfectly represents your brand."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default FAQSchema;
