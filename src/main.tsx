import { StrictMode } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/inter';
import './theme/tailwind.css';

import { About, AppShell, Home, Stack, Work } from './App';
import { Testing } from './Testing';

const router = createBrowserRouter([
  {
    children: [
      { element: <Home />, index: true },
      { element: <Work />, path: 'work' },
      { element: <Stack />, path: 'stack' },
      { element: <About />, path: 'about' },
      { element: <Testing />, path: 'test' },
    ],
    element: <AppShell />,
    path: '/',
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
