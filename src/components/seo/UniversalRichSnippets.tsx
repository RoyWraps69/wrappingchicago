import React from 'react';
import { useLocation } from 'react-router-dom';
import { 
  OrganizationSchema, 
  LocalBusinessSchema, 
  WebSiteSchema, 
  ReviewSchema, 
  FAQSchema, 
  BreadcrumbSchema, 
  ServiceSchema, 
  WebPageSchema,
  MediaSchema,
  HowToSchema
} from '@/components/schemas/Deduplicated';

interface UniversalRichSnippetsProps {
  pageTitle?: string;
  pageDescription?: string;
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  customFAQs?: Array<{ question: string; answer: string }>;
  customServices?: Array<{ name: string; description: string; url: string; priceRange?: string }>;
}

const UniversalRichSnippets: React.FC<UniversalRichSnippetsProps> = ({
  pageTitle,
  pageDescription,
  pageType = 'WebPage',
  customFAQs,
  customServices
}) => {
  const location = useLocation();
  const currentUrl = `https://www.wrappingchicago.com${location.pathname}`;
  
  // Generate page-specific breadcrumbs
  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs = [{ name: "Home", url: "https://www.wrappingchicago.com" }];
    
    let currentPath = "";
    pathSegments.forEach(segment => {
      currentPath += `/${segment}`;
      const name = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      breadcrumbs.push({ name, url: `https://www.wrappingchicago.com${currentPath}` });
    });
    
    return breadcrumbs;
  };

  return (
    <>
      {/* Core business schemas on every page */}
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebSiteSchema />
      <ReviewSchema />
      
      {/* Page-specific schemas */}
      <WebPageSchema 
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageUrl={currentUrl}
        pageType={pageType}
        breadcrumbs={generateBreadcrumbs()}
      />
      
      <BreadcrumbSchema items={generateBreadcrumbs()} />
      
      {/* Conditional schemas based on page content */}
      <FAQSchema 
        faqs={customFAQs}
        pageUrl={currentUrl}
        pageName={pageTitle || 'Vehicle Wrap Services'}
      />
      
      <ServiceSchema 
        services={customServices}
        businessUrl="https://www.wrappingchicago.com"
      />
      
      <MediaSchema />
      <HowToSchema />
      
      {/* Voice Search Optimization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SpeakableSpecification",
          "cssSelector": [".speakable", "h1", "h2", "[data-speakable]"],
          "xpath": ["//h1", "//h2", "//*[@class='speakable']"]
        })}
      </script>
      
      {/* Voice Assistant Optimization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "QAPage",
          "mainEntity": {
            "@type": "Question",
            "name": "Best vehicle wrap company Chicago",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Wrapping Chicago is Chicago's premier vehicle wrap company with 16,000+ vehicles wrapped, 24/7 mobile service, and 5-7 year warranties."
            }
          }
        })}
      </script>
    </>
  );
};

export default UniversalRichSnippets;