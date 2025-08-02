import React, { useEffect, useState } from 'react';

interface GoogleIndexingIssue {
  type: 'critical' | 'warning' | 'info';
  category: string;
  issue: string;
  fix: string;
}

const GoogleIndexingAudit: React.FC = () => {
  const [issues, setIssues] = useState<GoogleIndexingIssue[]>([]);
  const [score, setScore] = useState(100);

  useEffect(() => {
    const runIndexingAudit = () => {
      const foundIssues: GoogleIndexingIssue[] = [];

      // Check meta tags
      const titleTag = document.querySelector('title');
      const metaDesc = document.querySelector('meta[name="description"]');
      const canonical = document.querySelector('link[rel="canonical"]');
      
      if (!titleTag?.textContent || titleTag.textContent.length < 30) {
        foundIssues.push({
          type: 'critical',
          category: 'Meta Tags',
          issue: 'Missing or short title tag',
          fix: 'Add descriptive title 30-60 characters'
        });
      }

      if (!metaDesc?.getAttribute('content') || metaDesc.getAttribute('content')!.length < 120) {
        foundIssues.push({
          type: 'critical', 
          category: 'Meta Tags',
          issue: 'Missing or short meta description',
          fix: 'Add meta description 120-160 characters'
        });
      }

      if (!canonical) {
        foundIssues.push({
          type: 'critical',
          category: 'Technical SEO',
          issue: 'Missing canonical URL',
          fix: 'Add canonical link tag'
        });
      }

      // Check images for alt text
      const images = document.querySelectorAll('img');
      let missingAltCount = 0;
      images.forEach(img => {
        if (!img.alt || img.alt.trim() === '') {
          missingAltCount++;
        }
      });

      if (missingAltCount > 0) {
        foundIssues.push({
          type: 'warning',
          category: 'Accessibility',
          issue: `${missingAltCount} images missing alt text`,
          fix: 'Add descriptive alt attributes'
        });
      }

      // Check for schema errors
      const schemas = document.querySelectorAll('script[type="application/ld+json"]');
      let schemaErrors = 0;
      schemas.forEach(schema => {
        try {
          JSON.parse(schema.textContent || '');
        } catch {
          schemaErrors++;
        }
      });

      if (schemaErrors > 0) {
        foundIssues.push({
          type: 'critical',
          category: 'Structured Data',
          issue: `${schemaErrors} invalid JSON-LD schemas`,
          fix: 'Fix JSON syntax in schema markup'
        });
      }

      // Check for navigation links
      const navLinks = document.querySelectorAll('a[href^="/"]');
      if (navLinks.length < 5) {
        foundIssues.push({
          type: 'warning',
          category: 'Navigation',
          issue: 'Insufficient internal linking',
          fix: 'Add more internal navigation links'
        });
      }

      // Calculate score
      const criticalPenalty = foundIssues.filter(i => i.type === 'critical').length * 20;
      const warningPenalty = foundIssues.filter(i => i.type === 'warning').length * 10;
      const finalScore = Math.max(0, 100 - criticalPenalty - warningPenalty);

      setIssues(foundIssues);
      setScore(finalScore);
    };

    setTimeout(runIndexingAudit, 1000);
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getBgColor = (score: number) => {
    if (score >= 90) return 'bg-green-50 border-green-200';
    if (score >= 70) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 max-w-lg p-4 rounded-lg shadow-lg border-2 z-50 ${getBgColor(score)}`}>
      <h3 className="font-bold text-lg mb-2">🔍 Google Indexing Audit</h3>
      
      <div className={`text-2xl font-bold mb-2 ${getScoreColor(score)}`}>
        Google Readiness: {score}/100
      </div>

      {issues.length === 0 ? (
        <div className="text-green-600 font-semibold">✅ No indexing issues found!</div>
      ) : (
        <div className="max-h-48 overflow-y-auto">
          <h4 className="font-semibold mb-2">Issues Found:</h4>
          {issues.map((issue, index) => (
            <div key={index} className={`mb-2 p-2 rounded text-sm ${
              issue.type === 'critical' ? 'bg-red-100' : 'bg-yellow-100'
            }`}>
              <div className="font-semibold">{issue.category}</div>
              <div className="text-xs">{issue.issue}</div>
              <div className="text-xs text-gray-600">Fix: {issue.fix}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GoogleIndexingAudit;