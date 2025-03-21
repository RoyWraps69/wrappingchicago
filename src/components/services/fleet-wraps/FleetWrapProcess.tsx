
import React from 'react';
import { ListChecks } from 'lucide-react';

const FleetWrapProcess: React.FC = () => {
  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <ListChecks className="w-6 h-6 text-brand-navy mr-2" />
        <h3 className="text-xl font-semibold text-brand-navy">Our Chicago Fleet Wrap Process</h3>
      </div>
      
      <div className="mb-4">
        <img 
          src="/lovable-uploads/9bb3d94e-589d-4daf-b35e-e19e80610439.png" 
          alt="Vehicle wrap installation process - Professional fleet wrapping in Chicago" 
          className="w-full h-48 object-cover rounded-md mb-3"
        />
      </div>
      
      <ol className="list-decimal pl-5 space-y-2 text-gray-700">
        <li>Initial consultation to understand your business needs</li>
        <li>Professional design tailored to your brand and message</li>
        <li>Vehicle measurement and custom template creation</li>
        <li>High-quality printing on premium 3M vinyl materials</li>
        <li>Expert installation by our experienced Chicago-based technicians</li>
        <li>Thorough inspection and quality assurance</li>
        <li>Detailed care instructions to maximize wrap lifespan</li>
        <li>Optional maintenance programs to keep your fleet looking fresh</li>
        <li>Full support throughout the wrap's lifetime</li>
      </ol>
    </div>
  );
};

export default FleetWrapProcess;
