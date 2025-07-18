import React from 'react';
import { useLocation } from 'react-router-dom';

interface DynamicHeadingProps {
  level: 1 | 2 | 3;
  className?: string;
  fallback?: string;
  children?: React.ReactNode;
}

/**
 * Dynamic Heading Component - Generates unique headings based on current route
 * Ensures every page has unique H1/H2 content for SEO
 */
const DynamicHeading: React.FC<DynamicHeadingProps> = ({ 
  level, 
  className = "", 
  fallback = "", 
  children 
}) => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  
  const getHeadingText = (pathname: string, headingLevel: number): string => {
    // Homepage H1/H2
    if (pathname === '/') {
      if (headingLevel === 1) {
        return `Chicago's #1 Vehicle Wraps - Car & Truck Graphics ${currentYear}`;
      }
      if (headingLevel === 2) {
        return `Professional Vehicle Wrapping Services for Chicago Businesses`;
      }
    }
    
    // Service Pages
    if (pathname === '/car-wraps') {
      if (headingLevel === 1) {
        return `Custom Car Wraps Chicago - Premium Vehicle Graphics`;
      }
      if (headingLevel === 2) {
        return `Transform Your Car with Professional Wrap Installation`;
      }
    }
    
    if (pathname === '/truck-wraps') {
      if (headingLevel === 1) {
        return `Commercial Truck Wraps Chicago - Business Vehicle Graphics`;
      }
      if (headingLevel === 2) {
        return `Professional Truck Wrapping for Chicago Businesses`;
      }
    }
    
    if (pathname === '/van-wraps') {
      if (headingLevel === 1) {
        return `Van Wraps Chicago - Custom Business Vehicle Graphics`;
      }
      if (headingLevel === 2) {
        return `Professional Van Wrapping Services in Chicago`;
      }
    }
    
    if (pathname === '/fleet-wraps') {
      if (headingLevel === 1) {
        return `Fleet Vehicle Wraps Chicago - Multi-Vehicle Branding`;
      }
      if (headingLevel === 2) {
        return `Complete Fleet Branding Solutions for Chicago Businesses`;
      }
    }
    
    if (pathname === '/color-change-wraps') {
      if (headingLevel === 1) {
        return `Color Change Wraps Chicago - Vehicle Paint Protection`;
      }
      if (headingLevel === 2) {
        return `Transform Your Vehicle's Color with Premium Wraps`;
      }
    }
    
    if (pathname === '/luxury-exotic-wraps') {
      if (headingLevel === 1) {
        return `Luxury Car Wraps Chicago - Exotic Vehicle Specialists`;
      }
      if (headingLevel === 2) {
        return `Premium Wrapping for High-End Vehicles`;
      }
    }
    
    if (pathname === '/designer-wraps') {
      if (headingLevel === 1) {
        return `Designer Vehicle Wraps Chicago - Custom Artistic Graphics`;
      }
      if (headingLevel === 2) {
        return `Unique Designer Wrap Solutions for Chicago`;
      }
    }
    
    // Trade Services
    if (pathname === '/plumbing-wraps') {
      if (headingLevel === 1) {
        return `Plumbing Vehicle Wraps Chicago - Trade Van Graphics`;
      }
      if (headingLevel === 2) {
        return `Professional Plumbing Business Vehicle Branding`;
      }
    }
    
    if (pathname === '/hvac-wraps') {
      if (headingLevel === 1) {
        return `HVAC Vehicle Wraps Chicago - Heating & Cooling Graphics`;
      }
      if (headingLevel === 2) {
        return `Professional HVAC Business Vehicle Wrapping`;
      }
    }
    
    if (pathname === '/electrical-wraps') {
      if (headingLevel === 1) {
        return `Electrical Vehicle Wraps Chicago - Electrician Van Graphics`;
      }
      if (headingLevel === 2) {
        return `Professional Electrical Contractor Vehicle Branding`;
      }
    }
    
    // Location Pages
    if (pathname === '/chicago' || pathname === '/vehicle-wraps-chicago-il') {
      if (headingLevel === 1) {
        return `Vehicle Wraps Chicago IL - Local Professional Installation`;
      }
      if (headingLevel === 2) {
        return `Chicago's Premier Vehicle Wrapping Services`;
      }
    }
    
    if (pathname === '/evanston') {
      if (headingLevel === 1) {
        return `Vehicle Wraps Evanston IL - Professional Graphics Services`;
      }
      if (headingLevel === 2) {
        return `Expert Vehicle Wrapping in Evanston, Illinois`;
      }
    }
    
    if (pathname === '/naperville') {
      if (headingLevel === 1) {
        return `Vehicle Wraps Naperville IL - Custom Graphics Installation`;
      }
      if (headingLevel === 2) {
        return `Professional Vehicle Wrapping in Naperville, Illinois`;
      }
    }
    
    if (pathname === '/schaumburg') {
      if (headingLevel === 1) {
        return `Vehicle Wraps Schaumburg IL - Business Graphics Services`;
      }
      if (headingLevel === 2) {
        return `Expert Vehicle Wrapping in Schaumburg, Illinois`;
      }
    }
    
    // Info Pages
    if (pathname === '/gallery') {
      if (headingLevel === 1) {
        return `Vehicle Wrap Gallery Chicago - Before & After Portfolio`;
      }
      if (headingLevel === 2) {
        return `See Our Professional Vehicle Wrap Projects`;
      }
    }
    
    if (pathname === '/about') {
      if (headingLevel === 1) {
        return `About Wrapping Chicago - 20+ Years of Excellence`;
      }
      if (headingLevel === 2) {
        return `Chicago's Most Trusted Vehicle Wrap Company`;
      }
    }
    
    if (pathname === '/contact') {
      if (headingLevel === 1) {
        return `Contact Wrapping Chicago - Get Your Free Quote Today`;
      }
      if (headingLevel === 2) {
        return `Schedule Your Professional Vehicle Wrap Consultation`;
      }
    }
    
    if (pathname === '/pricing') {
      if (headingLevel === 1) {
        return `Vehicle Wrap Pricing Chicago - Transparent Estimates`;
      }
      if (headingLevel === 2) {
        return `Professional Vehicle Wrap Cost Information`;
      }
    }
    
    if (pathname === '/ai-wrap-ideas') {
      if (headingLevel === 1) {
        return `AI Vehicle Wrap Designer Chicago - Custom Design Tool`;
      }
      if (headingLevel === 2) {
        return `Create Your Perfect Vehicle Wrap Design with AI`;
      }
    }
    
    // Dynamic city routes
    if (pathname.startsWith('/vehicle-wraps-') && pathname.endsWith('-il')) {
      const citySlug = pathname.replace('/vehicle-wraps-', '').replace('-il', '');
      const cityName = citySlug.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      if (headingLevel === 1) {
        return `Vehicle Wraps ${cityName} IL - Professional Installation`;
      }
      if (headingLevel === 2) {
        return `Expert Vehicle Wrapping Services in ${cityName}, Illinois`;
      }
    }
    
    // Fallback
    if (fallback) return fallback;
    if (children && typeof children === 'string') return children;
    
    return headingLevel === 1 
      ? `Professional Vehicle Wraps Chicago`
      : `Expert Vehicle Wrapping Services`;
  };

  const headingText = getHeadingText(location.pathname, level);
  
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <Tag className={className}>
      {children || headingText}
    </Tag>
  );
};

export default DynamicHeading;