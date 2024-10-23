import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ListNews from "./components/ListNews";
import CreateNews from "./components/CreateNews";
import FetchNews from "./components/FetchNews";
import ErrorElement from "./components/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/create-news",
    element: <CreateNews />,
  },
  {
    path: "/fetch-news",
    element: <FetchNews />,
  },
  {
    path: "/news",
    element: <ListNews />,
  },
  {
    path: "/",
    element: <ListNews />,
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
