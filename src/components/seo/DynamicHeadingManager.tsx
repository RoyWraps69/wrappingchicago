import React from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Dynamic Heading Manager - Ensures every page has proper H1/H2 structure
 * Critical for SEO - search engines need heading hierarchy
 */
const DynamicHeadingManager: React.FC = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  
  const getHeadingsForRoute = (pathname: string) => {
    // Homepage
    if (pathname === '/') {
      return {
        h1: `Chicago's #1 Vehicle Wrap Company`,
        h2: [
          `Professional Car & Truck Wraps ${currentYear}`,
          `Why Choose Wrapping Chicago`,
          `Our Vehicle Wrap Services`
        ]
      };
    }
    
    // Service pages
    if (pathname === '/services') {
      return {
        h1: `Vehicle Wrap Services Chicago`,
        h2: [
          `Professional Installation Services`,
          `Premium Materials & Quality`,
          `Service Areas & Coverage`
        ]
      };
    }
    if (pathname === '/car-wraps') {
      return {
        h1: `Car Wraps Chicago - Custom Vehicle Wrapping`,
        h2: [
          `Why Choose Our Car Wrap Services`,
          `Car Wrap Design Options`,
          `Installation Process & Timeline`
        ]
      };
    }
    if (pathname === '/truck-wraps') {
      return {
        h1: `Commercial Truck Wraps Chicago`,
        h2: [
          `Professional Truck Graphics`,
          `Fleet Branding Solutions`,
          `Truck Wrap Benefits`
        ]
      };
    }
    if (pathname === '/van-wraps') {
      return {
        h1: `Van Wraps Chicago - Business Vehicle Graphics`,
        h2: [
          `Custom Van Wrap Designs`,
          `Commercial Van Graphics`,
          `Van Wrap Cost & Options`
        ]
      };
    }
    if (pathname === '/fleet-wraps') {
      return {
        h1: `Fleet Vehicle Wraps Chicago`,
        h2: [
          `Complete Fleet Branding`,
          `Multi-Vehicle Packages`,
          `Fleet Wrap Management`
        ]
      };
    }
    if (pathname === '/color-change-wraps') {
      return {
        h1: `Color Change Vehicle Wraps Chicago`,
        h2: [
          `Paint Protection & Style`,
          `Color Options Available`,
          `Color Change Process`
        ]
      };
    }
    
    // Location pages
    if (pathname === '/chicago' || pathname === '/vehicle-wraps-chicago-il') {
      return {
        h1: `Vehicle Wraps Chicago IL - Professional Installation`,
        h2: [
          `Chicago Vehicle Wrap Services`,
          `Why Choose Local Chicago Shop`,
          `Service Areas in Chicago`
        ]
      };
    }
    if (pathname === '/evanston') {
      return {
        h1: `Vehicle Wraps Evanston IL - Professional Service`,
        h2: [
          `Evanston Vehicle Wrap Installation`,
          `Local Evanston Service`,
          `Evanston Wrap Options`
        ]
      };
    }
    if (pathname === '/naperville') {
      return {
        h1: `Vehicle Wraps Naperville IL - Expert Installation`,
        h2: [
          `Naperville Vehicle Graphics`,
          `Professional Naperville Service`,
          `Naperville Wrap Solutions`
        ]
      };
    }
    
    // Info pages
    if (pathname === '/gallery') {
      return {
        h1: `Vehicle Wrap Gallery - Before & After Photos`,
        h2: [
          `Recent Vehicle Wrap Projects`,
          `Customer Success Stories`,
          `Design Inspiration Gallery`
        ]
      };
    }
    if (pathname === '/about') {
      return {
        h1: `About Wrapping Chicago - 20+ Years Experience`,
        h2: [
          `Our Company History`,
          `Expert Team & Certifications`,
          `Why We're Chicago's Best`
        ]
      };
    }
    if (pathname === '/contact') {
      return {
        h1: `Contact Wrapping Chicago - Free Quote`,
        h2: [
          `Get Your Free Estimate`,
          `Visit Our Chicago Location`,
          `Schedule Your Consultation`
        ]
      };
    }
    if (pathname === '/pricing') {
      return {
        h1: `Vehicle Wrap Pricing Chicago - Free Estimates`,
        h2: [
          `Transparent Pricing Structure`,
          `What Affects Wrap Cost`,
          `Get Your Custom Quote`
        ]
      };
    }
    if (pathname === '/faq') {
      return {
        h1: `Vehicle Wrap FAQ - Common Questions`,
        h2: [
          `Wrap Process Questions`,
          `Cost & Pricing Information`,
          `Care & Maintenance Tips`
        ]
      };
    }
    
    // Trade services
    if (pathname === '/plumbing-wraps') {
      return {
        h1: `Plumbing Vehicle Wraps Chicago - Trade Graphics`,
        h2: [
          `Professional Plumbing Van Wraps`,
          `Trade Business Branding`,
          `Plumbing Fleet Graphics`
        ]
      };
    }
    if (pathname === '/hvac-wraps') {
      return {
        h1: `HVAC Vehicle Wraps Chicago - Trade Graphics`,
        h2: [
          `Professional HVAC Truck Wraps`,
          `Heating & Cooling Graphics`,
          `HVAC Business Branding`
        ]
      };
    }
    
    // Fallback for any other pages
    return {
      h1: `Professional Vehicle Wraps Chicago`,
      h2: [
        `Expert Installation Services`,
        `Quality Materials & Design`,
        `Get Your Free Quote Today`
      ]
    };
  };

  const headings = getHeadingsForRoute(location.pathname);

  return (
    <div className="sr-only" aria-hidden="true">
      {/* Hidden SEO headings - ensures every page has proper structure */}
      <h1>{headings.h1}</h1>
      {headings.h2.map((h2Text, index) => (
        <h2 key={index}>{h2Text}</h2>
      ))}
    </div>
  );
};

export default DynamicHeadingManager;