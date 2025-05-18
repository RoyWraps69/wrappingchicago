
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Using 'instant' for better performance than 'smooth'
    });
    
    console.log("Scrolling to top after navigation to:", pathname);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
