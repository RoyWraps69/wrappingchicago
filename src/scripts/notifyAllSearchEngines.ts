
/**
 * Enhanced search engine notification script
 * Notifies all major search engines about our sitemap and important changes
 */

import { cities } from '@/data/cities';

interface NotificationResponse {
  searchEngine: string;
  url: string;
  status: 'success' | 'failed';
  message: string;
}

async function notifyAllSearchEngines(): Promise<NotificationResponse[]> {
  const domain = "https://www.wrappingchicago.com";
  const sitemapUrl = `${domain}/sitemap.xml`;
  const responses: NotificationResponse[] = [];
  
  // Define all search engines to notify
  const searchEngines = [
    { name: "Google", url: `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}` },
    { name: "Bing", url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}` },
    { name: "Yandex", url: `https://webmaster.yandex.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}` },
    // DuckDuckGo uses Bing's index, so we've already covered it
    // Yahoo uses Bing's index as well
  ];
  
  console.log("🚀 Starting comprehensive search engine notifications...");
  console.log(`📝 Sitemap URL: ${sitemapUrl}`);
  
  // Process each search engine
  for (const engine of searchEngines) {
    try {
      console.log(`🔔 Pinging ${engine.name} at ${engine.url}`);
      const response = await fetch(engine.url);
      
      if (response.ok) {
        console.log(`✅ Successfully notified ${engine.name}`);
        responses.push({
          searchEngine: engine.name,
          url: engine.url,
          status: 'success',
          message: `Successfully notified with status ${response.status}`
        });
      } else {
        console.error(`❌ Failed to notify ${engine.name}: ${response.status} ${response.statusText}`);
        responses.push({
          searchEngine: engine.name,
          url: engine.url,
          status: 'failed',
          message: `Failed with status ${response.status}: ${response.statusText}`
        });
      }
    } catch (error) {
      console.error(`❌ Error pinging ${engine.name}:`, error);
      responses.push({
        searchEngine: engine.name,
        url: engine.url,
        status: 'failed',
        message: `Error: ${error instanceof Error ? error.message : String(error)}`
      });
    }
  }
  
  // Generate a list of important URLs to request direct indexing
  const importantUrls: string[] = [
    // Main pages
    '/',
    '/about',
    '/contact',
    '/services',
    '/gallery',
    '/locations',
    '/ai-wrap-ideas',
    
    // Service pages
    '/car-wraps',
    '/truck-wraps',
    '/van-wraps',
    '/fleet-wraps',
    '/color-change-wraps',
    '/commercial-graphics',
    '/partial-wraps',
    '/vehicle-lettering',
    '/specialty-wraps',
    '/retail-graphics',
    '/designer-wraps',
    '/luxury-exotic-wraps',
    
    // Top city pages (first 5)
    ...cities.slice(0, 5).map(city => `/vehicle-wraps-${city.slug}-il`)
  ];
  
  console.log("\n📋 Important URLs that should be manually submitted to Google Search Console:");
  importantUrls.forEach(url => {
    console.log(`   ${domain}${url}`);
  });
  
  // Log results summary
  console.log("\n📊 Notification Results Summary:");
  const successful = responses.filter(r => r.status === 'success').length;
  console.log(`   ✅ Successfully notified: ${successful} search engines`);
  console.log(`   ❌ Failed notifications: ${responses.length - successful} search engines`);
  
  // Provide next steps
  console.log("\n📌 Next steps for maximum indexing:");
  console.log("   1. Submit your sitemap directly in Google Search Console");
  console.log("   2. Submit your sitemap directly in Bing Webmaster Tools");
  console.log("   3. Request indexing for each important URL listed above");
  console.log("   4. Create or update your business profiles on Google Business Profile and Bing Places");
  console.log("   5. Schedule this script to run weekly to maintain fresh indexing");
  
  return responses;
}

// Execute the enhanced notification function if run directly
if (require.main === module) {
  notifyAllSearchEngines()
    .then(results => {
      console.log("✨ All search engine notifications completed!");
    })
    .catch(err => {
      console.error("🔥 Error in search engine notification process:", err);
      process.exit(1);
    });
}

export { notifyAllSearchEngines };
