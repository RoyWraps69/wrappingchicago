
/**
 * Script to generate and update an enhanced robots.txt file
 * This ensures all content is properly indexed while managing crawl budget
 */

import fs from 'fs';
import path from 'path';

function generateEnhancedRobotsTxt() {
  const domain = 'https://www.wrappingchicago.com';
  
  const robotsTxt = `# Enhanced robots.txt for Wrapping Chicago
# Last updated: ${new Date().toISOString().split('T')[0]}

# Allow all user agents full access
User-agent: *
Allow: /

# Sitemaps declarations
Sitemap: ${domain}/sitemap.xml
Sitemap: ${domain}/html-sitemap.html

# Special directives for major search engines
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Yandexbot
Allow: /
Crawl-delay: 2

User-agent: DuckDuckBot
Allow: /
Crawl-delay: 1

User-agent: Slurp
Allow: /
Crawl-delay: 2

User-agent: Baiduspider
Allow: /
Crawl-delay: 2

# Emphasize important sections for indexing
Allow: /services/
Allow: /gallery/
Allow: /about/
Allow: /contact/
Allow: /locations/
Allow: /ai-wrap-ideas/
Allow: /designer-wraps/
Allow: /truck-wraps-chicago/
Allow: /*-il
Allow: /car-wraps
Allow: /truck-wraps
Allow: /van-wraps
Allow: /fleet-wraps
Allow: /color-change-wraps
Allow: /commercial-graphics
Allow: /vehicle-lettering
Allow: /partial-wraps
Allow: /protective-films
Allow: /specialty-wraps
Allow: /retail-graphics
Allow: /luxury-exotic-wraps

# Prevent crawling of non-essential resources to optimize crawl budget
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /*?*
Disallow: /*utm_*
Disallow: /*fbclid=*
Disallow: /search
Disallow: /assets/fonts/
Disallow: /static/unused/
Disallow: /*.sql$
Disallow: /*.sql.gz$
Disallow: /*.sql.bz2$
Disallow: /*.sqlite$
Disallow: /*.log$
Disallow: /*node_modules/
Disallow: /*package.json
Disallow: /*package-lock.json
Disallow: /*.md$
Disallow: /*.lock$
Disallow: /*.env$
Disallow: /*.env.*$
Disallow: /*.git$
Disallow: /*.git/*
Disallow: /*LICENSE
Disallow: /*README
Disallow: /*webpack.config.js
Disallow: /*tsconfig.json
Disallow: /*vite.config.js
Disallow: /cgi-bin/
Disallow: /tmp/
Disallow: /temp/

# Prevent duplicate content issues with trailing slashes
Allow: /*/$
Allow: /*.html$
Allow: /*.php$
Allow: /*.htm$

# Control crawling rate and optimize for mobile
User-agent: Googlebot-Mobile
Allow: /
Crawl-delay: 1

# Allow Google Images to index all image content
User-agent: Googlebot-Image
Allow: /
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.gif$
Allow: /*.png$
Allow: /*.webp$

# Allow Google to index our JavaScript
User-agent: Googlebot
Allow: /*.js$
Allow: /*.css$

# Specify host preference to avoid duplicate content issues
Host: www.wrappingchicago.com

# Explicitly request indexing all pages
Clean-param: utm_source&utm_medium&utm_campaign&utm_content&utm_term&fbclid
`;

  return robotsTxt;
}

// Write the enhanced robots.txt to the public directory
function updateRobotsTxt() {
  const robotsTxtPath = path.join(process.cwd(), 'public', 'robots.txt');
  const robotsTxtContent = generateEnhancedRobotsTxt();
  
  fs.writeFileSync(robotsTxtPath, robotsTxtContent, 'utf8');
  console.log('Enhanced robots.txt file has been generated and updated!');
}

updateRobotsTxt();

export { updateRobotsTxt, generateEnhancedRobotsTxt };
