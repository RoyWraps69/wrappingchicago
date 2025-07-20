
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Car, Truck, CircleDollarSign, PaintBucket, Building, Brush, Shield, FileText, Palette, CreditCard } from 'lucide-react';

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & {
    title?: string;
  }
>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={to}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-brand-red focus:bg-gray-100 focus:text-brand-red",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-brand-navy">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const ServiceMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-brand-red hover:bg-red-700 text-white font-medium px-4 py-2 text-sm">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent className="z-50 bg-white border shadow-lg w-[400px] md:w-[500px] lg:w-[700px]">
            <ul className="grid gap-3 p-4 md:grid-cols-2 lg:w-[700px]">
              <ListItem
                to="/car-wraps"
                title="Car Wraps"
                className="flex flex-col"
              >
                <div className="flex items-center mb-1">
                  <Car className="w-4 h-4 mr-2 text-brand-red" />
                  Custom car wraps for personal and commercial vehicles
                </div>
              </ListItem>
              
              <ListItem
                to="/truck-wraps"
                title="Truck Wraps"
                className="flex flex-col"
              >
                <div className="flex items-center mb-1">
                  <Truck className="w-4 h-4 mr-2 text-brand-red" />
                  Professional wraps for all types of trucks
                </div>
              </ListItem>
              
              <ListItem
                to="/van-wraps"
                title="Van Wraps"
                className="flex flex-col"
              >
                <div className="flex items-center mb-1">
                  <Car className="w-4 h-4 mr-2 text-brand-red" />
                  Custom van wraps for business fleets
                </div>
              </ListItem>
              
              <ListItem
                to="/fleet-wraps"
                title="Fleet Wraps"
                className="flex flex-col"
              >
                <div className="flex items-center mb-1">
                  <Truck className="w-4 h-4 mr-2 text-brand-red" />
                  Transform your business fleet into mobile billboards
                </div>
              </ListItem>
              
              <ListItem
                to="/color-change-wraps"
                title="Color Change Wraps"
                className="flex flex-col"
              >
                <div className="flex items-center mb-1">
                  <PaintBucket className="w-4 h-4 mr-2 text-brand-red" />
                  Transform your vehicle's appearance
                </div>
              </ListItem>
              
              <ListItem
                to="/commercial-graphics"
                title="Commercial Graphics"
                className="flex flex-col"
              >
                <div className="flex items-center mb-1">
                  <Building className="w-4 h-4 mr-2 text-brand-red" />
                  Business branding and vehicle graphics
                </div>
              </ListItem>
              
              <ListItem
                to="/protective-films"
                title="Protective Films"
                className="flex flex-col"
              >
                <div className="flex items-center mb-1">
                  <Shield className="w-4 h-4 mr-2 text-brand-red" />
                  Paint protection and clear bra installation
                </div>
              </ListItem>
              
              <ListItem
                to="/vehicle-lettering"
                title="Vehicle Lettering"
                className="flex flex-col"
              >
                <div className="flex items-center mb-1">
                  <FileText className="w-4 h-4 mr-2 text-brand-red" />
                  Professional vehicle lettering services
                </div>
              </ListItem>
              
              <ListItem
                to="/specialty-wraps"
                title="Specialty Wraps"
                className="flex flex-col"
              >
                <div className="flex items-center mb-1">
                  <Palette className="w-4 h-4 mr-2 text-brand-red" />
                  Chrome, matte and textured finishes
                </div>
              </ListItem>
              
              <ListItem
                to="/designer-wraps"
                title="Designer Wraps"
                className="flex flex-col"
              >
                <div className="flex items-center mb-1">
                  <Brush className="w-4 h-4 mr-2 text-brand-red" />
                  Custom artistic designs for personal vehicles
                </div>
              </ListItem>
              
              <ListItem
                to="/luxury-exotic-wraps"
                title="Luxury & Exotic Wraps"
                className="flex flex-col"
              >
                <div className="flex items-center mb-1">
                  <CreditCard className="w-4 h-4 mr-2 text-brand-red" />
                  Specialized wraps for high-end vehicles
                </div>
              </ListItem>
              
              <ListItem
                to="/retail-graphics"
                title="Retail Graphics"
                className="flex flex-col"
              >
                <div className="flex items-center mb-1">
                  <Building className="w-4 h-4 mr-2 text-brand-red" />
                  Window graphics and store signage
                </div>
              </ListItem>
              
              <ListItem
                to="/services"
                title="View All Services"
                className="md:col-span-2 text-center bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex justify-center items-center">
                  Explore our complete range of vehicle wrap services
                </div>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ServiceMenu;
