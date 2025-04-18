import React from 'react';

interface GoogleTagManagerProps {
  containerId: string;
}

const GoogleTagManager: React.FC<GoogleTagManagerProps> = ({ containerId }) => {
  const formattedId = containerId.startsWith('G-') ? `GTM-${containerId.substring(2)}` : containerId;
  
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
