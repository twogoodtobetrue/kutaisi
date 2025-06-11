
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// It's good practice to import global CSS or font settings here if not using CDN exclusively
// For Tailwind via CDN, this is often not needed.

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
    