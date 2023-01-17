import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { category } from 'constants/category';
import { AuthProvider } from 'context/AuthContext';
import Loading from 'components/Loading';

/* MainPage */
import MainPage from 'pages/MainPage';

/* SubPage */
const SubPage = lazy(() => import('pages/SubPage'));

/* CompanyIntro */
const Greetings = lazy(() => import('pages/SubPage/ComapnyIntro/Greetings'));
const ConsultingService = lazy(() =>
  import('pages/SubPage/ComapnyIntro/ConsultingService'),
);
const ConsultingAbout = lazy(() =>
  import('pages/SubPage/ComapnyIntro/ConsultingAbout'),
);
const MainArticle = lazy(() =>
  import('pages/SubPage/ComapnyIntro/MainArticle'),
);
const CIGuide = lazy(() => import('pages/SubPage/ComapnyIntro/CIGuide'));
const ZetaplanMarks = lazy(() =>
  import('pages/SubPage/ComapnyIntro/ZetaplanMarks'),
);
const AffiliateNetwork = lazy(() =>
  import('pages/SubPage/ComapnyIntro/AffiliateNetwork'),
);

/* Accelerating */
const AcceleratingOverview = lazy(() => import('pages/SubPage/Accelerating'));

/*InvestmentIr */
const InvestmentBuisnessPlan = lazy(() =>
  import('pages/SubPage/InvestmentIr/InvestmentBuisnessPlan'),
);
const InvestmentOverview = lazy(() =>
  import('pages/SubPage/InvestmentIr/InvestmentOverview'),
);
const MnAOverview = lazy(() => import('pages/SubPage/MnA/MnAOverview'));
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
        path: 'company-intro',
        element: <SubPage pageName={category[0].title} />,
        children: [
          { index: true, path: 'greetings', element: <Greetings /> },
          {
            path: 'zeta-plan-consulting-services-sector',
            element: <ConsultingService />,
          },
          {
            path: 'consultant-about',
            element: <ConsultingAbout />,
          },
          {
            path: 'the-main-economic-newspaper-article',
            element: <MainArticle />,
          },
          { path: 'affiliate-network', element: <AffiliateNetwork /> },
          {
            path: 'ci-guide',
            element: <CIGuide />,
          },
          {
            path: 'zeta-plan-marks',
            element: <ZetaplanMarks />,
          },
        ],
      },
      {
        path: 'accelerating',
        element: <SubPage pageName={category[1].title} />,
        children: [
          {
            index: true,
            path: 'accelerating-overview',
            element: <AcceleratingOverview />,
          },
        ],
      },
      {
        path: 'investment-ir',
        element: <SubPage pageName={category[2].title} />,
        children: [
          {
            index: true,
            path: 'investment-consulting-ir-overview',
            element: <InvestmentOverview />,
          },
          {
            path: 'investment-ir-business-plan',
            element: <InvestmentBuisnessPlan />,
          },
        ],
      },
      {
        path: 'mergers-and-acquisitions',
        element: <SubPage pageName={category[3].title} />,
        children: [
          {
            index: true,
            path: 'mergers-and-acquisitions-overview',
            element: <MnAOverview />,
          },
        ],
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLogin />,
  },
  {
    path: '/admin/write',
    element: <AdminPostRegist />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </AuthProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
