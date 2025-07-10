import React from 'react';
import { Helmet } from 'react-helmet-async';

const XMLSitemapGenerator = () => {
  const domain = "https://www.wrappingchicago.com";
  const currentDate = new Date().toISOString();
  
  // All pages with priority and change frequency
  const pages = [
    // Core pages - highest priority
    { url: '/', priority: '1.0', changefreq: 'weekly', lastmod: currentDate },
    { url: '/services', priority: '0.9', changefreq: 'weekly', lastmod: currentDate },
    { url: '/contact', priority: '0.9', changefreq: 'monthly', lastmod: currentDate },
    
    // Service pages - high priority
    { url: '/car-wraps', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
    { url: '/truck-wraps', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
    { url: '/van-wraps', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
    { url: '/fleet-wraps', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
    { url: '/luxury-exotic-wraps', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
    { url: '/color-change-wraps', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
    { url: '/designer-wraps', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
    
    // Location pages - high priority for local SEO
    { url: '/service-areas', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
    { url: '/locations/lincoln-park-chicago', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
    { url: '/locations/river-north-chicago', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
    { url: '/locations/wicker-park-chicago', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
    { url: '/locations/the-loop-chicago', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
    { url: '/locations/schaumburg-illinois', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
    { url: '/locations/naperville-illinois', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
    { url: '/locations/oak-brook-illinois', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
    { url: '/locations/evanston-illinois', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
    { url: '/locations/libertyville-illinois', priority: '0.6', changefreq: 'monthly', lastmod: currentDate },
    { url: '/locations/lake-forest-illinois', priority: '0.6', changefreq: 'monthly', lastmod: currentDate },
    { url: '/locations/orland-park-illinois', priority: '0.6', changefreq: 'monthly', lastmod: currentDate },
    { url: '/locations/joliet-illinois', priority: '0.6', changefreq: 'monthly', lastmod: currentDate },
    { url: '/locations/geneva-illinois', priority: '0.6', changefreq: 'monthly', lastmod: currentDate },
    { url: '/locations/st-charles-illinois', priority: '0.6', changefreq: 'monthly', lastmod: currentDate },
    { url: '/locations/kenosha-wisconsin', priority: '0.6', changefreq: 'monthly', lastmod: currentDate },
    { url: '/locations/crown-point-indiana', priority: '0.6', changefreq: 'monthly', lastmod: currentDate },
    
    // Company pages - medium priority
    { url: '/about', priority: '0.6', changefreq: 'monthly', lastmod: currentDate },
    { url: '/gallery', priority: '0.7', changefreq: 'weekly', lastmod: currentDate },
    { url: '/pricing', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
    { url: '/faq', priority: '0.6', changefreq: 'monthly', lastmod: currentDate },
    
    // Resource pages - medium priority
    { url: '/blog', priority: '0.6', changefreq: 'weekly', lastmod: currentDate },
    { url: '/glossary', priority: '0.5', changefreq: 'monthly', lastmod: currentDate },
    { url: '/ai-wrap-ideas', priority: '0.5', changefreq: 'monthly', lastmod: currentDate },
    { url: '/stats', priority: '0.4', changefreq: 'monthly', lastmod: currentDate },
    
    // Legal pages - lower priority
    { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly', lastmod: currentDate },
    { url: '/terms-of-service', priority: '0.3', changefreq: 'yearly', lastmod: currentDate },
    { url: '/return-policy', priority: '0.3', changefreq: 'yearly', lastmod: currentDate },
    { url: '/shipping', priority: '0.3', changefreq: 'yearly', lastmod: currentDate },
    
    // Utility pages
    { url: '/sitemap', priority: '0.4', changefreq: 'monthly', lastmod: currentDate }
  ];

  const generateXMLSitemap = () => {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
    xml += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
    xml += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n';
    xml += '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';
    
    pages.forEach(page => {
      xml += '  <url>\n';
      xml += `    <loc>${domain}${page.url}</loc>\n`;
      xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += '  </url>\n';
    });
    
    xml += '</urlset>';
    return xml;
  };

  // This would typically be served as an actual XML file
  // For now, we'll add the sitemap reference to the head
  return (
    <Helmet>
      {/* Sitemap Discovery */}
      <link rel="sitemap" type="application/xml" href={`${domain}/sitemap.xml`} />
      <meta name="sitemap-generator" content="Wrapping Chicago Custom Generator" />
      
      {/* For development: add the XML content as a comment for reference */}
      {process.env.NODE_ENV === 'development' && (
        <script type="application/xml" id="sitemap-reference">
          {`<!--\n${generateXMLSitemap()}\n-->`}
        </script>
      )}
    </Helmet>
  );
};

export default XMLSitemapGenerator;