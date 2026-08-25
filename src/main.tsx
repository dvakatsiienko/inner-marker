/* Core */
import { StrictMode } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';

/* Components */
import { App } from './App';
import { Home } from './pages/Home';
import { Lab } from './pages/Lab';

/* Instruments */
import '@fontsource-variable/inter';
import './theme/tailwind.css';

const router = createBrowserRouter([
  {
    children: [
      { element: <Home />, index: true },
      { element: <Lab />, path: 'lab' },
    ],
    element: <App />,
    path: '/',
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
