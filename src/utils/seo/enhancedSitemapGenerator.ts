
import { SITEMAP_CONFIG } from '../sitemap/sitemapConfig';

export interface EnhancedSitemapURL {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  images?: Array<{
    loc: string;
    caption?: string;
    title?: string;
  }>;
}

/**
 * Generate comprehensive sitemap with all pages, services, and locations
 * Optimized for maximum Google indexability and crawl efficiency
 */
export function generateComprehensiveSitemap(): string {
  const { domain, getCurrentDate } = SITEMAP_CONFIG;
  const currentDate = getCurrentDate();
  
  const urls: EnhancedSitemapURL[] = [
    // Homepage - Critical Priority
    {
      url: `${domain}/`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0,
      images: [
        {
          loc: `${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`,
          caption: "Professional vehicle wraps in Chicago - Wrapping Chicago logo",
          title: "Wrapping Chicago - Vehicle Wrap Services"
        }
      ]
    },
    
    // Core Service Pages - High Priority
    {
      url: `${domain}/car-wraps`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${domain}/truck-wraps`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${domain}/van-wraps`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${domain}/fleet-wraps`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${domain}/color-change-wraps`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${domain}/commercial-graphics`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    
    // Specialized Services
    {
      url: `${domain}/luxury-exotic-wraps`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${domain}/designer-wraps`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${domain}/partial-wraps`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${domain}/protective-films`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${domain}/vehicle-lettering`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${domain}/specialty-wraps`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${domain}/retail-graphics`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    
    // Location Pages - High Priority for Local SEO
    {
      url: `${domain}/chicago`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${domain}/vehicle-wraps-evanston-il`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${domain}/vehicle-wraps-naperville-il`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${domain}/vehicle-wraps-schaumburg-il`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${domain}/truck-wraps-chicago`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    
    // Essential Business Pages
    {
      url: `${domain}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${domain}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${domain}/services`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${domain}/gallery`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${domain}/locations`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${domain}/pricing`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${domain}/faq`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      url: `${domain}/ai-wrap-ideas`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.6
    }
  ];
  
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;
  const urlsetClose = '</urlset>';
  
  const urlElements = urls.map(item => {
    let urlXml = `
  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>`;
    
    // Add image elements if present
    if (item.images && item.images.length > 0) {
      item.images.forEach(image => {
        urlXml += `
    <image:image>
      <image:loc>${image.loc}</image:loc>`;
        if (image.caption) {
          urlXml += `
      <image:caption>${image.caption}</image:caption>`;
        }
        if (image.title) {
          urlXml += `
      <image:title>${image.title}</image:title>`;
        }
        urlXml += `
    </image:image>`;
      });
    }
    
    urlXml += `
  </url>`;
    
    return urlXml;
  }).join('');
  
  return `${xmlHeader}
${urlsetOpen}${urlElements}
${urlsetClose}`;
}

/**
 * Generate optimized robots.txt for maximum crawlability
 */
export function generateOptimizedRobotsTxt(): string {
  const domain = 'https://www.wrappingchicago.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  return `# Robots.txt - Optimized for Google Algorithm Compliance
# Last updated: ${currentDate}
# Optimized for maximum indexability and crawl efficiency

User-agent: *
Allow: /

# Sitemaps - Critical for Discovery
Sitemap: ${domain}/sitemap.xml
Sitemap: ${domain}/sitemap-images.xml

# High-priority pages for immediate indexing
Allow: /car-wraps
Allow: /truck-wraps
Allow: /van-wraps
Allow: /fleet-wraps
Allow: /color-change-wraps
Allow: /commercial-graphics
Allow: /luxury-exotic-wraps
Allow: /designer-wraps
Allow: /partial-wraps
Allow: /protective-films
Allow: /vehicle-lettering
Allow: /specialty-wraps
Allow: /retail-graphics
Allow: /about
Allow: /services/
Allow: /gallery
Allow: /contact
Allow: /locations
Allow: /chicago
Allow: /vehicle-wraps-*-il
Allow: /truck-wraps-chicago
Allow: /pricing
Allow: /faq
Allow: /ai-wrap-ideas

# Allow all media files for rich snippets
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.png$
Allow: /*.webp$
Allow: /*.gif$
Allow: /*.svg$
Allow: /*.js$
Allow: /*.css$
Allow: /*.woff2$
Allow: /*.woff$

# Block low-value pages to optimize crawl budget
Disallow: /search
Disallow: /*utm_*
Disallow: /*fbclid=*
Disallow: /*gclid=*
Disallow: /*ref=*
Disallow: /*sessionid*
Disallow: /*PHPSESSID*
Disallow: /*.sql$
Disallow: /*.log$
Disallow: /tmp/
Disallow: /temp/
Disallow: /cache/
Disallow: /admin/
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /cgi-bin/

# Enhanced crawl directives for major search engines
User-agent: Googlebot
Allow: /
Crawl-delay: 1
Request-rate: 1/1s

User-agent: Googlebot-Image
Allow: /
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.png$
Allow: /*.webp$
Allow: /*.gif$

User-agent: Bingbot
Allow: /
Crawl-delay: 2

User-agent: Slurp
Allow: /
Crawl-delay: 2

User-agent: DuckDuckBot
Allow: /
Crawl-delay: 1

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

# Host preference for canonical URLs
Host: www.wrappingchicago.com

# Clean-param directive for duplicate content prevention
Clean-param: utm_source&utm_medium&utm_campaign&utm_content&utm_term&fbclid&gclid&ref&sessionid&PHPSESSID
`;
}
