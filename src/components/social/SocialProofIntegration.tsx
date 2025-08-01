import React, { useEffect, useState } from 'react';
import { Star, MessageCircle, Users, TrendingUp } from 'lucide-react';

interface SocialMetrics {
  reviews: number;
  rating: number;
  completedProjects: number;
  activeClients: number;
}

const SocialProofIntegration: React.FC = () => {
  const [metrics, setMetrics] = useState<SocialMetrics>({
    reviews: 187,
    rating: 4.9,
    completedProjects: 2340,
    activeClients: 89
  });

  const [recentActivity, setRecentActivity] = useState([
    { action: 'New review', customer: 'Mike R.', time: '2 hours ago', rating: 5 },
    { action: 'Project completed', customer: 'Downtown Delivery Co.', time: '4 hours ago', rating: 5 },
    { action: 'Quote requested', customer: 'Sarah from Lincoln Park', time: '6 hours ago', rating: null },
  ]);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        reviews: prev.reviews + Math.random() > 0.98 ? 1 : 0,
        completedProjects: prev.completedProjects + Math.random() > 0.95 ? 1 : 0,
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const generateReviewSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Verified Customer"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": metrics.rating,
        "bestRating": "5"
      },
      "reviewBody": "Outstanding vehicle wrap service in Chicago. Professional installation and amazing results!",
      "datePublished": new Date().toISOString(),
      "publisher": {
        "@type": "Organization",
        "name": "Wrapping Chicago"
      }
    };
  };

  const trackSocialEngagement = (action: string) => {
    if (window.gtag) {
      window.gtag('event', 'social_engagement', {
        event_category: 'Social Proof',
        event_label: action,
        value: 1
      });
    }
  };

  return (
    <>
      {/* Social Proof Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateReviewSchema()) }}
      />

      {/* Floating Social Proof Widget */}
      <div className="fixed bottom-4 left-4 z-50 bg-background/95 backdrop-blur-sm border rounded-lg p-4 shadow-lg max-w-sm">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(metrics.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
            <span className="ml-1 text-sm font-semibold">{metrics.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({metrics.reviews} reviews)</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-3 text-center">
          <div>
            <div className="text-lg font-bold text-primary">{metrics.completedProjects.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">Projects Done</div>
          </div>
          <div>
            <div className="text-lg font-bold text-primary">{metrics.activeClients}</div>
            <div className="text-xs text-muted-foreground">Active Clients</div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Recent Activity</div>
          {recentActivity.slice(0, 2).map((activity, index) => (
            <div key={index} className="flex items-center gap-2 text-xs">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="truncate flex-1">
                {activity.customer} - {activity.action}
              </span>
              {activity.rating && (
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span>{activity.rating}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social Share Buttons */}
        <div className="flex gap-2 mt-3 pt-3 border-t">
          <button 
            onClick={() => trackSocialEngagement('facebook_share')}
            className="flex-1 bg-blue-600 text-white text-xs py-2 px-3 rounded hover:bg-blue-700 transition-colors"
          >
            Share
          </button>
          <button 
            onClick={() => trackSocialEngagement('review_click')}
            className="flex-1 bg-primary text-primary-foreground text-xs py-2 px-3 rounded hover:bg-primary/90 transition-colors"
          >
            Review Us
          </button>
        </div>
      </div>

      {/* Trust Signals Header */}
      <div className="bg-primary/5 py-2 px-4 text-center">
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-primary" />
            <span><strong>{metrics.completedProjects.toLocaleString()}</strong> Happy Customers</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span><strong>{metrics.rating}/5</strong> Rating</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span><strong>24hr</strong> Response Time</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialProofIntegration;