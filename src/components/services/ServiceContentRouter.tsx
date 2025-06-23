
import React from 'react';
import FleetWrapsContent from './FleetWrapsContent';
import ColorChangeWrapsContent from './ColorChangeWrapsContent';
import CommercialGraphicsContent from './CommercialGraphicsContent';
import PartialWrapsContent from './PartialWrapsContent';
import ProtectiveFilmsContent from './ProtectiveFilmsContent';
import VehicleLetteringContent from './VehicleLetteringContent';
import SpecialtyWrapsContent from './SpecialtyWrapsContent';
import RetailGraphicsContent from './RetailGraphicsContent';
import GenericServiceContent from './GenericServiceContent';

interface ServiceContentRouterProps {
  servicePath: string;
}

const ServiceContentRouter: React.FC<ServiceContentRouterProps> = ({ servicePath }) => {
  const serviceMap: Record<string, React.ComponentType> = {
    'fleet-wraps': FleetWrapsContent,
    'color-change-wraps': ColorChangeWrapsContent,
    'commercial-graphics': CommercialGraphicsContent,
    'partial-wraps': PartialWrapsContent,
    'protective-films': ProtectiveFilmsContent,
    'vehicle-lettering': VehicleLetteringContent,
    'specialty-wraps': SpecialtyWrapsContent,
    'retail-graphics': RetailGraphicsContent,
  };

  const ServiceComponent = serviceMap[servicePath];
  
  if (ServiceComponent) {
    return <ServiceComponent />;
  }

  // Handle generic service types
  const genericServiceTypes: Record<string, string> = {
    'car-wraps': 'car',
    'truck-wraps': 'truck',
    'van-wraps': 'van',
    'designer-wraps': 'designer',
    'luxury-exotic-wraps': 'luxury',
  };

  const genericType = genericServiceTypes[servicePath];
  
  if (genericType) {
    return <GenericServiceContent serviceType={genericType} />;
  }

  return <GenericServiceContent />;
};

export default ServiceContentRouter;
