
import React from 'react';

interface SemanticContentEnhancerProps {
  children: React.ReactNode;
  semanticType?: 'service' | 'benefit' | 'feature' | 'process';
  importance?: 'high' | 'medium' | 'low';
}

const SemanticContentEnhancer: React.FC<SemanticContentEnhancerProps> = ({
  children,
  semanticType = 'service',
  importance = 'medium'
}) => {
  const getSemanticAttributes = () => {
    const baseAttributes = {
      'data-semantic-type': semanticType,
      'data-importance': importance,
      'itemScope': true
    };

    switch (semanticType) {
      case 'service':
        return {
          ...baseAttributes,
          'itemType': 'https://schema.org/Service'
        };
      case 'benefit':
        return {
          ...baseAttributes,
          'itemType': 'https://schema.org/Thing',
          'data-content-category': 'benefit'
        };
      case 'feature':
        return {
          ...baseAttributes,
          'itemType': 'https://schema.org/Thing',
          'data-content-category': 'feature'
        };
      case 'process':
        return {
          ...baseAttributes,
          'itemType': 'https://schema.org/HowTo',
          'data-content-category': 'process'
        };
      default:
        return baseAttributes;
    }
  };

  return (
    <div 
      {...getSemanticAttributes()}
      className={`semantic-content ${semanticType} ${importance}-importance`}
    >
      {children}
    </div>
  );
};

export default SemanticContentEnhancer;
