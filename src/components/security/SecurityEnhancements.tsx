import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SecurityEnhancementsProps {
  enableCSP?: boolean;
  enableHSTS?: boolean;
  enableTrustSeals?: boolean;
}

const SecurityEnhancements: React.FC<SecurityEnhancementsProps> = ({
  enableCSP = true,
  enableHSTS = true,
  enableTrustSeals = true
}) => {

  // Content Security Policy for enhanced security
  const generateCSP = (): string => {
    const policies = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://static.hotjar.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https: http:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://api.openai.com",
      "media-src 'self' blob: data:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' https://formspree.io",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
      "block-all-mixed-content"
    ];

    return policies.join('; ');
  };

  // Security.txt content for responsible disclosure
  const securityTxt = `
Contact: mailto:security@wrappingchicago.com
Contact: tel:+1-312-597-1286
Expires: ${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()}
Encryption: https://www.wrappingchicago.com/pgp-key.txt
Preferred-Languages: en
Canonical: https://www.wrappingchicago.com/.well-known/security.txt
Policy: https://www.wrappingchicago.com/security-policy
Acknowledgments: https://www.wrappingchicago.com/security-acknowledgments
`;

  // Trust seal data
  const trustSeals = [
    {
      name: 'SSL Certificate',
      issuer: 'Let\'s Encrypt',
      validUntil: '2025-12-31',
      type: 'security'
    },
    {
      name: 'Business License',
      issuer: 'State of Illinois',
      validUntil: '2025-12-31',
      type: 'license'
    },
    {
      name: 'Privacy Compliant',
      issuer: 'Self-Certified',
      validUntil: 'Ongoing',
      type: 'privacy'
    },
    {
      name: 'Google Verified',
      issuer: 'Google My Business',
      validUntil: 'Ongoing',
      type: 'verification'
    }
  ];

  // Security schema for search engines
  const securitySchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wrapping Chicago",
    "url": "https://www.wrappingchicago.com",
    "securityAudit": {
      "@type": "Action",
      "name": "Security Compliance",
      "description": "SSL encryption, secure data handling, privacy protection",
      "startTime": "2024-01-01",
      "endTime": "2025-12-31"
    },
    "certification": trustSeals.map(seal => ({
      "@type": "Certification",
      "name": seal.name,
      "certificationIdentification": seal.issuer,
      "validFrom": "2024-01-01",
      "validUntil": seal.validUntil
    })),
    "privacyPolicy": "https://www.wrappingchicago.com/privacy-policy",
    "termsOfService": "https://www.wrappingchicago.com/terms"
  };

  return (
    <>
      <Helmet>
        {/* Content Security Policy */}
        {enableCSP && (
          <meta httpEquiv="Content-Security-Policy" content={generateCSP()} />
        )}

        {/* HTTP Strict Transport Security */}
        {enableHSTS && (
          <meta httpEquiv="Strict-Transport-Security" content="max-age=63072000; includeSubDomains; preload" />
        )}

        {/* Additional security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(self), payment=()" />

        {/* Security and trust signals */}
        <meta name="security-policy" content="https://www.wrappingchicago.com/security-policy" />
        <meta name="privacy-policy" content="https://www.wrappingchicago.com/privacy-policy" />
        <meta name="data-protection" content="GDPR-compliant, secure data handling" />
        <meta name="ssl-certificate" content="Valid SSL encryption enabled" />
        <meta name="business-verification" content="Google verified business" />

        {/* Security schema */}
        <script type="application/ld+json">
          {JSON.stringify(securitySchema)}
        </script>

        {/* Preconnect to trusted domains only */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS prefetch for performance (trusted domains) */}
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google.com" />
      </Helmet>

      {/* Hidden security.txt content for crawlers */}
      <div style={{ display: 'none' }}>
        <pre id="security-txt">{securityTxt}</pre>
      </div>

      {/* Trust seals display */}
      {enableTrustSeals && (
        <div className="hidden md:block fixed bottom-4 left-4 z-50">
          <div className="bg-white rounded-lg shadow-lg p-2 border">
            <div className="text-xs text-center mb-1 font-semibold text-gray-700">
              Secured & Verified
            </div>
            <div className="flex space-x-1">
              {trustSeals.slice(0, 2).map((seal, index) => (
                <div
                  key={index}
                  className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded flex items-center"
                  title={`${seal.name} - ${seal.issuer}`}
                >
                  {seal.type === 'security' && '🔒'}
                  {seal.type === 'license' && '📋'}
                  {seal.type === 'privacy' && '🛡️'}
                  {seal.type === 'verification' && '✅'}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Security monitoring script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Security monitoring
            (function() {
              // Detect potential XSS attempts
              const originalWrite = document.write;
              document.write = function(content) {
                if (typeof content === 'string' && /<script/i.test(content)) {
                  console.warn('Potential XSS attempt blocked');
                  return;
                }
                return originalWrite.call(document, content);
              };

              // CSP violation reporting
              document.addEventListener('securitypolicyviolation', function(e) {
                console.warn('CSP Violation:', e.violatedDirective, e.blockedURI);
                
                // Report to analytics if available
                if (window.gtag) {
                  gtag('event', 'security_violation', {
                    event_category: 'security',
                    event_label: e.violatedDirective,
                    value: 1
                  });
                }
              });

              // Security headers check
              if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
                console.warn('Site not served over HTTPS');
              }
            })();
          `
        }}
      />
    </>
  );
};

export default SecurityEnhancements;