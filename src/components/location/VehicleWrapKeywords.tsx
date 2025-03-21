
import React from 'react';
import { City } from '@/data/cities';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, ExternalLink } from 'lucide-react';

interface VehicleWrapKeywordsProps {
  city: City;
}

const VehicleWrapKeywords: React.FC<VehicleWrapKeywordsProps> = ({ city }) => {
  return (
    <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-brand-navy mb-4">
        Comprehensive Vehicle Wrap Services in {city.name}, Illinois
      </h3>
      
      <p className="text-gray-700 mb-4">
        Wrapping Chicago provides comprehensive vehicle wrapping services in {city.name} and throughout {city.county} County. 
        With over 16,000 vehicle wraps completed in our 20 years of business, we're the trusted choice for premium vehicle wraps
        in the Chicago area. Our vehicle wraps not only transform the appearance of your vehicles but also protect the original 
        paint while creating a powerful mobile advertising platform for your business.
      </p>
      
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
        <h4 className="font-semibold text-brand-navy mb-2">Why {city.name} Businesses Choose Us for Vehicle Wraps:</h4>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Two decades of vehicle wrap experience serving the {city.name} area</li>
          <li>Over 16,000 successful vehicle wrap installations completed</li>
          <li>Premium 3M vinyl materials for outstanding durability and appearance</li>
          <li>Expert designers who understand effective mobile advertising</li>
          <li>Streamlined process from design to installation</li>
          <li>Comprehensive warranty on all vehicle wrapping services</li>
          <li>Competitive pricing with flexible options for any budget</li>
        </ul>
      </div>
      
      <Separator className="my-4" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-brand-navy mb-2">Car Wrap Services in {city.name}:</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Full car wraps for personal vehicles</li>
            <li>Custom design car wraps</li>
            <li>Car color change wraps</li>
            <li>Promotional car wraps for businesses</li>
            <li>Car graphic application</li>
            <li>Luxury car wrapping specialists</li>
            <li>Race car and sports car wraps</li>
            <li>Matte finish car wraps</li>
            <li>Gloss and satin finish car wraps</li>
            <li>Metallic and chrome car wraps</li>
            <li>Partial car wraps and racing stripes</li>
            <li>Car window graphics and perforated film</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-brand-navy mb-2">Commercial Vehicle Wraps in {city.name}:</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Fleet vehicle wraps for businesses</li>
            <li>Truck wraps for visibility and branding</li>
            <li>Box truck graphics and wraps</li>
            <li>Pickup truck lettering and graphics</li>
            <li>Commercial van wraps</li>
            <li>Work vehicle identification wraps</li>
            <li>Service vehicle branding</li>
            <li>Food truck wraps and graphics</li>
            <li>Delivery van and truck wraps</li>
            <li>Construction vehicle identification</li>
            <li>Trailer wraps and graphics</li>
            <li>Mobile billboard truck wraps</li>
          </ul>
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-brand-navy mb-2">Specialty Vehicle Wrap Services in {city.name}:</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Matte finish vehicle wraps</li>
            <li>Gloss vehicle wraps</li>
            <li>Satin finish wraps</li>
            <li>Chrome and metallic wraps</li>
            <li>Carbon fiber look wraps</li>
            <li>Textured vinyl applications</li>
            <li>Color shifting wraps</li>
            <li>Reflective and high-visibility wraps</li>
            <li>Custom printed graphic wraps</li>
            <li>Specialty vinyl for unique appearances</li>
            <li>Paint protection film installation</li>
            <li>Ceramic coating for wraps</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-brand-navy mb-2">Additional Vehicle Graphics Services in {city.name}:</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Vehicle lettering and decals</li>
            <li>Partial vehicle wraps</li>
            <li>Vinyl graphics installation</li>
            <li>Window perforated film</li>
            <li>Paint protection film</li>
            <li>Vehicle wrap removal services</li>
            <li>Logo application on vehicles</li>
            <li>Magnetic vehicle signage</li>
            <li>DOT number application</li>
            <li>QR code integration in designs</li>
            <li>Contour cut graphics</li>
            <li>Vehicle wrap repair and touch-ups</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-brand-navy/5 rounded-lg">
        <h4 className="font-semibold text-brand-navy mb-2">Vehicle Wrap ROI for {city.name} Businesses:</h4>
        <p className="text-gray-700 mb-3">
          Vehicle wraps offer an exceptional return on investment for {city.name} businesses, with a cost-per-impression 
          significantly lower than traditional advertising methods:
        </p>
        <ul className="list-disc pl-5 text-gray-700 mb-3">
          <li>A single wrapped vehicle can generate 30,000-70,000 impressions daily in busy {city.name} areas</li>
          <li>The average cost per thousand impressions (CPM) for vehicle wraps is just $0.04</li>
          <li>Vehicle wraps typically last 5-7 years, creating millions of impressions over their lifespan</li>
          <li>97% of survey respondents recall ads seen on vehicles</li>
          <li>96% say vehicle graphics create more impact than billboards</li>
        </ul>
        <p className="text-gray-700">
          For {city.name} businesses looking to maximize their advertising budget, vehicle wraps provide continuous 
          24/7 marketing with a one-time investment rather than ongoing monthly costs.
        </p>
      </div>
      
      <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
        <Button asChild className="bg-brand-red hover:bg-red-700">
          <Link to="/contact" className="inline-flex items-center">
            Request a Free Quote
          </Link>
        </Button>
        <Button asChild variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
          <a href="tel:3125971286" className="inline-flex items-center">
            <Phone className="mr-2 h-4 w-4" />
            Call (312) 597-1286
          </a>
        </Button>
      </div>
      
      <p className="text-gray-700 mt-6">
        All our vehicle wraps in {city.name} are installed by experienced professionals using premium 3M materials, 
        with a comprehensive warranty. We serve both individual vehicle owners and businesses throughout 
        {city.name} and the greater Chicago area, providing custom solutions that meet your specific needs and budget.
      </p>
      
      {city.nearbyAreas && city.nearbyAreas.length > 0 && (
        <div className="mt-4 text-sm text-gray-500">
          <p className="mb-1">
            Serving <strong>{city.name}</strong> and nearby areas including:
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {city.nearbyAreas.map((area, index) => (
              <span key={index} className="inline-flex items-center">
                <ExternalLink className="h-3 w-3 mr-1" /> {area}
                {index < (city.nearbyAreas?.length || 0) - 1 ? "," : ""}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleWrapKeywords;
