
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Sparkles, RefreshCw } from 'lucide-react';
import VehicleTypeSelector from './VehicleTypeSelector';

interface BusinessInfoFormProps {
  business: string;
  setBusiness: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  selectedVehicleType: string;
  setSelectedVehicleType: (value: string) => void;
  onGenerateIdeas: () => void;
  isGenerating: boolean;
}

const BusinessInfoForm = ({
  business,
  setBusiness,
  description,
  setDescription,
  selectedVehicleType,
  setSelectedVehicleType,
  onGenerateIdeas,
  isGenerating
}: BusinessInfoFormProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-black mb-6">AI Wrap Concept Generator</h2>
      <p className="text-gray-700 mb-6">
        Tell us about your business, and we'll generate wrap design concepts tailored to your needs. 
        This helps us understand your vision more clearly and creates a foundation for our design process.
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
      
      <VehicleTypeSelector 
        selectedVehicleType={selectedVehicleType}
        setSelectedVehicleType={setSelectedVehicleType}
      />
      
      <Button
        onClick={onGenerateIdeas}
        disabled={isGenerating}
        className="w-full bg-brand-gold hover:bg-yellow-600 text-brand-black py-3 h-auto"
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
  );
};

export default BusinessInfoForm;
