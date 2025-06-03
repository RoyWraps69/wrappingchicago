
import fs from 'fs';
import path from 'path';
import { generateEnhancedSitemap } from '../utils/generateEnhancedSitemap';

const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
const sitemap = generateEnhancedSitemap();

fs.writeFileSync(sitemapPath, sitemap, 'utf8');
console.log('Enhanced sitemap updated successfully with all indexable pages!');
console.log('Sitemap includes all service pages, location pages, and direct URLs');

// Also update robots.txt to ensure proper crawling
const robotsTxtPath = path.join(process.cwd(), 'public', 'robots.txt');
const robotsTxt = `# Enhanced robots.txt for maximum indexability
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://www.wrappingchicago.com/sitemap.xml

# Explicitly allow all important pages
Allow: /services/
Allow: /car-wraps
Allow: /truck-wraps
Allow: /van-wraps
Allow: /fleet-wraps
Allow: /color-change-wraps
Allow: /commercial-graphics
Allow: /partial-wraps
Allow: /protective-films
Allow: /vehicle-lettering
Allow: /specialty-wraps
Allow: /retail-graphics
Allow: /luxury-exotic-wraps
Allow: /designer-wraps
Allow: /chicago
Allow: /evanston
Allow: /naperville
Allow: /schaumburg
Allow: /*-il

# Prevent crawling issues
Disallow: /search
Disallow: /*utm_*
Disallow: /*fbclid=*

# Host preference
Host: www.wrappingchicago.com
`;

fs.writeFileSync(robotsTxtPath, robotsTxt, 'utf8');
console.log('Enhanced robots.txt updated for maximum crawlability!');
