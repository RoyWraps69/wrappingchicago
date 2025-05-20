
import { cities } from '@/data/cities';

export const generateSitemap = () => {
  const domain = "https://www.wrappingchicago.com";
  const currentDate = new Date().toISOString().split('T')[0];
  
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/gallery', priority: '0.8', changefreq: 'weekly' },
    { url: '/locations', priority: '0.8', changefreq: 'weekly' },
    { url: '/ai-wrap-ideas', priority: '0.7', changefreq: 'weekly' },
    { url: '/pricing', priority: '0.9', changefreq: 'weekly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' }
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
  ].map(url => ({ 
    url, 
    priority: '0.8',
    changefreq: 'weekly'
  }));

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
  ].map(url => ({ 
    url, 
    priority: '0.7',
    changefreq: 'weekly'
  }));

  // Ensure Chicago page is explicitly included with high priority
  const chicagoPages = [
    {
      url: '/vehicle-wraps-chicago-il',
      priority: '0.9',
      changefreq: 'weekly'
    },
    {
      url: '/chicago',
      priority: '0.9',
      changefreq: 'weekly'
    }
  ];

  const locationPages = cities.map(city => ({
    url: `/vehicle-wraps-${city.slug}-il`,
    priority: '0.8',
    changefreq: 'weekly'
  }));

  const directLocationPages = cities.map(city => ({
    url: `/${city.slug}`,
    priority: '0.7',
    changefreq: 'weekly'
  }));

  const allPages = [
    ...staticPages,
    ...servicePages,
    ...directServiceUrls,
    ...chicagoPages, // Explicitly add Chicago pages
    ...locationPages,
    ...directLocationPages
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${domain}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
};
