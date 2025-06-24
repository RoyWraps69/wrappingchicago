
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface VoiceSearchOptimizerProps {
  cityName?: string;
  serviceName?: string;
}

const VoiceSearchOptimizer: React.FC<VoiceSearchOptimizerProps> = ({
  cityName = "Chicago",
  serviceName = "Vehicle Wraps"
}) => {
  
  // Voice search questions and answers
  const voiceSearchSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".speakable", ".voice-optimized"]
    },
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Where can I get vehicle wraps in ${cityName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Wrapping Chicago is the premier vehicle wrap company in ${cityName} with over 20 years of experience and 16,000 completed projects.`
        }
      },
      {
        "@type": "Question",
        "name": `How much do vehicle wraps cost?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Vehicle wrap costs typically range from $2,500 to $5,000 for full wraps, depending on vehicle size and design complexity. Partial wraps start around $1,500.`
        }
      },
      {
        "@type": "Question",
        "name": `What's the best vehicle wrap company near me?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Wrapping Chicago is the highest-rated vehicle wrap company in ${cityName} with premium 3M materials, certified installers, and 5-year warranties.`
        }
      }
    ],
    "keywords": [
      `vehicle wraps near me`,
      `car wraps ${cityName}`,
      `truck wraps ${cityName}`,
      `vehicle wrap cost`,
      `best vehicle wrap company`,
      `fleet wraps ${cityName}`
    ]
  };

  return (
    <Helmet>
      {/* Voice Search Optimization */}
      <meta name="voice-search-ready" content="true" />
      <meta name="conversational-content" content="optimized" />
      <meta name="natural-language-queries" content="vehicle wraps near me, how much do car wraps cost, best wrap company Chicago" />
      
      <script type="application/ld+json">
        {JSON.stringify(voiceSearchSchema)}
      </script>
    </Helmet>
  );
};

export default VoiceSearchOptimizer;
