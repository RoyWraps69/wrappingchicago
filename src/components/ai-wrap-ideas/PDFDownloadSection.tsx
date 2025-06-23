import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import { toast } from 'sonner';

const PDFDownloadSection: React.FC = () => {
  const handleDownloadPDF = async () => {
    const pdfUrl = '/vehicle-wrapping-guide.pdf';
    
    try {
      // First, let's check if the PDF exists and is accessible
      console.log('Attempting to fetch PDF from:', pdfUrl);
      
      const response = await fetch(pdfUrl);
      console.log('PDF fetch response status:', response.status);
      console.log('PDF fetch response headers:', Object.fromEntries(response.headers.entries()));
      
      if (!response.ok) {
        throw new Error(`Failed to fetch PDF: ${response.status} ${response.statusText}`);
      }
      
      // Check if it's actually a PDF
      const contentType = response.headers.get('content-type');
      console.log('PDF content type:', contentType);
      
      if (!contentType || !contentType.includes('pdf')) {
        console.warn('Warning: Content type is not PDF:', contentType);
      }
      
      // Get the blob and check its size
      const blob = await response.blob();
      console.log('PDF blob size:', blob.size, 'bytes');
      console.log('PDF blob type:', blob.type);
      
      if (blob.size === 0) {
        throw new Error('PDF file is empty');
      }
      
      // Create download link with the blob
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Vehicle_Wrapping_Guide.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the blob URL
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 100);
      
      toast.success('PDF download started!');
      
    } catch (error) {
      console.error('PDF download error:', error);
      toast.error(`Failed to download PDF: ${error.message}`);
      
      // Fallback: try direct link
      try {
        window.open(pdfUrl, '_blank', 'noopener,noreferrer');
        toast.info('Opened PDF in new tab as fallback');
      } catch (fallbackError) {
        console.error('Fallback also failed:', fallbackError);
        toast.error('Unable to open PDF. Please contact support.');
      }
    }
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
