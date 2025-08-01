
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

console.log('main.tsx: Starting app');
const container = document.getElementById('root');
console.log('main.tsx: container found?', !!container);
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);
console.log('main.tsx: root created');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
console.log('main.tsx: App rendered');
