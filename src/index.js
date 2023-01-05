import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import CompanyIntro from "pages/ComapnyIntro";
import Greetings from "pages/ComapnyIntro/Greetings";
import ConsultingService from "pages/ComapnyIntro/ConsultingService";
import ConsultingAbout from "pages/ComapnyIntro/ConsultingAbout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Not Found</p>,
    children: [
      { index: true, path: "/", element: <Main /> },
      {
        path: "/company-inro",
        element: <CompanyIntro />,
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
