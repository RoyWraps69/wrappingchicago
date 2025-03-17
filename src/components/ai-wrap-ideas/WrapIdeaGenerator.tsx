
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, RefreshCw, ImageIcon, Truck, Car, Download } from 'lucide-react';
import { toast } from 'sonner';

interface VehicleType {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const vehicleTypes: VehicleType[] = [
  { id: 'car', name: 'Car', icon: <Car className="w-5 h-5" /> },
  { id: 'truck', name: 'Truck', icon: <Truck className="w-5 h-5" /> },
  { id: 'van', name: 'Van', icon: <Truck className="w-5 h-5" /> },
  { id: 'fleet', name: 'Fleet', icon: <Truck className="w-5 h-5 mr-1" /> },
];

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
}

const WrapIdeaGenerator = ({
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
  onDownloadImage
}: GeneratorProps) => {
  return (
    <section id="generator-section" className="py-12 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">AI Wrap Concept Generator</h2>
              <p className="text-gray-700 mb-6">
                Tell us about your business, and we'll generate wrap design concepts tailored to your needs. This helps us understand your vision more clearly and creates a foundation for our design process.
              </p>
              
              <div className="mb-4">
                <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
                  Business Name
                </label>
                <Input
                  id="business"
                  placeholder="Enter your business name"
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Tell us about your business (services, brand feel, target audience)
                </label>
                <Textarea
                  id="description"
                  placeholder="Describe your business, services, and what you want to communicate"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  className="w-full"
                />
              </div>
              
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Vehicle Type
              </label>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {vehicleTypes.map((type) => (
                  <Button
                    key={type.id}
                    type="button"
                    variant={selectedVehicleType === type.id ? "default" : "outline"}
                    className={`h-auto py-3 px-4 justify-start ${
                      selectedVehicleType === type.id 
                        ? "bg-brand-navy text-white" 
                        : "text-gray-700"
                    }`}
                    onClick={() => setSelectedVehicleType(type.id)}
                  >
                    {type.icon}
                    <span className="ml-2">{type.name}</span>
                  </Button>
                ))}
              </div>
              
              <Button
                onClick={onGenerateIdeas}
                disabled={isGenerating}
                className="w-full bg-brand-red hover:bg-red-700 text-white py-3 h-auto"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Generating Ideas...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Wrap Ideas
                  </>
                )}
              </Button>
            </div>
            
            <div className="md:w-1/2 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-6">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Custom Image Generator</h2>
              <p className="text-gray-700 mb-6">
                Have a specific vision in mind? Describe the exact wrap design you want, and our AI will create a custom visualization using DALL-E. This helps us understand precisely what you're looking for.
              </p>
              
              <div className="mb-4">
                <label htmlFor="imagePrompt" className="block text-sm font-medium text-gray-700 mb-1">
                  Describe Your Ideal Wrap Design
                </label>
                <Textarea
                  id="imagePrompt"
                  placeholder="Example: A sleek black van with green gradient stripes and modern typography for a landscaping business"
                  value={imagePrompt}
                  onChange={(e) => setImagePrompt(e.target.value)}
                  rows={5}
                  className="w-full"
                />
              </div>
              
              <Button
                onClick={onGenerateImage}
                disabled={isGeneratingImage}
                className="w-full bg-brand-navy hover:bg-blue-800 text-white py-3 h-auto mb-6"
              >
                {isGeneratingImage ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Creating Your Design...
                  </>
                ) : (
                  <>
                    <ImageIcon className="mr-2 h-4 w-4" />
                    Generate Custom Design
                  </>
                )}
              </Button>
              
              {generatedImage && (
                <div className="mt-4">
                  <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={generatedImage} 
                      alt="Generated wrap design" 
                      className="w-full h-auto"
                    />
                    <Button
                      variant="secondary"
                      size="sm"
                      className="absolute bottom-4 right-4 bg-white/80 hover:bg-white"
                      onClick={onDownloadImage}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WrapIdeaGenerator;
