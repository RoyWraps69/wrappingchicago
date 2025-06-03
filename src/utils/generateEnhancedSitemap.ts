
import { cities } from '@/data/cities';

export const generateEnhancedSitemap = () => {
  const domain = "https://www.wrappingchicago.com";
  const currentDate = new Date().toISOString().split('T')[0];
  
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/gallery', priority: '0.8', changefreq: 'weekly' },
    { url: '/locations', priority: '0.8', changefreq: 'weekly' },
    { url: '/pricing', priority: '0.9', changefreq: 'weekly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/ai-wrap-ideas', priority: '0.7', changefreq: 'weekly' },
    { url: '/designer-wraps', priority: '0.7', changefreq: 'weekly' },
    { url: '/faq', priority: '0.6', changefreq: 'monthly' },
    { url: '/blog', priority: '0.7', changefreq: 'weekly' },
    { url: '/sitemap', priority: '0.5', changefreq: 'monthly' }
  ];

  // Service pages under /services/
  const servicePages = [
    '/services/car-wraps',
    '/services/truck-wraps', 
    '/services/van-wraps',
    '/services/fleet-wraps',
    '/services/color-change-wraps',
    '/services/commercial-graphics',
    '/services/partial-wraps',
    '/services/protective-films',
    '/services/vehicle-lettering',
    '/services/specialty-wraps',
    '/services/retail-graphics',
    '/services/luxury-exotic-wraps',
    '/services/designer-wraps'
  ].map(url => ({ 
    url, 
    priority: '0.8',
    changefreq: 'weekly'
  }));

  // Direct service URLs (without /services/)
  const directServiceUrls = [
    '/car-wraps',
    '/truck-wraps',
    '/van-wraps',
    '/fleet-wraps',
    '/color-change-wraps',
    '/commercial-graphics',
    '/partial-wraps',
    '/protective-films',
    '/vehicle-lettering',
    '/specialty-wraps',
    '/retail-graphics',
    '/luxury-exotic-wraps',
    '/designer-wraps'
  ].map(url => ({ 
    url, 
    priority: '0.8',
    changefreq: 'weekly'
  }));

  // Chicago pages with high priority
  const chicagoPages = [
    { url: '/chicago', priority: '0.9', changefreq: 'weekly' },
    { url: '/vehicle-wraps-chicago-il', priority: '0.9', changefreq: 'weekly' },
    { url: '/truck-wraps-chicago', priority: '0.8', changefreq: 'weekly' }
  ];

  // Location pages for all cities
  const locationPages = cities.map(city => ({
    url: `/vehicle-wraps-${city.slug}-il`,
    priority: '0.7',
    changefreq: 'weekly'
  }));

  // Direct city pages
  const directLocationPages = cities.map(city => ({
    url: `/${city.slug}`,
    priority: '0.6',
    changefreq: 'weekly'
  }));

  const allPages = [
    ...staticPages,
    ...servicePages,
    ...directServiceUrls,
    ...chicagoPages,
    ...locationPages,
    ...directLocationPages
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages.map(page => `  <url>
    <loc>${domain}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
};
