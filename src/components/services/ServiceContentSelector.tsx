
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
  console.log("ServiceContentSelector received path:", path);
  
  // Normalize path by removing /services/ prefix if present and removing trailing slashes
  const normalizedPath = path.replace(/^\/services\//, '').replace(/\/$/, '');
  
  // Handle direct routes without the /services/ prefix
  const servicePath = normalizedPath || 'services';
  
  console.log("ServiceContentSelector using normalized path:", servicePath);
  
  if (servicePath === 'fleet-wraps') {
    return <FleetWrapsContent />;
  } else if (servicePath === 'color-change-wraps') {
    return <ColorChangeWrapsContent />;
  } else if (servicePath === 'commercial-graphics') {
    return <CommercialGraphicsContent />;
  } else if (servicePath === 'partial-wraps') {
    return <PartialWrapsContent />;
  } else if (servicePath === 'protective-films') {
    return <ProtectiveFilmsContent />;
  } else if (servicePath === 'vehicle-lettering') {
    return <VehicleLetteringContent />;
  } else if (servicePath === 'specialty-wraps') {
    return <SpecialtyWrapsContent />;
  } else if (servicePath === 'retail-graphics') {
    return <RetailGraphicsContent />;
  } else if (servicePath === 'car-wraps') {
    // For car-specific wraps
    return <GenericServiceContent serviceType="car" />;
  } else if (servicePath === 'truck-wraps') {
    // For truck-specific wraps
    return <GenericServiceContent serviceType="truck" />;
  } else if (servicePath === 'van-wraps') {
    // For van-specific wraps
    return <GenericServiceContent serviceType="van" />;
  } else if (servicePath === 'designer-wraps') {
    // For designer wraps
    return <GenericServiceContent serviceType="designer" />;
  } else if (servicePath === 'luxury-exotic-wraps') {
    // For luxury/exotic vehicle wraps
    return <GenericServiceContent serviceType="luxury" />;
  } else {
    // Default page showing all services
    return <GenericServiceContent />;
  }
};

export default ServiceContentSelector;
