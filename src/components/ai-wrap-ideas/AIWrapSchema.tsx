
import React from 'react';
import AIApplicationSchema from '../schemas/AIApplicationSchema';
import AIArticleSchema from '../schemas/AIArticleSchema';

const AIWrapSchema = () => {
  return (
    <>
      <AIApplicationSchema />
      <AIArticleSchema />
    </>
  );
};

export default AIWrapSchema;
