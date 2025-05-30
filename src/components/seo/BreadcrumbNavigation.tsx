
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const BreadcrumbNavigation: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNames: { [key: string]: string } = {
    'services': 'Services',
    'car-wraps': 'Car Wraps',
    'truck-wraps': 'Truck Wraps',
    'van-wraps': 'Van Wraps',
    'fleet-wraps': 'Fleet Wraps',
    'color-change-wraps': 'Color Change Wraps',
    'commercial-graphics': 'Commercial Graphics',
    'about': 'About Us',
    'contact': 'Contact',
    'gallery': 'Gallery',
    'pricing': 'Pricing',
    'locations': 'Service Areas',
    'ai-wrap-ideas': 'AI Wrap Designer'
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="bg-gray-50 py-3 border-b" aria-label="Breadcrumb">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              to="/" 
              className="text-gray-500 hover:text-brand-red transition-colors flex items-center"
            >
              <Home className="h-4 w-4" />
              <span className="ml-1">Home</span>
            </Link>
          </li>
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = breadcrumbNames[pathname] || pathname.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());

            return (
              <li key={pathname} className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
                {isLast ? (
                  <span className="text-gray-900 font-medium">{displayName}</span>
                ) : (
                  <Link 
                    to={routeTo} 
                    className="text-gray-500 hover:text-brand-red transition-colors"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbNavigation;
