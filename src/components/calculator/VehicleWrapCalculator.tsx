
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
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <Calculator className="h-6 w-6 text-brand-red" />
          Vehicle Wrap Cost Calculator
        </CardTitle>
        <CardDescription>
          Get an instant estimate for your vehicle wrap project
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="vehicle-type">Vehicle Type</Label>
            <Select value={vehicleType} onValueChange={setVehicleType}>
              <SelectTrigger>
                <SelectValue placeholder="Select vehicle type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="car">Car/Sedan</SelectItem>
                <SelectItem value="truck">Truck</SelectItem>
                <SelectItem value="van">Van</SelectItem>
                <SelectItem value="suv">SUV</SelectItem>
                <SelectItem value="motorcycle">Motorcycle</SelectItem>
                <SelectItem value="trailer">Trailer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="wrap-type">Wrap Type</Label>
            <Select value={wrapType} onValueChange={setWrapType}>
              <SelectTrigger>
                <SelectValue placeholder="Select wrap type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full">Full Wrap</SelectItem>
                <SelectItem value="partial">Partial Wrap</SelectItem>
                <SelectItem value="color-change">Color Change</SelectItem>
                <SelectItem value="commercial">Commercial Graphics</SelectItem>
                <SelectItem value="specialty">Specialty Finish</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="design-complexity">Design Complexity</Label>
            <Select value={designComplexity} onValueChange={setDesignComplexity}>
              <SelectTrigger>
                <SelectValue placeholder="Select complexity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="simple">Simple (Basic colors/text)</SelectItem>
                <SelectItem value="moderate">Moderate (Some graphics)</SelectItem>
                <SelectItem value="complex">Complex (Custom design)</SelectItem>
                <SelectItem value="premium">Premium (Full custom artwork)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="urgency">Timeline</Label>
            <Select value={urgency} onValueChange={setUrgency}>
              <SelectTrigger>
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard (7-10 days)</SelectItem>
                <SelectItem value="rush">Rush (3-5 days)</SelectItem>
                <SelectItem value="urgent">Urgent (1-2 days)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {estimatedCost && (
          <div className="bg-brand-red/5 border border-brand-red/20 rounded-lg p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <DollarSign className="h-6 w-6 text-brand-red" />
              <h3 className="text-xl font-semibold text-brand-navy">Estimated Cost</h3>
            </div>
            <p className="text-3xl font-bold text-brand-red">${estimatedCost.toLocaleString()}</p>
            <p className="text-sm text-gray-600 mt-2">
              *This is an estimate. Final pricing may vary based on specific requirements.
            </p>
          </div>
        )}

        <div className="text-center">
          <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
            <a href="/contact">Get Accurate Quote</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleWrapCalculator;
