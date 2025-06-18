import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Zap, Shield, Clock, TrendingDown, Award, CreditCard, CalendarClock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const EasyButtonSection = () => {
  // Set specific end date for the offer
  const formattedEndDate = "December 31st";

  return (
    <section className="bg-gradient-to-r from-brand-navy to-blue-900 py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      {/* Animated stars/sparkles for visual appeal */}
      <div className="absolute top-0 left-1/4 animate-pulse">
        <Award className="h-6 w-6 text-yellow-300 opacity-75" />
      </div>
      <div className="absolute bottom-1/4 right-1/3 animate-pulse delay-300">
        <Award className="h-5 w-5 text-yellow-300 opacity-75" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-pulse delay-700">
        <Award className="h-4 w-4 text-yellow-300 opacity-75" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Special Offer Banner */}
        <div className="bg-red-600 text-white text-center py-2 px-4 rounded-t-lg mx-auto w-fit mb-2 shadow-lg transform -rotate-1">
          <span className="font-bold tracking-wide">EXCLUSIVE FLASH SALE ENDS {formattedEndDate}</span>
        </div>
        
        <div className="grid md:grid-cols-5 gap-6">
          {/* Main Offer Card - 3 cols wide */}
          <Card className="md:col-span-3 bg-white/10 backdrop-blur-sm border-white/20 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-yellow-300 mr-3 flex-shrink-0" />
                <h2 className="text-white text-2xl md:text-3xl font-bold">The Easy Button: Complete Wrap Package</h2>
              </div>
              
              <p className="text-white/90 mb-6 text-lg max-w-2xl">
                Professional design, premium materials, and expert installation for one all-inclusive price of just <span className="font-bold text-yellow-300 text-xl">$3,999</span> — with <span className="font-bold underline">no hidden fees</span> (up to 400 sq ft).
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Professional Design</span>
                    <p className="text-white/70 text-sm">Custom design tailored to your business</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Premium 3M Materials</span>
                    <p className="text-white/70 text-sm">High-quality vinyl that lasts years</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">Expert Installation</span>
                    <p className="text-white/70 text-sm">By certified professionals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">3-Year Warranty</span>
                    <p className="text-white/70 text-sm">Full coverage for peace of mind</p>
                  </div>
                </div>
              </div>
              
              <Alert className="bg-yellow-400/10 border border-yellow-400/30 text-yellow-200 mb-6">
                <CalendarClock className="h-4 w-4" />
                <AlertTitle className="text-yellow-100">Limited Availability!</AlertTitle>
                <AlertDescription className="text-yellow-100/90">
                  Only 3 spots remaining at this price. Next available installation: This week.
                </AlertDescription>
              </Alert>
              
              <div className="flex items-center justify-between bg-white/5 p-4 rounded-lg border border-white/10 mb-4">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-white text-sm">100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-white text-sm">Fast 5-7 Day Turnaround</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Pricing Card - 2 cols wide */}
          <Card className="md:col-span-2 bg-gradient-to-br from-brand-red to-red-800 border-white/20 shadow-xl">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-1">Flash Sale Price</h3>
                  <p className="text-white/80 text-sm">Limited time offer</p>
                </div>
                <div className="bg-white/20 rounded-full px-3 py-1 text-white text-sm font-bold">
                  <span className="flex items-center">
                    <TrendingDown className="h-4 w-4 text-green-300 mr-1" />
                    SAVE $1,500
                  </span>
                </div>
              </div>
              
              <div className="flex items-end gap-3 mb-2">
                <div className="line-through text-white/60 text-lg">$5,499</div>
                <div className="text-4xl font-bold text-white">$3,999</div>
                <div className="text-white/80 text-sm self-end mb-1">all-inclusive</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-3 mb-6">
                <div className="flex items-center mb-2">
                  <CreditCard className="h-4 w-4 text-white mr-2" />
                  <span className="text-white font-medium">Flexible Payment Options</span>
                </div>
                <div className="pl-6 text-white/80 text-sm space-y-1">
                  <p>• 50% deposit to secure this rate</p>
                  <p>• Pay balance on completion</p>
                  <p>• All major credit cards accepted</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg shadow-xl w-full py-6 animate-pulse"
                >
                  <Link to="/contact" className="inline-flex items-center whitespace-nowrap">
                    Lock In This Special Price Now!
                  </Link>
                </Button>
                
                <p className="text-center text-white/70 text-sm">
                  Price returns to $5,499 after {formattedEndDate}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EasyButtonSection;
