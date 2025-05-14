
import React from 'react';
import BusinessInfoForm from './BusinessInfoForm';
import ImageGenerator from './image-generator';
import { useAIWrap } from '@/contexts/AIWrapContext';
import { toast } from 'sonner';
import { useIsMobile } from '@/hooks/use-mobile';

const WrapIdeaGenerator = () => {
  const {
    business,
    setBusiness,
    description,
    setDescription,
    selectedVehicleType,
    setSelectedVehicleType,
    imagePrompt,
    setImagePrompt,
    isGeneratingImage,
    generatedImage,
    imageGenerationError,
    handleGenerateIdeas,
    isGenerating,
    handleGenerateImage,
    handleDownloadImage,
    showResults,
    generationProgress
  } = useAIWrap();

  const isMobile = useIsMobile();

  // Handle scrolling to results after generation
  const handleAfterGeneration = () => {
    if (showResults) {
      setTimeout(() => {
        const resultsSection = document.getElementById('results-section');
        if (resultsSection) {
          resultsSection.scrollIntoView({ 
            behavior: isMobile ? 'auto' : 'smooth',
            block: 'start'
          });
        } else {
          toast.error("Could not find results section to scroll to");
        }
      }, isMobile ? 300 : 500);
    }
  };

  return (
    <section id="generator-section" className="py-8 md:py-12 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-8">
          <div className="flex flex-col md:flex-row gap-6 mb-4 md:mb-8">
            <div className="md:w-1/2">
              <BusinessInfoForm
                business={business}
                setBusiness={setBusiness}
                description={description}
                setDescription={setDescription}
                selectedVehicleType={selectedVehicleType}
                setSelectedVehicleType={setSelectedVehicleType}
                onGenerateIdeas={() => {
                  handleGenerateIdeas();
                  handleAfterGeneration();
                }}
                isGenerating={isGenerating}
              />
            </div>
            
            <div className="md:w-1/2 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-6">
              <ImageGenerator
                imagePrompt={imagePrompt}
                setImagePrompt={setImagePrompt}
                onGenerateImage={() => {
                  handleGenerateImage();
                  // The scrolling is handled inside the context after the image is generated
                }}
                isGeneratingImage={isGeneratingImage}
                generatedImage={generatedImage}
                onDownloadImage={handleDownloadImage}
                errorMessage={imageGenerationError}
                progress={generationProgress}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WrapIdeaGenerator;
