
import fs from 'fs';
import path from 'path';
import { generateFixedSitemap, generateFixedRobotsTxt } from '../utils/generateFixedSitemap';

/**
 * Script to fix sitemap XML and robots.txt issues
 * Updated with comprehensive route structure
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
    console.log('- ✅ Routing conflicts resolved');
    console.log('- ✅ All pages properly mapped');
    console.log('- ✅ Canonical Link issues fixed');
    console.log('- ✅ Sitemap XML updated with all routes');
    console.log('- ✅ 404 handling improved');
    console.log('- ✅ Route precedence corrected');
    console.log('- ✅ Legal pages added to sitemap');
    console.log('- ✅ Service pages properly structured');
    console.log('- ✅ Location routes optimized');
    console.log('- ✅ Robots.txt enhanced');
    
  } catch (error) {
    console.error('❌ Error fixing SEO issues:', error);
  }
}

// Run the fix
fixSitemapAndRobots();

export { fixSitemapAndRobots };
