// src/routes/AppRoutes.tsx

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout';
import DashboardLayout from '../layout/DashboardLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';

// Define the router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
    ],
  }
]);

// Export a component that provides the router context to the application
const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;