import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../cartSlice";
import shippingReducer from "../shippingSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        shipping: shippingReducer,
    },
});

export default store;
