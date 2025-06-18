
export const generateSitemap = (): string => {
  const domain = 'https://www.wrappingchicago.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = [
    // Core pages
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/about', priority: '0.8', changefreq: 'monthly' },
    { loc: '/contact', priority: '0.9', changefreq: 'monthly' },
    { loc: '/services', priority: '0.9', changefreq: 'weekly' },
    { loc: '/gallery', priority: '0.8', changefreq: 'weekly' },
    { loc: '/locations', priority: '0.9', changefreq: 'weekly' },
    { loc: '/faq', priority: '0.7', changefreq: 'monthly' },
    { loc: '/pricing', priority: '0.8', changefreq: 'monthly' },
    { loc: '/ai-wrap-ideas', priority: '0.7', changefreq: 'weekly' },
    
    // Service pages
    { loc: '/car-wraps', priority: '0.9', changefreq: 'weekly' },
    { loc: '/truck-wraps', priority: '0.9', changefreq: 'weekly' },
    { loc: '/van-wraps', priority: '0.9', changefreq: 'weekly' },
    { loc: '/fleet-wraps', priority: '0.9', changefreq: 'weekly' },
    { loc: '/color-change-wraps', priority: '0.8', changefreq: 'weekly' },
    { loc: '/commercial-graphics', priority: '0.8', changefreq: 'weekly' },
    { loc: '/partial-wraps', priority: '0.8', changefreq: 'weekly' },
    { loc: '/protective-films', priority: '0.7', changefreq: 'monthly' },
    { loc: '/vehicle-lettering', priority: '0.7', changefreq: 'monthly' },
    { loc: '/specialty-wraps', priority: '0.7', changefreq: 'monthly' },
    { loc: '/retail-graphics', priority: '0.7', changefreq: 'monthly' },
    { loc: '/luxury-exotic-wraps', priority: '0.8', changefreq: 'weekly' },
    { loc: '/designer-wraps', priority: '0.8', changefreq: 'weekly' },
    
    // Location pages - both formats
    { loc: '/chicago', priority: '0.9', changefreq: 'weekly' },
    { loc: '/vehicle-wraps-chicago-il', priority: '0.9', changefreq: 'weekly' },
    { loc: '/vehicle-wraps-evanston-il', priority: '0.8', changefreq: 'weekly' },
    { loc: '/vehicle-wraps-naperville-il', priority: '0.8', changefreq: 'weekly' },
    { loc: '/vehicle-wraps-schaumburg-il', priority: '0.8', changefreq: 'weekly' },
    { loc: '/truck-wraps-chicago', priority: '0.8', changefreq: 'weekly' },
    
    // Sitemap and utility pages
    { loc: '/sitemap', priority: '0.5', changefreq: 'monthly' },
    { loc: '/html-sitemap', priority: '0.5', changefreq: 'monthly' }
  ];

  const urlElements = urls.map(url => `
  <url>
    <loc>${domain}${url.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
};
