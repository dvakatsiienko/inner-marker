/* Core */
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';

import '@fontsource-variable/inter';

/* Core */
import { App } from './App.tsx';

/* Instruments */
import './theme/tailwind.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
