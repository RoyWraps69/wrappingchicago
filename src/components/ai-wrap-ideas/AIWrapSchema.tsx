
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
      <AIVoiceSearchSchema />
    </>
  );
};

export default AIWrapSchema;
