import fs from 'fs';
import path from 'path';
import { generateSitemap } from '../utils/generateSitemap';

// Regenerate sitemap with all location pages
const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
const sitemap = generateSitemap();

fs.writeFileSync(sitemapPath, sitemap, 'utf8');
console.log('✅ Complete sitemap regenerated with all location pages!');
console.log('📍 All /locations/ pages are now included in sitemap for Google indexing');