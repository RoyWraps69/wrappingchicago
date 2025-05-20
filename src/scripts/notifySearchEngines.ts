
/**
 * This script notifies search engines about your sitemap
 * You can run it manually or set it up as a scheduled task
 */

async function notifySearchEngines() {
  const sitemapUrl = "https://www.wrappingchicago.com/sitemap.xml";
  const searchEngines = [
    `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
    `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
  ];

  for (const engineUrl of searchEngines) {
    try {
      console.log(`Notifying search engine: ${engineUrl}`);
      const response = await fetch(engineUrl);
      if (response.ok) {
        console.log(`Successfully pinged: ${engineUrl.split('?')[0]}`);
      } else {
        console.error(`Failed to ping: ${engineUrl.split('?')[0]}, Status: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error pinging: ${engineUrl.split('?')[0]}`, error);
    }
  }
}

// Execute the notification function
notifySearchEngines()
  .then(() => console.log('Search engine notification complete'))
  .catch(err => console.error('Error in search engine notification:', err));
