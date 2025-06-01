
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, Car, Truck, Palette, DollarSign } from 'lucide-react';

const VehicleWrapCalculator: React.FC = () => {
  const [vehicleType, setVehicleType] = useState('');
  const [wrapType, setWrapType] = useState('');
  const [designComplexity, setDesignComplexity] = useState('');
  const [urgency, setUrgency] = useState('');
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const vehicleBasePrices = {
    'car': 2500,
    'truck': 4000,
    'van': 3500,
    'suv': 3000,
    'motorcycle': 1500,
    'trailer': 3000
  };

  const wrapTypeMultipliers = {
    'full': 1.0,
    'partial': 0.6,
    'color-change': 1.2,
    'commercial': 1.1,
    'specialty': 1.5
  };

  const designMultipliers = {
    'simple': 1.0,
    'moderate': 1.3,
    'complex': 1.6,
    'premium': 2.0
  };

  const urgencyMultipliers = {
    'standard': 1.0,
    'rush': 1.3,
    'urgent': 1.5
  };

  const calculateCost = () => {
    if (!vehicleType || !wrapType || !designComplexity || !urgency) return;

    const basePrice = vehicleBasePrices[vehicleType as keyof typeof vehicleBasePrices] || 2500;
    const wrapMultiplier = wrapTypeMultipliers[wrapType as keyof typeof wrapTypeMultipliers] || 1.0;
    const designMultiplier = designMultipliers[designComplexity as keyof typeof designMultipliers] || 1.0;
    const urgencyMultiplier = urgencyMultipliers[urgency as keyof typeof urgencyMultipliers] || 1.0;

    const total = basePrice * wrapMultiplier * designMultiplier * urgencyMultiplier;
    setEstimatedCost(Math.round(total));
  };

  useEffect(() => {
    calculateCost();
  }, [vehicleType, wrapType, designComplexity, urgency]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Card className="w-full max-w-2xl mx-auto bg-white border-2 border-black shadow-xl">
          <CardHeader className="text-center bg-white border-b-2 border-black">
            <CardTitle className="flex items-center justify-center gap-2 text-black">
              <Calculator className="h-6 w-6 text-brand-red" />
              <span className="text-2xl font-bold text-black">Vehicle Wrap Cost Calculator</span>
            </CardTitle>
            <CardDescription className="text-black font-medium text-lg">
              Get an instant estimate for your vehicle wrap project
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-8 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="vehicle-type" className="text-black font-bold text-lg">Vehicle Type</Label>
                <Select value={vehicleType} onValueChange={setVehicleType}>
                  <SelectTrigger className="bg-white border-2 border-black text-black font-medium h-12">
                    <SelectValue placeholder="Select vehicle type" className="text-black" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-2 border-black">
                    <SelectItem value="car" className="text-black font-medium hover:bg-gray-100">Car/Sedan</SelectItem>
                    <SelectItem value="truck" className="text-black font-medium hover:bg-gray-100">Truck</SelectItem>
                    <SelectItem value="van" className="text-black font-medium hover:bg-gray-100">Van</SelectItem>
                    <SelectItem value="suv" className="text-black font-medium hover:bg-gray-100">SUV</SelectItem>
                    <SelectItem value="motorcycle" className="text-black font-medium hover:bg-gray-100">Motorcycle</SelectItem>
                    <SelectItem value="trailer" className="text-black font-medium hover:bg-gray-100">Trailer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="wrap-type" className="text-black font-bold text-lg">Wrap Type</Label>
                <Select value={wrapType} onValueChange={setWrapType}>
                  <SelectTrigger className="bg-white border-2 border-black text-black font-medium h-12">
                    <SelectValue placeholder="Select wrap type" className="text-black" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-2 border-black">
                    <SelectItem value="full" className="text-black font-medium hover:bg-gray-100">Full Wrap</SelectItem>
                    <SelectItem value="partial" className="text-black font-medium hover:bg-gray-100">Partial Wrap</SelectItem>
                    <SelectItem value="color-change" className="text-black font-medium hover:bg-gray-100">Color Change</SelectItem>
                    <SelectItem value="commercial" className="text-black font-medium hover:bg-gray-100">Commercial Graphics</SelectItem>
                    <SelectItem value="specialty" className="text-black font-medium hover:bg-gray-100">Specialty Finish</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="design-complexity" className="text-black font-bold text-lg">Design Complexity</Label>
                <Select value={designComplexity} onValueChange={setDesignComplexity}>
                  <SelectTrigger className="bg-white border-2 border-black text-black font-medium h-12">
                    <SelectValue placeholder="Select complexity" className="text-black" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-2 border-black">
                    <SelectItem value="simple" className="text-black font-medium hover:bg-gray-100">Simple (Basic colors/text)</SelectItem>
                    <SelectItem value="moderate" className="text-black font-medium hover:bg-gray-100">Moderate (Some graphics)</SelectItem>
                    <SelectItem value="complex" className="text-black font-medium hover:bg-gray-100">Complex (Custom design)</SelectItem>
                    <SelectItem value="premium" className="text-black font-medium hover:bg-gray-100">Premium (Full custom artwork)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="urgency" className="text-black font-bold text-lg">Timeline</Label>
                <Select value={urgency} onValueChange={setUrgency}>
                  <SelectTrigger className="bg-white border-2 border-black text-black font-medium h-12">
                    <SelectValue placeholder="Select timeline" className="text-black" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-2 border-black">
                    <SelectItem value="standard" className="text-black font-medium hover:bg-gray-100">Standard (7-10 days)</SelectItem>
                    <SelectItem value="rush" className="text-black font-medium hover:bg-gray-100">Rush (3-5 days)</SelectItem>
                    <SelectItem value="urgent" className="text-black font-medium hover:bg-gray-100">Urgent (1-2 days)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {estimatedCost && (
              <div className="bg-white border-4 border-brand-red rounded-lg p-8 text-center shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <DollarSign className="h-8 w-8 text-brand-red" />
                  <h3 className="text-2xl font-bold text-black">Estimated Cost</h3>
                </div>
                <p className="text-4xl font-bold text-brand-red mb-4">${estimatedCost.toLocaleString()}</p>
                <p className="text-lg font-medium text-black">
                  *This is an estimate. Final pricing may vary based on specific requirements.
                </p>
              </div>
            )}

            <div className="text-center pt-4">
              <Button className="bg-brand-red hover:bg-red-700 text-white font-bold text-lg px-8 py-4 border-2 border-brand-red" asChild>
                <a href="/contact">Get Accurate Quote</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VehicleWrapCalculator;
