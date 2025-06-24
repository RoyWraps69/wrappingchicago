
import React, { useEffect } from 'react';

const SchemaValidator: React.FC = () => {
  useEffect(() => {
    // Validate all JSON-LD scripts on the page
    const validateSchemas = () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      
      scripts.forEach((script, index) => {
        try {
          const schema = JSON.parse(script.textContent || '');
          console.log(`✅ Schema ${index + 1} is valid:`, schema['@type']);
          
          // Check for required fields
          if (!schema['@context']) {
            console.warn(`⚠️ Schema ${index + 1} missing @context`);
          }
          if (!schema['@type']) {
            console.warn(`⚠️ Schema ${index + 1} missing @type`);
          }
          
          // Type-specific validation
          switch (schema['@type']) {
            case 'LocalBusiness':
              if (!schema.name || !schema.address || !schema.telephone) {
                console.warn(`⚠️ LocalBusiness schema missing required fields`);
              }
              break;
            case 'WebPage':
              if (!schema.name || !schema.description || !schema.url) {
                console.warn(`⚠️ WebPage schema missing required fields`);
              }
              break;
            case 'BreadcrumbList':
              if (!schema.itemListElement || !Array.isArray(schema.itemListElement)) {
                console.warn(`⚠️ BreadcrumbList schema missing itemListElement array`);
              }
              break;
          }
          
        } catch (error) {
          console.error(`❌ Schema ${index + 1} is invalid:`, error);
        }
      });
    };

    // Run validation after a short delay to ensure all schemas are rendered
    setTimeout(validateSchemas, 1000);
  }, []);

  return null;
};

export default SchemaValidator;
