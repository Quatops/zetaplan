import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { category } from 'constants/category';
import { AuthProvider } from 'context/AuthContext';
import Loading from 'components/Loading';

/* MainPage */
import MainPage from 'pages/MainPage';

/* SubPage */
const queryClient = new QueryClient();
const SubPage = lazy(() => import('pages/SubPage'));

/* admin page */
const AdminPostRegist = lazy(() => import('pages/AdminPostRegist'));
const AdminLogin = lazy(() => import('pages/AdminLogin'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <p>Not Found</p>,
    children: [
      { index: true, path: '/', element: <MainPage /> },
      {
        path: 'company-intro/:path',
        element: <SubPage pageName={category[0].title} />,
      },
      {
        path: 'accelerating/:path',
        element: <SubPage pageName={category[1].title} />,
      },
      {
        path: 'investment-ir/:path',
        element: <SubPage pageName={category[2].title} />,
      },
      {
        path: 'mergers-and-acquisitions/:path',
        element: <SubPage pageName={category[3].title} />,
      },
    ],
  },
  {
    path: 'admin/write',
    element: <AdminPostRegist />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
    ,
  </QueryClientProvider>,
);

reportWebVitals();
