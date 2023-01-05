import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";

import SubPage from "pages/SubPage";
import Greetings from "pages/ComapnyIntro/Greetings";
import ConsultingService from "pages/ComapnyIntro/ConsultingService";
import ConsultingAbout from "pages/ComapnyIntro/ConsultingAbout";
import InvestmentOverview from "pages/InvestmentIr/InvestmentOverview";
import InvestmentBuisnessPlan from "pages/InvestmentIr/InvestmentBuisnessPlan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Not Found</p>,
    children: [
      { index: true, path: "/", element: <MainPage /> },
      {
        path: "company-intro",
        element: <SubPage pageName="회사소개" />,
        children: [
          { index: true, path: "greetings", element: <Greetings /> },
          {
            path: "zeta-plan-consulting-services-sector",
            element: <ConsultingService />,
          },
          {
            path: "consultant-about",
            element: <ConsultingAbout />,
          },
        ],
      },
      {
        path: "investment-ir",
        element: <SubPage pageName="투자 IR" />,
        children: [
          {
            index: true,
            path: "investment-consulting-ir-overview",
            element: <InvestmentOverview />,
          },
          {
            path: "investment-ir-business-plan",
            element: <InvestmentBuisnessPlan />,
          },
        ],
      },
      {
        path: "mergers-and-acquisitions",
        element: <SubPage pageName="M&A" />,
      },
      {
        path: "ipo",
        element: <SubPage pageName="IPO" />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
