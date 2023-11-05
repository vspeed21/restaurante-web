import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//firebase
import firebase, { FirebaseContext } from './firebase';

//Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import Layout from './layout/Layout';

import Ordenes from './pages/Ordenes';
import Menu from './pages/Menu';
import NuevoPlatillo from './pages/NuevoPlatillo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Ordenes />,
      },
      {
        path: 'menu',
        element: <Menu />,
      },
      {
        path: 'nuevo-platillo',
        element: <NuevoPlatillo />,
      },
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseContext.Provider
      value={{
        firebase,
      }}
    >
      <RouterProvider router={router} />
    </FirebaseContext.Provider>
  </React.StrictMode>,
);
