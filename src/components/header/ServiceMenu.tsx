
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const ServiceMenu = () => {
  const serviceItems = [
    { label: 'All Services', path: '/services', description: 'Complete vehicle wrap services' },
    { label: 'Car Wraps', path: '/car-wraps', description: 'Custom wraps for cars and sedans' },
    { label: 'Truck Wraps', path: '/truck-wraps', description: 'Professional truck and pickup wraps' },
    { label: 'Van Wraps', path: '/van-wraps', description: 'Commercial van wrap solutions' },
    { label: 'Fleet Wraps', path: '/services/fleet-wraps', description: 'Complete fleet branding' },
    { label: 'Color Change', path: '/color-change-wraps', description: 'Transform your vehicle color' },
    { label: 'Commercial Graphics', path: '/services/commercial-graphics', description: 'Business vehicle graphics' }
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-brand-navy hover:text-brand-red transition-colors font-medium px-3 py-2">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[600px] gap-3 p-6 bg-white border border-gray-200 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                {serviceItems.map((service) => (
                  <NavigationMenuLink key={service.path} asChild>
                    <Link
                      to={service.path}
                      className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-brand-red focus:bg-gray-50 focus:text-brand-red"
                    >
                      <div className="text-sm font-medium leading-none text-black group-hover:text-brand-red">
                        {service.label}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-black/70 group-hover:text-black">
                        {service.description}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ServiceMenu;
