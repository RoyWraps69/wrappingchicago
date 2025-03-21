
import React from 'react';
import FleetWrapIntro from './fleet-wraps/FleetWrapIntro';
import FleetWrapBenefits from './fleet-wraps/FleetWrapBenefits';
import FleetWrapProcess from './fleet-wraps/FleetWrapProcess';
import FleetWrapROI from './fleet-wraps/FleetWrapROI';
import IndustriesServed from './fleet-wraps/IndustriesServed';
import VehicleTypes from './fleet-wraps/VehicleTypes';
import FleetWrapFAQ from './fleet-wraps/FleetWrapFAQ';

const FleetWrapsContent: React.FC = () => {
  return (
    <>
      <FleetWrapIntro />
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <FleetWrapBenefits />
        <FleetWrapProcess />
      </div>
      
      <FleetWrapROI />
      <IndustriesServed />
      <VehicleTypes />
      <FleetWrapFAQ />
    </>
  );
};

export default FleetWrapsContent;
