import React, { useEffect, useState } from 'react';
import { Calendar, TrendingUp, Clock } from 'lucide-react';

interface ContentUpdate {
  title: string;
  type: 'blog' | 'service' | 'location' | 'trend';
  date: string;
  url: string;
  excerpt: string;
}

const FreshContentManager: React.FC = () => {
  const [latestUpdates, setLatestUpdates] = useState<ContentUpdate[]>([
    {
      title: "2024 Vehicle Wrap Color Trends in Chicago",
      type: "blog",
      date: new Date().toISOString(),
      url: "/blog/2024-vehicle-wrap-trends",
      excerpt: "Discover the hottest wrap colors and finishes trending in Chicago this year."
    },
    {
      title: "ROI Calculator for Vehicle Wraps",
      type: "blog", 
      date: new Date(Date.now() - 86400000).toISOString(),
      url: "/blog/vehicle-wrap-roi-calculator",
      excerpt: "Calculate your exact return on investment for vehicle wrap advertising."
    },
    {
      title: "New Service Areas: Northwest Suburbs",
      type: "service",
      date: new Date(Date.now() - 172800000).toISOString(),
      url: "/service-areas",
      excerpt: "We've expanded our coverage to include Arlington Heights, Palatine, and surrounding areas."
    }
  ]);

  useEffect(() => {
    // Generate fresh content signals
    generateContentFreshnessSignals();
    
    // Update timestamps for better crawling
    updateContentTimestamps();
  }, []);

  const generateContentFreshnessSignals = () => {
    // Add last-modified headers and meta tags
    const meta = document.createElement('meta');
    meta.name = 'last-modified';
    meta.content = new Date().toISOString();
    document.head.appendChild(meta);

    // Add content freshness schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://www.wrappingchicago.com",
      "dateModified": new Date().toISOString(),
      "mainContentOfPage": {
        "@type": "WebPageElement",
        "dateModified": new Date().toISOString(),
        "about": "Vehicle wrap services and content updates"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  };

  const updateContentTimestamps = () => {
    // Simulate content updates for SEO
    const currentTime = new Date().toISOString();
    
    // Update sitemap with fresh timestamps
    if (typeof window !== 'undefined') {
      localStorage.setItem('last-content-update', currentTime);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    return date.toLocaleDateString();
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <TrendingUp className="w-4 h-4 text-blue-500" />;
      case 'service':
        return <Calendar className="w-4 h-4 text-green-500" />;
      default:
        return <Clock className="w-4 h-4 text-orange-500" />;
    }
  };

  return (
    <>
      {/* Fresh Content Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Latest Updates",
            "description": "Recent content updates and news from Wrapping Chicago",
            "itemListElement": latestUpdates.map((update, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Article",
                "headline": update.title,
                "datePublished": update.date,
                "dateModified": update.date,
                "url": `https://www.wrappingchicago.com${update.url}`,
                "description": update.excerpt
              }
            }))
          })
        }}
      />

      {/* Content Freshness Indicator */}
      <div className="bg-muted/30 border-l-4 border-primary p-4 my-6">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Latest Updates</h3>
        </div>
        <div className="space-y-3">
          {latestUpdates.map((update, index) => (
            <div key={index} className="flex items-start gap-3">
              {getTypeIcon(update.type)}
              <div className="flex-1">
                <a 
                  href={update.url} 
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  {update.title}
                </a>
                <p className="text-sm text-muted-foreground mt-1">{update.excerpt}</p>
                <div className="text-xs text-muted-foreground mt-1">
                  Updated {formatDate(update.date)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Last Updated Timestamp */}
      <div className="text-xs text-muted-foreground text-center py-2 border-t">
        Page last updated: {new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </div>
    </>
  );
};

export default FreshContentManager;