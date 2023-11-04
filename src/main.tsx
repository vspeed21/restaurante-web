import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import Ordenes from './pages/ordenes.tsx';
import Menu from './pages/Menu.tsx';
import NuevoPlatillo from './pages/NuevoPlatillo.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Ordenes />
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/nuevo-platillo',
    element: <NuevoPlatillo />,
  },
]);




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
