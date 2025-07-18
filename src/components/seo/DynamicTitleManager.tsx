import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * Dynamic Title Manager - Generates unique, SEO-optimized titles for each page
 * 30-60 characters for Google approval
 */
const DynamicTitleManager: React.FC = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  
  const getTitleForRoute = (pathname: string): string => {
    // Homepage
    if (pathname === '/') {
      return `Vehicle Wraps Chicago | Car & Truck Wraps ${currentYear}`;
    }
    
    // Service pages
    if (pathname === '/services') {
      return `Vehicle Wrap Services Chicago | Professional Installation`;
    }
    if (pathname === '/car-wraps') {
      return `Car Wraps Chicago | Custom Vehicle Wrapping ${currentYear}`;
    }
    if (pathname === '/truck-wraps') {
      return `Truck Wraps Chicago | Commercial Vehicle Graphics`;
    }
    if (pathname === '/van-wraps') {
      return `Van Wraps Chicago | Business Vehicle Branding`;
    }
    if (pathname === '/fleet-wraps') {
      return `Fleet Wraps Chicago | Commercial Vehicle Graphics`;
    }
    if (pathname === '/color-change-wraps') {
      return `Color Change Wraps Chicago | Vehicle Paint Protection`;
    }
    if (pathname === '/luxury-exotic-wraps') {
      return `Luxury Car Wraps Chicago | Exotic Vehicle Wrapping`;
    }
    if (pathname === '/designer-wraps') {
      return `Designer Car Wraps Chicago | Custom Vehicle Art`;
    }
    
    // Trade services
    if (pathname === '/plumbing-wraps') {
      return `Plumbing Vehicle Wraps Chicago | Trade Van Graphics`;
    }
    if (pathname === '/hvac-wraps') {
      return `HVAC Vehicle Wraps Chicago | Trade Truck Graphics`;
    }
    if (pathname === '/electrical-wraps') {
      return `Electrical Vehicle Wraps Chicago | Trade Van Wraps`;
    }
    if (pathname === '/movers-wraps') {
      return `Moving Company Vehicle Wraps Chicago | Truck Graphics`;
    }
    if (pathname === '/logistics-wraps') {
      return `Logistics Vehicle Wraps Chicago | Fleet Graphics`;
    }
    if (pathname === '/delivery-wraps') {
      return `Delivery Vehicle Wraps Chicago | Van Graphics`;
    }
    
    // Location pages - Chicago area
    if (pathname === '/chicago' || pathname === '/vehicle-wraps-chicago-il') {
      return `Vehicle Wraps Chicago IL | Car & Truck Wrapping`;
    }
    if (pathname === '/evanston') {
      return `Vehicle Wraps Evanston IL | Car & Truck Graphics`;
    }
    if (pathname === '/naperville') {
      return `Vehicle Wraps Naperville IL | Professional Wrapping`;
    }
    if (pathname === '/schaumburg') {
      return `Vehicle Wraps Schaumburg IL | Car & Fleet Graphics`;
    }
    if (pathname === '/skokie') {
      return `Vehicle Wraps Skokie IL | Professional Installation`;
    }
    if (pathname === '/arlington-heights') {
      return `Vehicle Wraps Arlington Heights IL | Car Wrapping`;
    }
    if (pathname === '/palatine') {
      return `Vehicle Wraps Palatine IL | Fleet Graphics`;
    }
    if (pathname === '/aurora') {
      return `Vehicle Wraps Aurora IL | Car & Truck Wrapping`;
    }
    if (pathname === '/joliet') {
      return `Vehicle Wraps Joliet IL | Professional Graphics`;
    }
    if (pathname === '/oak-park') {
      return `Vehicle Wraps Oak Park IL | Car Wrapping Services`;
    }
    if (pathname === '/wheaton') {
      return `Vehicle Wraps Wheaton IL | Professional Installation`;
    }
    
    // Chicago neighborhoods
    if (pathname === '/lakeview-chicago') {
      return `Vehicle Wraps Lakeview Chicago | Car Graphics`;
    }
    if (pathname === '/logan-square-chicago') {
      return `Vehicle Wraps Logan Square Chicago | Car Wrapping`;
    }
    if (pathname === '/andersonville-chicago') {
      return `Vehicle Wraps Andersonville Chicago | Graphics`;
    }
    if (pathname === '/bucktown-chicago') {
      return `Vehicle Wraps Bucktown Chicago | Car Wrapping`;
    }
    if (pathname === '/gold-coast-chicago') {
      return `Vehicle Wraps Gold Coast Chicago | Luxury Cars`;
    }
    
    // Extended IL areas
    if (pathname === '/elmhurst-il') {
      return `Vehicle Wraps Elmhurst IL | Car & Truck Graphics`;
    }
    if (pathname === '/lombard-il') {
      return `Vehicle Wraps Lombard IL | Professional Wrapping`;
    }
    if (pathname === '/glen-ellyn-il') {
      return `Vehicle Wraps Glen Ellyn IL | Car Graphics`;
    }
    if (pathname === '/oak-lawn-il') {
      return `Vehicle Wraps Oak Lawn IL | Fleet Graphics`;
    }
    if (pathname === '/tinley-park-il') {
      return `Vehicle Wraps Tinley Park IL | Car Wrapping`;
    }
    if (pathname === '/orland-park-il') {
      return `Vehicle Wraps Orland Park IL | Professional`;
    }
    
    // Info pages
    if (pathname === '/gallery') {
      return `Vehicle Wrap Gallery Chicago | Before & After Photos`;
    }
    if (pathname === '/about') {
      return `About Wrapping Chicago | 20+ Years Experience`;
    }
    if (pathname === '/contact') {
      return `Contact Wrapping Chicago | Free Vehicle Wrap Quote`;
    }
    if (pathname === '/pricing') {
      return `Vehicle Wrap Pricing Chicago | Free Estimates`;
    }
    if (pathname === '/faq') {
      return `Vehicle Wrap FAQ Chicago | Common Questions`;
    }
    if (pathname === '/blog') {
      return `Vehicle Wrap Blog Chicago | Tips & News ${currentYear}`;
    }
    if (pathname === '/ai-wrap-ideas') {
      return `AI Vehicle Wrap Designer Chicago | Custom Ideas`;
    }
    if (pathname === '/locations') {
      return `Vehicle Wrap Locations Chicago | Service Areas`;
    }
    if (pathname === '/sitemap') {
      return `Wrapping Chicago Sitemap | All Pages & Services`;
    }
    
    // Legal pages
    if (pathname === '/privacy-policy') {
      return `Privacy Policy | Wrapping Chicago Vehicle Wraps`;
    }
    if (pathname === '/terms') {
      return `Terms of Service | Wrapping Chicago`;
    }
    if (pathname === '/return-policy') {
      return `Return Policy | Wrapping Chicago Vehicle Wraps`;
    }
    if (pathname === '/shipping') {
      return `Shipping Info | Wrapping Chicago Materials`;
    }
    
    // Special pages
    if (pathname === '/truck-wraps-chicago') {
      return `Truck Wraps Chicago | Commercial Vehicle Graphics`;
    }
    if (pathname === '/glossary') {
      return `Vehicle Wrap Glossary | Terms & Definitions`;
    }
    if (pathname === '/stats') {
      return `Wrapping Chicago Stats | 16,000+ Projects`;
    }
    
    // Dynamic city routes
    if (pathname.startsWith('/vehicle-wraps-') && pathname.endsWith('-il')) {
      const citySlug = pathname.replace('/vehicle-wraps-', '').replace('-il', '');
      const cityName = citySlug.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      return `Vehicle Wraps ${cityName} IL | Car & Truck Graphics`;
    }
    
    // Blog posts
    if (pathname.startsWith('/blog/')) {
      return `Vehicle Wrap Blog | Wrapping Chicago News`;
    }
    
    // Fallback for any other pages
    return `Wrapping Chicago | Professional Vehicle Wraps`;
  };

  const pageTitle = getTitleForRoute(location.pathname);

  return (
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
  );
};

export default DynamicTitleManager;