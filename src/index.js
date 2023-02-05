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
import ProtectedRoute from 'pages/ProtectedRoute';

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
        path: 'company-intro/*',
        element: <SubPage pageName={0} />,
      },
      {
        path: 'international-network/*',
        element: <SubPage pageName={1} />,
      },
      {
        path: 'ma/*',
        element: <SubPage pageName={2} />,
      },
      {
        path: 'ipo/*',
        element: <SubPage pageName={3} />,
      },
      {
        path: 'overseas/*',

        element: <SubPage pageName={4} />,
      },
      {
        path: 'technology-deals/*',
        element: <SubPage pageName={5} />,
      },
      {
        path: 'technique-corporate-valuation/*',
        element: <SubPage pageName={6} />,
      },
      {
        path: 'strategic-center/*',
        element: <SubPage pageName={7} />,
      },
      {
        path: 'system-corporate-certification/*',
        element: <SubPage pageName={8} />,
      },
      {
        path: 'esg-credit-assess/*',
        element: <SubPage pageName={9} />,
      },
      {
        path: 'manufacturing-innovation-voucher/*',
        element: <SubPage pageName={10} />,
      },
      {
        path: 'export-voucher/*',
        element: <SubPage pageName={11} />,
      },
      {
        path: 'r-db-support/*',
        element: <SubPage pageName={12} />,
      },
      {
        path: 'partners-network/*',
        element: <SubPage pageName={13} />,
      },
      {
        path: 'consulting',
        element: <SubPage pageName="상담 신청" />,
      },
      {
        path: 'location',
        element: <SubPage pageName="오시는 길" />,
      },
      {
        path: 'kr',
        element: <SubPage pageName="KR" />,
      },
      {
        path: 'en',
        element: <SubPage pageName="EN" />,
      },
      {
        path: 'cn',
        element: <SubPage pageName="CN" />,
      },
    ],
  },
  {
    path: 'admin/write',
    element: (
      <ProtectedRoute requireAdmin>
        <AdminPostRegist />
      </ProtectedRoute>
    ),
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
