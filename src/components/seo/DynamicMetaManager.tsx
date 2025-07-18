import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * Dynamic Meta Tags Manager - Fixes all meta tag length and missing tag issues
 * Ensures proper meta descriptions (50-160 chars), Twitter Cards, and Open Graph
 */
const DynamicMetaManager: React.FC = () => {
  const location = useLocation();
  const domain = "https://www.wrappingchicago.com";
  const currentYear = new Date().getFullYear();
  
  const getMetaForRoute = (pathname: string) => {
    // Homepage
    if (pathname === '/') {
      return {
        metaDescription: `Chicago's #1 vehicle wrap company. Professional car wraps, truck graphics & fleet branding. 20+ years experience. Free quotes! Call (312) 597-1286.`,
        ogTitle: `Vehicle Wraps Chicago | Car & Truck Graphics ${currentYear}`,
        ogDescription: `Chicago's premier vehicle wrap specialists. Professional installation.`,
        twitterTitle: `Vehicle Wraps Chicago | Professional Installation`,
        twitterDescription: `Chicago's #1 vehicle wrap company. 20+ years experience. Free quotes!`,
        keywords: `vehicle wraps Chicago, car wraps, truck wraps, fleet graphics, vehicle graphics Chicago, auto wraps, commercial vehicle wraps`
      };
    }
    
    // Car wraps page
    if (pathname === '/car-wraps') {
      return {
        metaDescription: `Custom car wraps Chicago. Premium vinyl wrapping, color changes & graphics. Professional installation with 5-year warranty. Free consultation!`,
        ogTitle: `Car Wraps Chicago | Custom Vehicle Wrapping Services`,
        ogDescription: `Professional car wrapping with premium materials & expert install.`,
        twitterTitle: `Car Wraps Chicago | Custom Vehicle Graphics`,
        twitterDescription: `Custom car wraps & vehicle graphics. Professional installation Chicago.`,
        keywords: `car wraps Chicago, custom car wraps, vehicle wrapping, color change wraps, car graphics Chicago`
      };
    }
    
    // Truck wraps page
    if (pathname === '/truck-wraps') {
      return {
        metaDescription: `Commercial truck wraps Chicago. Business vehicle graphics that get results. Professional installation for contractors & fleets. Free quotes!`,
        ogTitle: `Truck Wraps Chicago | Commercial Vehicle Graphics`,
        ogDescription: `Professional truck wrapping for Chicago businesses. ROI-focused.`,
        twitterTitle: `Truck Wraps Chicago | Business Vehicle Graphics`,
        twitterDescription: `Commercial truck wraps that drive business results in Chicago.`,
        keywords: `truck wraps Chicago, commercial truck graphics, business vehicle wraps, fleet wraps, work truck graphics`
      };
    }
    
    // Van wraps page  
    if (pathname === '/van-wraps') {
      return {
        metaDescription: `Van wraps Chicago. Professional business van graphics & fleet branding. Transform your vans into mobile billboards. Free estimates!`,
        ogTitle: `Van Wraps Chicago | Business Vehicle Graphics`,
        ogDescription: `Professional van wrapping for Chicago businesses. Expert install.`,
        twitterTitle: `Van Wraps Chicago | Professional Business Graphics`,
        twitterDescription: `Van wraps & business graphics. Professional Chicago installation.`,
        keywords: `van wraps Chicago, business van graphics, commercial van wraps, van lettering, delivery van wraps`
      };
    }
    
    // Fleet wraps page
    if (pathname === '/fleet-wraps') {
      return {
        metaDescription: `Fleet vehicle wraps Chicago. Multi-vehicle branding packages for businesses. Consistent graphics across your entire fleet. Volume discounts!`,
        ogTitle: `Fleet Wraps Chicago | Multi-Vehicle Branding`,
        ogDescription: `Professional fleet wrapping services. Consistent brand messaging.`,
        twitterTitle: `Fleet Wraps Chicago | Multi-Vehicle Graphics`,
        twitterDescription: `Fleet vehicle wraps & branding. Professional Chicago installation.`,
        keywords: `fleet wraps Chicago, fleet graphics, multi-vehicle branding, commercial fleet wraps, business fleet graphics`
      };
    }
    
    // Color change wraps
    if (pathname === '/color-change-wraps') {
      return {
        metaDescription: `Color change wraps Chicago. Transform your vehicle's color with premium vinyl. Paint protection + style. Reversible. Free consultation!`,
        ogTitle: `Color Change Wraps Chicago | Vehicle Color Transformation`,
        ogDescription: `Professional color change wraps. Transform your vehicle's look.`,
        twitterTitle: `Color Change Wraps Chicago | Vehicle Transformation`,
        twitterDescription: `Color change vehicle wraps. Premium vinyl. Professional installation.`,
        keywords: `color change wraps Chicago, vehicle color change, paint protection film, car color wraps, vinyl color change`
      };
    }
    
    // Location pages
    if (pathname === '/chicago' || pathname === '/vehicle-wraps-chicago-il') {
      return {
        metaDescription: `Vehicle wraps Chicago IL. Local professional installation. Car wraps, truck graphics & fleet branding. 20+ years experience. Free quotes!`,
        ogTitle: `Vehicle Wraps Chicago IL | Local Professional Service`,
        ogDescription: `Chicago's premier vehicle wrap specialists. Local installation.`,
        twitterTitle: `Vehicle Wraps Chicago IL | Professional Installation`,
        twitterDescription: `Chicago vehicle wraps. Professional local installation & service.`,
        keywords: `vehicle wraps Chicago IL, Chicago car wraps, Chicago truck wraps, vehicle graphics Chicago Illinois`
      };
    }
    
    if (pathname === '/evanston') {
      return {
        metaDescription: `Vehicle wraps Evanston IL. Professional car & truck wrapping services. Serving Northwestern area. Expert installation. Free estimates!`,
        ogTitle: `Vehicle Wraps Evanston IL | Professional Installation`,
        ogDescription: `Professional vehicle wrapping in Evanston. Expert installation.`,
        twitterTitle: `Vehicle Wraps Evanston IL | Professional Service`,
        twitterDescription: `Evanston vehicle wraps. Professional installation & graphics.`,
        keywords: `vehicle wraps Evanston IL, Evanston car wraps, Northwestern vehicle graphics, Evanston truck wraps`
      };
    }
    
    // Trade services
    if (pathname === '/plumbing-wraps') {
      return {
        metaDescription: `Plumbing vehicle wraps Chicago. Get more service calls with professional van & truck graphics. ROI-focused designs. Free consultation!`,
        ogTitle: `Plumbing Vehicle Wraps Chicago | Trade Graphics`,
        ogDescription: `Professional plumbing vehicle graphics. Increase service calls.`,
        twitterTitle: `Plumbing Vehicle Wraps Chicago | Trade Graphics`,
        twitterDescription: `Plumbing van & truck wraps. Professional Chicago installation.`,
        keywords: `plumbing vehicle wraps Chicago, plumber truck graphics, plumbing van wraps, trade vehicle graphics Chicago`
      };
    }
    
    // Info pages
    if (pathname === '/gallery') {
      return {
        metaDescription: `Vehicle wrap gallery Chicago. See our before & after photos. 16,000+ completed projects. Car wraps, truck graphics & more. Get inspired!`,
        ogTitle: `Vehicle Wrap Gallery Chicago | Before & After Photos`,
        ogDescription: `See our vehicle wrap portfolio. 16,000+ completed projects.`,
        twitterTitle: `Vehicle Wrap Gallery Chicago | Portfolio`,
        twitterDescription: `Chicago vehicle wrap gallery. Before & after photos of our work.`,
        keywords: `vehicle wrap gallery Chicago, before after photos, vehicle wrap examples, Chicago wrap portfolio`
      };
    }
    
    if (pathname === '/contact') {
      return {
        metaDescription: `Contact Wrapping Chicago. Get your free vehicle wrap quote today! Call (312) 597-1286 or visit 4711 N. Lamon Ave. Expert consultation!`,
        ogTitle: `Contact Wrapping Chicago | Free Vehicle Wrap Quote`,
        ogDescription: `Get your free vehicle wrap quote. Expert consultation available.`,
        twitterTitle: `Contact Wrapping Chicago | Free Quote`,
        twitterDescription: `Contact Chicago's vehicle wrap experts. Free quotes & consultation.`,
        keywords: `contact Wrapping Chicago, vehicle wrap quote Chicago, free estimate, (312) 597-1286`
      };
    }
    
    if (pathname === '/about') {
      return {
        metaDescription: `About Wrapping Chicago. 20+ years experience, 16,000+ projects completed. Chicago's most trusted vehicle wrap company. Meet our expert team!`,
        ogTitle: `About Wrapping Chicago | 20+ Years Experience`,
        ogDescription: `Chicago's most trusted vehicle wrap company. 20+ years experience.`,
        twitterTitle: `About Wrapping Chicago | Expert Team`,
        twitterDescription: `Chicago vehicle wrap experts. 20+ years experience, 16,000+ projects.`,
        keywords: `about Wrapping Chicago, vehicle wrap company Chicago, 20 years experience, expert vehicle wrapping`
      };
    }
    
    // Default for other pages
    return {
      metaDescription: `Professional vehicle wrap services Chicago. Expert installation, premium materials, competitive pricing. Free consultation available!`,
      ogTitle: `Vehicle Wrap Services Chicago | Professional Installation`,
      ogDescription: `Professional vehicle wrapping services in Chicago. Expert install.`,
      twitterTitle: `Vehicle Wraps Chicago | Professional Service`,
      twitterDescription: `Professional vehicle wrap services in Chicago. Expert installation.`,
      keywords: `vehicle wraps Chicago, professional installation, vehicle graphics, car wraps, truck wraps`
    };
  };

  const metaData = getMetaForRoute(location.pathname);
  const canonicalUrl = `${domain}${location.pathname === '/' ? '' : location.pathname}`;

  return (
    <Helmet>
      {/* Meta Description - 50-160 characters */}
      <meta name="description" content={metaData.metaDescription} />
      <meta name="keywords" content={metaData.keywords} />
      
      {/* Open Graph - Optimized lengths */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={metaData.ogTitle} />
      <meta property="og:description" content={metaData.ogDescription} />
      <meta property="og:image" content={`${domain}/lovable-uploads/b7fa2b01-f82f-4426-8eeb-faddf57c95e9.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Wrapping Chicago Vehicle Wrap Services" />
      <meta property="og:site_name" content="Wrapping Chicago" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Cards - Complete set */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@wrappingchicago" />
      <meta name="twitter:creator" content="@wrappingchicago" />
      <meta name="twitter:title" content={metaData.twitterTitle} />
      <meta name="twitter:description" content={metaData.twitterDescription} />
      <meta name="twitter:image" content={`${domain}/lovable-uploads/b7fa2b01-f82f-4426-8eeb-faddf57c95e9.png`} />
      <meta name="twitter:image:alt" content="Wrapping Chicago Vehicle Wrap Services" />
      <meta name="twitter:url" content={canonicalUrl} />
      
      {/* Additional meta tags for better SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="Wrapping Chicago" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
    </Helmet>
  );
};

export default DynamicMetaManager;