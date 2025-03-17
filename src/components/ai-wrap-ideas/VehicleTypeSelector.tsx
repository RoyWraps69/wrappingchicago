
import React from 'react';
import { Button } from '@/components/ui/button';
import { Car, Truck } from 'lucide-react';

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

interface VehicleTypeSelectorProps {
  selectedVehicleType: string;
  setSelectedVehicleType: (value: string) => void;
}

const VehicleTypeSelector = ({ 
  selectedVehicleType, 
  setSelectedVehicleType 
}: VehicleTypeSelectorProps) => {
  return (
    <div>
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
    </div>
  );
};

export default VehicleTypeSelector;
