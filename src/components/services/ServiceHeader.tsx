import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare } from 'lucide-react';

interface ServiceHeaderProps {
  title: string;
  showImages?: boolean;
  highlightAI?: boolean;
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({ 
  title, 
  showImages = false,
  highlightAI = false
}) => {
  // Determine if this is a specific vehicle type wrap service
  const isVehicleSpecificService = 
    title.toLowerCase().includes('car') || 
    title.toLowerCase().includes('truck') || 
    title.toLowerCase().includes('van') || 
    title.toLowerCase().includes('fleet');
  
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-brand-black mb-6">
        {title}
        {highlightAI && (
          <span className="ml-2 text-sm bg-brand-gold text-brand-black px-3 py-1 rounded-full uppercase">
            AI-Powered
          </span>
        )}
      </h1>
      
      {/* Quick Contact Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <Button
          asChild
          className="bg-brand-gold hover:bg-yellow-600 text-brand-black"
        >
          <Link to="/contact" className="inline-flex items-center">
            <MessageSquare className="mr-2 h-4 w-4" />
            Request a Free Quote
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-brand-black text-brand-black hover:bg-brand-black hover:text-white"
        >
          <a href="tel:3125971286" className="inline-flex items-center">
            <Phone className="mr-2 h-4 w-4" />
            Call (312) 597-1286
          </a>
        </Button>
      </div>
      
      <p className="text-lg mb-6">
        {highlightAI ? (
          <>
            At Wrapping Chicago, we combine <strong>artificial intelligence</strong> with expert craftsmanship to provide 
            premium quality vehicle wrapping services throughout the greater Chicago area. Our professional team 
            uses only the highest quality 3M vinyl materials and <strong>AI design technology</strong> to ensure 
            your car wraps, truck wraps, van wraps, and fleet graphics look great and last.
          </>
        ) : isVehicleSpecificService ? (
          <>
            At Wrapping Chicago, we specialize in premium quality {title.toLowerCase()} throughout the greater Chicago area. 
            Our team of experienced vehicle wrap professionals uses only the highest quality 3M vinyl materials to ensure 
            your {title.toLowerCase()} look great and last for years. With over 16,000 vehicle wraps completed in our 20 years of 
            business, we've wrapped hundreds of vehicles throughout Chicago and surrounding suburbs with industry-leading results.
          </>
        ) : (
          <>
            At Wrapping Chicago, we provide premium quality vehicle wrapping services
            throughout the greater Chicago area. Our team of experienced professionals
            specializes in car wraps, truck wraps, van wraps, and fleet graphics using only the highest quality 
            3M vinyl materials to ensure your vehicle wrap looks great and lasts. With over 16,000 vehicle wraps 
            completed in our 20 years of business, we've established ourselves as Chicago's trusted vehicle wrap provider.
          </>
        )}
      </p>
      
      <div className="bg-brand-light p-5 rounded-lg border border-brand-black/10 mb-6">
        <h2 className="text-xl font-semibold text-brand-black mb-3">Why Choose Wrapping Chicago For Your Vehicle Wrap Needs?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 list-disc pl-5">
          <li className="text-gray-700">Over 16,000 vehicle wraps completed</li>
          <li className="text-gray-700">20 years of professional experience</li>
          <li className="text-gray-700">Premium 3M vinyl materials for durability</li>
          <li className="text-gray-700">Expert design team for custom graphics</li>
          <li className="text-gray-700">Comprehensive vehicle wrap warranty</li>
          <li className="text-gray-700">Fast turnaround times for installations</li>
          <li className="text-gray-700">Competitive pricing for all budgets</li>
          <li className="text-gray-700">Serving all of Chicago and suburbs</li>
        </ul>
      </div>
      
      {showImages && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="/lovable-uploads/efdbc4bf-1f04-42bb-a904-f52dae7bef6c.png" 
              alt="Professional fleet wrap installation on commercial van in Chicago - 3M vehicle wraps" 
              className="w-full h-48 object-cover"
            />
            <div className="p-3 bg-brand-light">
              <p className="text-sm font-medium text-brand-navy">Fleet Vehicle Wraps Chicago</p>
              <p className="text-xs text-gray-600">Transform your business fleet with professional vehicle wraps</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="/lovable-uploads/f564c255-9ca3-4457-bef5-c940a4a1557a.png" 
              alt="Premium color change car wrap in vibrant blue - custom vehicle wrapping in Chicago" 
              className="w-full h-48 object-cover"
            />
            <div className="p-3 bg-brand-light">
              <p className="text-sm font-medium text-brand-navy">Color Change Wraps Chicago</p>
              <p className="text-xs text-gray-600">Give your vehicle a new look with premium vinyl wraps</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="/lovable-uploads/fb7a4b97-4b57-4b2e-8f81-42a1098270df.png" 
              alt="Commercial graphics and partial vehicle wrap for business advertising in Chicago" 
              className="w-full h-48 object-cover"
            />
            <div className="p-3 bg-brand-light">
              <p className="text-sm font-medium text-brand-navy">Commercial Graphics Chicago</p>
              <p className="text-xs text-gray-600">Increase business visibility with eye-catching vehicle graphics</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-8">
        <h2 className="text-lg font-semibold text-brand-navy mb-3">Chicago's Premium Vehicle Wrap Services:</h2>
        <div className="flex flex-wrap gap-2">
          <Link to="/car-wraps-chicago" className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded hover:bg-brand-navy/20">Car Wraps Chicago</Link>
          <Link to="/truck-wraps-chicago" className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded hover:bg-brand-navy/20">Truck Wraps Chicago</Link>
          <Link to="/van-wraps-chicago" className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded hover:bg-brand-navy/20">Van Wraps Chicago</Link>
          <Link to="/fleet-wraps-chicago" className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded hover:bg-brand-navy/20">Fleet Wraps Chicago</Link>
          <Link to="/commercial-vehicle-wraps-chicago" className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded hover:bg-brand-navy/20">Commercial Vehicle Wraps</Link>
          <Link to="/custom-vehicle-wraps-chicago" className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded hover:bg-brand-navy/20">Custom Vehicle Wraps</Link>
          <Link to="/vehicle-graphics-chicago" className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded hover:bg-brand-navy/20">Vehicle Graphics Chicago</Link>
          <Link to="/vinyl-wraps-chicago" className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded hover:bg-brand-navy/20">Vinyl Vehicle Wraps</Link>
          <Link to="/best-vehicle-wraps-chicago" className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded hover:bg-brand-navy/20">Premium 3M Installation</Link>
          <Link to="/partial-vehicle-wraps-chicago" className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded hover:bg-brand-navy/20">Partial Vehicle Wraps</Link>
          <Link to="/color-change-wraps-chicago" className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded hover:bg-brand-navy/20">Color Change Wraps</Link>
          <Link to="/vehicle-wrap-installation-chicago" className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded hover:bg-brand-navy/20">Professional Installation</Link>
          <Link to="/vehicle-wrap-design-chicago" className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded hover:bg-brand-navy/20">Vehicle Wrap Design</Link>
          <Link to="/business-vehicle-wraps-chicago" className="bg-brand-navy/10 text-brand-navy text-xs font-medium px-2.5 py-1.5 rounded hover:bg-brand-navy/20">Business Vehicle Wraps</Link>
        </div>
      </div>
      
      <div className="prose max-w-none mb-8">
        <p>
          Whether you're looking for a full vehicle wrap, partial wrap, color change wrap, or commercial graphics for your 
          business vehicles, Wrapping Chicago has the expertise and experience to deliver outstanding results. Our vehicle 
          wraps not only transform the appearance of your car, truck, or van, but they also protect the original paint and 
          provide a powerful advertising platform for businesses throughout Chicago.
        </p>
        <p>
          With our state-of-the-art printing technology and premium 3M vinyl materials, we create vivid, eye-catching vehicle 
          wraps that stand up to Chicago's harsh weather conditions. From design to installation, our team of professionals 
          will guide you through every step of the process to ensure your complete satisfaction with the final product.
        </p>
      </div>
    </div>
  );
};

export default ServiceHeader;
