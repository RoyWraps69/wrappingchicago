
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, RefreshCw, Download, Truck, Car, ThumbsUp, ImageIcon, LightbulbIcon, Clock, DollarSign, Zap } from 'lucide-react';
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
  
  // New state for direct image generation (DALL-E style)
  const [imagePrompt, setImagePrompt] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

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
  
  const handleGenerateImage = () => {
    if (!imagePrompt.trim()) {
      toast.error("Please enter a description for your wrap design");
      return;
    }
    
    setIsGeneratingImage(true);
    
    // Simulate API call to image generation service
    setTimeout(() => {
      // In a real app, this would call an image generation API like DALL-E
      // For demo, we'll just use a placeholder
      setGeneratedImage(`https://placehold.co/1024x512/0B3954/FFFFFF?text=${encodeURIComponent(imagePrompt)}`);
      setIsGeneratingImage(false);
      toast.success("Custom wrap design generated!");
    }, 3000);
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
          <section className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-24 relative h-[80vh] flex items-center">
            <div className="absolute inset-0 z-0 opacity-25">
              <img 
                src="/lovable-uploads/199c2a21-e0b0-4c29-972f-f32d72698382.png" 
                alt="Vehicle wrap background" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <Breadcrumbs />
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-4">
                  <Sparkles className="h-4 w-4 mr-2 text-brand-red" />
                  <span>AI-Powered Design Assistant</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Generate Vehicle Wrap Ideas</h1>
                <p className="text-xl text-white/80 mb-8">
                  Our AI design tool helps bridge the gap between your vision and reality, allowing you to explore concepts before committing to a design.
                </p>
                <Button
                  size="lg" 
                  className="bg-brand-red hover:bg-red-700 text-white py-6 px-8 rounded-full h-auto"
                  onClick={() => document.getElementById('generator-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Create Your Design Now
                </Button>
              </div>
            </div>
          </section>
          
          {/* New value proposition section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-navy mb-4">Why Use Our AI Wrap Designer?</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  The AI generator helps us understand your vision with precision, eliminating the frustration of miscommunications and design revisions.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                  <div className="bg-brand-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-brand-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Visualize Your Ideas</h3>
                  <p className="text-gray-700">
                    See your concepts come to life before committing to a design, helping you refine your vision with confidence.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                  <div className="bg-brand-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-brand-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Save Time</h3>
                  <p className="text-gray-700">
                    Reduce back-and-forth revisions and shorten your project timeline by starting with clear visual concepts.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                  <div className="bg-brand-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-brand-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Reduce Costs</h3>
                  <p className="text-gray-700">
                    Minimize expensive design changes by exploring multiple concepts before production begins.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                  <div className="bg-brand-navy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LightbulbIcon className="h-8 w-8 text-brand-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Spark Inspiration</h3>
                  <p className="text-gray-700">
                    Discover creative directions you might not have considered, expanding your branding possibilities.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 bg-brand-navy/5 p-8 rounded-xl">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                    <h3 className="text-2xl font-bold text-brand-navy mb-4">Bridging the Communication Gap</h3>
                    <p className="text-gray-700 mb-4">
                      One of the biggest challenges in vehicle wrap design is translating your vision into reality. Our AI tool bridges that gap by creating visual concepts based on your descriptions.
                    </p>
                    <p className="text-gray-700">
                      By generating images that reflect your ideas, we can better understand your preferences for style, color, layout, and overall aesthetic. This helps us create a final design that truly represents your brand and meets your expectations from the start.
                    </p>
                  </div>
                  <div className="md:w-1/3">
                    <img 
                      src="/lovable-uploads/efc6c586-8651-43ad-811a-b896a91a1b69.png" 
                      alt="Vehicle wrap design process" 
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
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
                  
                  <div className="md:w-1/2 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-6">
                    <h2 className="text-2xl font-bold text-brand-navy mb-6">Custom Image Generator</h2>
                    <p className="text-gray-700 mb-6">
                      Have a specific vision in mind? Describe the exact wrap design you want, and our AI will create a custom visualization. This helps us understand precisely what you're looking for.
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
                      onClick={handleGenerateImage}
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
                            onClick={() => {
                              // In a real app, this would download the image
                              toast.success("Image downloaded successfully!");
                            }}
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
              <h2 className="text-2xl font-bold text-brand-navy mb-4">From Concept to Completion: How Our Process Works</h2>
              <p className="text-gray-700 mb-8">
                Our AI-powered design assistant is just the first step in creating your perfect vehicle wrap. Here's how we use this technology to deliver exceptional results.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "1. AI-Powered Exploration",
                    description: "Share your vision and let our AI create visual concepts that help us understand exactly what you're looking for."
                  },
                  {
                    title: "2. Professional Refinement",
                    description: "Our expert designers take your favorite AI concepts and refine them with industry expertise and brand strategy."
                  },
                  {
                    title: "3. Production & Installation",
                    description: "We transform the approved design into a high-quality vehicle wrap installed by certified technicians."
                  }
                ].map((step, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-brand-navy mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-brand-light rounded-lg">
                <p className="text-lg font-medium text-brand-navy">
                  "The AI design tool helped us communicate our vision much more clearly. Instead of struggling to explain what we wanted, we could show the design team exactly what we had in mind. The final wrap exceeded our expectations!"
                </p>
                <p className="mt-4 font-medium">— Chicago Business Owner</p>
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
