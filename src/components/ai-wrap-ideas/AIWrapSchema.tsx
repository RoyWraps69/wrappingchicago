
import React from 'react';
import AIApplicationSchema from '../schemas/AIApplicationSchema';
import AIArticleSchema from '../schemas/AIArticleSchema';
import AIServiceSchema from '../schemas/AIServiceSchema';
import AIVoiceSearchSchema from '../schemas/AIVoiceSearchSchema';

const AIWrapSchema = () => {
  return (
    <>
      <AIApplicationSchema />
      <AIArticleSchema />
      <AIServiceSchema />
      <AIVoiceSearchSchema 
        title="AI Vehicle Wrap Ideas Generator"
        description="Generate custom vehicle wrap ideas using artificial intelligence. Get professional design concepts for your business vehicle wraps instantly."
      />
    </>
  );
};

export default AIWrapSchema;
