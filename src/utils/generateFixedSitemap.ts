
import { generateSitemapUrls } from './sitemap/sitemapUrls';

/**
 * Generate a fixed XML sitemap that addresses sitemap XML issues
 * Ensures proper formatting, valid URLs, and correct priorities
 */
export function generateFixedSitemap(): string {
  const urls = generateSitemapUrls();
  
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;
  const urlsetClose = '</urlset>';
  
  // Generate properly formatted URL elements
  const urlElements = urls.map(item => {
    // Ensure all URLs are absolute and properly formatted
    const cleanUrl = item.url.startsWith('http') ? item.url : `https://www.wrappingchicago.com${item.url}`;
    
    return `
  <url>
    <loc>${cleanUrl}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${cleanUrl}" />
  </url>`;
  }).join('');
  
  const sitemap = `${xmlHeader}
${urlsetOpen}${urlElements}
${urlsetClose}`;

  return sitemap;
}

/**
 * Generate robots.txt content that fixes robots TXT issues
 */
export function generateFixedRobotsTxt(): string {
  const domain = 'https://www.wrappingchicago.com';
  
  return `# Robots.txt - Fixed for Google Compliance
# Last updated: ${new Date().toISOString().split('T')[0]}

User-agent: *
Allow: /

# Sitemaps
Sitemap: ${domain}/sitemap.xml

# High-priority content
Allow: /about
Allow: /services/
Allow: /car-wraps
Allow: /truck-wraps
Allow: /van-wraps
Allow: /fleet-wraps
Allow: /color-change-wraps
Allow: /commercial-graphics
Allow: /gallery
Allow: /contact
Allow: /locations
Allow: /chicago
Allow: /evanston
Allow: /naperville
Allow: /schaumburg

# Block low-value pages
Disallow: /search
Disallow: /*utm_*
Disallow: /*fbclid=*
Disallow: /*gclid=*
Disallow: /wp-admin/
Disallow: /admin/
Disallow: /*.sql$
Disallow: /*.log$

# Crawl delay
Crawl-delay: 1

# Host preference
Host: www.wrappingchicago.com
`;
}
