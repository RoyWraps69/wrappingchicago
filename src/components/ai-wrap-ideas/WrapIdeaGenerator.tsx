
import React from 'react';
import BusinessInfoForm from './BusinessInfoForm';
import ImageGenerator from './ImageGenerator';

interface GeneratorProps {
  onGenerateIdeas: () => void;
  isGenerating: boolean;
  business: string;
  setBusiness: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  selectedVehicleType: string;
  setSelectedVehicleType: (value: string) => void;
  imagePrompt: string;
  setImagePrompt: (value: string) => void;
  onGenerateImage: () => void;
  isGeneratingImage: boolean;
  generatedImage: string | null;
  onDownloadImage: () => void;
  selectedModel: string;
  setSelectedModel: (value: string) => void;
  imageGenerationError?: string;
}

const WrapIdeaGenerator = (props: GeneratorProps) => {
  const {
    onGenerateIdeas,
    isGenerating,
    business,
    setBusiness,
    description,
    setDescription,
    selectedVehicleType,
    setSelectedVehicleType,
    imagePrompt,
    setImagePrompt,
    onGenerateImage,
    isGeneratingImage,
    generatedImage,
    onDownloadImage,
    selectedModel,
    setSelectedModel,
    imageGenerationError
  } = props;

  return (
    <section id="generator-section" className="py-12 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="md:w-1/2">
              <BusinessInfoForm
                business={business}
                setBusiness={setBusiness}
                description={description}
                setDescription={setDescription}
                selectedVehicleType={selectedVehicleType}
                setSelectedVehicleType={setSelectedVehicleType}
                onGenerateIdeas={onGenerateIdeas}
                isGenerating={isGenerating}
              />
            </div>
            
            <div className="md:w-1/2 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-6">
              <ImageGenerator
                imagePrompt={imagePrompt}
                setImagePrompt={setImagePrompt}
                onGenerateImage={onGenerateImage}
                isGeneratingImage={isGeneratingImage}
                generatedImage={generatedImage}
                onDownloadImage={onDownloadImage}
                selectedModel={selectedModel}
                setSelectedModel={setSelectedModel}
                errorMessage={imageGenerationError}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WrapIdeaGenerator;
