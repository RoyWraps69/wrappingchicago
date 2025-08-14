import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone } from 'lucide-react';

interface GenericServiceHeroProps {
  serviceType?: string;
}

const GenericServiceHero: React.FC<GenericServiceHeroProps> = ({ serviceType }) => {
  const getHeroContent = () => {
    switch (serviceType) {
      case 'car':
        return {
          title: 'Premium Car Wraps',
          subtitle: 'Transform your car into a head-turning masterpiece',
          image: '/lovable-uploads/ca1d6cca-00da-4bd7-8d01-7ffc62508a02.png'
        };
      case 'truck':
        return {
          title: 'Professional Truck Wraps',
          subtitle: 'Turn your truck into a mobile billboard that drives business',
          image: '/lovable-uploads/ea32c99e-7c6e-43f1-b122-f3c64fb9fdf2.png'
        };
      case 'van':
        return {
          title: 'Expert Van Wraps',
          subtitle: 'Maximize your van\'s marketing potential with professional wraps',
          image: '/lovable-uploads/51269403-3cfa-4a99-ae4b-cfab9a74115b.png'
        };
      case 'luxury':
        return {
          title: 'Luxury & Exotic Vehicle Wraps',
          subtitle: 'Premium wraps for premium vehicles - perfection guaranteed',
          image: 'https://images.unsplash.com/photo-1493462725285-20ede53a8133?auto=format&fit=crop&w=2000&q=80'
        };
      case 'designer':
        return {
          title: 'Designer Custom Wraps',
          subtitle: 'Unique, artistic wraps that make your vehicle a work of art',
          image: '/lovable-uploads/a63bad58-2435-4c95-a1d1-77e8f66e8085.png'
        };
      default:
        return {
          title: 'Professional Vehicle Wraps',
          subtitle: 'Transform any vehicle with our expert wrap services',
          image: '/lovable-uploads/905af9f6-be4c-4556-b437-8aab136a5307.png'
        };
    }
  };

  const { title, subtitle, image } = getHeroContent();

  return (
    <div className="relative bg-gradient-to-br from-brand-navy via-brand-blue to-brand-red overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={image}
          alt={`${title} showcase`}
          className="w-full h-full object-cover opacity-25"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {title.split(' ').map((word, index) => 
              index === title.split(' ').length - 1 ? (
                <span key={index} className="text-brand-yellow">{word}</span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </h1>
          <p className="text-xl text-white/90 mb-4">
            {subtitle}
          </p>
          <p className="text-lg text-white/80 mb-8">
            ✓ Expert Installation ✓ Premium Materials ✓ Chicago's #1 Choice
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-brand-red hover:bg-red-700 text-white">
              <a href="tel:3125971286" className="inline-flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call (312) 597-1286
              </a>
            </Button>
            <Button asChild size="lg" variant="outlineWhite">
              <Link to="/contact" className="inline-flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericServiceHero;