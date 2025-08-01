import React, { Component, ReactNode } from 'react';
import { trackConversion } from './analytics/ConversionTracking';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: string;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error details
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Track error in analytics
    if (typeof window !== 'undefined') {
      // Google Analytics error tracking
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: false,
          error_name: error.name,
          error_stack: error.stack?.substring(0, 500) // Limit stack trace length
        });
      }
      
      // Microsoft Clarity error tracking
      if (window.clarity) {
        window.clarity('event', 'error', {
          error_message: error.message,
          error_name: error.name,
          component_stack: errorInfo.componentStack?.substring(0, 500)
        });
      }
      
      // Custom conversion tracking for errors
      trackConversion('error_boundary_triggered', {
        error_message: error.message,
        error_name: error.name,
        page_path: window.location.pathname
      });
    }

    this.setState({
      hasError: true,
      error,
      errorInfo: errorInfo.componentStack
    });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
    
    // Track retry attempt
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'error_retry', {
        event_category: 'error_recovery',
        event_label: 'user_retry'
      });
    }
  };

  handleReportError = () => {
    // Track error reporting
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'error_reported', {
        event_category: 'error_recovery',
        event_label: 'user_report'
      });
    }
    
    // Open email client with pre-filled error report
    const subject = encodeURIComponent('Website Error Report');
    const body = encodeURIComponent(`
Error Details:
- Message: ${this.state.error?.message || 'Unknown error'}
- Name: ${this.state.error?.name || 'Unknown'}
- Page: ${window.location.href}
- User Agent: ${navigator.userAgent}
- Timestamp: ${new Date().toISOString()}

Component Stack:
${this.state.errorInfo || 'Not available'}

Please describe what you were doing when this error occurred:
[Your description here]
    `);
    
    window.location.href = `mailto:support@wrappingchicago.com?subject=${subject}&body=${body}`;
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h1>
              <p className="text-gray-600 mb-6">
                We're sorry, but something unexpected happened. Don't worry - this has been reported to our team.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Try Again
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Go to Homepage
              </button>
              
              <button
                onClick={this.handleReportError}
                className="w-full text-primary hover:text-primary/80 transition-colors text-sm"
              >
                Report this issue
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Need immediate help?</p>
              <div className="space-y-1">
                <a href="tel:(312) 597-1286" className="block text-primary font-medium hover:text-primary/80">
                  Call: (312) 597-1286
                </a>
                <a href="mailto:support@wrappingchicago.com" className="block text-primary text-sm hover:text-primary/80">
                  Email: support@wrappingchicago.com
                </a>
              </div>
            </div>

            {/* Development mode error details */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
                  Debug Information (Dev Mode)
                </summary>
                <div className="mt-2 p-3 bg-gray-100 rounded text-xs font-mono text-gray-800 overflow-auto max-h-40">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  <div className="mb-2">
                    <strong>Stack:</strong>
                    <pre className="whitespace-pre-wrap">{this.state.error.stack}</pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap">{this.state.errorInfo}</pre>
                    </div>
                  )}
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;