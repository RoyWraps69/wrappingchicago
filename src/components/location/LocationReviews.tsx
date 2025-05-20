
import React from 'react';
import ReviewsSchema from '@/components/schemas/ReviewsSchema';
import { City } from '@/data/types/city';

interface LocationReviewsProps {
  city: City;
}

const LocationReviews: React.FC<LocationReviewsProps> = ({ city }) => {
  return (
    <>
      {/* Add schema for reviews */}
      <ReviewsSchema 
        businessName={`Wrapping Chicago - ${city.name} Vehicle Wraps`}
        reviewCount={156}
        ratingValue={4.9}
      />
      
      {/* Visible reviews section */}
      <div className="my-8 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-brand-navy mb-4">Customer Reviews</h3>
        
        <div className="space-y-6">
          {/* Review 1 */}
          <div className="border-b border-gray-200 pb-4">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600 font-medium">Emily M.</span>
              <span className="ml-auto text-sm text-gray-500">March 15, 2024</span>
            </div>
            <p className="text-gray-700">
              Outstanding vehicle wrap service in {city.name}! The team at Wrapping Chicago transformed our company vehicles with stunning graphics. Highly recommend their professional service.
            </p>
          </div>
          
          {/* Review 2 */}
          <div className="border-b border-gray-200 pb-4">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600 font-medium">Robert S.</span>
              <span className="ml-auto text-sm text-gray-500">February 15, 2024</span>
            </div>
            <p className="text-gray-700">
              Wrapping Chicago did an excellent job on our fleet vehicles. The design process was smooth, and the installation was perfect. Our trucks now stand out in {city.name} and we've already seen an increase in business!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationReviews;
