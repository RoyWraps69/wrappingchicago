import React, { createContext, useContext, useState } from 'react';

interface SchemaRegistry {
  // Track all schema types and their sources
  Organization: Set<string>;
  LocalBusiness: Set<string>;
  WebSite: Set<string>;
  Service: Set<string>;
  FAQPage: Set<string>;
  WebPage: Set<string>;
  BreadcrumbList: Set<string>;
  // Add other schema types as needed
}

interface SchemaDeduplicatorContextType {
  registry: SchemaRegistry;
  canRenderSchema: (schemaType: keyof SchemaRegistry, sourceComponent: string) => boolean;
  registerSchema: (schemaType: keyof SchemaRegistry, sourceComponent: string) => void;
}

const SchemaDeduplicatorContext = createContext<SchemaDeduplicatorContextType | null>(null);

export const SchemaDeduplicatorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [registry, setRegistry] = useState<SchemaRegistry>({
    Organization: new Set(),
    LocalBusiness: new Set(),
    WebSite: new Set(),
    Service: new Set(),
    FAQPage: new Set(),
    WebPage: new Set(),
    BreadcrumbList: new Set(),
  });

  const canRenderSchema = (schemaType: keyof SchemaRegistry, sourceComponent: string): boolean => {
    // Only allow the first component to render each schema type
    if (registry[schemaType].size === 0) {
      return true;
    }
    
    // If already registered by this component, allow it
    return registry[schemaType].has(sourceComponent);
  };

  const registerSchema = (schemaType: keyof SchemaRegistry, sourceComponent: string) => {
    setRegistry(prev => ({
      ...prev,
      [schemaType]: new Set([...prev[schemaType], sourceComponent])
    }));
  };

  return (
    <SchemaDeduplicatorContext.Provider value={{ registry, canRenderSchema, registerSchema }}>
      {children}
    </SchemaDeduplicatorContext.Provider>
  );
};

export const useSchemaDeduplicator = () => {
  const context = useContext(SchemaDeduplicatorContext);
  if (!context) {
    throw new Error('useSchemaDeduplicator must be used within SchemaDeduplicatorProvider');
  }
  return context;
};

// Higher-order component to wrap schema components
export const withSchemaDeduplication = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  schemaType: keyof SchemaRegistry,
  componentName: string
) => {
  return (props: P) => {
    const { canRenderSchema, registerSchema } = useSchemaDeduplicator();
    
    if (!canRenderSchema(schemaType, componentName)) {
      console.warn(`Schema ${schemaType} already rendered by another component. Skipping ${componentName}.`);
      return null;
    }
    
    // Register this schema
    registerSchema(schemaType, componentName);
    
    return <WrappedComponent {...props} />;
  };
};