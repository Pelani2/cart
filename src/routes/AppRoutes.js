import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ViewCart from "../components/ViewCart";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/viewcart",
        element: <ViewCart />
    }
]);

export default AppRoutes;