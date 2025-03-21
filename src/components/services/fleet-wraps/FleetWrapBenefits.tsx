import React from 'react';
import { CheckCircle } from 'lucide-react';
const FleetWrapBenefits: React.FC = () => {
  return <div className="bg-white shadow p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <CheckCircle className="w-6 h-6 text-brand-navy mr-2" />
        <h3 className="text-xl font-semibold text-brand-navy">Benefits of Fleet Vehicle Wraps</h3>
      </div>
      
      <div className="mb-4">
        <img alt="Fleet wrapped service van showing marketing benefits - Chicago fleet wrap advertising" className="w-full h-48 object-cover rounded-md mb-3" src="/lovable-uploads/199b8977-07e4-488c-8e27-0ad83b25af33.jpg" />
      </div>
      
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>Create thousands of impressions daily throughout Chicago</li>
        <li>Lower cost-per-impression than traditional advertising</li>
        <li>Build brand consistency across your entire commercial fleet</li>
        <li>Protect your vehicles' original paint from Chicago's harsh weather</li>
        <li>Easy to update or remove without damage</li>
        <li>Typically lasts 5-7 years with proper care</li>
        <li>Transform ordinary vehicles into eye-catching mobile advertisements</li>
        <li>Reach potential customers in areas traditional advertising can't</li>
        <li>Professional appearance builds customer trust</li>
      </ul>
    </div>;
};
export default FleetWrapBenefits;