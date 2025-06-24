
import React, { useEffect } from 'react';

const SEOHealthChecker: React.FC = () => {
  useEffect(() => {
    const runSEOHealthCheck = () => {
      console.group('🚀 SEO HEALTH CHECK - WRAPPING CHICAGO');
      
      // Check Title
      const title = document.title;
      console.log('📄 Title:', title);
      if (title.length < 30 || title.length > 60) {
        console.warn('⚠️ Title length should be 30-60 characters');
      }
      
      // Check Meta Description
      const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content');
      console.log('📝 Meta Description:', metaDesc);
      if (!metaDesc) {
        console.error('❌ Missing meta description');
      } else if (metaDesc.length < 120 || metaDesc.length > 160) {
        console.warn('⚠️ Meta description should be 120-160 characters');
      }
      
      // Check Canonical URL
      const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
      console.log('🔗 Canonical URL:', canonical);
      if (!canonical) {
        console.error('❌ Missing canonical URL');
      }
      
      // Check H1 tags
      const h1Tags = document.querySelectorAll('h1');
      console.log('📋 H1 Tags:', h1Tags.length);
      if (h1Tags.length === 0) {
        console.error('❌ Missing H1 tag');
      } else if (h1Tags.length > 1) {
        console.warn('⚠️ Multiple H1 tags found - should have only one');
      }
      
      // Check H2-H6 hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      console.log('📊 Heading Structure:');
      headings.forEach((heading, index) => {
        console.log(`  ${heading.tagName}: ${heading.textContent?.substring(0, 50)}...`);
      });
      
      // Check Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content');
      const ogDesc = document.querySelector('meta[property="og:description"]')?.getAttribute('content');
      const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content');
      const ogUrl = document.querySelector('meta[property="og:url"]')?.getAttribute('content');
      
      console.log('🌐 Open Graph:');
      console.log('  Title:', ogTitle);
      console.log('  Description:', ogDesc);
      console.log('  Image:', ogImage);
      console.log('  URL:', ogUrl);
      
      if (!ogTitle || !ogDesc || !ogImage || !ogUrl) {
        console.error('❌ Missing Open Graph tags');
      }
      
      // Check Twitter Cards
      const twitterCard = document.querySelector('meta[name="twitter:card"]')?.getAttribute('content');
      const twitterTitle = document.querySelector('meta[name="twitter:title"]')?.getAttribute('content');
      const twitterDesc = document.querySelector('meta[name="twitter:description"]')?.getAttribute('content');
      const twitterImage = document.querySelector('meta[name="twitter:image"]')?.getAttribute('content');
      
      console.log('🐦 Twitter Cards:');
      console.log('  Card Type:', twitterCard);
      console.log('  Title:', twitterTitle);
      console.log('  Description:', twitterDesc);
      console.log('  Image:', twitterImage);
      
      if (!twitterCard || !twitterTitle || !twitterDesc || !twitterImage) {
        console.error('❌ Missing Twitter Card tags');
      }
      
      // Check Robots meta
      const robots = document.querySelector('meta[name="robots"]')?.getAttribute('content');
      console.log('🤖 Robots:', robots);
      if (!robots) {
        console.error('❌ Missing robots meta tag');
      }
      
      // Check Schema.org structured data
      const schemas = document.querySelectorAll('script[type="application/ld+json"]');
      console.log('📊 Schema.org Scripts:', schemas.length);
      if (schemas.length === 0) {
        console.error('❌ No structured data found');
      }
      
      // Check alt tags on images
      const images = document.querySelectorAll('img');
      let missingAlt = 0;
      images.forEach(img => {
        if (!img.getAttribute('alt')) {
          missingAlt++;
        }
      });
      console.log('🖼️ Images:', images.length, '| Missing Alt:', missingAlt);
      
      // Check internal links
      const internalLinks = document.querySelectorAll('a[href^="/"], a[href*="wrappingchicago.com"]');
      console.log('🔗 Internal Links:', internalLinks.length);
      
      // Check external links
      const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="wrappingchicago.com"])');
      console.log('🌍 External Links:', externalLinks.length);
      
      // Performance checks
      const performanceEntries = performance.getEntriesByType('navigation');
      if (performanceEntries.length > 0) {
        const navigation = performanceEntries[0] as PerformanceNavigationTiming;
        console.log('⚡ Performance:');
        console.log('  DOM Content Loaded:', Math.round(navigation.domContentLoadedEventEnd - navigation.navigationStart), 'ms');
        console.log('  Page Load Complete:', Math.round(navigation.loadEventEnd - navigation.navigationStart), 'ms');
      }
      
      console.log('✅ SEO HEALTH CHECK COMPLETE - READY TO DOMINATE GOOGLE!');
      console.groupEnd();
    };

    // Run after page load
    setTimeout(runSEOHealthCheck, 2000);
  }, []);

  return null;
};

export default SEOHealthChecker;
