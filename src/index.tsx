import React from 'react';
import { createRoot } from 'react-dom/client';

import './scss/main.scss';

import App from './components/App';

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
