import React, { useEffect } from 'react';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const DynamicSitemapGenerator: React.FC = () => {
  useEffect(() => {
    generateDynamicSitemap();
  }, []);

  const generateDynamicSitemap = () => {
    const domain = 'https://www.wrappingchicago.com';
    const currentDate = new Date().toISOString();
    
    const urls: SitemapUrl[] = [
      // Core pages - highest priority
      { loc: `${domain}/`, lastmod: currentDate, changefreq: 'daily', priority: 1.0 },
      { loc: `${domain}/contact`, lastmod: currentDate, changefreq: 'weekly', priority: 0.9 },
      { loc: `${domain}/about`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
      
      // Service pages - high priority
      { loc: `${domain}/car-wraps`, lastmod: currentDate, changefreq: 'weekly', priority: 0.9 },
      { loc: `${domain}/truck-wraps`, lastmod: currentDate, changefreq: 'weekly', priority: 0.9 },
      { loc: `${domain}/van-wraps`, lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
      { loc: `${domain}/fleet-wraps`, lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
      
      // Location pages - very high priority
      { loc: `${domain}/chicago`, lastmod: currentDate, changefreq: 'weekly', priority: 0.95 },
      { loc: `${domain}/vehicle-wraps-chicago-il`, lastmod: currentDate, changefreq: 'weekly', priority: 0.95 },
      
      // Blog - fresh content priority
      { loc: `${domain}/blog`, lastmod: currentDate, changefreq: 'daily', priority: 0.8 },
      { loc: `${domain}/blog/2024-vehicle-wrap-trends`, lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
      { loc: `${domain}/blog/vehicle-wrap-roi-calculator`, lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
      
      // Tools and calculators
      { loc: `${domain}/instant-quote`, lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
      { loc: `${domain}/schedule-appointment`, lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
      
      // Social proof pages
      { loc: `${domain}/testimonials`, lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
      { loc: `${domain}/gallery`, lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    ];

    const sitemapXml = generateSitemapXML(urls);
    
    // Send to server to update sitemap.xml
    if (typeof window !== 'undefined') {
      localStorage.setItem('dynamic-sitemap', sitemapXml);
      console.log('Dynamic sitemap generated with fresh timestamps');
    }
  };

  const generateSitemapXML = (urls: SitemapUrl[]): string => {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  };

  return null;
};

export default DynamicSitemapGenerator;