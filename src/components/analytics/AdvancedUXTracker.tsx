import React, { useEffect, useRef, useState } from 'react';

interface UXMetrics {
  scrollDepth: number;
  timeOnPage: number;
  clickCount: number;
  scrollDirection: 'up' | 'down' | 'none';
  engagementScore: number;
  exitIntent: boolean;
}

interface AdvancedUXTrackerProps {
  onMetricsUpdate?: (metrics: UXMetrics) => void;
  enableGoogleAnalytics?: boolean;
}

const AdvancedUXTracker: React.FC<AdvancedUXTrackerProps> = ({ 
  onMetricsUpdate, 
  enableGoogleAnalytics = true 
}) => {
  const [metrics, setMetrics] = useState<UXMetrics>({
    scrollDepth: 0,
    timeOnPage: 0,
    clickCount: 0,
    scrollDirection: 'none',
    engagementScore: 0,
    exitIntent: false
  });

  const startTimeRef = useRef<number>(Date.now());
  const lastScrollRef = useRef<number>(0);
  const maxScrollRef = useRef<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Track time on page
    intervalRef.current = setInterval(() => {
      const timeOnPage = Math.floor((Date.now() - startTimeRef.current) / 1000);
      setMetrics(prev => ({ ...prev, timeOnPage }));
    }, 1000);

    // Scroll depth tracking
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const scrollPercent = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);
      const scrollDepth = Math.min(100, Math.max(0, scrollPercent));
      
      // Track scroll direction
      const scrollDirection = scrollTop > lastScrollRef.current ? 'down' : 
                            scrollTop < lastScrollRef.current ? 'up' : 'none';
      
      // Update max scroll depth
      if (scrollDepth > maxScrollRef.current) {
        maxScrollRef.current = scrollDepth;
      }

      lastScrollRef.current = scrollTop;

      setMetrics(prev => ({
        ...prev,
        scrollDepth: maxScrollRef.current,
        scrollDirection
      }));

      // Send milestone events to Google Analytics
      if (enableGoogleAnalytics && (window as any).gtag) {
        const milestones = [25, 50, 75, 90, 100];
        milestones.forEach(milestone => {
          if (scrollDepth >= milestone && maxScrollRef.current < milestone) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'engagement',
              event_label: `${milestone}%`,
              value: milestone
            });
          }
        });
      }
    };

    // Click tracking
    const handleClick = (e: MouseEvent) => {
      setMetrics(prev => ({ ...prev, clickCount: prev.clickCount + 1 }));
      
      if (enableGoogleAnalytics && (window as any).gtag) {
        const target = e.target as HTMLElement;
        const elementType = target.tagName.toLowerCase();
        const elementText = target.textContent?.substring(0, 50) || '';
        
        (window as any).gtag('event', 'click_interaction', {
          event_category: 'engagement',
          event_label: `${elementType}: ${elementText}`,
          value: 1
        });
      }
    };

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setMetrics(prev => ({ ...prev, exitIntent: true }));
        
        if (enableGoogleAnalytics && (window as any).gtag) {
          (window as any).gtag('event', 'exit_intent', {
            event_category: 'engagement',
            event_label: 'mouse_leave_top',
            value: 1
          });
        }
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enableGoogleAnalytics]);

  // Calculate engagement score
  useEffect(() => {
    const engagementScore = Math.min(100, Math.round(
      (metrics.scrollDepth * 0.4) + 
      (Math.min(metrics.timeOnPage / 60, 10) * 5) + 
      (Math.min(metrics.clickCount, 10) * 3)
    ));

    const updatedMetrics = { ...metrics, engagementScore };
    setMetrics(updatedMetrics);
    
    if (onMetricsUpdate) {
      onMetricsUpdate(updatedMetrics);
    }

    // Send engagement score to Google Analytics
    if (enableGoogleAnalytics && (window as any).gtag && engagementScore > 0) {
      (window as any).gtag('event', 'engagement_score', {
        event_category: 'user_experience',
        event_label: 'calculated_score',
        value: engagementScore
      });
    }
  }, [metrics.scrollDepth, metrics.timeOnPage, metrics.clickCount, onMetricsUpdate, enableGoogleAnalytics]);

  // Send final metrics on page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (enableGoogleAnalytics && (window as any).gtag) {
        (window as any).gtag('event', 'page_exit_metrics', {
          event_category: 'user_experience',
          custom_parameters: {
            final_scroll_depth: metrics.scrollDepth,
            total_time_on_page: metrics.timeOnPage,
            total_clicks: metrics.clickCount,
            engagement_score: metrics.engagementScore
          }
        });
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [metrics, enableGoogleAnalytics]);

  // Development mode display
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-lg text-xs z-50 opacity-75">
        <div>Scroll: {metrics.scrollDepth}%</div>
        <div>Time: {metrics.timeOnPage}s</div>
        <div>Clicks: {metrics.clickCount}</div>
        <div>Score: {metrics.engagementScore}</div>
        {metrics.exitIntent && <div className="text-red-400">Exit Intent!</div>}
      </div>
    );
  }

  return null;
};

export default AdvancedUXTracker;