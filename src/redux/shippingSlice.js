import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
};

const shippingSlice = createSlice({
    name: "shipping",
    initialState,
    reducers: {
        saveShippingInfo: (state, action) => {
            return { ...state, ...action.payload };
        },
        clearShippingInfo: (state) => {
            return initialState;
        },
    },
});

export const { saveShippingInfo, clearShippingInfo } = shippingSlice.actions;
export default shippingSlice.reducer;