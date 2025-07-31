import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });

    // Track error in analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="max-w-md mx-auto text-center p-8">
            <div className="mb-8">
              <div className="text-6xl mb-4">🚧</div>
              <h1 className="text-3xl font-bold text-primary mb-4">Oops! Something went wrong</h1>
              <p className="text-gray-600 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified and we're working to fix it.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Refresh Page
              </button>
              
              <Link
                to="/"
                className="block w-full border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Go to Homepage
              </Link>
              
              <Link
                to="/contact"
                className="block w-full text-gray-600 hover:text-primary transition-colors"
              >
                Contact Support
              </Link>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm text-gray-500">
                  Technical Details (Development Only)
                </summary>
                <pre className="mt-4 p-4 bg-gray-100 rounded text-xs overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
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