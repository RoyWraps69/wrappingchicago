
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, CheckCircle2, Shield, Truck } from 'lucide-react';

const TruckHero = () => {
  return (
    <section className="bg-gradient-to-r from-brand-navy to-blue-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Commercial Truck Wraps Chicago - Business Vehicle Graphics
          </h1>
          <p className="text-xl mb-8">
            Transform your commercial trucks into powerful mobile billboards with expert truck wrapping services.
            Serving Chicago businesses for over 20 years with more than 16,000 wraps completed.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              asChild
              size="lg"
              className="bg-brand-red hover:bg-red-700 text-white"
            >
              <Link to="/contact" className="inline-flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Schedule Perfection Now!
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-white/10 text-white hover:bg-white/20"
            >
              <a href="tel:3125971286" className="inline-flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                (312) 597-1286
              </a>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle2 className="h-5 w-5 mr-2 text-brand-red" />
              <span>16,000+ Wraps Completed</span>
            </div>
            <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
              <Shield className="h-5 w-5 mr-2 text-brand-red" />
              <span>3M Certified Installers</span>
            </div>
            <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
              <Truck className="h-5 w-5 mr-2 text-brand-red" />
              <span>Commercial Truck Specialists</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TruckHero;
