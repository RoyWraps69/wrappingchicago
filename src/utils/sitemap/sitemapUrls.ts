
import { SITEMAP_CONFIG, CHANGE_FREQUENCIES, PRIORITIES } from './sitemapConfig';

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
      url: `${domain}/commercial-graphics`,
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
      url: `${domain}/partial-wraps`,
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
      url: `${domain}/designer-wraps`,
      lastmod: currentDate,
      changefreq: CHANGE_FREQUENCIES.MONTHLY,
      priority: PRIORITIES.MEDIUM_HIGH
    },
    
    // Location Pages
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
    }
  ];
}
