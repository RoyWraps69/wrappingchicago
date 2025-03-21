
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import GoogleAnalytics from './components/GoogleAnalytics';
import { HelmetProvider } from 'react-helmet-async';

const root = createRoot(document.getElementById("root")!);

root.render(
  <HelmetProvider>
    <GoogleAnalytics measurementId="G-ZTLS3EEGE7" />
    <App />
  </HelmetProvider>
);
