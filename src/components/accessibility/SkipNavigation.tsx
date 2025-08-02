import React from 'react';

const SkipNavigation = () => {
  return (
    <div className="sr-only focus:not-sr-only">
      <a
        href="#main-content"
        className="absolute top-4 left-4 z-50 bg-accent text-accent-foreground px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>
      <a
        href="#navigation"
        className="absolute top-4 left-36 z-50 bg-accent text-accent-foreground px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to navigation
      </a>
    </div>
  );
};

export default SkipNavigation;