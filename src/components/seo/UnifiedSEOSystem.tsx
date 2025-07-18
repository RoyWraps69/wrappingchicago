import React, { useEffect } from 'react';

/**
 * Unified SEO System - Single source of truth for all SEO optimizations
 * Replaces multiple conflicting components
 */
const UnifiedSEOSystem: React.FC = () => {
  useEffect(() => {
    const runUnifiedSEOCheck = () => {
      let score = 0;
      let maxScore = 0;
      const issues: string[] = [];
      
      console.log('🔍 UNIFIED SEO HEALTH CHECK');
      
      // 1. Title Tag (10 points)
      maxScore += 10;
      const title = document.title;
      if (title && title.length >= 30 && title.length <= 60) {
        score += 10;
        console.log('✅ Title Tag: Perfect');
      } else {
        issues.push('Title tag needs optimization (30-60 chars)');
        console.log('⚠️ Title Tag: Needs optimization');
      }
      
      // 2. Meta Description (10 points)
      maxScore += 10;
      const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content');
      if (metaDesc && metaDesc.length >= 120 && metaDesc.length <= 160) {
        score += 10;
        console.log('✅ Meta Description: Perfect');
      } else {
        issues.push('Meta description needs optimization (120-160 chars)');
        console.log('⚠️ Meta Description: Needs optimization');
      }
      
      // 3. H1 Tag (10 points)
      maxScore += 10;
      const h1Tags = document.querySelectorAll('h1');
      if (h1Tags.length === 1) {
        score += 10;
        console.log('✅ H1 Tag: Perfect');
      } else {
        issues.push(`H1 tags: ${h1Tags.length} found (should be exactly 1)`);
        console.log('⚠️ H1 Tag: Issues found');
      }
      
      // 4. Canonical URL (10 points)
      maxScore += 10;
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        score += 10;
        console.log('✅ Canonical URL: Present');
      } else {
        issues.push('Missing canonical URL');
        console.log('⚠️ Canonical URL: Missing');
      }
      
      // 5. Schema Markup (15 points)
      maxScore += 15;
      const schemas = document.querySelectorAll('script[type="application/ld+json"]');
      if (schemas.length >= 3) {
        score += 15;
        console.log('✅ Schema Markup: Comprehensive');
      } else if (schemas.length >= 1) {
        score += 8;
        console.log('⚠️ Schema Markup: Basic');
      } else {
        issues.push('Missing structured data');
        console.log('❌ Schema Markup: Missing');
      }
      
      // 6. Open Graph (10 points)
      maxScore += 10;
      const ogTags = document.querySelectorAll('meta[property^="og:"]');
      if (ogTags.length >= 4) {
        score += 10;
        console.log('✅ Open Graph: Complete');
      } else {
        issues.push('Incomplete Open Graph tags');
        console.log('⚠️ Open Graph: Incomplete');
      }
      
      // 7. Twitter Cards (5 points)
      maxScore += 5;
      const twitterTags = document.querySelectorAll('meta[name^="twitter:"]');
      if (twitterTags.length >= 4) {
        score += 5;
        console.log('✅ Twitter Cards: Complete');
      } else {
        issues.push('Incomplete Twitter Cards');
        console.log('⚠️ Twitter Cards: Incomplete');
      }
      
      // 8. Alt Tags (10 points)
      maxScore += 10;
      const images = document.querySelectorAll('img');
      const imagesWithAlt = document.querySelectorAll('img[alt]');
      if (images.length === imagesWithAlt.length && images.length > 0) {
        score += 10;
        console.log('✅ Alt Tags: All images have alt text');
      } else {
        issues.push(`${images.length - imagesWithAlt.length} images missing alt text`);
        console.log('⚠️ Alt Tags: Some missing');
      }
      
      // 9. Internal Links (10 points)
      maxScore += 10;
      const internalLinks = document.querySelectorAll('a[href^="/"]');
      if (internalLinks.length >= 20) {
        score += 10;
        console.log('✅ Internal Links: Excellent');
      } else if (internalLinks.length >= 10) {
        score += 7;
        console.log('⚠️ Internal Links: Good');
      } else {
        issues.push('Need more internal links');
        console.log('⚠️ Internal Links: Needs improvement');
      }
      
      // 10. Performance (10 points)
      maxScore += 10;
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');
      const preloads = document.querySelectorAll('link[rel="preload"]');
      if (lazyImages.length > 0 && preloads.length > 0) {
        score += 10;
        console.log('✅ Performance: Optimized');
      } else {
        score += 5;
        console.log('⚠️ Performance: Partially optimized');
      }
      
      // Calculate final score
      const finalScore = Math.round((score / maxScore) * 100);
      
      console.log('\n📊 SEO HEALTH SUMMARY');
      console.log('='.repeat(40));
      console.log(`Score: ${finalScore}/100`);
      console.log(`Points: ${score}/${maxScore}`);
      
      if (issues.length > 0) {
        console.log('\n🔧 ISSUES TO FIX:');
        issues.forEach((issue, index) => {
          console.log(`${index + 1}. ${issue}`);
        });
      }
      
      if (finalScore >= 90) {
        console.log('\n🎉 EXCELLENT! Your SEO is optimized for Google!');
      } else if (finalScore >= 80) {
        console.log('\n👍 GOOD! Minor improvements needed.');
      } else {
        console.log('\n⚠️ NEEDS WORK. Address the issues above.');
      }
      
      console.log('='.repeat(40));
    };
    
    // Run check after content loads
    setTimeout(runUnifiedSEOCheck, 2000);
  }, []);

  return null;
};

export default UnifiedSEOSystem;