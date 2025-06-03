
/**
 * Script to notify Google about all our pages for immediate indexing
 */

const SITEMAP_URL = "https://www.wrappingchicago.com/sitemap.xml";
const BASE_URL = "https://www.wrappingchicago.com";

// All the pages that need to be indexed
const CRITICAL_PAGES = [
  '/',
  '/about',
  '/car-wraps',
  '/chicago',
  '/color-change-wraps',
  '/commercial-graphics',
  '/contact',
  '/designer-wraps',
  '/evanston',
  '/fleet-wraps',
  '/gallery',
  '/luxury-exotic-wraps',
  '/naperville',
  '/partial-wraps',
  '/protective-films',
  '/retail-graphics',
  '/schaumburg',
  '/services',
  '/services/car-wraps',
  '/services/color-change-wraps',
  '/services/commercial-graphics',
  '/services/designer-wraps',
  '/services/fleet-wraps',
  '/services/luxury-exotic-wraps',
  '/services/partial-wraps',
  '/services/protective-films',
  '/services/retail-graphics',
  '/services/specialty-wraps',
  '/services/truck-wraps',
  '/services/van-wraps',
  '/services/vehicle-lettering',
  '/specialty-wraps',
  '/truck-wraps',
  '/truck-wraps-chicago',
  '/van-wraps',
  '/vehicle-lettering',
  '/vehicle-wraps-evanston-il',
  '/vehicle-wraps-naperville-il',
  '/vehicle-wraps-schaumburg-il'
];

async function submitSitemapToGoogle() {
  const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
  
  try {
    console.log('Submitting sitemap to Google...');
    const response = await fetch(googlePingUrl);
    
    if (response.ok) {
      console.log('✅ Successfully submitted sitemap to Google');
    } else {
      console.error('❌ Failed to submit sitemap to Google:', response.status);
    }
  } catch (error) {
    console.error('❌ Error submitting sitemap to Google:', error);
  }
}

async function submitSitemapToBing() {
  const bingPingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
  
  try {
    console.log('Submitting sitemap to Bing...');
    const response = await fetch(bingPingUrl);
    
    if (response.ok) {
      console.log('✅ Successfully submitted sitemap to Bing');
    } else {
      console.error('❌ Failed to submit sitemap to Bing:', response.status);
    }
  } catch (error) {
    console.error('❌ Error submitting sitemap to Bing:', error);
  }
}

async function submitAllToSearchEngines() {
  console.log('🚀 Starting search engine submission process...');
  console.log(`📋 Total pages to index: ${CRITICAL_PAGES.length}`);
  
  await submitSitemapToGoogle();
  await submitSitemapToBing();
  
  console.log('\n📊 Summary:');
  console.log(`✅ Sitemap submitted with ${CRITICAL_PAGES.length} pages`);
  console.log('📧 Next steps:');
  console.log('1. Verify sitemap in Google Search Console');
  console.log('2. Check for indexing issues in Search Console');
  console.log('3. Request indexing for critical pages manually if needed');
  
  console.log('\n🔗 Critical pages submitted:');
  CRITICAL_PAGES.forEach(page => {
    console.log(`   ${BASE_URL}${page}`);
  });
}

// Execute the submission
submitAllToSearchEngines()
  .then(() => console.log('\n🎉 Search engine submission completed!'))
  .catch(err => console.error('💥 Error in submission process:', err));

export { submitAllToSearchEngines };
