
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import { toast } from 'sonner';

const PDFDownloadSection: React.FC = () => {
  const handleDownloadPDF = () => {
    // Create PDF content as a simple text file for now
    const pdfContent = `
VEHICLE WRAPPING GUIDE
======================

1. DESIGN PRINCIPLES
   - Keep it simple and readable
   - Use high contrast colors
   - Consider viewing distance
   - Brand consistency is key

2. MATERIAL SELECTION
   - 3M vinyl for durability
   - Cast vs calendered vinyl
   - Lamination for protection
   - Specialty finishes available

3. COST-BENEFIT ANALYSIS
   - Mobile advertising reach
   - Cost per impression
   - Brand awareness increase
   - Professional appearance

4. INSTALLATION PROCESS
   - Surface preparation critical
   - Temperature control important
   - Professional tools required
   - Quality control checkpoints

5. MARKETING IMPACT
   - 24/7 advertising
   - Local market penetration
   - Brand recognition boost
   - Professional credibility

6. MAINTENANCE TIPS
   - Regular cleaning schedule
   - Avoid harsh chemicals
   - Inspect for damage
   - Professional repairs

Contact Wrapping Chicago for professional vehicle wrap services!
Phone: (312) 597-1286
Email: roy@chicagofleetwraps.com
    `;

    // Create blob and download
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Vehicle_Wrapping_Guide.txt';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    window.URL.revokeObjectURL(url);
    toast.success('Vehicle Wrapping Guide downloaded!');
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
            Download Guide
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PDFDownloadSection;
