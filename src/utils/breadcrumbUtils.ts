
import { City } from '@/data/cities';

export interface BreadcrumbItem {
  position: number;
  name: string;
  item: string;
  url?: string;
}

export const generateBreadcrumbs = (pathname: string, city?: City): BreadcrumbItem[] => {
  const domain = "https://www.wrappingchicago.com";
  const breadcrumbs: BreadcrumbItem[] = [
    {
      position: 1,
      name: "Home",
      item: `${domain}/`,
      url: "/"
    }
  ];

  // Handle city-specific vehicle wrap pages
  if (pathname.match(/^\/vehicle-wraps-(.+)-il$/)) {
    const citySlug = pathname.replace('/vehicle-wraps-', '').replace('-il', '');
    const cityName = city?.name || citySlug.charAt(0).toUpperCase() + citySlug.slice(1);
    
    breadcrumbs.push({
      position: 2,
      name: "Service Areas",
      item: `${domain}/locations`,
      url: "/locations"
    });
    
    breadcrumbs.push({
      position: 3,
      name: `${cityName} Vehicle Wraps`,
      item: `${domain}${pathname}`,
      url: pathname
    });
    
    return breadcrumbs;
  }

  // Handle direct city pages like /chicago
  if (pathname === '/chicago' || pathname === '/evanston' || pathname === '/naperville' || pathname === '/schaumburg') {
    const cityName = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
    
    breadcrumbs.push({
      position: 2,
      name: "Service Areas",
      item: `${domain}/locations`,
      url: "/locations"
    });
    
    breadcrumbs.push({
      position: 3,
      name: `${cityName} Vehicle Wraps`,
      item: `${domain}${pathname}`,
      url: pathname
    });
    
    return breadcrumbs;
  }

  // Handle truck wraps Chicago special page
  if (pathname === '/truck-wraps-chicago') {
    breadcrumbs.push({
      position: 2,
      name: "Services",
      item: `${domain}/services`,
      url: "/services"
    });
    
    breadcrumbs.push({
      position: 3,
      name: "Truck Wraps",
      item: `${domain}/truck-wraps`,
      url: "/truck-wraps"
    });
    
    breadcrumbs.push({
      position: 4,
      name: "Chicago Truck Wraps",
      item: `${domain}${pathname}`,
      url: pathname
    });
    
    return breadcrumbs;
  }

  // Handle regular service pages and other routes
  const pathSegments = pathname.split('/').filter(x => x);
  
  pathSegments.forEach((segment, index) => {
    const routeTo = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const name = getRouteName(segment);
    
    breadcrumbs.push({
      position: index + 2,
      name,
      item: `${domain}${routeTo}`,
      url: routeTo
    });
  });

  return breadcrumbs;
};

const getRouteName = (path: string): string => {
  const routeMap: { [key: string]: string } = {
    'services': 'Services',
    'fleet-wraps': 'Fleet Wraps',
    'car-wraps': 'Car Wraps',
    'truck-wraps': 'Truck Wraps',
    'van-wraps': 'Van Wraps',
    'color-change-wraps': 'Color Change Wraps',
    'commercial-graphics': 'Commercial Graphics',
    'partial-wraps': 'Partial Wraps',
    'about': 'About Us',
    'contact': 'Contact',
    'gallery': 'Gallery',
    'locations': 'Service Areas',
    'ai-wrap-ideas': 'AI Wrap Designer',
    'protective-films': 'Protective Films',
    'vehicle-lettering': 'Vehicle Lettering',
    'specialty-wraps': 'Specialty Wraps',
    'retail-graphics': 'Retail Graphics',
    'designer-wraps': 'Designer Wraps',
    'luxury-exotic-wraps': 'Luxury & Exotic Wraps',
    'pricing': 'Pricing',
    'faq': 'FAQ',
    'sitemap': 'Sitemap'
  };

  return routeMap[path] || path.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};
