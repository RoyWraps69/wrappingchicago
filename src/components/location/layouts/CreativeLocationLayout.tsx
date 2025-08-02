import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Palette, Camera, Zap, Star, Phone, Award, Instagram, Coffee } from "lucide-react";
import { LocationContent } from '@/data/locationContent';

interface CreativeLocationLayoutProps {
  location: any;
  content: LocationContent;
}

const CreativeLocationLayout: React.FC<CreativeLocationLayoutProps> = ({ location, content }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700">
      {/* Creative Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-pink-800/80 to-orange-700/90"></div>
        <div className="absolute inset-0 opacity-40"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Palette className="w-8 h-8 text-pink-400" />
              <Badge variant="secondary" className="bg-gradient-to-r from-pink-500/20 to-orange-500/20 text-pink-200 border-pink-400/50">
                Creative District • {location.name}
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent leading-tight">
              Viral Vehicle Graphics
            </h1>
            <h2 className="text-2xl md:text-3xl text-purple-200 mb-6 font-light">
              Instagram-Worthy Wraps for {location.name}'s Creatives
            </h2>
            <p className="text-xl text-purple-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              {content.heroStory}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Start Your Art Project: (312) 597-1286
              </Button>
              <Button size="lg" variant="outline" className="border-pink-400 text-pink-400 hover:bg-pink-400/10 text-lg px-8">
                <Instagram className="w-5 h-5 mr-2" />
                See Viral Designs
              </Button>
            </div>
          </div>
          
          {/* Creative Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">300%+</div>
              <div className="text-purple-300">Social Media Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">25+</div>
              <div className="text-purple-300">Artist Collaborations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">50+</div>
              <div className="text-purple-300">Featured Posts/Month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">100%</div>
              <div className="text-purple-300">Authentic Designs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Collaboration */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Palette className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pink-400">
              Artist Collaboration Program
            </h2>
            <p className="text-xl text-purple-300">
              Supporting {location.name}'s creative community while building authentic brands
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-orange-400 mb-6">
                Real Artists. Real Revenue.
              </h3>
              <p className="text-lg text-purple-300 mb-6 leading-relaxed">
                We're the only wrap shop in Chicago with an active artist revenue-sharing program. 
                When you choose our artist collaboration wraps, you're not just getting authentic 
                {location.name} culture—you're supporting local artists financially.
              </p>
              <div className="space-y-4">
                {content.competitiveAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Star className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-orange-400">{advantage.advantage}</h4>
                      <p className="text-purple-300">{advantage.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-600/20 to-orange-600/20 p-8 rounded-2xl border border-pink-400/30">
                <h4 className="text-2xl font-bold text-pink-400 mb-6">Featured Artist Network</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/40 p-4 rounded-lg">
                    <div className="text-orange-400 font-bold">Street Artists</div>
                    <div className="text-purple-300 text-sm">Muralists & graffiti legends</div>
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg">
                    <div className="text-pink-400 font-bold">Digital Artists</div>
                    <div className="text-purple-300 text-sm">Instagram & motion graphics</div>
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg">
                    <div className="text-purple-400 font-bold">Illustrators</div>
                    <div className="text-purple-300 text-sm">Comic & tattoo artists</div>
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg">
                    <div className="text-orange-400 font-bold">Photographers</div>
                    <div className="text-purple-300 text-sm">Event & portrait specialists</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Viral Case Study */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-pink-900/40 to-orange-900/40 p-12 rounded-2xl border border-pink-400/30">
            <div className="text-center mb-12">
              <Camera className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-400">
                {content.businessCaseStudy.title}
              </h2>
              <p className="text-lg text-purple-300">
                How one {location.name} business became an Instagram sensation
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-black/40 border-red-400/30">
                <CardHeader>
                  <CardTitle className="text-red-400 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    The Problem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300">{content.businessCaseStudy.problem}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 border-pink-400/30">
                <CardHeader>
                  <CardTitle className="text-pink-400 flex items-center gap-2">
                    <Palette className="w-5 h-5" />
                    Creative Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300">{content.businessCaseStudy.solution}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 border-orange-400/30">
                <CardHeader>
                  <CardTitle className="text-orange-400 flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Viral Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {content.businessCaseStudy.results.map((result, index) => (
                      <li key={index} className="text-purple-300 flex items-start gap-2">
                        <Instagram className="w-4 h-4 text-pink-400 mt-1 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <blockquote className="text-2xl italic text-purple-200 max-w-4xl mx-auto border-l-4 border-pink-400 pl-6">
                "{content.businessCaseStudy.quote}"
              </blockquote>
              <p className="text-orange-400 mt-4 font-semibold">— {content.businessCaseStudy.clientType}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Services */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pink-400">
              Anti-Corporate Creative Services
            </h2>
            <p className="text-xl text-purple-300">
              Authentic graphics that capture {location.name}'s creative spirit
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.specializedServices.map((service, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-pink-400/30 hover:border-orange-400/50 transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Coffee className="w-8 h-8 text-orange-400" />
                    <Badge variant="secondary" className="bg-pink-500/20 text-pink-200">
                      {service.pricing}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-pink-400">{service.name}</CardTitle>
                  <CardDescription className="text-purple-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-orange-400 mb-2">Perfect For:</h4>
                      <p className="text-sm text-purple-300">{service.targetAudience}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-400 mb-2">Creative Edge:</h4>
                      <p className="text-sm text-purple-300">{service.uniqueValue}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-400 mb-2">Success Stories:</h4>
                      <ul className="text-sm text-purple-300 space-y-1">
                        {service.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Palette className="w-3 h-3 text-pink-400" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Creative CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-800/80 to-pink-700/80">
        <div className="container mx-auto max-w-4xl text-center">
          <Palette className="w-16 h-16 text-pink-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-pink-400">
            Ready to Go Viral in {location.name}?
          </h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Let's create something that becomes part of {location.name}'s cultural conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-lg px-8">
              <Phone className="w-5 h-5 mr-2" />
              Start Your Creative Project
            </Button>
            <Button size="lg" variant="outline" className="border-pink-400 text-pink-400 hover:bg-pink-400/10 text-lg px-8">
              <Instagram className="w-5 h-5 mr-2" />
              Browse Artist Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreativeLocationLayout;