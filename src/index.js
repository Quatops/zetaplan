import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/* MainPage */
import MainPage from './pages/MainPage';

/* SubPage */
import SubPage from 'pages/SubPage';

/* CompanyIntro */
import Greetings from 'pages/SubPage/ComapnyIntro/Greetings';
import ConsultingService from 'pages/SubPage/ComapnyIntro/ConsultingService';
import ConsultingAbout from 'pages/SubPage/ComapnyIntro/ConsultingAbout';
import MainArticle from 'pages/SubPage/ComapnyIntro/MainArticle';
import CIGuide from 'pages/SubPage/ComapnyIntro/CIGuide';
import ZetaplanMarks from 'pages/SubPage/ComapnyIntro/ZetaplanMarks';
import AffiliateNetwork from 'pages/SubPage/ComapnyIntro/AffiliateNetwork';

/* Accelerating */
import AcceleratingOverview from 'pages/SubPage/Accelerating';

/*InvestmentIr */
import InvestmentBuisnessPlan from 'pages/SubPage/InvestmentIr/InvestmentBuisnessPlan';
import InvestmentOverview from 'pages/SubPage/InvestmentIr/InvestmentOverview';

import MnAOverview from 'pages/SubPage/MnA/MnAOverview';

import { category } from 'constants/category';
import AdminPostRegist from 'pages/AdminPage/AdminPostRegist';
import AdminLogin from 'pages/AdminLogin';

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
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
