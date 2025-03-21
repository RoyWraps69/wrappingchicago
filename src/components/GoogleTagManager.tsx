
import React from 'react';

interface GoogleTagManagerProps {
  containerId: string;
}

const GoogleTagManager: React.FC<GoogleTagManagerProps> = ({ containerId }) => {
  // Format: If user passed G-XXXXXX (GA4) format, convert to GTM-XXXXXX format
  const formattedId = containerId.startsWith('G-') ? `GTM-${containerId.substring(2)}` : containerId;
  
  // Add Google Search Console verification script
  return (
    <>
      {/* Google Tag Manager (head) */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${formattedId}');`
        }}
      />
      
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="gQnkHgsJ2bOPDWFClspUxA6EZsE-XWnLasqxsqSESvg" />
      
      {/* Google Tag Manager (body) - to be included in the App.tsx file */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${formattedId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }}
      />
    </>
  );
};

export default GoogleTagManager;
