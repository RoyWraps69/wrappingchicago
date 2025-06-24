
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Gallery from '@/components/home/Gallery';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';
import SEOMaster from '@/components/seo/SEOMaster';
import EEATContent from '@/components/content/EEATContent';

const Index = () => {
  const homeKeywords = [
    'vehicle wraps Chicago',
    'car wraps Chicago',
    'truck wraps Chicago',
    'van wraps Chicago',
    'fleet wraps Chicago',
    'commercial vehicle graphics',
    'vehicle branding Chicago',
    '3M vehicle wraps',
    'professional vehicle wraps',
    'Chicago vehicle wrap company',
    'custom vehicle wraps',
    'vehicle lettering Chicago',
    'commercial vehicle wraps',
    'fleet graphics Chicago',
    'color change wraps',
    'vinyl vehicle wraps',
    'vehicle advertising Chicago',
    'mobile marketing Chicago',
    'business vehicle wraps',
    'vehicle wrap installation'
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/', position: 1 }
  ];

  return (
    <>
      <SEOMaster
        title="Vehicle Wraps Chicago | Premium Car, Truck & Fleet Wraps | Wrapping Chicago"
        description="Chicago's premier vehicle wrap company with 20+ years experience. Custom car wraps, truck wraps, van wraps & fleet graphics using premium 3M materials. 16,000+ vehicles wrapped. Free quotes!"
        keywords={homeKeywords}
        canonicalUrl="https://www.wrappingchicago.com/"
        ogType="website"
        schemaType="WebPage"
        breadcrumbs={breadcrumbs}
        priority="critical"
        isHomepage={true}
      />
      
      <main role="main">
        <Hero />
        
        {/* H2 Section Header with proper hierarchy */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4 speakable">
                Professional Vehicle Wrap Services in Chicago
              </h2>
              <h3 className="text-2xl text-gray-600 mb-6 max-w-3xl mx-auto speakable">
                Transform Your Vehicle Into a Mobile Billboard with Expert Installation
              </h3>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                With over 20 years of experience and 16,000+ completed projects, Wrapping Chicago 
                delivers premium vehicle wraps using only the finest 3M materials and certified installation techniques.
              </p>
            </header>
          </div>
        </section>
        
        <Services />
        <WhyChooseUs />
        <EEATContent />
        <Gallery />
        <Testimonials />
        <CallToAction />
      </main>
    </>
  );
};

export default Index;
