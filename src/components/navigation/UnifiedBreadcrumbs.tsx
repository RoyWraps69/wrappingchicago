
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { generateBreadcrumbs } from '@/utils/breadcrumbUtils';
import { City } from '@/data/cities';

interface UnifiedBreadcrumbsProps {
  city?: City;
}

const UnifiedBreadcrumbs: React.FC<UnifiedBreadcrumbsProps> = ({ city }) => {
  const location = useLocation();
  const breadcrumbs = generateBreadcrumbs(location.pathname, city);

  if (breadcrumbs.length <= 1) return null;

  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          
          return (
            <React.Fragment key={`${crumb.position}-${crumb.name}`}>
              {index > 0 && (
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
              )}
              
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={crumb.url || crumb.item} className="flex items-center">
                      {index === 0 && <Home className="h-4 w-4 mr-1" />}
                      {crumb.name}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default UnifiedBreadcrumbs;
