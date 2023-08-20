import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ViewCart from "../components/ViewCart";
import ShippingForm from "../components/Forms/Shipping";
import Payment from "../components/Forms/Payment";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Payment />
    },
    {
        path: "/viewcart",
        element: <ViewCart />
    }
]);

export default AppRoutes;