import React, { useEffect, useState } from 'react';

interface SchemaDuplicateReport {
  schemaType: string;
  count: number;
  sources: string[];
  duplicates: Array<{
    element: Element;
    content: any;
    source?: string;
  }>;
}

interface AuditResults {
  totalSchemas: number;
  duplicateSchemas: SchemaDuplicateReport[];
  score: number;
  recommendations: string[];
}

const ComprehensiveSchemaAudit: React.FC = () => {
  const [auditResults, setAuditResults] = useState<AuditResults | null>(null);
  const [isAuditing, setIsAuditing] = useState(false);

  const runComprehensiveAudit = () => {
    setIsAuditing(true);
    
    // Get all JSON-LD scripts
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    const schemaMap = new Map<string, SchemaDuplicateReport>();
    let totalSchemas = 0;

    scripts.forEach((script, index) => {
      try {
        const content = JSON.parse(script.textContent || '');
        const schemaType = content['@type'];
        
        if (schemaType) {
          totalSchemas++;
          
          if (!schemaMap.has(schemaType)) {
            schemaMap.set(schemaType, {
              schemaType,
              count: 0,
              sources: [],
              duplicates: []
            });
          }
          
          const report = schemaMap.get(schemaType)!;
          report.count++;
          report.duplicates.push({
            element: script,
            content,
            source: `Script ${index + 1}`
          });
        }
      } catch (error) {
        console.error(`Invalid JSON-LD in script ${index + 1}:`, error);
      }
    });

    // Find duplicates (count > 1)
    const duplicateSchemas = Array.from(schemaMap.values()).filter(report => report.count > 1);
    
    // Calculate score (100 - (duplicates * 10))
    const score = Math.max(0, 100 - (duplicateSchemas.length * 10));
    
    // Generate recommendations
    const recommendations = [
      'Implement SchemaDeduplicatorProvider to prevent duplicate schemas',
      'Use coordinated SEO components instead of direct schema injection',
      'Remove hardcoded schemas from location pages',
      'Centralize schema management through a single source of truth',
      'Add schema validation to prevent invalid JSON-LD'
    ];

    if (duplicateSchemas.length === 0) {
      recommendations.unshift('✅ Excellent! No duplicate schemas detected.');
    }

    setAuditResults({
      totalSchemas,
      duplicateSchemas,
      score,
      recommendations
    });
    
    setIsAuditing(false);
  };

  useEffect(() => {
    // Auto-run audit after component mount and DOM updates
    const timer = setTimeout(runComprehensiveAudit, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isAuditing) {
    return (
      <div className="fixed top-4 right-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded shadow-lg z-50">
        🔍 Running comprehensive schema audit...
      </div>
    );
  }

  if (!auditResults) {
    return null;
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBackground = (score: number) => {
    if (score >= 90) return 'bg-green-50 border-green-200';
    if (score >= 70) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  return (
    <div className={`fixed bottom-4 right-4 max-w-md p-4 rounded-lg shadow-lg border-2 z-50 ${getScoreBackground(auditResults.score)}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-lg">Schema Audit Results</h3>
        <button 
          onClick={runComprehensiveAudit}
          className="text-sm bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
        >
          Re-audit
        </button>
      </div>
      
      <div className={`text-2xl font-bold mb-2 ${getScoreColor(auditResults.score)}`}>
        Score: {auditResults.score}/100
      </div>
      
      <div className="text-sm mb-3">
        Total Schemas: {auditResults.totalSchemas} | 
        Duplicates: {auditResults.duplicateSchemas.length}
      </div>

      {auditResults.duplicateSchemas.length > 0 && (
        <div className="mb-3">
          <h4 className="font-semibold text-red-600 mb-1">Duplicate Schemas:</h4>
          <ul className="text-sm space-y-1">
            {auditResults.duplicateSchemas.map((duplicate, index) => (
              <li key={index} className="text-red-700">
                • {duplicate.schemaType} ({duplicate.count}x)
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <h4 className="font-semibold mb-1">Recommendations:</h4>
        <ul className="text-xs space-y-1">
          {auditResults.recommendations.slice(0, 3).map((rec, index) => (
            <li key={index} className="text-gray-700">
              • {rec}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComprehensiveSchemaAudit;