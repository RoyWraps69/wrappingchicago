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
      <DropdownMenuContent className="w-56 bg-white border-2 border-gray-300 shadow-lg max-h-64 overflow-y-auto">
        <DropdownMenuItem asChild>
          <Link to="/chicago" className="w-full block px-3 py-2 text-black hover:bg-gray-100 font-medium">Chicago</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/schaumburg" className="w-full block px-3 py-2 text-black hover:bg-gray-100 font-medium">Schaumburg</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/evanston" className="w-full block px-3 py-2 text-black hover:bg-gray-100 font-medium">Evanston</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/skokie" className="w-full block px-3 py-2 text-black hover:bg-gray-100 font-medium">Skokie</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/arlington-heights" className="w-full block px-3 py-2 text-black hover:bg-gray-100 font-medium">Arlington Heights</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/palatine" className="w-full block px-3 py-2 text-black hover:bg-gray-100 font-medium">Palatine</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/des-plaines" className="w-full block px-3 py-2 text-black hover:bg-gray-100 font-medium">Des Plaines</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/waukegan" className="w-full block px-3 py-2 text-black hover:bg-gray-100 font-medium">Waukegan</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/elgin" className="w-full block px-3 py-2 text-black hover:bg-gray-100 font-medium">Elgin</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/hoffman-estates" className="w-full block px-3 py-2 text-black hover:bg-gray-100 font-medium">Hoffman Estates</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/naperville" className="w-full block px-3 py-2 text-black hover:bg-gray-100 font-medium">Naperville</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/aurora" className="w-full block px-3 py-2 text-black hover:bg-gray-100 font-medium">Aurora</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/oak-park" className="w-full block px-3 py-2 text-black hover:bg-gray-100 font-medium">Oak Park</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/joliet" className="w-full block px-3 py-2 text-black hover:bg-gray-100 font-medium">Joliet</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/cicero" className="w-full block px-3 py-2 text-black hover:bg-gray-100 font-medium">Cicero</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/berwyn" className="w-full block px-3 py-2 text-black hover:bg-gray-100 font-medium">Berwyn</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/wheaton" className="w-full block px-3 py-2 text-black hover:bg-gray-100 font-medium">Wheaton</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/downers-grove" className="w-full block px-3 py-2 text-black hover:bg-gray-100 font-medium">Downers Grove</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/bolingbrook" className="w-full block px-3 py-2 text-black hover:bg-gray-100 font-medium">Bolingbrook</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocationsMenu;