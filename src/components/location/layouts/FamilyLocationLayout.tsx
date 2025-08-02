import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Star, Phone, Award, Home } from "lucide-react";
import { LocationContent } from '@/data/locationContent';

interface FamilyLocationLayoutProps {
  location: any;
  content: LocationContent;
}

const FamilyLocationLayout: React.FC<FamilyLocationLayoutProps> = ({ location, content }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      {/* Family-Friendly Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="w-8 h-8 text-blue-600" />
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                Family-Trusted • {location.name}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-600 to-blue-700 bg-clip-text text-transparent">
              Family-Safe Vehicle Wraps {location.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              Building Trust, One Neighborhood at a Time
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              {content.heroStory}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Call for Family Quote: (312) 597-1286
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-700 hover:bg-green-50 text-lg px-8">
                <Award className="w-5 h-5 mr-2" />
                See Family Testimonials
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Family Safety Features */}
      <section className="py-16 px-4 bg-white/70">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Family-Safe Design Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every design element chosen to build trust with {location.name} families
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {content.uniqueFeatures.map((feature, index) => (
              <Card key={index} className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-xl text-blue-900">{feature.feature}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-center">
                  <p className="text-gray-700">{feature.benefit}</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800 font-semibold">Local Relevance:</p>
                    <p className="text-sm text-blue-700">{feature.localRelevance}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Case Study */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-12 rounded-2xl border border-green-200">
            <div className="text-center mb-12">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">
                {content.businessCaseStudy.title}
              </h2>
              <p className="text-lg text-gray-600">
                How we helped a local business become the neighborhood favorite
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-3">The Problem:</h3>
                  <p className="text-gray-700 text-lg">{content.businessCaseStudy.problem}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Our Family-Focused Solution:</h3>
                  <p className="text-gray-700 text-lg">{content.businessCaseStudy.solution}</p>
                </div>
              </div>
              
              <div>
                <div className="bg-white p-8 rounded-xl border border-green-200 shadow-lg">
                  <h3 className="text-xl font-bold text-green-600 mb-6">Amazing Results:</h3>
                  <div className="space-y-4">
                    {content.businessCaseStudy.results.map((result, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                    <blockquote className="text-lg italic text-green-800">
                      "{content.businessCaseStudy.quote}"
                    </blockquote>
                    <p className="text-green-600 mt-3 font-semibold">— {content.businessCaseStudy.clientType}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Services */}
      <section className="py-20 px-4 bg-white/70">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Home className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Services for {location.name} Families
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building trust and community connections through professional vehicle graphics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.specializedServices.map((service, index) => (
              <Card key={index} className="bg-white border-blue-200 hover:shadow-lg transition-all group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Heart className="w-8 h-8 text-blue-600 group-hover:text-green-600 transition-colors" />
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {service.pricing}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-blue-900">{service.name}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Perfect For:</h4>
                      <p className="text-sm text-gray-600">{service.targetAudience}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Family Value:</h4>
                      <p className="text-sm text-gray-600">{service.uniqueValue}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Success Stories:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Heart className="w-3 h-3 text-green-500" />
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

      {/* Local Market Insights */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              {content.localInsights.title}
            </h2>
            <p className="text-lg text-gray-600">
              Understanding what matters to {location.name} families
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Market Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {content.localInsights.insights.map((insight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Star className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{insight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-xl text-green-900">Growing Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {content.localInsights.marketTrends.map((trend, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Star className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{trend}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Family CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto max-w-4xl text-center">
          <Heart className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Join the {location.name} Family Network
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help your business become the trusted choice for families throughout {location.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
              <Phone className="w-5 h-5 mr-2" />
              Get Your Family Quote Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              <Users className="w-5 h-5 mr-2" />
              See Neighborhood Success Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FamilyLocationLayout;