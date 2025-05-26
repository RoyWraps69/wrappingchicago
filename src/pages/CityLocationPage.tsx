
import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';
import { cities } from '@/data/cities';
import Schema from '@/components/Schema';
import CityServices from '@/components/city/CityServices';
import CityHero from '@/components/city/CityHero';
import CityInfo from '@/components/city/CityInfo';

const CityLocationPage = () => {
  const { citySlug } = useParams();
  
  // Handle different URL patterns
  let currentCity;
  if (!citySlug) {
    // Default to Chicago for /chicago route
    currentCity = cities.find(city => city.slug === 'chicago') || cities[0];
  } else {
    currentCity = cities.find(city => city.slug === citySlug) || cities[0];
  }
  
  const domain = "https://www.wrappingchicago.com";
  const cityPath = citySlug ? `/${citySlug}` : '/chicago';
  
  // Generate meta title and description based on city
  const getMetaTitle = (city: any) => {
    return `Vehicle Wraps in ${city.name} IL | Wrapping Chicago`;
  };
  
  const getMetaDescription = (city: any) => {
    if (city.slug === 'chicago') {
      return "Get vehicle wraps in Chicago IL services for cars, trucks, vans, and fleets. Boost style or brand visibility with custom vinyl graphics installed by experts.";
    } else if (city.slug === 'evanston') {
      return "Get vehicle wraps in Evanston IL services for cars, trucks, and fleets. Custom vinyl graphics installed locally to boost style and brand reach.";
    } else if (city.slug === 'skokie') {
      return "Get vehicle wraps in Skokie IL services for personal or commercial vehicles. Durable, vibrant vinyl applied by certified wrap professionals.";
    } else if (city.slug === 'arlington-heights') {
      return "Get vehicle wraps in Arlington Heights IL services that advertise and protect. Expert design, print, and installation for striking road presence.";
    } else if (city.slug === 'palatine') {
      return "Get vehicle wraps in Palatine IL services to elevate your vehicle's look. High-quality vinyl graphics crafted and installed with precision.";
    } else if (city.slug === 'waukegan') {
      return "Get vehicle wraps in Waukegan IL services for standout branding or fresh style. Experienced installers ensure perfect, long-lasting vinyl coverage.";
    } else if (city.slug === 'des-plaines') {
      return "Get vehicle wraps in Des Plaines IL services with bold designs and premium materials. Enhance visibility and protect paint in one step.";
    } else if (city.slug === 'schaumburg') {
      return "Get vehicle wraps in Schaumburg IL services for fleets, cars, and trucks. Vibrant graphics printed and installed by seasoned wrap experts.";
    } else if (city.slug === 'elgin') {
      return "Get vehicle wraps in Elgin IL services that transform cars, trucks, and fleets with vinyl graphics. Expert design, printing, and installation ensure lasting impact.";
    } else if (city.slug === 'hoffman-estates') {
      return "Get vehicle wraps in Hoffman Estates IL services for business branding or personal flair. Durable vinyl graphics applied with expert care.";
    } else if (city.slug === 'mclean-county') {
      return "Get vehicle wraps in McLean County IL services for cars, vans, and trailers. Professional design and installation deliver eye-catching results.";
    } else if (city.slug === 'oak-park') {
      return "Get vehicle wraps in Oak Park IL services for superior branding and protection. Custom vinyl wraps installed flawlessly by experienced technicians.";
    } else if (city.slug === 'naperville') {
      return "Get vehicle wraps in Naperville IL services that attract attention and safeguard paint. Expert team delivers vibrant, durable vinyl solutions.";
    } else if (city.slug === 'aurora') {
      return "Get vehicle wraps in Aurora IL services to modernize, advertise, or protect your ride. Quality vinyl installed with precision and care.";
    } else if (city.slug === 'cicero') {
      return "Get vehicle wraps in Cicero IL services for eye-catching graphics on any vehicle. Skilled installers ensure smooth, long-lasting vinyl coverage.";
    } else if (city.slug === 'berwyn') {
      return "Get vehicle wraps in Berwyn IL services with custom colors and branding. High-grade vinyl wraps applied accurately for standout appeal.";
    } else if (city.slug === 'wheaton') {
      return "Get vehicle wraps in Wheaton IL services to showcase brands or personalize cars. Professional vinyl application guarantees impressive results.";
    } else if (city.slug === 'downers-grove') {
      return "Get vehicle wraps in Downers Grove IL services offering bold graphics and paint protection. Trust experts for flawless vinyl installations.";
    } else if (city.slug === 'joliet') {
      return "Get vehicle wraps in Joliet IL services for marketing or style upgrades. Durable vinyl graphics designed and installed by wrap professionals.";
    } else if (city.slug === 'bolingbrook') {
      return "Get vehicle wraps in Bolingbrook IL services to elevate fleet or personal vehicles. Premium vinyl wraps applied with meticulous craftsmanship.";
    } else if (city.slug === 'orland-park') {
      return "Get vehicle wraps in Orland Park IL services for striking designs and lasting protection. Experienced team delivers superior vinyl results.";
    } else if (city.slug === 'tinley-park') {
      return "Get vehicle wraps in Tinley Park IL services for branded or custom looks. High-quality vinyl graphics installed precisely by wrap specialists.";
    } else if (city.slug === 'oak-lawn') {
      return "Get vehicle wraps in Oak Lawn IL services for commercial fleets or personal cars. Custom prints, quality materials, expert installation.";
    } else if (city.slug === 'las-vegas') {
      return "Get vehicle wraps in Las Vegas IL services to turn heads and advertise effectively. Vibrant vinyl wraps fitted perfectly by our professionals.";
    } else {
      return `Get vehicle wraps in ${city.name} IL services for cars, trucks, and fleets. Professional vinyl graphics designed and installed by experts.`;
    }
  };

  return (
    <>
      <Helmet>
        <title>{getMetaTitle(currentCity)}</title>
        <meta name="description" content={getMetaDescription(currentCity)} />
        <meta name="keywords" content={`vehicle wraps ${currentCity.name} IL, car wraps ${currentCity.name}, truck wraps ${currentCity.name}, vinyl graphics ${currentCity.name}`} />
        <link rel="canonical" href={`${domain}${cityPath}`} />
        <meta property="og:title" content={getMetaTitle(currentCity)} />
        <meta property="og:description" content={getMetaDescription(currentCity)} />
        <meta property="og:url" content={`${domain}${cityPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${domain}/lovable-uploads/6ef3b1af-8591-4d36-97c2-9366401115fa.png`} />
      </Helmet>

      <Schema 
        city={currentCity}
        path={cityPath}
        pageTitle={getMetaTitle(currentCity)}
        pageDescription={getMetaDescription(currentCity)}
      />

      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs />
            
            <CityHero city={currentCity} />
            <CityInfo city={currentCity} />
            <CityServices city={currentCity} />
          </div>
          
          <CallToAction city={currentCity.name} />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CityLocationPage;
