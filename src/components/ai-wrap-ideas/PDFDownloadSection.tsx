
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

const PDFDownloadSection: React.FC = () => {
  const handleDownloadPDF = () => {
    // Path to the comprehensive vehicle wrapping guide
    const pdfUrl = '/vehicle-wrapping-guide.pdf';
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Vehicle_Wrapping_Guide.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-brand-light p-6 rounded-lg my-8 border border-gray-200 shadow-sm">
      <div className="flex items-center mb-4">
        <FileText className="h-8 w-8 mr-3 text-brand-red" />
        <h2 className="text-2xl font-bold text-brand-navy">
          Free Vehicle Wrapping Guide
        </h2>
      </div>
      
      <p className="text-gray-700 mb-4">
        Download our comprehensive guide to vehicle and fleet wrapping. Learn everything from 
        design principles to cost-effective branding strategies used by top businesses.
      </p>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-brand-navy mb-2">What You'll Learn:</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Vehicle Wrap Design Principles</li>
            <li>Material Selection Guide</li>
            <li>Cost-Benefit Analysis</li>
            <li>Installation Process Insights</li>
            <li>Marketing Impact of Vehicle Wraps</li>
            <li>Maintenance Tips for Longevity</li>
            <li>Color & Design Psychology</li>
          </ul>
        </div>
        
        <div className="flex items-center justify-center">
          <Button 
            onClick={handleDownloadPDF}
            className="bg-brand-red hover:bg-red-700 text-white"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF Guide
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PDFDownloadSection;
