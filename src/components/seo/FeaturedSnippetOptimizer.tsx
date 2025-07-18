import React from 'react';
import { Helmet } from 'react-helmet-async';

interface FeaturedSnippetOptimizerProps {
  targetQuestions: Array<{
    question: string;
    answer: string;
    category: 'cost' | 'process' | 'durability' | 'comparison' | 'local';
  }>;
  location: string;
  businessName: string;
}

/**
 * Featured Snippet Optimizer - Designed to Win Position Zero
 * 
 * This component creates content structures that Google loves for featured snippets:
 * 1. Question-based content with clear answers
 * 2. Step-by-step processes
 * 3. Comparison tables
 * 4. Quick facts and statistics
 * 5. Local business information
 */
const FeaturedSnippetOptimizer: React.FC<FeaturedSnippetOptimizerProps> = ({
  targetQuestions,
  location,
  businessName
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Helmet>
        {/* Featured Snippet Optimization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": targetQuestions.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Featured Snippet Content Structure */}
      <section className="featured-snippet-content" style={{ display: 'none' }}>
        {/* Quick Facts Box - Perfect for Featured Snippets */}
        <div className="quick-facts">
          <h3>Vehicle Wrap Quick Facts {location} {currentYear}</h3>
          <ul>
            <li><strong>Average Cost:</strong> $2,500-$5,000 for full wraps</li>
            <li><strong>Installation Time:</strong> 2-3 days typical</li>
            <li><strong>Lifespan:</strong> 5-7 years with proper care</li>
            <li><strong>ROI:</strong> 300-500% for business vehicles</li>
            <li><strong>Paint Protection:</strong> Wraps protect original paint</li>
          </ul>
        </div>

        {/* Step-by-Step Process - Google Loves This Format */}
        <div className="process-steps">
          <h3>Vehicle Wrap Installation Process</h3>
          <ol>
            <li><strong>Step 1:</strong> Free consultation and vehicle assessment</li>
            <li><strong>Step 2:</strong> Custom design creation and approval</li>
            <li><strong>Step 3:</strong> Professional vinyl installation (2-3 days)</li>
            <li><strong>Step 4:</strong> Quality inspection and customer walkthrough</li>
            <li><strong>Step 5:</strong> Care instructions and warranty activation</li>
          </ol>
        </div>

        {/* Comparison Table Format */}
        <div className="comparison-table">
          <h3>Vehicle Wrap vs Paint Job Comparison</h3>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Vehicle Wrap</th>
                <th>Paint Job</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cost</td>
                <td>$2,500-$5,000</td>
                <td>$5,000-$15,000</td>
              </tr>
              <tr>
                <td>Time</td>
                <td>2-3 days</td>
                <td>1-2 weeks</td>
              </tr>
              <tr>
                <td>Reversible</td>
                <td>Yes, completely</td>
                <td>No, permanent</td>
              </tr>
              <tr>
                <td>Paint Protection</td>
                <td>Protects original</td>
                <td>Replaces original</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Local Information Box */}
        <div className="local-info">
          <h3>Vehicle Wraps {location} - Local Information</h3>
          <p><strong>Service Areas:</strong> Chicago, Evanston, Naperville, Schaumburg, Oak Park, Cicero</p>
          <p><strong>Mobile Service:</strong> Available throughout {location} metro area</p>
          <p><strong>Same Day Service:</strong> Available for simple graphics and lettering</p>
          <p><strong>Fleet Discounts:</strong> 15-20% off for 3+ vehicles</p>
          <p><strong>Warranty:</strong> 5-year comprehensive coverage on materials and installation</p>
        </div>

        {/* Question-Answer Format for Voice Search */}
        {targetQuestions.map((item, index) => (
          <div key={index} className="qa-block">
            <h4>{item.question}</h4>
            <p className="speakable">{item.answer}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default FeaturedSnippetOptimizer;