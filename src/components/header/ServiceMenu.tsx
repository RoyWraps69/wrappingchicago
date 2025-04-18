
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
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
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem
                href="/services/fleet-wraps"
                title="Fleet Wraps"
              >
                Transform your business fleet into mobile billboards
              </ListItem>
              <ListItem
                href="/services/car-wraps"
                title="Car Wraps"
              >
                Custom wraps for personal and commercial vehicles
              </ListItem>
              <ListItem
                href="/services/truck-wraps"
                title="Truck Wraps"
              >
                Professional wraps for all types of trucks
              </ListItem>
              <ListItem
                href="/services/van-wraps"
                title="Van Wraps"
              >
                Custom van wraps for business fleets
              </ListItem>
              <ListItem
                href="/services/color-change-wraps"
                title="Color Change Wraps"
              >
                Transform your vehicle's appearance
              </ListItem>
              <ListItem
                href="/services/commercial-graphics"
                title="Commercial Graphics"
              >
                Business branding and vehicle graphics
              </ListItem>
              <ListItem
                href="/services/protective-films"
                title="Protective Films"
              >
                Paint protection and clear bra installation
              </ListItem>
              <ListItem
                href="/services/vehicle-lettering"
                title="Vehicle Lettering"
              >
                Professional vehicle lettering services
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ServiceMenu;
