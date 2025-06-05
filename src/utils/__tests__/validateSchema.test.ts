
import { describe, it, expect } from 'vitest';
import { validateSchema } from '../validateSchema';

describe('validateSchema', () => {
  describe('valid schemas', () => {
    it('should validate a valid LocalBusiness schema', () => {
      const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Test Business",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Test St",
          "addressLocality": "Chicago",
          "addressRegion": "IL",
          "postalCode": "60601"
        },
        "telephone": "(312) 555-0123"
      };

      const result = validateSchema(schema);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should validate a valid WebPage schema', () => {
      const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Test Page",
        "description": "A test page description"
      };

      const result = validateSchema(schema);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should validate a valid Service schema', () => {
      const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Test Service",
        "provider": {
          "@type": "Organization",
          "name": "Test Provider"
        }
      };

      const result = validateSchema(schema);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should validate a valid FAQPage schema', () => {
      const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Test question?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Test answer"
            }
          }
        ]
      };

      const result = validateSchema(schema);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should validate a valid BreadcrumbList schema', () => {
      const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://example.com"
          }
        ]
      };

      const result = validateSchema(schema);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
  });

  describe('invalid schemas', () => {
    it('should fail validation for missing @context', () => {
      const schema = {
        "@type": "LocalBusiness",
        "name": "Test Business"
      };

      const result = validateSchema(schema);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Invalid or missing @context. Must be "https://schema.org"');
    });

    it('should fail validation for incorrect @context', () => {
      const schema = {
        "@context": "https://wrong-context.org",
        "@type": "LocalBusiness",
        "name": "Test Business"
      };

      const result = validateSchema(schema);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Invalid or missing @context. Must be "https://schema.org"');
    });

    it('should fail validation for missing @type', () => {
      const schema = {
        "@context": "https://schema.org",
        "name": "Test Business"
      };

      const result = validateSchema(schema);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Missing @type property');
    });

    it('should fail validation for LocalBusiness missing required fields', () => {
      const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness"
      };

      const result = validateSchema(schema);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Missing required field \'name\' for LocalBusiness');
      expect(result.errors).toContain('Missing required field \'address\' for LocalBusiness');
      expect(result.errors).toContain('Missing required field \'telephone\' for LocalBusiness');
    });

    it('should fail validation for LocalBusiness with invalid address type', () => {
      const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Test Business",
        "address": {
          "@type": "WrongType",
          "streetAddress": "123 Test St"
        },
        "telephone": "(312) 555-0123"
      };

      const result = validateSchema(schema);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Address must have @type: "PostalAddress"');
    });

    it('should fail validation for WebPage missing required fields', () => {
      const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage"
      };

      const result = validateSchema(schema);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Missing required field \'name\' for WebPage');
      expect(result.errors).toContain('Missing required field \'description\' for WebPage');
    });

    it('should fail validation for Service missing required fields', () => {
      const schema = {
        "@context": "https://schema.org",
        "@type": "Service"
      };

      const result = validateSchema(schema);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Missing required field \'name\' for Service');
      expect(result.errors).toContain('Missing required field \'provider\' for Service');
    });

    it('should fail validation for FAQPage without mainEntity array', () => {
      const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage"
      };

      const result = validateSchema(schema);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('FAQPage must have mainEntity array');
    });

    it('should fail validation for BreadcrumbList without itemListElement array', () => {
      const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList"
      };

      const result = validateSchema(schema);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('BreadcrumbList must have itemListElement array');
    });

    it('should fail validation for invalid URL properties', () => {
      const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Test Business",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Test St"
        },
        "telephone": "(312) 555-0123",
        "url": "not-a-valid-url",
        "image": "also-not-valid"
      };

      const result = validateSchema(schema);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Invalid URL in url property');
      expect(result.errors).toContain('Invalid URL in image property');
    });

    it('should handle schema validation errors gracefully', () => {
      const schema = null;

      const result = validateSchema(schema as any);
      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.errors[0]).toMatch(/Schema validation error:/);
    });
  });
});
