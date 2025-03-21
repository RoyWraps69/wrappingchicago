
import React from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FleetWrapFAQ: React.FC = () => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-brand-navy mb-4 flex items-center">
        <HelpCircle className="w-6 h-6 text-brand-red mr-2" />
        Frequently Asked Questions About Fleet Wraps
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="col-span-1 md:col-span-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">How much does it cost to wrap a fleet of vehicles?</AccordionTrigger>
              <AccordionContent>
                The cost to wrap a fleet depends on several factors including the number of vehicles, vehicle sizes, design complexity, and coverage area. For a full fleet wrap package in Chicago, prices typically range from $1,800 to $3,500 per vehicle. We offer volume discounts for multiple vehicles and can customize packages to fit your budget.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">How long do fleet wraps last in Chicago's climate?</AccordionTrigger>
              <AccordionContent>
                When properly installed and maintained, our premium fleet wraps typically last 5-7 years, even in Chicago's harsh weather conditions. We use high-quality 3M vinyl materials specifically designed to withstand extreme temperatures, UV exposure, and precipitation, ensuring your fleet wraps maintain their appearance and effectiveness for years.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">How long does it take to wrap a fleet of vehicles?</AccordionTrigger>
              <AccordionContent>
                Installation time varies based on fleet size and wrap complexity. For a typical business fleet, we can wrap 1-2 vehicles per day. We'll work with you to create a staggered installation schedule that minimizes disruption to your operations, ensuring your business can continue running while we transform your fleet.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">Do you offer fleet wrap maintenance services?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer fleet wrap maintenance programs to keep your vehicles looking their best. This includes regular inspections, cleaning recommendations, and repair services for any damage. We can also update specific information on wraps (like phone numbers or website URLs) without replacing the entire wrap, saving you time and money.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">Can you match our branding exactly on fleet wraps?</AccordionTrigger>
              <AccordionContent>
                Absolutely. Our professional design team uses color-matching technology to ensure your fleet wraps perfectly represent your brand. We'll work from your existing brand guidelines or help develop a new look, ensuring exact color matching, font consistency, and proper logo reproduction across your entire fleet.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <img 
            src="/lovable-uploads/bc55562c-aa6e-45ac-86ea-5b2657a3f6d5.png"
            alt="Fleet wrap FAQ - Professional vehicle wrapping service in Chicago" 
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FleetWrapFAQ;
