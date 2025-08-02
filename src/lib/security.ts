/**
 * Security utilities for handling potentially unsafe content
 * Prevents XSS attacks and ensures safe HTML rendering
 */

// Simple HTML sanitizer for schema markup and trusted content
export const sanitizeHTML = (html: string): string => {
  // For schema markup, we only allow JSON-LD which should be safe
  if (html.trim().startsWith('{') && html.trim().endsWith('}')) {
    try {
      // Validate that it's valid JSON
      JSON.parse(html);
      return html;
    } catch {
      return '';
    }
  }
  
  // For other HTML, remove script tags and dangerous attributes
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/javascript:/gi, '');
};

// Safe JSON stringifier for schema markup
export const safeJsonStringify = (obj: object): string => {
  try {
    return JSON.stringify(obj, null, 0);
  } catch {
    return '{}';
  }
};

// Content Security Policy meta tag generator
export const generateCSPMeta = () => {
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
    "frame-src 'self' https://www.google.com",
  ].join('; ');
  
  return csp;
};