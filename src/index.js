// index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import from react-dom/client instead of react-dom
import App from './App';

const root = document.getElementById('root');

const rootElement = React.createElement('div', {}, <App />);
const rootRoot = createRoot(root); // Use createRoot from react-dom/client
rootRoot.render(rootElement);
