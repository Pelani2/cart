import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../cartSlice";
import shippingReducer from "../shippingSlice";
import paymentReducer from "../paymentSlice";
import billingReducer from "../billingSlice";
import checkoutReducer from "../checkoutSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        shipping: shippingReducer,
        payment: paymentReducer,
        billing: billingReducer,
        checkout: checkoutReducer,
    },
});

export default store;
