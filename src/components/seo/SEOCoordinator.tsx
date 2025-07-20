import React, { createContext, useContext, useState } from 'react';

interface SEOCoordinatorState {
  // Track which components have set which meta tags to prevent duplicates
  setMetaTags: Set<string>;
  setCanonical: boolean;
  setTitle: boolean;
  setDescription: boolean;
  setKeywords: boolean;
  setRobots: boolean;
  schemaTypes: Set<string>;
}

interface SEOCoordinatorContextType {
  state: SEOCoordinatorState;
  registerMetaTag: (tagType: string) => boolean;
  registerSchema: (schemaType: string) => boolean;
  registerCanonical: () => boolean;
  registerTitle: () => boolean;
  registerDescription: () => boolean;
  registerKeywords: () => boolean;
  registerRobots: () => boolean;
}

const SEOCoordinatorContext = createContext<SEOCoordinatorContextType | null>(null);

export const SEOCoordinatorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<SEOCoordinatorState>({
    setMetaTags: new Set(),
    setCanonical: false,
    setTitle: false,
    setDescription: false,
    setKeywords: false,
    setRobots: false,
    schemaTypes: new Set()
  });

  const registerMetaTag = (tagType: string): boolean => {
    if (state.setMetaTags.has(tagType)) {
      return false; // Already set by another component
    }
    setState(prev => ({
      ...prev,
      setMetaTags: new Set([...prev.setMetaTags, tagType])
    }));
    return true;
  };

  const registerSchema = (schemaType: string): boolean => {
    if (state.schemaTypes.has(schemaType)) {
      return false; // Already set by another component
    }
    setState(prev => ({
      ...prev,
      schemaTypes: new Set([...prev.schemaTypes, schemaType])
    }));
    return true;
  };

  const registerCanonical = (): boolean => {
    if (state.setCanonical) return false;
    setState(prev => ({ ...prev, setCanonical: true }));
    return true;
  };

  const registerTitle = (): boolean => {
    if (state.setTitle) return false;
    setState(prev => ({ ...prev, setTitle: true }));
    return true;
  };

  const registerDescription = (): boolean => {
    if (state.setDescription) return false;
    setState(prev => ({ ...prev, setDescription: true }));
    return true;
  };

  const registerKeywords = (): boolean => {
    if (state.setKeywords) return false;
    setState(prev => ({ ...prev, setKeywords: true }));
    return true;
  };

  const registerRobots = (): boolean => {
    if (state.setRobots) return false;
    setState(prev => ({ ...prev, setRobots: true }));
    return true;
  };

  return (
    <SEOCoordinatorContext.Provider value={{
      state,
      registerMetaTag,
      registerSchema,
      registerCanonical,
      registerTitle,
      registerDescription,
      registerKeywords,
      registerRobots
    }}>
      {children}
    </SEOCoordinatorContext.Provider>
  );
};

export const useSEOCoordinator = () => {
  const context = useContext(SEOCoordinatorContext);
  if (!context) {
    throw new Error('useSEOCoordinator must be used within SEOCoordinatorProvider');
  }
  return context;
};

// Priority system for SEO components
export const SEO_PRIORITIES = {
  GOOGLE_2025: 1,      // Highest priority - main page SEO
  LOCAL_BOOSTER: 2,    // Second - local/geo targeting
  AEO_OPTIMIZER: 3,    // Third - answer engine optimization
  DYNAMIC_TITLE: 4,    // Fourth - dynamic title management
  DYNAMIC_CANONICAL: 5, // Fifth - canonical management
  HOME_SEO: 6          // Lowest - legacy/fallback
} as const;