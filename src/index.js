import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AuthProvider } from 'context/AuthContext';
import Loading from 'components/Loading';
import { CategoryProvider } from 'context/CategoryContext';

/* MainPage */
const MainPage = lazy(() => import('pages/MainPage'));

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
        element: <SubPage pageName={0} />,
      },
      {
        path: 'international-network/:path',
        element: <SubPage pageName={1} />,
      },
      {
        path: 'ma/:path',
        element: <SubPage pageName={2} />,
      },
      {
        path: 'ipo/:path',
        element: <SubPage pageName={3} />,
      },
      {
        path: 'overseas/:path',
        element: <SubPage pageName={4} />,
      },
      {
        path: 'technology-deals/:path',
        element: <SubPage pageName={5} />,
      },
    ],
  },
  {
    path: 'admin/write',
    element: <AdminPostRegist />,
    state: { post: null },
  },
  {
    path: 'admin',
    element: <AdminLogin />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <CategoryProvider>
      <AuthProvider>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </AuthProvider>
    </CategoryProvider>
  </QueryClientProvider>,
);

reportWebVitals();
