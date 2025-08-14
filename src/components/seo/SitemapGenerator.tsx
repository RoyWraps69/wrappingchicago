import React, { useEffect } from 'react';

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const SitemapGenerator: React.FC = () => {
  useEffect(() => {
    generateSitemaps();
  }, []);

  const generateSitemaps = async () => {
    const baseUrl = 'https://www.wrappingchicago.com';
    const currentDate = new Date().toISOString().split('T')[0];

    // Main pages sitemap
    const mainPages: SitemapEntry[] = [
      { url: `${baseUrl}/`, lastmod: currentDate, changefreq: 'weekly', priority: 1.0 },
      { url: `${baseUrl}/about`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
      { url: `${baseUrl}/contact`, lastmod: currentDate, changefreq: 'monthly', priority: 0.9 },
      { url: `${baseUrl}/quote`, lastmod: currentDate, changefreq: 'weekly', priority: 0.9 },
      { url: `${baseUrl}/portfolio`, lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    ];

    // Services sitemap
    const services = [
      'vehicle-wraps', 'commercial-fleet', 'car-wraps', 'truck-wraps', 
      'van-wraps', 'boat-wraps', 'motorcycle-wraps', 'trailer-wraps',
      'partial-wraps', 'color-change', 'chrome-delete', 'window-tinting',
      'paint-protection', 'ceramic-coating', 'graphics-design', 'removal-services'
    ];

    const servicePages: SitemapEntry[] = services.map(service => ({
      url: `${baseUrl}/services/${service}`,
      lastmod: currentDate,
      changefreq: 'monthly' as const,
      priority: 0.8
    }));

    // Location pages sitemap
    const locations = [
      'chicago', 'evanston', 'oak-park', 'cicero', 'berwyn', 'schaumburg',
      'naperville', 'aurora', 'joliet', 'rockford', 'peoria', 'springfield',
      'downtown-chicago', 'north-side', 'south-side', 'west-side',
      'lincolnwood', 'skokie', 'morton-grove', 'niles', 'park-ridge',
      'des-plaines', 'mount-prospect', 'arlington-heights', 'palatine'
    ];

    const locationPages: SitemapEntry[] = locations.map(location => ({
      url: `${baseUrl}/locations/${location}`,
      lastmod: currentDate,
      changefreq: 'monthly' as const,
      priority: 0.7
    }));

    // Industries sitemap
    const industries = [
      'healthcare', 'construction', 'real-estate', 'food-delivery',
      'logistics', 'retail', 'automotive', 'technology', 'finance',
      'education', 'entertainment', 'nonprofit', 'government'
    ];

    const industryPages: SitemapEntry[] = industries.map(industry => ({
      url: `${baseUrl}/industries/${industry}`,
      lastmod: currentDate,
      changefreq: 'monthly' as const,
      priority: 0.6
    }));

    // Generate XML for each sitemap
    const generateSitemapXML = (entries: SitemapEntry[]) => {
      const urls = entries.map(entry => `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('');

      return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
    };

    // Generate sitemap index
    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap-main.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-services.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-locations.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-industries.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;

    // Store sitemaps in localStorage for development
    localStorage.setItem('sitemap-index', sitemapIndex);
    localStorage.setItem('sitemap-main', generateSitemapXML(mainPages));
    localStorage.setItem('sitemap-services', generateSitemapXML(servicePages));
    localStorage.setItem('sitemap-locations', generateSitemapXML(locationPages));
    localStorage.setItem('sitemap-industries', generateSitemapXML(industryPages));

    console.log('✅ Sitemaps generated and stored');
  };

  return null;
};

export default SitemapGenerator;