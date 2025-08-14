import React, { useEffect } from 'react';

const AccessibilityEnforcer: React.FC = () => {
  useEffect(() => {
    // Ensure single H1 per page
    const enforceHeadingHierarchy = () => {
      const h1Elements = document.querySelectorAll('h1');
      if (h1Elements.length > 1) {
        console.warn(`⚠️ Multiple H1 elements found (${h1Elements.length}). Converting extras to H2.`);
        h1Elements.forEach((h1, index) => {
          if (index > 0) {
            const h2 = document.createElement('h2');
            h2.innerHTML = h1.innerHTML;
            h2.className = h1.className;
            h1.parentNode?.replaceChild(h2, h1);
          }
        });
      }
    };

    // Ensure alt text on images
    const enforceAltText = () => {
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img, index) => {
        const src = img.getAttribute('src') || '';
        const suggestedAlt = src.includes('logo') ? 'Wrapping Chicago logo' :
                           src.includes('wrap') ? 'Vehicle wrap example' :
                           src.includes('before') ? 'Before vehicle wrap' :
                           src.includes('after') ? 'After vehicle wrap' :
                           `Image ${index + 1}`;
        
        img.setAttribute('alt', suggestedAlt);
        console.warn(`⚠️ Added missing alt text: "${suggestedAlt}"`);
      });
    };

    // Ensure focus indicators
    const enforceFocusIndicators = () => {
      const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      
      focusableElements.forEach(element => {
        if (!element.hasAttribute('aria-label') && !element.textContent?.trim()) {
          console.warn('⚠️ Focusable element without accessible text:', element);
        }
      });
    };

    // Check color contrast (basic check)
    const checkColorContrast = () => {
      const style = getComputedStyle(document.documentElement);
      const primary = style.getPropertyValue('--primary').trim();
      const background = style.getPropertyValue('--background').trim();
      
      if (!primary || !background) {
        console.warn('⚠️ CSS custom properties for colors not found');
      }
    };

    // Ensure proper ARIA usage
    const enforceAriaUsage = () => {
      // Check for proper button roles
      const divButtons = document.querySelectorAll('div[onclick], span[onclick]');
      divButtons.forEach(div => {
        if (!div.hasAttribute('role')) {
          div.setAttribute('role', 'button');
          div.setAttribute('tabindex', '0');
          console.warn('⚠️ Added button role to clickable div/span');
        }
      });

      // Check for proper form labels
      const inputs = document.querySelectorAll('input:not([type="hidden"])');
      inputs.forEach(input => {
        const id = input.getAttribute('id');
        const label = id ? document.querySelector(`label[for="${id}"]`) : null;
        const ariaLabel = input.getAttribute('aria-label');
        
        if (!label && !ariaLabel) {
          console.warn('⚠️ Input without associated label:', input);
        }
      });
    };

    // Ensure keyboard navigation
    const enforceKeyboardNavigation = () => {
      document.addEventListener('keydown', (e) => {
        // Ensure Enter and Space work on custom buttons
        if ((e.key === 'Enter' || e.key === ' ') && 
            e.target instanceof HTMLElement && 
            e.target.getAttribute('role') === 'button') {
          e.preventDefault();
          e.target.click();
        }
        
        // Ensure Escape closes modals/dropdowns
        if (e.key === 'Escape') {
          const openModal = document.querySelector('[role="dialog"][aria-hidden="false"]');
          const openDropdown = document.querySelector('[aria-expanded="true"]');
          
          if (openModal) {
            const closeButton = openModal.querySelector('[aria-label*="close"], [aria-label*="Close"]');
            if (closeButton instanceof HTMLElement) {
              closeButton.click();
            }
          }
          
          if (openDropdown) {
            openDropdown.setAttribute('aria-expanded', 'false');
          }
        }
      });
    };

    // Run all accessibility checks
    setTimeout(() => {
      enforceHeadingHierarchy();
      enforceAltText();
      enforceFocusIndicators();
      checkColorContrast();
      enforceAriaUsage();
      enforceKeyboardNavigation();
    }, 1000);

    // Re-run checks when content changes
    const observer = new MutationObserver(() => {
      setTimeout(() => {
        enforceHeadingHierarchy();
        enforceAltText();
      }, 100);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Skip to content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      
      {/* Screen reader announcements */}
      <div id="aria-live-region" aria-live="polite" aria-atomic="true" className="sr-only"></div>
      
      {/* High contrast mode detection */}
      <style>{`
        @media (prefers-contrast: high) {
          :root {
            --primary: 0 0% 0%;
            --primary-foreground: 0 0% 100%;
            --background: 0 0% 100%;
            --foreground: 0 0% 0%;
            --border: 0 0% 0%;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
        
        /* Focus indicators */
        :focus-visible {
          outline: 2px solid hsl(var(--primary)) !important;
          outline-offset: 2px !important;
        }
        
        /* Screen reader only class */
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
      `}</style>
    </>
  );
};

export default AccessibilityEnforcer;