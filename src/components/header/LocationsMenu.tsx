import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MapPin } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

const LocationsMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-brand-navy hover:text-brand-red transition-colors duration-300 font-medium px-4 py-2 rounded-md hover:bg-gray-50">
        <MapPin className="w-4 h-4 mr-1" />
        Locations
        <ChevronDown className="w-4 h-4 ml-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem asChild>
          <Link to="/chicago" className="w-full">Chicago</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/schaumburg" className="w-full">Schaumburg</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/evanston" className="w-full">Evanston</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/skokie" className="w-full">Skokie</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/arlington-heights" className="w-full">Arlington Heights</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/palatine" className="w-full">Palatine</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/des-plaines" className="w-full">Des Plaines</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/waukegan" className="w-full">Waukegan</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/elgin" className="w-full">Elgin</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/hoffman-estates" className="w-full">Hoffman Estates</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/naperville" className="w-full">Naperville</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/aurora" className="w-full">Aurora</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/oak-park" className="w-full">Oak Park</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/joliet" className="w-full">Joliet</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/cicero" className="w-full">Cicero</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/berwyn" className="w-full">Berwyn</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/wheaton" className="w-full">Wheaton</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/downers-grove" className="w-full">Downers Grove</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/bolingbrook" className="w-full">Bolingbrook</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocationsMenu;