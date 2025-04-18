
import { useEffect } from 'react';
import type { CLSMetric, FCPMetric, FIDMetric, LCPMetric, TTFBMetric } from 'web-vitals';
import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

type WebVitalMetric = CLSMetric | FCPMetric | FIDMetric | LCPMetric | TTFBMetric;

const reportWebVitals = (metric: WebVitalMetric) => {
  // Send to Google Analytics
  const gtag = (window as any).gtag;
  if (gtag) {
    gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.value),
      non_interaction: true,
    });
  }
  
  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`${metric.name}:`, Math.round(metric.value));
  }
};

export const useWebVitals = () => {
  useEffect(() => {
    onCLS(reportWebVitals);
    onFCP(reportWebVitals);
    onFID(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);
  }, []);
};
