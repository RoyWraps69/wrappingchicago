
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // Using 'auto' for immediate scrolling
    });
    
    console.log("ScrollToTop executed for path:", pathname);
    
    // Force focus to the top of the page for accessibility
    const main = document.querySelector('main');
    if (main) {
      // Set focus to main content for accessibility
      main.setAttribute('tabindex', '-1');
      main.focus({ preventScroll: true });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
