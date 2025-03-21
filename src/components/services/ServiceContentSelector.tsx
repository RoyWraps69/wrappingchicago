
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
  } else if (normalizedPath.includes('car-wraps')) {
    // For car-specific wraps
    return <GenericServiceContent serviceType="car" />;
  } else if (normalizedPath.includes('truck-wraps')) {
    // For truck-specific wraps
    return <GenericServiceContent serviceType="truck" />;
  } else if (normalizedPath.includes('van-wraps')) {
    // For van-specific wraps
    return <GenericServiceContent serviceType="van" />;
  } else if (normalizedPath.includes('designer-wraps')) {
    // For designer wraps
    return <GenericServiceContent serviceType="designer" />;
  } else if (normalizedPath.includes('luxury-exotic-wraps')) {
    // For luxury/exotic vehicle wraps
    return <GenericServiceContent serviceType="luxury" />;
  } else {
    // Default page showing all services
    return <GenericServiceContent />;
  }
};

export default ServiceContentSelector;
