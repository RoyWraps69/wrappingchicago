
import { cities } from '@/data/cities';

export const generateSitemap = () => {
  const domain = "https://www.wrappingchicago.com";
  const currentDate = new Date().toISOString().split('T')[0];
  
  const staticPages = [
    { url: '/', priority: '1.0' },
    { url: '/about', priority: '0.8' },
    { url: '/contact', priority: '0.8' },
    { url: '/gallery', priority: '0.8' },
    { url: '/locations', priority: '0.8' },
    { url: '/ai-wrap-ideas', priority: '0.7' },
    { url: '/services', priority: '0.9' }
  ];

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
    '/services/designer-wraps',
    '/services/luxury-exotic-wraps'
  ].map(url => ({ url, priority: '0.8' }));

  const directServiceUrls = [
    '/car-wraps',
    '/truck-wraps',
    '/van-wraps',
    '/fleet-wraps',
    '/partial-wraps',
    '/color-change-wraps',
    '/commercial-graphics',
    '/protective-films',
    '/vehicle-lettering',
    '/specialty-wraps',
    '/retail-graphics',
    '/designer-wraps',
    '/luxury-exotic-wraps'
  ].map(url => ({ url, priority: '0.7' }));

  const locationPages = cities.map(city => ({
    url: `/vehicle-wraps-${city.slug}-il`,
    priority: '0.8'
  }));

  const directLocationPages = cities.map(city => ({
    url: `/${city.slug}`,
    priority: '0.7'
  }));

  const allPages = [
    ...staticPages,
    ...servicePages,
    ...directServiceUrls,
    ...locationPages,
    ...directLocationPages
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${domain}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
};
