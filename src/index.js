import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CompanyIntro from "pages/SubPage/ComapnyIntro";
import InvestmentIr from "pages/SubPage/InvestmentIr";
import Ipo from "pages/SubPage/Ipo";
import MnA from "pages/SubPage/MnA";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Not Found</p>,
    children: [{ index: true, path: "/", element: <MainPage /> }, {}],
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
