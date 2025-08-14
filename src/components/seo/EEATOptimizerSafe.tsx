import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EEATOptimizerProps {
  pageType: 'home' | 'service' | 'location' | 'article' | 'case-study';
  lastUpdated?: string;
  author?: string;
  expertise?: string[];
}

const EEATOptimizer: React.FC<EEATOptimizerProps> = ({
  pageType,
  lastUpdated = new Date().toISOString(),
  author = "Roy Mendelson",
  expertise = ["Vehicle Wrapping", "Commercial Fleet Graphics"]
}) => {
  console.log('EEATOptimizer rendering with:', { pageType, author });
  
  try {
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
        
        {/* Trust Signals */}
        <meta name="business-verification" content="Google My Business verified" />
        <meta name="customer-reviews" content="4.9/5 stars, 150+ Google reviews" />
        <meta name="insurance" content="Fully insured and bonded" />
        <meta name="warranty" content="Warranty provided on all installations" />
      </Helmet>
    );
  } catch (error) {
    console.error('EEATOptimizer error:', error);
    return null;
  }
};

export default EEATOptimizer;