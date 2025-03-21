
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

interface ServiceContentSelectorProps {
  path: string;
}

const ServiceContentSelector: React.FC<ServiceContentSelectorProps> = ({ path }) => {
  // Normalize path by removing /services/ prefix if present
  const normalizedPath = path.replace(/^\/services\//, '');
  
  if (normalizedPath.includes('fleet-wraps')) {
    return <FleetWrapsContent />;
  } else if (normalizedPath.includes('color-change-wraps')) {
    return <ColorChangeWrapsContent />;
  } else if (normalizedPath.includes('commercial-graphics')) {
    return <CommercialGraphicsContent />;
  } else if (normalizedPath.includes('partial-wraps')) {
    return <PartialWrapsContent />;
  } else if (normalizedPath.includes('protective-films')) {
    return <ProtectiveFilmsContent />;
  } else if (normalizedPath.includes('vehicle-lettering')) {
    return <VehicleLetteringContent />;
  } else if (normalizedPath.includes('specialty-wraps')) {
    return <SpecialtyWrapsContent />;
  } else if (normalizedPath.includes('retail-graphics')) {
    return <RetailGraphicsContent />;
  } else if (normalizedPath.includes('car-wraps') || 
             normalizedPath.includes('truck-wraps') || 
             normalizedPath.includes('van-wraps')) {
    // For vehicle-specific wraps, we can either create dedicated components or use the generic one
    return <GenericServiceContent />;
  } else {
    return <GenericServiceContent />;
  }
};

export default ServiceContentSelector;
