
import { SITEMAP_CONFIG, CHANGE_FREQUENCIES, PRIORITIES } from './sitemapConfig';
import { chicagoLocations } from '../../data/locations';

export interface SitemapURL {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export function generateSitemapUrls(): SitemapURL[] {
  const { domain, getCurrentDate } = SITEMAP_CONFIG;
  const currentDate = getCurrentDate();
  
  return [
    // Homepage - Highest Priority
    {
      url: `${domain}/`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.WEEKLY,
      priority: PRIORITIES.CRITICAL
    },
    
    // Core Service Pages
    {
      url: `${domain}/services`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.WEEKLY,
      priority: PRIORITIES.HIGH
    },
    {
      url: `${domain}/car-wraps`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.WEEKLY,
      priority: PRIORITIES.HIGH
    },
    {
      url: `${domain}/truck-wraps`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.WEEKLY,
      priority: PRIORITIES.HIGH
    },
    {
      url: `${domain}/van-wraps`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.WEEKLY,
      priority: PRIORITIES.HIGH
    },
    {
      url: `${domain}/fleet-wraps`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.WEEKLY,
      priority: PRIORITIES.HIGH
    },
    
    // All Service Pages
    {
      url: `${domain}/color-change-wraps`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM_HIGH
    },
    {
      url: `${domain}/luxury-exotic-wraps`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM_HIGH
    },
    {
      url: `${domain}/designer-wraps`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM_HIGH
    },
    {
      url: `${domain}/commercial-graphics`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM_HIGH
    },
    {
      url: `${domain}/protective-films`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM_HIGH
    },
    {
      url: `${domain}/vehicle-lettering`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM_HIGH
    },
    {
      url: `${domain}/specialty-wraps`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM_HIGH
    },
    {
      url: `${domain}/retail-graphics`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM_HIGH
    },
    {
      url: `${domain}/partial-wraps`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM_HIGH
    },
    
    // Trade-specific pages
    {
      url: `${domain}/plumbing-wraps`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/hvac-wraps`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/electrical-wraps`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/movers-wraps`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/logistics-wraps`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/delivery-wraps`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    
    // Location Pages - Updated to include all actual location pages
    {
      url: `${domain}/locations`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM_HIGH
    },
    {
      url: `${domain}/chicago`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM_HIGH
    },
    
    // All specific city location pages
    {
      url: `${domain}/vehicle-wraps-chicago-il`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM_HIGH
    },
    {
      url: `${domain}/evanston`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/naperville`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/schaumburg`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/skokie`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/arlington-heights`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/palatine`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/waukegan`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/des-plaines`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/elgin`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/hoffman-estates`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/mclean-county`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/oak-park`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/aurora`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/joliet`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/cicero`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/berwyn`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/wheaton`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/downers-grove`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/bolingbrook`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/truck-wraps-chicago`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    
    // New Chicago Area Location Routes
    {
      url: `${domain}/lakeview-chicago`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/logan-square-chicago`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/andersonville-chicago`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/bucktown-chicago`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/gold-coast-chicago`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/arlington-heights-il`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/oak-lawn-il`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/tinley-park-il`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/orland-park-il`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/palatine-il`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/elmhurst-il`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/lombard-il`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/glen-ellyn-il`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    
    // Generate URLs for all location pages
    ...chicagoLocations.map(location => ({
      url: `${domain}/locations/${location.slug}`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    })),
    
    // Legacy location URLs for SEO preservation
    {
      url: `${domain}/vehicle-wraps-evanston-il`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/vehicle-wraps-naperville-il`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/vehicle-wraps-schaumburg-il`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    
    // Essential Pages
    {
      url: `${domain}/about`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/contact`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM_HIGH
    },
    {
      url: `${domain}/gallery`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.WEEKLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/faq`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.LOW_MEDIUM
    },
    {
      url: `${domain}/pricing`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.WEEKLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/ai-wrap-ideas`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.WEEKLY,
      priority: PRIORITIES.LOW_MEDIUM
    },
    {
      url: `${domain}/blog`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.WEEKLY,
      priority: PRIORITIES.LOW_MEDIUM
    },
    {
      url: `${domain}/service-areas`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    
    // New Core Pages
    {
      url: `${domain}/testimonials`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/industries`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    
    // Tool Pages
    {
      url: `${domain}/instant-quote`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    {
      url: `${domain}/schedule-appointment`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM
    },
    
    // Blog Articles
    {
      url: `${domain}/blog/2024-vehicle-wrap-trends`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.LOW_MEDIUM
    },
    {
      url: `${domain}/blog/vehicle-wrap-roi-calculator`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.LOW_MEDIUM
    },
    {
      url: `${domain}/glossary`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.LOW_MEDIUM
    },
    {
      url: `${domain}/stats`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.LOW
    },
    {
      url: `${domain}/sitemap`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.LOW
    },
    
    // Legal pages
    {
      url: `${domain}/privacy-policy`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.YEARLY,
      priority: PRIORITIES.LOW
    },
    {
      url: `${domain}/terms`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.YEARLY,
      priority: PRIORITIES.LOW
    },
    {
      url: `${domain}/return-policy`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.YEARLY,
      priority: PRIORITIES.LOW
    },
    {
      url: `${domain}/shipping`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.YEARLY,
      priority: PRIORITIES.LOW
    }
  ];
}
