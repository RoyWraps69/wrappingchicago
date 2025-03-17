
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, RefreshCw, Download, Truck, Car, ThumbsUp } from 'lucide-react';
import { toast } from 'sonner';

const vehicleTypes = [
  { id: 'car', name: 'Car', icon: <Car className="w-5 h-5" /> },
  { id: 'truck', name: 'Truck', icon: <Truck className="w-5 h-5" /> },
  { id: 'van', name: 'Van', icon: <Truck className="w-5 h-5" /> },
  { id: 'fleet', name: 'Fleet', icon: <Truck className="w-5 h-5 mr-1" /> },
];

const WrapIdeaCard = ({ idea, onLike }: { idea: WrapIdea; onLike: () => void }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl">
    <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-md bg-gray-100">
      <img 
        src={idea.imageUrl || "https://placehold.co/600x400/0B3954/FFFFFF?text=AI+Concept"}
        alt={idea.title}
        className="object-cover w-full h-full"
      />
    </div>
    <h3 className="text-xl font-bold text-brand-navy mb-2">{idea.title}</h3>
    <p className="text-gray-700 mb-4">{idea.description}</p>
    <div className="flex justify-between items-center">
      <Button 
        variant="outline" 
        size="sm"
        className="text-gray-600"
        onClick={onLike}
      >
        <ThumbsUp className="w-4 h-4 mr-2" />
        Like this idea
      </Button>
      
      <Button
        variant="ghost" 
        size="sm"
        className="text-gray-600"
        onClick={() => {
          // In a real app, this would download the image
          toast.success("Concept downloaded successfully!");
        }}
      >
        <Download className="w-4 h-4 mr-2" />
        Save
      </Button>
    </div>
  </div>
);

interface WrapIdea {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  vehicleType: string;
}

// Example AI-generated ideas - in a real app this would come from an API
const exampleIdeas: WrapIdea[] = [
  {
    id: '1',
    title: 'Gradient Splash for Food Truck',
    description: 'A vibrant gradient design with splashes of color that attract attention, perfect for food trucks wanting to stand out.',
    imageUrl: 'https://placehold.co/600x400/ff5e7d/FFFFFF?text=Food+Truck+Design',
    vehicleType: 'truck'
  },
  {
    id: '2',
    title: 'Minimalist Corporate Fleet',
    description: 'Clean lines and subtle branding that gives a professional appearance for corporate fleets.',
    imageUrl: 'https://placehold.co/600x400/0B3954/FFFFFF?text=Corporate+Fleet',
    vehicleType: 'fleet'
  },
  {
    id: '3',
    title: 'Bold Contractor Van',
    description: 'Strong typography and impactful imagery that clearly communicates your services to potential customers.',
    imageUrl: 'https://placehold.co/600x400/ffc107/000000?text=Contractor+Van',
    vehicleType: 'van'
  },
];

const AIWrapIdeas = () => {
  const [business, setBusiness] = useState('');
  const [description, setDescription] = useState('');
  const [selectedVehicleType, setSelectedVehicleType] = useState('car');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState<WrapIdea[]>(exampleIdeas);

  const handleGenerateIdeas = () => {
    if (!business.trim()) {
      toast.error("Please enter your business name");
      return;
    }

    setIsGenerating(true);
    
    // Simulate API call to AI service
    setTimeout(() => {
      // In a real app, this would call an AI service
      // For demo, we'll just show the example ideas
      setGeneratedIdeas([...exampleIdeas]);
      setIsGenerating(false);
      toast.success("New wrap concepts generated!");
    }, 2000);
  };

  const handleLikeIdea = (ideaId: string) => {
    toast.success("Thanks for your feedback! We'll use this to improve future suggestions.");
  };

  return (
    <>
      <Helmet>
        <title>AI Wrap Design Ideas | Chicago Fleet Wraps</title>
        <meta 
          name="description" 
          content="Generate custom vehicle wrap design ideas using our AI-powered tool. Get inspiration for your business vehicles." 
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <section className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-16">
            <div className="container mx-auto px-4 md:px-6">
              <Breadcrumbs />
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-4">
                  <Sparkles className="h-4 w-4 mr-2 text-brand-red" />
                  <span>AI-Powered Design Assistant</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Generate Vehicle Wrap Ideas</h1>
                <p className="text-xl text-white/80 mb-8">
                  Get AI-generated design concepts for your business vehicles that will make you stand out from the competition.
                </p>
              </div>
            </div>
          </section>
          
          <section className="py-12 px-4 md:px-6 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Tell us about your business</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
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
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Vehicle Type
                    </label>
                    <div className="grid grid-cols-2 gap-3">
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
                    
                    <div className="mt-8">
                      <Button
                        onClick={handleGenerateIdeas}
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
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Your AI-Generated Wrap Ideas</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {generatedIdeas.map((idea) => (
                    <WrapIdeaCard 
                      key={idea.id} 
                      idea={idea} 
                      onLike={() => handleLikeIdea(idea.id)} 
                    />
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-gray-500 mb-4">Not seeing what you like? Try adjusting your description or generating new ideas.</p>
                  <Button
                    variant="outline"
                    className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                    onClick={handleGenerateIdeas}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Generate More Ideas
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">How Our AI Design Assistant Works</h2>
              <p className="text-gray-700 mb-8">
                Our AI-powered design assistant analyzes thousands of successful vehicle wraps and your specific business 
                needs to generate custom design concepts tailored to your brand.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "1. Tell Us About Your Business",
                    description: "Share your business type, target audience, and what message you want to communicate."
                  },
                  {
                    title: "2. AI Generates Concepts",
                    description: "Our AI creates custom design concepts based on successful wrap designs for your industry."
                  },
                  {
                    title: "3. Refine & Implement",
                    description: "Like your favorite concepts and our designers will refine them into your perfect wrap."
                  }
                ].map((step, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-brand-navy mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <CallToAction city="Chicago" />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AIWrapIdeas;
