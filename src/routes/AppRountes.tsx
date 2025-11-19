// src/routes/AppRoutes.tsx

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout';
import DashboardLayout from '../layout/DashboardLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import ProductDetails from '@/pages/productDetails';
import Products from '@/pages/products';
import ContactUs from '@/pages/contactus';

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
        path: '',
        element: <Home />,
      },
      {
        path: 'product',
        element: <Products />,
      },
      {
        path: 'product/:id',
        element: <ProductDetails />,
      },
      {
        path: 'constactus',
        element: <ContactUs />,
      },
    ],
  }
]);

// Export a component that provides the router context to the application
const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;