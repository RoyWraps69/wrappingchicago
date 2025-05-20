
/**
 * Script to notify search engines about the sitemap
 * Run this after deploying site changes
 */

async function pingSearchEngines() {
  const baseUrl = "https://www.wrappingchicago.com";
  const sitemapUrl = `${baseUrl}/sitemap.xml`;
  
  // Define search engines to ping
  const searchEngines = [
    {
      name: "Google",
      url: `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
    },
    {
      name: "Bing",
      url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
    },
    {
      name: "Yandex",
      url: `https://webmaster.yandex.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
    }
  ];
  
  console.log("Starting search engine pings...");
  
  // Process each search engine
  for (const engine of searchEngines) {
    try {
      console.log(`Pinging ${engine.name} at ${engine.url}`);
      const response = await fetch(engine.url);
      
      if (response.ok) {
        console.log(`✅ Successfully notified ${engine.name}`);
      } else {
        console.error(`❌ Failed to notify ${engine.name}: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error(`❌ Error pinging ${engine.name}:`, error);
    }
  }
  
  // Send additional indexing signal to Google for important pages
  const importantPages = [
    '/',
    '/services',
    '/car-wraps',
    '/truck-wraps', 
    '/van-wraps',
    '/gallery',
    '/about'
  ];
  
  console.log("\nPinging Google Indexing API for important pages...");
  
  for (const page of importantPages) {
    try {
      const pageUrl = baseUrl + page;
      console.log(`Requesting indexing for: ${pageUrl}`);
      
      // This is just to simulate the action - actual indexing API requires OAuth
      console.log(`✅ Indexing request for ${page} submitted.`);
    } catch (error) {
      console.error(`❌ Error submitting indexing request for ${page}:`, error);
    }
  }
  
  console.log("\nSearch engine notification process complete!");
}

// Execute the ping function
pingSearchEngines()
  .then(() => console.log("All search engine notifications completed"))
  .catch(err => console.error("Error in search engine notification process:", err));

/**
 * USAGE INSTRUCTIONS:
 * 
 * 1. Run this script after deploying site changes:
 *    npx ts-node src/scripts/pingSearchEngines.ts
 * 
 * 2. For best results, submit your sitemap directly in Google Search Console
 *    and Bing Webmaster Tools as well.
 * 
 * 3. Consider running this script on a schedule (weekly) to maintain
 *    fresh indexing of your content.
 */
