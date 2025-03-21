
import React from 'react';
import { ListChecks } from 'lucide-react';

const FleetWrapProcess: React.FC = () => {
  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <ListChecks className="w-6 h-6 text-brand-navy mr-2" />
        <h3 className="text-xl font-semibold text-brand-navy">Our Chicago Fleet Wrap Process</h3>
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
