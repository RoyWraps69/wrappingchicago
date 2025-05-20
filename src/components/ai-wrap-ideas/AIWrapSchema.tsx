
import React from 'react';
import AIApplicationSchema from '../schemas/AIApplicationSchema';
import AIArticleSchema from '../schemas/AIArticleSchema';
import AIServiceSchema from '../schemas/AIServiceSchema';
import AIVoiceSearchSchema from '../schemas/AIVoiceSearchSchema';
import BreadcrumbSchema from '../schemas/BreadcrumbSchema';

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
  
  return (
    <>
      <AIApplicationSchema />
      <AIArticleSchema />
      <AIServiceSchema />
      <AIVoiceSearchSchema 
        title="AI Vehicle Wrap Ideas Generator"
        description="Generate custom vehicle wrap ideas using artificial intelligence. Get professional design concepts for your business vehicle wraps instantly."
      />
      <BreadcrumbSchema items={breadcrumbItems} />
    </>
  );
};

export default AIWrapSchema;
