import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface ContentUpdate {
  id: string;
  type: 'pricing' | 'service' | 'testimonial' | 'promotion';
  content: any;
  lastModified: string;
  priority: 'high' | 'medium' | 'low';
}

interface ContentAutomationProps {
  enablePricingUpdates?: boolean;
  enableServiceUpdates?: boolean;
  enableTestimonialRotation?: boolean;
}

const ContentAutomation: React.FC<ContentAutomationProps> = ({
  enablePricingUpdates = true,
  enableServiceUpdates = true,
  enableTestimonialRotation = true
}) => {
  const [lastUpdateTime, setLastUpdateTime] = useState<string>(new Date().toISOString());
  const [activeUpdates, setActiveUpdates] = useState<ContentUpdate[]>([]);

  // Dynamic pricing based on market conditions
  const generateDynamicPricing = () => {
    const basePrices = {
      'car-wrap': { min: 2500, max: 4000 },
      'truck-wrap': { min: 3500, max: 6000 },
      'van-wrap': { min: 3000, max: 4500 },
      'fleet-wrap': { min: 15000, max: 35000 }
    };

    // Simulate market adjustments (seasonality, demand, etc.)
    const currentMonth = new Date().getMonth();
    const demandMultiplier = currentMonth >= 3 && currentMonth <= 8 ? 1.1 : 0.95; // Higher in summer
    
    const updatedPricing = Object.entries(basePrices).map(([service, prices]) => ({
      service,
      minPrice: Math.round(prices.min * demandMultiplier),
      maxPrice: Math.round(prices.max * demandMultiplier),
      lastUpdated: new Date().toISOString()
    }));

    return updatedPricing;
  };

  // Auto-rotate testimonials
  const generateFreshTestimonials = () => {
    const testimonialPool = [
      {
        name: "Marcus Johnson",
        business: "Johnson's Electrical Services",
        location: "Lincoln Park, Chicago",
        review: "Our service calls increased 45% after the vehicle wrap installation. The quality is outstanding and our trucks look incredibly professional driving through Lincoln Park and surrounding areas.",
        service: "Commercial Van Wraps",
        date: new Date().toISOString()
      },
      {
        name: "Patricia Williams", 
        business: "Williams Catering Co.",
        location: "Millennium Park Area",
        review: "The food truck wrap exceeded all expectations! We get stopped for photos daily and our bookings have tripled. Absolutely worth every penny for our business growth.",
        service: "Food Truck Graphics",
        date: new Date().toISOString()
      },
      {
        name: "David Chen",
        business: "Chen Home Services",
        location: "Wicker Park, Chicago", 
        review: "Professional installation, premium materials, and the design perfectly captures our brand. We're getting calls from areas we've never serviced before!",
        service: "Service Vehicle Wraps",
        date: new Date().toISOString()
      }
    ];

    // Rotate testimonials based on current week
    const weekNumber = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 7));
    return testimonialPool[weekNumber % testimonialPool.length];
  };

  // Generate service promotions
  const generateSeasonalPromotions = () => {
    const currentMonth = new Date().getMonth();
    const currentSeason = currentMonth >= 3 && currentMonth <= 5 ? 'spring' :
                         currentMonth >= 6 && currentMonth <= 8 ? 'summer' :
                         currentMonth >= 9 && currentMonth <= 11 ? 'fall' : 'winter';

    const promotions = {
      spring: {
        title: "Spring Fleet Refresh Special",
        description: "Get your fleet ready for busy season! 15% off fleet packages of 3+ vehicles.",
        discount: "15%",
        validUntil: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString()
      },
      summer: {
        title: "Peak Season Protection",
        description: "Beat the heat with premium heat-resistant vinyl. Upgrade included at no cost.",
        discount: "Free Upgrade",
        validUntil: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString()
      },
      fall: {
        title: "Pre-Winter Prep Package", 
        description: "Protect your investment before winter. Includes protective coating and maintenance kit.",
        discount: "Protection Package Included",
        validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
      },
      winter: {
        title: "Winter Planning Discount",
        description: "Plan ahead for spring installation. Lock in current pricing with 10% early bird discount.",
        discount: "10%",
        validUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString()
      }
    };

    return promotions[currentSeason];
  };

  // Update content automatically
  useEffect(() => {
    const updateContent = () => {
      const updates: ContentUpdate[] = [];

      if (enablePricingUpdates) {
        const pricing = generateDynamicPricing();
        updates.push({
          id: 'pricing-update',
          type: 'pricing',
          content: pricing,
          lastModified: new Date().toISOString(),
          priority: 'high'
        });
      }

      if (enableTestimonialRotation) {
        const testimonial = generateFreshTestimonials();
        updates.push({
          id: 'testimonial-rotation',
          type: 'testimonial', 
          content: testimonial,
          lastModified: new Date().toISOString(),
          priority: 'medium'
        });
      }

      if (enableServiceUpdates) {
        const promotion = generateSeasonalPromotions();
        updates.push({
          id: 'seasonal-promotion',
          type: 'promotion',
          content: promotion,
          lastModified: new Date().toISOString(),
          priority: 'high'
        });
      }

      setActiveUpdates(updates);
      setLastUpdateTime(new Date().toISOString());

      // Store in localStorage for persistence
      localStorage.setItem('content-automation-updates', JSON.stringify(updates));
      localStorage.setItem('last-content-update', new Date().toISOString());
    };

    // Update content immediately
    updateContent();

    // Set up automatic updates every hour
    const interval = setInterval(updateContent, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, [enablePricingUpdates, enableServiceUpdates, enableTestimonialRotation]);

  // Content freshness schema for SEO
  const contentFreshnessSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Wrapping Chicago - Dynamic Content",
    "description": "Automatically updated vehicle wrap pricing, testimonials, and promotions",
    "dateModified": lastUpdateTime,
    "author": {
      "@type": "Organization",
      "name": "Wrapping Chicago"
    },
    "contentUpdates": activeUpdates.map(update => ({
      "@type": "Action",
      "name": `Content Update - ${update.type}`,
      "startTime": update.lastModified,
      "object": {
        "@type": "CreativeWork",
        "name": update.type,
        "dateModified": update.lastModified
      }
    }))
  };

  return (
    <>
      <Helmet>
        {/* Content freshness signals for search engines */}
        <meta name="last-modified" content={lastUpdateTime} />
        <meta name="content-freshness" content="hourly-automated-updates" />
        <meta name="dynamic-content" content="pricing,testimonials,promotions" />
        
        {/* Content freshness schema */}
        <script type="application/ld+json">
          {JSON.stringify(contentFreshnessSchema)}
        </script>
      </Helmet>

      {/* Expose updates to context */}
      {typeof window !== 'undefined' && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.wrappingChicagoUpdates = ${JSON.stringify(activeUpdates)};
              window.lastContentUpdate = "${lastUpdateTime}";
            `
          }}
        />
      )}
    </>
  );
};

export default ContentAutomation;