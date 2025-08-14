import React from 'react';

const AccessibilityEnforcer: React.FC = () => {
  console.log('AccessibilityEnforcer rendering');
  
  try {
    React.useEffect(() => {
      const enforceAccessibility = () => {
        try {
          // Ensure single H1 per page
          const h1Elements = document.querySelectorAll('h1');
          if (h1Elements.length > 1) {
            console.warn(`⚠️ Multiple H1 elements found (${h1Elements.length})`);
          }

          // Ensure alt text on images
          const images = document.querySelectorAll('img:not([alt])');
          images.forEach((img, index) => {
            const suggestedAlt = `Image ${index + 1}`;
            img.setAttribute('alt', suggestedAlt);
          });

          console.log('✅ Accessibility checks completed');
        } catch (error) {
          console.error('Accessibility enforcement error:', error);
        }
      };

      // Delay to prevent blocking render
      setTimeout(enforceAccessibility, 2000);
    }, []);

    return (
      <>
        {/* Skip to content link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        
        {/* Screen reader announcements */}
        <div id="aria-live-region" aria-live="polite" aria-atomic="true" className="sr-only"></div>
        
        {/* Accessibility styles */}
        <style>{`
          .sr-only {
            position: absolute !important;
            width: 1px !important;
            height: 1px !important;
            padding: 0 !important;
            margin: -1px !important;
            overflow: hidden !important;
            clip: rect(0, 0, 0, 0) !important;
            white-space: nowrap !important;
            border: 0 !important;
          }
          
          .sr-only:focus {
            position: static !important;
            width: auto !important;
            height: auto !important;
            padding: inherit !important;
            margin: inherit !important;
            overflow: visible !important;
            clip: auto !important;
            white-space: normal !important;
          }
          
          :focus-visible {
            outline: 2px solid hsl(var(--primary)) !important;
            outline-offset: 2px !important;
          }
        `}</style>
      </>
    );
  } catch (error) {
    console.error('AccessibilityEnforcer error:', error);
    return null;
  }
};

export default AccessibilityEnforcer;