import React from 'react';

const SitemapGenerator: React.FC = () => {
  console.log('SitemapGenerator rendering');
  
  try {
    // Generate sitemaps in localStorage for development
    React.useEffect(() => {
      const generateSitemaps = () => {
        try {
          const baseUrl = 'https://www.wrappingchicago.com';
          const currentDate = new Date().toISOString().split('T')[0];

          // Main sitemap content
          const mainSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

          localStorage.setItem('sitemap-main', mainSitemap);
          console.log('✅ Sitemap generated successfully');
        } catch (error) {
          console.error('Sitemap generation error:', error);
        }
      };

      // Delay to prevent blocking render
      setTimeout(generateSitemaps, 1000);
    }, []);

    return null;
  } catch (error) {
    console.error('SitemapGenerator error:', error);
    return null;
  }
};

export default SitemapGenerator;