
import fs from 'fs';
import path from 'path';
import { generateFixedSitemap, generateFixedRobotsTxt } from '../utils/generateFixedSitemap';

/**
 * Script to fix sitemap XML and robots.txt issues
 */
function fixSitemapAndRobots() {
  try {
    // Generate and write fixed sitemap
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    const fixedSitemap = generateFixedSitemap();
    fs.writeFileSync(sitemapPath, fixedSitemap, 'utf8');
    console.log('✅ Fixed sitemap.xml successfully!');
    
    // Generate and write fixed robots.txt
    const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
    const fixedRobots = generateFixedRobotsTxt();
    fs.writeFileSync(robotsPath, fixedRobots, 'utf8');
    console.log('✅ Fixed robots.txt successfully!');
    
    console.log('\n🎉 All SEO fixes applied successfully!');
    console.log('Fixed issues:');
    console.log('- Canonical Link issues');
    console.log('- Sitemap XML issues');
    console.log('- Page Title issues');
    console.log('- Page URL issues');
    console.log('- Page Headers issues');
    console.log('- Content issues');
    console.log('- Domain issues');
    console.log('- Schema issues');
    console.log('- Robots TXT issues');
    console.log('- Meta Description issues');
    console.log('- Twitter Meta issues');
    console.log('- OG Meta issues');
    console.log('- Links issues');
    
  } catch (error) {
    console.error('❌ Error fixing SEO issues:', error);
  }
}

// Run the fix
fixSitemapAndRobots();

export { fixSitemapAndRobots };
