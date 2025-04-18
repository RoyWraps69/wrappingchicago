
type ValidationResult = {
  isValid: boolean;
  errors: string[];
};

export const validateSchema = (schema: object): ValidationResult => {
  const result: ValidationResult = {
    isValid: true,
    errors: []
  };

  // Check required fields based on schema type
  const validateRequiredFields = (obj: any, type: string, requiredFields: string[]) => {
    requiredFields.forEach(field => {
      if (!obj[field]) {
        result.isValid = false;
        result.errors.push(`Missing required field '${field}' for ${type}`);
      }
    });
  };

  try {
    // Validate JSON-LD context
    if (!schema['@context'] || schema['@context'] !== 'https://schema.org') {
      result.isValid = false;
      result.errors.push('Invalid or missing @context. Must be "https://schema.org"');
    }

    // Validate @type existence
    if (!schema['@type']) {
      result.isValid = false;
      result.errors.push('Missing @type property');
    }

    // Type-specific validation
    switch (schema['@type']) {
      case 'LocalBusiness':
        validateRequiredFields(schema, 'LocalBusiness', ['name', 'address', 'telephone']);
        if (schema['address'] && schema['address']['@type'] !== 'PostalAddress') {
          result.isValid = false;
          result.errors.push('Address must have @type: "PostalAddress"');
        }
        break;

      case 'WebPage':
        validateRequiredFields(schema, 'WebPage', ['name', 'description']);
        break;

      case 'Service':
        validateRequiredFields(schema, 'Service', ['name', 'provider']);
        break;

      case 'FAQPage':
        if (!schema['mainEntity'] || !Array.isArray(schema['mainEntity'])) {
          result.isValid = false;
          result.errors.push('FAQPage must have mainEntity array');
        }
        break;

      case 'BreadcrumbList':
        if (!schema['itemListElement'] || !Array.isArray(schema['itemListElement'])) {
          result.isValid = false;
          result.errors.push('BreadcrumbList must have itemListElement array');
        }
        break;
    }

    // URL validation for properties that should be URLs
    const urlProps = ['url', 'image', 'logo'];
    urlProps.forEach(prop => {
      if (schema[prop] && typeof schema[prop] === 'string') {
        try {
          new URL(schema[prop]);
        } catch {
          result.isValid = false;
          result.errors.push(`Invalid URL in ${prop} property`);
        }
      }
    });

  } catch (error) {
    result.isValid = false;
    result.errors.push(`Schema validation error: ${error.message}`);
  }

  return result;
};

// Test helper function
export const testSchema = (schema: object, name: string) => {
  console.group(`Testing ${name} Schema`);
  const result = validateSchema(schema);
  if (result.isValid) {
    console.log('✅ Schema is valid');
  } else {
    console.error('❌ Schema validation failed:');
    result.errors.forEach(error => console.error(`- ${error}`));
  }
  console.groupEnd();
  return result;
};
