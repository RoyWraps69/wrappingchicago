
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A custom hook that scrolls the window to the top when the route changes
 * with improved performance and user experience
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathRef = useRef<string>('');

  useEffect(() => {
    const handleScroll = () => {
      // Only scroll to top if the pathname has changed
      if (prevPathRef.current !== pathname) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant' // Using 'instant' for better performance than 'smooth'
        });
        
        // Show the page as quickly as possible
        document.documentElement.style.scrollBehavior = 'auto';
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = '';
        }, 100);
        
        prevPathRef.current = pathname;
      }
    };

    // Execute scroll after DOM updates
    requestAnimationFrame(handleScroll);
    
    // Clean up
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, [pathname]);
};

export default useScrollToTop;
