
import React from 'react';
import AIApplicationSchema from '../schemas/AIApplicationSchema';
import AIArticleSchema from '../schemas/AIArticleSchema';
import AIServiceSchema from '../schemas/AIServiceSchema';
import AIVoiceSearchSchema from '../schemas/AIVoiceSearchSchema';
import BreadcrumbSchema from '../schemas/BreadcrumbSchema';
import RichSnippetsManager from '../seo/RichSnippetsManager';
import SERPEnhancer from '../seo/SERPEnhancer';

const AIWrapSchema = () => {
  // Define explicit breadcrumb items for AI Wrap Ideas page
  const breadcrumbItems = [
    {
      position: 1,
      name: "Home",
      item: "https://www.wrappingchicago.com/"
    },
    {
      position: 2,
      name: "AI Wrap Ideas",
      item: "https://www.wrappingchicago.com/ai-wrap-ideas"
    }
  ];

  const faqData = [
    {
      question: "How does AI help generate vehicle wrap ideas?",
      answer: "Our AI analyzes your business type, target audience, and design preferences to generate unique, creative vehicle wrap concepts that align with your brand and marketing goals."
    },
    {
      question: "Can I customize the AI-generated wrap designs?",
      answer: "Absolutely! AI-generated ideas serve as creative starting points. Our design team works with you to refine and customize every aspect to match your specific vision and requirements."
    },
    {
      question: "How long does it take to get AI wrap ideas?",
      answer: "AI wrap ideas are generated instantly. Once you provide your business details and preferences, you'll receive multiple creative concepts within minutes."
    },
    {
      question: "What information do I need to provide for AI wrap ideas?",
      answer: "We need your business type, target audience, preferred colors, key messaging, and any specific design elements you want included in your vehicle wrap concept."
    }
  ];

  const howToSteps = [
    {
      name: "Provide Business Information",
      text: "Share your business type, target audience, and branding preferences with our AI system."
    },
    {
      name: "AI Generates Concepts",
      text: "Our AI analyzes your input and generates multiple creative vehicle wrap design concepts."
    },
    {
      name: "Review and Select",
      text: "Browse through the AI-generated ideas and select your favorite concepts for further development."
    },
    {
      name: "Professional Refinement",
      text: "Our design team takes your selected AI concepts and refines them into production-ready vehicle wrap designs."
    }
  ];
  
  return (
    <>
      <RichSnippetsManager
        pageType="service"
        title="AI Wrap Ideas Generator in Chicago IL"
        description="Get AI Wrap ideas in Chicago IL services to help generate creative vehicle concepts. Inspire unique designs, then let our experts bring them to life in vinyl."
        url="https://www.wrappingchicago.com/ai-wrap-ideas"
        keywords={["AI wrap ideas", "vehicle wrap design", "AI design generator", "Chicago wrap ideas", "creative vehicle wraps"]}
        faqData={faqData}
        howToSteps={howToSteps}
        reviews={{
          averageRating: 4.9,
          reviewCount: 847,
          bestRating: 5,
          worstRating: 4
        }}
        services={[
          {
            name: "AI Design Generation",
            description: "Instant AI-powered vehicle wrap concept generation",
            price: "Free consultation"
          },
          {
            name: "Design Refinement",
            description: "Professional refinement of AI-generated concepts",
            price: "$200-500"
          }
        ]}
      />
      <SERPEnhancer
        title="AI Wrap Ideas Generator in Chicago IL - Wrapping Chicago"
        description="Get AI Wrap ideas in Chicago IL services to help generate creative vehicle concepts. Inspire unique designs, then let our experts bring them to life in vinyl."
        url="https://www.wrappingchicago.com/ai-wrap-ideas"
        imageUrl="https://www.wrappingchicago.com/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png"
        estimatedReadingTime={3}
        lastUpdated={new Date().toISOString()}
        authorName="Wrapping Chicago Design Team"
        businessHours={{
          opens: "09:00",
          closes: "17:00",
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        }}
        phoneNumber="(312) 597-1286"
        address="4711 N. Lamon Ave, Chicago, IL 60630"
        price={{
          min: 200,
          max: 500,
          currency: "USD"
        }}
      />
      <AIApplicationSchema />
      <AIArticleSchema />
      <AIServiceSchema />
      <AIVoiceSearchSchema 
        title="AI Wrap Ideas Generator in Chicago IL"
        description="Get AI Wrap ideas in Chicago IL services to help generate creative vehicle concepts. Inspire unique designs, then let our experts bring them to life in vinyl."
      />
      <BreadcrumbSchema items={breadcrumbItems} />
    </>
  );
};

export default AIWrapSchema;
