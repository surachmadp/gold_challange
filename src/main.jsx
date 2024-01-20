import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Landingpage from "./pages/Landingpage";
import Carimobil from "./pages/Carimobil";
import Detailmobil from "./pages/Detailmobil";
import "./index.css";

// untuk bikin router
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/pencarian",
    element: <Carimobil />,
  },
  {
    path: "/detail/:id",
    element: <Detailmobil />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Landingpage /> */}
    {/* <Carimobil /> */}
  </React.StrictMode>
);
