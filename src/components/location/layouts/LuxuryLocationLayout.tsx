import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Award, Crown, Gem, Shield, Phone } from "lucide-react";
import { LocationContent } from '@/data/locationContent';

interface LuxuryLocationLayoutProps {
  location: any;
  content: LocationContent;
}

const LuxuryLocationLayout: React.FC<LuxuryLocationLayoutProps> = ({ location, content }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900">
      {/* Luxury Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-r from-slate-900/90 to-amber-900/90">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Crown className="w-8 h-8 text-amber-400" />
                <Badge variant="secondary" className="bg-amber-400/20 text-amber-200 border-amber-400/50">
                  Luxury Division • {location.name}
                </Badge>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                Gallery-Grade Vehicle Wraps
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-300 mb-6 font-light">
                Museum-Quality Graphics for {location.name}'s Elite
              </h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                {content.heroStory}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-lg px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Luxury Consultation: (312) 597-1286
                </Button>
                <Button size="lg" variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400/10 text-lg px-8">
                  <Award className="w-5 h-5 mr-2" />
                  View Gallery Collection
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-400/20 to-slate-800/30 p-8 rounded-2xl border border-amber-400/20">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Exclusive Certifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-amber-400" />
                    <span className="text-slate-300">3M Certified Gallery Installation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gem className="w-5 h-5 text-amber-400" />
                    <span className="text-slate-300">Avery Dennison Supreme Authorized</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-amber-400" />
                    <span className="text-slate-300">Museum-Grade Color Matching</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Case Study */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">
              {content.businessCaseStudy.title}
            </h2>
            <p className="text-xl text-slate-400">
              Real results from {location.name}'s luxury market
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-slate-900/50 border-amber-400/20">
              <CardHeader>
                <CardTitle className="text-amber-400">The Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">{content.businessCaseStudy.problem}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-900/50 border-amber-400/20">
              <CardHeader>
                <CardTitle className="text-amber-400">Our Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">{content.businessCaseStudy.solution}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-900/50 border-amber-400/20">
              <CardHeader>
                <CardTitle className="text-amber-400">The Results</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {content.businessCaseStudy.results.map((result, index) => (
                    <li key={index} className="text-slate-300 flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <blockquote className="text-2xl italic text-slate-300 max-w-4xl mx-auto border-l-4 border-amber-400 pl-6">
              "{content.businessCaseStudy.quote}"
            </blockquote>
            <p className="text-amber-400 mt-4 font-semibold">— {content.businessCaseStudy.clientType}</p>
          </div>
        </div>
      </section>

      {/* Luxury Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">
              Exclusive Services for {location.name}
            </h2>
            <p className="text-xl text-slate-400">
              Bespoke vehicle graphics crafted for discerning clientele
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.specializedServices.map((service, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-amber-400/20 hover:border-amber-400/40 transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Crown className="w-8 h-8 text-amber-400" />
                    <Badge variant="secondary" className="bg-amber-400/20 text-amber-200">
                      {service.pricing}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-amber-400">{service.name}</CardTitle>
                  <CardDescription className="text-slate-400">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-300 mb-2">Target Clientele:</h4>
                      <p className="text-sm text-slate-400">{service.targetAudience}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-300 mb-2">Exclusive Value:</h4>
                      <p className="text-sm text-slate-400">{service.uniqueValue}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-300 mb-2">Portfolio Examples:</h4>
                      <ul className="text-sm text-slate-400 space-y-1">
                        {service.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Gem className="w-3 h-3 text-amber-400" />
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

      {/* Competitive Advantages */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">
              Why We're {location.name}'s Premier Choice
            </h2>
            <p className="text-xl text-slate-400">
              Exclusive capabilities that set us apart
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {content.competitiveAdvantages.map((advantage, index) => (
              <Card key={index} className="bg-slate-900/50 border-amber-400/20 text-center">
                <CardHeader>
                  <Shield className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                  <CardTitle className="text-xl text-amber-400">{advantage.advantage}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300">{advantage.explanation}</p>
                  <div className="bg-amber-400/10 p-4 rounded-lg border border-amber-400/20">
                    <p className="text-sm text-amber-200 font-semibold">Verified Proof:</p>
                    <p className="text-sm text-slate-400">{advantage.proof}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-900/20 to-slate-900/20">
        <div className="container mx-auto max-w-4xl text-center">
          <Crown className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">
            Ready to Join {location.name}'s Elite?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Experience the difference that gallery-grade vehicle graphics make for your luxury brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-lg px-8">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Private Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400/10 text-lg px-8">
              <Award className="w-5 h-5 mr-2" />
              View Luxury Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LuxuryLocationLayout;