import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ViewCart from "../components/ViewCart";
import Checkout from "../components/Forms/Checkout";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/viewcart",
        element: <ViewCart />
    },
    {
        path: "/checkout",
        element: <Checkout />
    }
]);

export default AppRoutes;