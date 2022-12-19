import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
<<<<<<< HEAD
=======

// Components and pages
>>>>>>> c168264119088de62bd19b2ca42bf97151264771
import App from './App';
import Index from './pages/Index';
import StatesUf from './pages/StatesUf';
import ErrorPage from './pages/errorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Index />
      },
      {
        path: "states",
        element: <StatesUf />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
