import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./component/Layout/Main";
import Home from "./component/Home/Home";
import OrderReview from "./component/OrderReview/OrderReview";
import Granpa from "./component/Granpa/Granpa";


const router=createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element: <Home></Home>,
          loader: ()=>fetch('t-sharts.json'),
        },
        {
          path:'review',
          element:<OrderReview></OrderReview>
        },
        {
          path:'granpa',
          element:<Granpa></Granpa>
        }
      ]
    }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
