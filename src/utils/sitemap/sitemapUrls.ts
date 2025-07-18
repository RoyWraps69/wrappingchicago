
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
    
    // Specialized Services
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
    {
      url: `${domain}/truck-wraps-chicago`,
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
