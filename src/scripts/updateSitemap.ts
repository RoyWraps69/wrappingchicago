
import fs from 'fs';
import path from 'path';
import { generateSitemap } from '../utils/generateSitemap';

const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
const sitemap = generateSitemap();

fs.writeFileSync(sitemapPath, sitemap, 'utf8');
console.log('Sitemap updated successfully!');
