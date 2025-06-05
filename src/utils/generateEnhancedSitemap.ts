
/**
 * Enhanced Sitemap Generator for Google Algorithm Alignment
 * Generates comprehensive XML sitemap with proper priorities and frequencies
 */

interface SitemapURL {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export function generateEnhancedSitemap(): string {
  const domain = 'https://www.wrappingchicago.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls: SitemapURL[] = [
    // Homepage - Highest Priority
    {
      url: `${domain}/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    
    // Core Service Pages - High Priority
    {
      url: `${domain}/services`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${domain}/car-wraps`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${domain}/truck-wraps`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${domain}/van-wraps`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${domain}/fleet-wraps`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    
    // Specialized Services - High Priority
    {
      url: `${domain}/color-change-wraps`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${domain}/commercial-graphics`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${domain}/luxury-exotic-wraps`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${domain}/partial-wraps`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${domain}/protective-films`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${domain}/vehicle-lettering`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${domain}/specialty-wraps`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${domain}/retail-graphics`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${domain}/designer-wraps`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    
    // Location Pages - High Priority for Local SEO
    {
      url: `${domain}/locations`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${domain}/chicago`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${domain}/evanston`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${domain}/naperville`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${domain}/schaumburg`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    
    // Location-Service Combinations
    {
      url: `${domain}/truck-wraps-chicago`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    
    // Essential Pages
    {
      url: `${domain}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${domain}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${domain}/gallery`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      url: `${domain}/faq`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      url: `${domain}/pricing`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    },
    
    // Additional Service Pages
    {
      url: `${domain}/ai-wrap-ideas`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.6
    }
  ];
  
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';
  
  const urlElements = urls.map(item => `
  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('');
  
  return `${xmlHeader}
${urlsetOpen}${urlElements}
${urlsetClose}`;
}
