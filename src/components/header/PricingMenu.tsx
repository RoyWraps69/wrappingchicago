
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
import { DollarSign, Info, FileText } from 'lucide-react';

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

const PricingMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-brand-navy hover:text-brand-red font-medium px-3 py-2 text-sm bg-transparent hover:bg-gray-50">
            Pricing
          </NavigationMenuTrigger>
          <NavigationMenuContent className="z-50 bg-white border shadow-lg w-[300px]">
            <ul className="grid gap-3 p-4">
              <ListItem
                to="/pricing"
                title="Vehicle Wrap Pricing"
                className="flex flex-col"
              >
                <div className="flex items-center mb-1">
                  <DollarSign className="w-4 h-4 mr-2 text-brand-red" />
                  Get transparent pricing for all vehicle wrap services
                </div>
              </ListItem>
              
              <ListItem
                to="/about"
                title="About Us"
                className="flex flex-col"
              >
                <div className="flex items-center mb-1">
                  <Info className="w-4 h-4 mr-2 text-brand-red" />
                  Learn about our company and team
                </div>
              </ListItem>
              
              <ListItem
                to="/blog"
                title="Blog"
                className="flex flex-col"
              >
                <div className="flex items-center mb-1">
                  <FileText className="w-4 h-4 mr-2 text-brand-red" />
                  Latest news and vehicle wrap tips
                </div>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default PricingMenu;
