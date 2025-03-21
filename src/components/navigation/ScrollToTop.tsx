
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component automatically scrolls to the top of the page
 * when navigating between routes
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Execute after component updates
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Using 'instant' instead of 'smooth' to prevent issues
    });
    
    // Cancel any ongoing smooth scrolls
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Reset after a short delay
    const timeoutId = setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
