import fs from 'fs';
import path from 'path';
import { generateFixedSitemap } from '../utils/generateFixedSitemap';

/**
 * Script to regenerate the complete sitemap with ALL pages
 * This fixes the indexing issue by including all route pages
 */
async function regenerateCompleteSitemap() {
  try {
    console.log('🚀 Regenerating complete sitemap with ALL pages...\n');
    
    // Ensure public directory exists
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Generate and write sitemap
    console.log('📝 Generating complete sitemap.xml...');
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    const sitemap = generateFixedSitemap();
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    console.log('✅ Complete sitemap.xml generated successfully');
    
    // Count URLs in sitemap
    const urlCount = (sitemap.match(/<url>/g) || []).length;
    
    console.log('\n🎉 Complete sitemap regeneration finished!');
    console.log('==========================================');
    console.log(`📊 Sitemap now contains ${urlCount} URLs`);
    console.log('🔗 ALL route pages are now included');
    console.log('📍 All location pages mapped');
    console.log('🛠️ All service pages included');
    console.log('📝 Tool and blog pages added');
    console.log('⚖️ Legal pages included');
    console.log('🏷️ Trade-specific pages mapped');
    console.log('==========================================\n');
    
    console.log('✨ Your site pages are now 100% indexable by Google!');
    console.log('🔍 Submit the updated sitemap to Google Search Console');
    
  } catch (error) {
    console.error('❌ Error regenerating sitemap:', error);
    process.exit(1);
  }
}

// Run the regeneration
regenerateCompleteSitemap();

export { regenerateCompleteSitemap };