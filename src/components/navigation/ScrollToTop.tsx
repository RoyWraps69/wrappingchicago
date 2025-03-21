
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

/**
 * ScrollToTop component automatically scrolls to the top of the page
 * when navigating between routes, with optimizations for mobile devices
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Execute after component updates with different behavior for mobile
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: isMobile ? 'instant' : 'smooth' // Instant on mobile for better performance
    });
    
    // Cancel any ongoing smooth scrolls
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Reset after a short delay
    const timeoutId = setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, isMobile ? 50 : 100); // Shorter delay on mobile
    
    return () => clearTimeout(timeoutId);
  }, [pathname, isMobile]);

  return null;
};

export default ScrollToTop;
