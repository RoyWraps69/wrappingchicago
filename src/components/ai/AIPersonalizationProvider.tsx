import React, { useState, useEffect, createContext, useContext } from 'react';

interface UserBehavior {
  location: string;
  deviceType: 'mobile' | 'desktop' | 'tablet';
  visitCount: number;
  timeSpent: number;
  pagesVisited: string[];
  servicesViewed: string[];
  preferredContactMethod: 'phone' | 'email' | 'form';
  lastVisit: string;
  engagement: 'high' | 'medium' | 'low';
}

interface PersonalizedContent {
  heroMessage: string;
  ctaText: string;
  recommendedServices: string[];
  testimonial: any;
  promotion: any;
  contactPrompt: string;
}

interface AIPersonalizationContextType {
  userBehavior: UserBehavior;
  personalizedContent: PersonalizedContent;
  updateBehavior: (data: Partial<UserBehavior>) => void;
  getPersonalizedRecommendations: () => string[];
}

const AIPersonalizationContext = createContext<AIPersonalizationContextType | null>(null);

export const usePersonalization = () => {
  const context = useContext(AIPersonalizationContext);
  if (!context) {
    throw new Error('usePersonalization must be used within AIPersonalizationProvider');
  }
  return context;
};

interface AIPersonalizationProviderProps {
  children: React.ReactNode;
}

export const AIPersonalizationProvider: React.FC<AIPersonalizationProviderProps> = ({ children }) => {
  const [userBehavior, setUserBehavior] = useState<UserBehavior>({
    location: '',
    deviceType: 'desktop',
    visitCount: 1,
    timeSpent: 0,
    pagesVisited: [],
    servicesViewed: [],
    preferredContactMethod: 'form',
    lastVisit: new Date().toISOString(),
    engagement: 'medium'
  });

  const [personalizedContent, setPersonalizedContent] = useState<PersonalizedContent>({
    heroMessage: 'Transform Your Vehicle Into a Marketing Machine',
    ctaText: 'Get Free Quote',
    recommendedServices: ['car-wraps', 'truck-wraps', 'fleet-wraps'],
    testimonial: null,
    promotion: null,
    contactPrompt: 'Ready to get started?'
  });

  // Initialize user behavior from storage and browser data
  useEffect(() => {
    const initializeBehavior = () => {
      // Get stored behavior
      const stored = localStorage.getItem('user-behavior');
      let behavior = stored ? JSON.parse(stored) : userBehavior;

      // Update with current session data
      behavior.deviceType = getDeviceType();
      behavior.location = getLocationFromIP();
      behavior.visitCount = (behavior.visitCount || 0) + 1;
      behavior.lastVisit = new Date().toISOString();

      setUserBehavior(behavior);
      generatePersonalizedContent(behavior);
    };

    initializeBehavior();
  }, []);

  // Save behavior to storage whenever it changes
  useEffect(() => {
    localStorage.setItem('user-behavior', JSON.stringify(userBehavior));
    generatePersonalizedContent(userBehavior);
  }, [userBehavior]);

  const getDeviceType = (): 'mobile' | 'desktop' | 'tablet' => {
    const width = window.innerWidth;
    if (width <= 768) return 'mobile';
    if (width <= 1024) return 'tablet';
    return 'desktop';
  };

  const getLocationFromIP = (): string => {
    // In a real app, you'd use IP geolocation service
    // For demo, we'll use timezone to guess location
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone.includes('Chicago') || timezone.includes('Central')) {
      return 'Chicago Area';
    }
    return 'General';
  };

  const generatePersonalizedContent = (behavior: UserBehavior) => {
    const content: PersonalizedContent = {
      heroMessage: getPersonalizedHeroMessage(behavior),
      ctaText: getPersonalizedCTA(behavior),
      recommendedServices: getRecommendedServices(behavior),
      testimonial: getRelevantTestimonial(behavior),
      promotion: getPersonalizedPromotion(behavior),
      contactPrompt: getPersonalizedContactPrompt(behavior)
    };

    setPersonalizedContent(content);
  };

  const getPersonalizedHeroMessage = (behavior: UserBehavior): string => {
    if (behavior.visitCount === 1) {
      return `Welcome! Chicago's #1 Vehicle Wrap Specialists Are Ready to Transform Your ${behavior.deviceType === 'mobile' ? 'Vehicle' : 'Fleet'}`;
    }

    if (behavior.visitCount > 3) {
      return `Welcome Back! Ready to Finally Get That Professional ${behavior.servicesViewed.length > 0 ? 'Wrap' : 'Vehicle Upgrade'}?`;
    }

    if (behavior.servicesViewed.includes('fleet-wraps')) {
      return 'Scale Your Business Impact with Professional Fleet Wraps';
    }

    if (behavior.location.includes('Chicago')) {
      return 'Your Neighbors Trust Us - Join 16,000+ Satisfied Chicago Vehicle Owners';
    }

    return 'Professional Vehicle Wraps That Actually Increase Your Business';
  };

  const getPersonalizedCTA = (behavior: UserBehavior): string => {
    if (behavior.preferredContactMethod === 'phone') {
      return 'Call Now';
    }

    if (behavior.visitCount > 2) {
      return 'Get Started Today';
    }

    if (behavior.servicesViewed.length > 0) {
      return 'Get My Quote';
    }

    return 'See Pricing';
  };

  const getRecommendedServices = (behavior: UserBehavior): string[] => {
    const allServices = [
      'car-wraps', 'truck-wraps', 'van-wraps', 'fleet-wraps', 
      'color-change-wraps', 'commercial-graphics', 'protective-films'
    ];

    // Based on viewed services
    if (behavior.servicesViewed.length > 0) {
      const related = getRelatedServices(behavior.servicesViewed);
      return [...behavior.servicesViewed, ...related].slice(0, 3);
    }

    // Based on device type (mobile users often have personal vehicles)
    if (behavior.deviceType === 'mobile') {
      return ['car-wraps', 'color-change-wraps', 'protective-films'];
    }

    // Default business-focused
    return ['fleet-wraps', 'commercial-graphics', 'truck-wraps'];
  };

  const getRelatedServices = (viewedServices: string[]): string[] => {
    const relations: Record<string, string[]> = {
      'car-wraps': ['color-change-wraps', 'protective-films'],
      'truck-wraps': ['fleet-wraps', 'commercial-graphics'],
      'fleet-wraps': ['truck-wraps', 'van-wraps'],
      'commercial-graphics': ['vehicle-lettering', 'retail-graphics']
    };

    const related: string[] = [];
    viewedServices.forEach(service => {
      if (relations[service]) {
        related.push(...relations[service]);
      }
    });

    return [...new Set(related)];
  };

  const getRelevantTestimonial = (behavior: UserBehavior) => {
    const testimonials = [
      {
        type: 'first-time',
        name: 'Sarah Johnson',
        text: 'I was nervous about wrapping my car, but the team made it so easy. Looks amazing!',
        service: 'car-wraps'
      },
      {
        type: 'business',
        name: 'Mike Rodriguez',
        text: 'Our service calls increased 40% after wrapping our fleet. Best investment ever.',
        service: 'fleet-wraps'
      },
      {
        type: 'return-customer',
        name: 'Lisa Chen',
        text: 'Third vehicle wrapped here. They always exceed expectations.',
        service: 'truck-wraps'
      }
    ];

    if (behavior.visitCount === 1) {
      return testimonials.find(t => t.type === 'first-time');
    }

    if (behavior.visitCount > 3) {
      return testimonials.find(t => t.type === 'return-customer');
    }

    return testimonials.find(t => t.type === 'business');
  };

  const getPersonalizedPromotion = (behavior: UserBehavior) => {
    if (behavior.visitCount > 2 && behavior.timeSpent > 300) {
      return {
        title: 'You\'re Clearly Interested!',
        description: 'Get 10% off your first wrap - limited time for serious customers.',
        code: 'SERIOUS10'
      };
    }

    if (behavior.servicesViewed.includes('fleet-wraps')) {
      return {
        title: 'Fleet Special',
        description: '15% off when you wrap 3+ vehicles.',
        code: 'FLEET15'
      };
    }

    return null;
  };

  const getPersonalizedContactPrompt = (behavior: UserBehavior): string => {
    if (behavior.preferredContactMethod === 'phone') {
      return 'Prefer to talk? Call us now at (312) 597-1286';
    }

    if (behavior.visitCount > 2) {
      return 'Ready to move forward? Let\'s discuss your project.';
    }

    return 'Questions? We\'re here to help with your vehicle wrap project.';
  };

  const updateBehavior = (data: Partial<UserBehavior>) => {
    setUserBehavior(prev => ({ ...prev, ...data }));
  };

  const getPersonalizedRecommendations = (): string[] => {
    return personalizedContent.recommendedServices;
  };

  return (
    <AIPersonalizationContext.Provider value={{
      userBehavior,
      personalizedContent,
      updateBehavior,
      getPersonalizedRecommendations
    }}>
      {children}
    </AIPersonalizationContext.Provider>
  );
};